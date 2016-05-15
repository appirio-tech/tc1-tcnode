/*
 * BusPollListener
 * 
 * Created Oct 1, 2007
 */
package com.topcoder.shared.messagebus;

/**
 * @author Diego Belfer (mural)
 * @version $Id: BusPollListener.java 66639 2007-10-24 19:05:44Z mural $
 */
public interface BusPollListener {
    BusMessage receive() throws BusException;
    BusMessage receive(long ms) throws BusException;
}
