/*
 * CustomSerializableMapper
 * 
 * Created Oct 5, 2007
 */
package com.topcoder.shared.messagebus.jms.mapper.custom;

import com.topcoder.shared.messagebus.jms.mapper.MessageMapper;
import com.topcoder.shared.messagebus.jms.mapper.MessageMapperFactory;


/**
 * @author Diego Belfer (mural)
 * @version $Id: CustomSerializableMessageMapperFactory.java 66639 2007-10-24 19:05:44Z mural $
 */
public class CustomSerializableMessageMapperFactory implements MessageMapperFactory {
    public MessageMapper create() {
        return new CustomSerializableMessageMapper();
    }
}
