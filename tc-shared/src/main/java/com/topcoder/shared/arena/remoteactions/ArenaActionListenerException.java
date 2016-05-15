/*
 * ArenaActionListenerException
 * 
 * Created Nov 5, 2007
 */
package com.topcoder.shared.arena.remoteactions;

/**
 * @author Diego Belfer (mural)
 * @version $Id: ArenaActionListenerException.java 85465 2014-12-16 21:08:34Z jamestc $
 */
public class ArenaActionListenerException extends Exception {

    public ArenaActionListenerException() {
    }

    public ArenaActionListenerException(String message, Throwable cause) {
        super(message, cause);
    }

    public ArenaActionListenerException(String message) {
        super(message);
    }

    public ArenaActionListenerException(Throwable cause) {
        super(cause);
    }

}
