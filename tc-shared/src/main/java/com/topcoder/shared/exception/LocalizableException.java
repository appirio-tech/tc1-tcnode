/*
 * LocalizableException
 * 
 * Created Nov 6, 2007
 */
package com.topcoder.shared.exception;

import com.topcoder.shared.i18n.Message;

/**
 * Exceptions implementing this interface contains a localizable message. 
 * Localizable exceptions should be the ones for which the message must be displayed to a user, generating the need for customization,
 * localization and argument formatting.<p> 
 * 
 * In general this kind of exceptions are thrown when a Business Rule could not be satisfied during a process.<p>  
 * 
 * @author Diego Belfer (mural)
 * @version $Id: LocalizableException.java 67962 2008-01-15 15:57:53Z mural $
 */
public interface LocalizableException {

    /**
     * Returns the localizable message describing the reason of the failure
     * 
     * @return the message
     * 
     * @see com.topcoder.shared.i18n.MessageProvider
     */
    Message getLocalizableMessage();

}