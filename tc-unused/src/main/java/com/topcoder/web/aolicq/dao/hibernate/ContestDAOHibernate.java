package com.topcoder.web.aolicq.dao.hibernate;

import com.topcoder.web.common.dao.hibernate.Base;
import com.topcoder.web.aolicq.dao.ContestDAO;
import com.topcoder.web.aolicq.model.Contest;
import org.hibernate.Query;

import java.util.List;

/**
 * @author dok
 * @version $Revision: 73726 $ Date: 2005/01/01 00:00:00
 *          Create Date: Jul 17, 2006
 */
public class ContestDAOHibernate extends Base implements ContestDAO {
    public List getContests() {
        StringBuffer query = new StringBuffer(100);
        query.append("from com.topcoder.web.aolicq.model.Contest");
        query.append(" order by start_time desc");
        Query q = session.createQuery(query.toString());

        return q.list();
    }

    public Contest find(Long id) {
        return (Contest) super.find(Contest.class, id);
    }

    public void saveOrUpdate(Contest c) {
        super.saveOrUpdate(c);
    }
}
