/*
 * ResponseConverter
 * 
 * Created Nov 6, 2007
 */
package com.topcoder.shared.messagebus.invoker;

import com.topcoder.shared.messagebus.BaseMessageConverter;

/**
 * @author Diego Belfer (Mural)
 * @version $Id: ResponseConverter.java 67962 2008-01-15 15:57:53Z mural $
 */
public class ResponseConverter extends BaseMessageConverter<Response> {
    public ResponseConverter(String moduleName, String messageType, String namespace) {
        super(moduleName, messageType, namespace);
    }
}