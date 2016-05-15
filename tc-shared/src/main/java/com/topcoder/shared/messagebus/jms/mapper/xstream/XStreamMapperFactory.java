/*
 * XStreamMapperFactory
 * 
 * Created Oct 9, 2007
 */
package com.topcoder.shared.messagebus.jms.mapper.xstream;

import com.topcoder.shared.messagebus.jms.mapper.MessageMapper;
import com.topcoder.shared.messagebus.jms.mapper.MessageMapperFactory;


/**
 * @author Diego Belfer (mural)
 * @version $Id: XStreamMapperFactory.java 66639 2007-10-24 19:05:44Z mural $
 */
public class XStreamMapperFactory implements MessageMapperFactory {
    public MessageMapper create() {
        return new XStreamMapper();
    }
}
