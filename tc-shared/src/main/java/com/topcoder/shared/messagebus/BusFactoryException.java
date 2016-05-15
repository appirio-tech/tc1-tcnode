/*
 * BusFactoryException
 * 
 * Created Oct 3, 2007
 */
package com.topcoder.shared.messagebus;

/**
 * @author Diego Belfer (mural)
 * @version $Id: BusFactoryException.java 66639 2007-10-24 19:05:44Z mural $
 */
public class BusFactoryException extends Exception {

    public BusFactoryException() {

    }

    public BusFactoryException(String message) {
        super(message);
    }

    public BusFactoryException(Throwable cause) {
        super(cause);
    }

    public BusFactoryException(String message, Throwable cause) {
        super(message, cause);
    }

}
