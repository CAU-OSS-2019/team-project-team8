package net.novaborn.server.codec;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToMessageEncoder;

import java.util.List;

/**
 * Created with IntelliJ IDEA
 *
 * @author xiaohun
 * Date: 2019/5/13
 * Time: 23:48
 * Description: TODO
 */
public class RtmpEncoder extends MessageToMessageEncoder {

    @Override
    protected void encode(ChannelHandlerContext ctx, Object msg, List out) throws Exception {

    }
}
