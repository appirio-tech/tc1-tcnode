/*
 * ConfigurationNotFoundException
 * 
 * Created Oct 6, 2007
 */
package com.topcoder.shared.messagebus.jms;

/**
 * Exception indicating that not matching configuration was found.
 * 
 * @author Diego Belfer (mural)
 * @version $Id: ConfigurationNotFoundException.java 67962 2008-01-15 15:57:53Z mural $
 */
public class ConfigurationNotFoundException extends Exception {

    public ConfigurationNotFoundException() {
    }

    public ConfigurationNotFoundException(String message) {
        super(message);
    }

    public ConfigurationNotFoundException(Throwable cause) {
        super(cause);
    }

    public ConfigurationNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

}
