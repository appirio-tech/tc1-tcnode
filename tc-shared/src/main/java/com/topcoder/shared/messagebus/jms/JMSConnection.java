/*
 * JMSConnection
 * 
 * Created Oct 8, 2007
 */
package com.topcoder.shared.messagebus.jms;

import javax.jms.Connection;
import javax.jms.JMSException;

/**
 * @author Diego Belfer (mural)
 * @version $Id: JMSConnection.java 66639 2007-10-24 19:05:44Z mural $
 */
public interface JMSConnection extends Connection {
    boolean isConnected();
    boolean canRecoverConnection();
    void assertConnected() throws JMSException;
}
