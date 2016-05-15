/*
 * BusException
 * 
 * Created Oct 3, 2007
 */
package com.topcoder.shared.messagebus;

/**
 * @author Diego Belfer (mural)
 * @version $Id: BusException.java 66639 2007-10-24 19:05:44Z mural $
 */
public class BusException extends Exception {

    public BusException() {
    }

    public BusException(String message) {
        super(message);
    }

    public BusException(Throwable cause) {
        super(cause);
    }

    public BusException(String message, Throwable cause) {
        super(message, cause);
    }
}
