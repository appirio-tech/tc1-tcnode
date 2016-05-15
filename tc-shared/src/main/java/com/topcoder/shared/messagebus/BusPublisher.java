/*
 * BusPublisher
 * 
 * Created Oct 1, 2007
 */
package com.topcoder.shared.messagebus;


/**
 * A BusPublisher publishes messages into the bus.
 * 
 * @author Diego Belfer (mural)
 * @version $Id: BusPublisher.java 67962 2008-01-15 15:57:53Z mural $
 */
public interface BusPublisher {
    /**
     * Publish the message into the bus.
     * @param message The message to publish.
     * @throws BusException If the message could not be published
     */
    void publish(BusMessage message) throws BusException;
    
    /**
     * Closes the publisher and releases any resource taken by this publisher.
     */
    void close();
}
