/*
 * MapperNotFoundException
 * 
 * Created Oct 5, 2007
 */
package com.topcoder.shared.messagebus.jms.mapper;

/**
 * @author Diego Belfer (mural)
 * @version $Id: MapperNotFoundException.java 67962 2008-01-15 15:57:53Z mural $
 */
public class MapperNotFoundException extends Exception {

    public MapperNotFoundException() {
        super();
    }

    public MapperNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public MapperNotFoundException(String message) {
        super(message);
    }

    public MapperNotFoundException(Throwable cause) {
        super(cause);
    }

}
