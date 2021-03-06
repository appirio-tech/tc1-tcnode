/*
 * Copyright (C) 2010 TopCoder Inc., All Rights Reserved.
 */
package com.topcoder.web.tc.controller.request.tournament.tco10;

import java.util.Comparator;

import com.topcoder.web.tc.TCO10Constants;
import com.topcoder.web.tc.controller.request.tournament.StudioLeaderBoardRow;
import com.topcoder.web.tc.controller.request.tournament.StudioLeaderboardBase;

/**
 * <p>This class provides specific implementation for TCO10 Studio leaderboard.</p>
 * <p>It will calculate points based on competition data and present the consolidated leaderboard.</p>
 *
 * <p>Note: this class was changed to delegate to a simple helper class <code>StudioAdvancersHelper</code> in order to
 * avoid duplicating code in <code>StudioContests</code> class.</p>
 *
 * @author isv
 * @version 1.0 (2010 TCO WebSite Release assembly v1.0)
 */
public class StudioLeaders extends StudioLeaderboardBase {

    /**
     * <p>This method returns TCO10 short description.</p>
     * <p>Note: to avoid code duplication, this method will delegate to a simple helper class.</p>
     *
     * @return <code>String</code> containing the TCO10 contest prefix.
     */
    @Override
    protected String getContestPrefix() {
        return StudioAdvancersHelper.getContestPrefix();
    }

    /**
     * <p>This method returns the number of contests to be considered for the cumulative placement scoring.</p>
     * <p>Although this is not strictly required by TCO10 Studio rules, this method is required in order to extend
     * <code>StudioLeaderboardBase</code>. This is worked around returning <code>Integer.MAX_VALUE</code>.</p>
     * <p>Note: to avoid code duplication, this method will delegate to a simple helper class.</p>
     *
     * @return <code>int</code> containing the number of contests to consider.
     */
    @Override
    protected int getMaxContests() {
        return StudioAdvancersHelper.getMaxContests();
    }

    /**
     * <p>This method returns the corresponding placement points for a given contest placement.</p>
     * <p>Note: to avoid code duplication, this method will delegate to a simple helper class.</p>
     *
     * @param contestPlace an <code>int</code> containing the placement within a particular contest for tournament
     * registrants.
     * @return <code>int</code> containing the corresponding placement points.
     */
    @Override
    protected int getPlacementPoints(int contestPlace) {
        return StudioAdvancersHelper.getPlacementPoints(contestPlace);
    }

    /**
     * <p>This method returns the path to the corresponding JSP that will be shown.</p>
     *
     * @return <code>String</code> containing the complete path to the corresponding JSP.
     */
    @Override
    protected String getPageName() {
        return TCO10Constants.TCO10_STUDIO_LEADERBOARD_PAGE;
    }

    /**
     * <p> This method returns a custom comparator for competitors results to be applied before ranking.</p>
     *
     * @return <code>Comparator<StudioLeaderBoardRow></code> containing the custom comparator.
     */
    @Override
    protected Comparator<StudioLeaderBoardRow> getComparator() {
        return new StudioLeaderBoardComparator();
    }
}
