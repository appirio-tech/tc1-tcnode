/*
 * Copyright (C) 2016 TopCoder Inc., All Rights Reserved.
 */
package com.topcoder.web.forums;

import com.jivesoftware.forum.ForumCategory;
import com.jivesoftware.forum.ForumCategoryNotFoundException;
import com.jivesoftware.forum.ForumFactory;
import com.topcoder.web.forums.model.TCAuthToken;

/**
 * <p>This is ForumsHelper utility class. It is introduced in order to resolve the cyclic dependency between
 * <code>Forums EJB</code> and <code>Forums WAR</code> modules.</p>
 *
 * @author TCSASSEMBLER
 * @version 1.0 (TC - CI AND CD PROCESS - MOVING TC WEB FROM SVN TO GITHUB ASSEMBLY CHALLENGE)
 */
public class ForumsHelper {

    /**
     * <p>Constructs new <code>ForumsHelper</code> instance. This implementation does nothing.</p>
     */
    private ForumsHelper() {
    }

    public static String getComponentCategoryName(String name, String versionText) {
        if (versionText != null && !versionText.trim().equals("")) {
            boolean wellFormatted = versionText.trim().matches("\\d+(\\.\\d+)*\\w?");
            if (wellFormatted) {
                name += " v" + versionText.trim();
            } else {
                name += " (" + versionText.trim() + ")";
            }
        }
        return name;
    }

    public static String formatSubject(String subject) {
        String formattedSubject = com.jivesoftware.util.StringUtils.escapeHTMLTags(subject.trim());
        formattedSubject = formattedSubject.replaceAll("\n", " ");
        return formattedSubject;
    }

    public static ForumCategory getMasterCategory(ForumCategory category) throws ForumCategoryNotFoundException {
        ForumFactory masterFactory = ForumFactory.getInstance(new TCAuthToken(100129));
        return masterFactory.getForumCategory(category.getID());
    }
}
