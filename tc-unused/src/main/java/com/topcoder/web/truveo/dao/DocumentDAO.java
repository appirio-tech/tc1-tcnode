package com.topcoder.web.truveo.dao;

import com.topcoder.web.truveo.model.Document;

/**
 * @author dok
 * @version $Revision: 70119 $ Date: 2005/01/01 00:00:00
 *          Create Date: Aug 1, 2006
 */
public interface DocumentDAO {
    Document find(Long id);

}
