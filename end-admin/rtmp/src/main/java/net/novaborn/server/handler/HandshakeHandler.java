package net.novaborn.server.handler;

import io.netty.channel.ChannelInboundHandlerAdapter;
import net.novaborn.server.entity.Handshake;
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

    private final Handshake handshake;
    private boolean rTmpe;
    private boolean partOneDone;
    private boolean handshakeDone;

    public HandshakeHandler() {
        this.handshake = new Handshake();
    }
}
