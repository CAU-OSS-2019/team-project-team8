package net.novaborn.server.handler;

import io.netty.channel.ChannelInboundHandlerAdapter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * Created with IntelliJ IDEA
 *
 * @author xiaohun
 * Date: 2019/5/13
 * Time: 23:41
 * Description:
 * Hand shake handler for rtmp when connected in the first time
 */
public class HandshakeHandler extends ChannelInboundHandlerAdapter{
    private static final Logger logger = LoggerFactory.getLogger(HandshakeHandler.class);

}
