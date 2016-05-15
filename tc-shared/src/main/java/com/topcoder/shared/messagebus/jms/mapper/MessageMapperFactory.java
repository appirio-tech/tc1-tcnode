/*
 * MessageMapperFactory
 * 
 * Created Oct 5, 2007
 */
package com.topcoder.shared.messagebus.jms.mapper;


/**
 * @author Diego Belfer (mural)
 * @version $Id: MessageMapperFactory.java 66639 2007-10-24 19:05:44Z mural $
 */
public interface MessageMapperFactory {
    MessageMapper create();
}
