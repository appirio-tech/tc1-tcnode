/*
 * RemoteInvokerException
 * 
 * Created Oct 26, 2007
 */
package com.topcoder.shared.messagebus.invoker;


/**
 * @author Diego Belfer (mural)
 * @version $Id: RemoteInvokerException.java 67962 2008-01-15 15:57:53Z mural $
 */
public class RemoteInvokerException extends Exception {

    public RemoteInvokerException() {
    }

    public RemoteInvokerException(String message, Throwable cause) {
        super(message, cause);
    }

    public RemoteInvokerException(String message) {
        super(message);
    }

    public RemoteInvokerException(Throwable cause) {
        super(cause);
    }

}
