/*
 * Listener
 * 
 * Created Jul 17, 2008
 */
package com.topcoder.shared.serviceevent;

import java.io.Serializable;

/**
 * @author Diego Belfer (Mural)
 * @version $Id: ServiceEventHandler.java 72411 2008-08-19 22:24:12Z dbelfer $
 */
public interface ServiceEventHandler {
    public void eventReceived(String eventType, Serializable object);
}