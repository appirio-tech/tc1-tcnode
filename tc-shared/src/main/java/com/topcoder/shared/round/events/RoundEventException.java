/*
 * RoundEventException
 * 
 * Created 10/03/2007
 */
package com.topcoder.shared.round.events;

/**
 * Exception thrown by the round event system when a failure
 * occurs. 
 * 
 * @author Diego Belfer (mural)
 * @version $Id: RoundEventException.java 66639 2007-10-24 19:05:44Z mural $
 */
public class RoundEventException extends Exception {

    public RoundEventException() {
    }

    public RoundEventException(String message) {
        super(message);
    }

    public RoundEventException(Throwable cause) {
        super(cause);
    }

    public RoundEventException(String message, Throwable cause) {
        super(message, cause);
    }

}
