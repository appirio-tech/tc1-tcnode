/*
 * Copyright (C) 2004 - 2010 TopCoder Inc., All Rights Reserved.
 */
package com.topcoder.web.tc.controller.request.tournament.tco10;

import com.topcoder.shared.util.dwload.CacheClearer;
import com.topcoder.web.common.TCWebException;
import com.topcoder.web.common.dao.DAOUtil;
import com.topcoder.web.common.dao.UserDAO;
import com.topcoder.web.common.model.Event;
import com.topcoder.web.common.model.EventRegistration;
import com.topcoder.web.common.model.User;
import com.topcoder.web.tc.Constants;
import com.topcoder.web.tc.TCO10Constants;

/**
 * <p>This class provides specific implementation for TCO10 tournament registration.</p>
 * 
 * <p>It will handle the registration submission and store results in the database.</p>
 *
 * @author TCSDEVELOPER
 * @version 1.0 (2010 TCO WebSite Release assembly v1.0)
 */
public class SubmitUnifiedRegistration extends ViewUnifiedRegistration {

    /**
     * <p>
     * A <code>String</code> describing on state.
     * </p>
     */
    private static final String ON = "on";

    /**
     * <p>
     * A <code>String</code> containing agreement registration error.
     * </p>
     */
    private static final String MUST_AGREE_ERROR_MESSAGE = "You must agree to the terms in order to continue.";

    /**
     * <p>
     * This method processes TCO10 registration. It will verify user's agreement and delegate
     * to <code>completeRegistration(event, user) helper method.
     * </p>
     *
     * @param event an <code>Event</code> containing TCO10 event.
     * @param user an <code>User</code> containing active user.
     *
     * @throws TCWebException if there are processing errors.
     */
    @Override
    protected void regProcessing(Event event, User user) throws TCWebException {
        // check for terms of use agreement
        String termsAgree = getRequest().getParameter(Constants.TERMS_AGREE);
        if (!ON.equals(termsAgree)) {
            addError(Constants.TERMS_AGREE, MUST_AGREE_ERROR_MESSAGE);
        }

        if (hasErrors()) {
            // if the user didn't agree, ask again.
            setDefault(Constants.TERMS_AGREE, String.valueOf(ON.equals(termsAgree)));
        } else {
            // no errors, continue to complete registration.
            completeRegistration(event, user);
        }
    }

    /**
     * <p>
     * This method redirects to TCO10 pages according to registration status.
     * </p>
     *
     * @param er an <code>EventRegistration</code> containing active user's
     * event registration.
     */
    @Override
    protected void setNextPage(EventRegistration er) {
        if (hasErrors()) {
            setNextPage(TCO10Constants.TCO10_TERMS_PAGE);
            setIsNextPageInContext(true);
        } else {
            setNextPage(TCO10Constants.TCO10_VIEW_REGISTRATION_REQUEST);
            setIsNextPageInContext(false);
        }
    }

    /**
     * <p>
     * Helper method to save TCO10 registration to the database.
     * After the registration is saved registrants query cache needs to be cleaned to
     * reflect the latest addition.
     * </p>
     *
     * @param event an <code>Event</code> containing TCO10 event.
     * @param user an <code>User</code> containing active user.
     */
    private void completeRegistration(Event event, User user) {
        UserDAO userDAO = DAOUtil.getFactory().getUserDAO();
        user.addEventRegistration(event, null, true);
        userDAO.saveOrUpdate(user);
        refreshCache();
    }

    /**
     * <p>
     * Helper method to clean registrants query results from the cache to
     * reflect the latest addition.
     * </p>
     */
    private void refreshCache() {
        try {
            CacheClearer.removelike(TCO10Constants.TCO10_REGISTRANTS_COMMAND);
        } catch (Exception ignore) {
            ignore.printStackTrace();
        }
    }
}