/*
 * RoundEventMessageMapper
 * 
 * Created Oct 3, 2007
 */
package com.topcoder.shared.round.events.bus;


import com.topcoder.shared.messagebus.BaseMessageConverter;
import com.topcoder.shared.round.events.RoundEvent;

/**
 * @author Diego Belfer (mural)
 * @version $Id: RoundEventMessageMapper.java 66639 2007-10-24 19:05:44Z mural $
 */
public class RoundEventMessageMapper extends BaseMessageConverter<RoundEvent> {
    public RoundEventMessageMapper(String moduleName, String messageType) {
        super(moduleName, messageType, RoundEventConstants.NAMESPACE);
    }
}
