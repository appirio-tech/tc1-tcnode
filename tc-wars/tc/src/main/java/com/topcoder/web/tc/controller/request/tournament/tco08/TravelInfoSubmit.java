package com.topcoder.web.tc.controller.request.tournament.tco08;

import com.topcoder.shared.util.ApplicationServer;
import com.topcoder.web.tc.Constants;
import com.topcoder.web.tc.controller.request.tournament.BaseSubmitTravelInfo;

/**
 * @author dok
 * @version $Id: TravelInfoSubmit.java 68480 2008-02-15 15:46:54Z gpaul $
 *          Create Date: Feb 15, 2008 10:44:03 AM
 */
public class TravelInfoSubmit extends BaseSubmitTravelInfo {

    protected String getSuccessPage() {
        StringBuffer next = new StringBuffer(100);
        next.append("/tc?").append(Constants.MODULE_KEY).append("=Static&");
        next.append(Constants.STATIC_PREFIX).append("1=tournaments&");
        next.append(Constants.STATIC_PREFIX).append("2=tco08&");
        next.append(Constants.STATIC_PREFIX).append("3=docs&");
        next.append(Constants.STATIC_PREFIX).append("4=travelInfoSent");
        return next.toString();
    }

    protected String[] getRecipients() {
        if (ApplicationServer.ENVIRONMENT == ApplicationServer.PROD) {
            return new String[]{"jdamato@topcoder.com", "coakes@topcoder.com"};
        } else {
            return new String[]{"gpaul@topcoder.com"};
        }
    }

    protected String[] getTravelAgentRecipients() {
        return new String[0];
    }

}
