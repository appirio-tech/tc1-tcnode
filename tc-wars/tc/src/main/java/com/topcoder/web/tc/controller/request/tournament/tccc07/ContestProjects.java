package com.topcoder.web.tc.controller.request.tournament.tccc07;

import com.topcoder.web.tc.controller.request.tournament.ContestProjectsBase;

/**
 * @author dok
 * @version $Revision: 63893 $ Date: 2005/01/01 00:00:00
 *          Create Date: Mar 1, 2007
 */
public class ContestProjects extends ContestProjectsBase {

    private final String CONTEST_PREFIX = "tccc07";

    /* (non-Javadoc)
     * @see com.topcoder.web.tc.controller.request.tournament.ContestProjectsBase#getContestPrefix()
     */
    @Override
    protected String getContestPrefix() {
        return CONTEST_PREFIX;
    }
}
