/*
 * RoundEventBusFactory
 * 
 * Created Oct 2, 2007
 */
package com.topcoder.shared.round.events.bus;

import com.topcoder.shared.round.events.RoundEventException;
import com.topcoder.shared.round.events.RoundEventFactory;
import com.topcoder.shared.round.events.RoundEventListener;
import com.topcoder.shared.round.events.RoundEventPublisher;

/**
 * @author Diego Belfer (mural)
 * @version $Id: RoundEventBusFactory.java 66639 2007-10-24 19:05:44Z mural $
 */
public class RoundEventBusFactory extends RoundEventFactory {
    public RoundEventListener createListener(String moduleName) throws RoundEventException {
        return new RoundEventListenerImpl(moduleName);
    }

    public RoundEventPublisher createPublisher(String moduleName) {
        return new RoundEventPublisherImpl(moduleName);
    }
}
