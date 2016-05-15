/*
 * ArenaActionRequesterException
 * 
 * Created Oct 25, 2007
 */
package com.topcoder.shared.arena.remoteactions;

/**
 * @author Diego Belfer (mural)
 * @version $Id: ArenaActionRequesterException.java 67962 2008-01-15 15:57:53Z mural $
 */
public class ArenaActionRequesterException extends Exception {

    public ArenaActionRequesterException() {
    }

    public ArenaActionRequesterException(String message, Throwable cause) {
        super(message, cause);
    }

    public ArenaActionRequesterException(String message) {
        super(message);
    }

    public ArenaActionRequesterException(Throwable cause) {
        super(cause);
    }

}
