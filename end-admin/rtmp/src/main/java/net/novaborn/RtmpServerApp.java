package net.novaborn;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import net.novaborn.server.codec.RtmpDecoder;
import net.novaborn.server.codec.RtmpEncoder;
import net.novaborn.server.handler.HandshakeHandler;
import net.novaborn.server.handler.ServerHandler;

/**
 * Created with IntelliJ IDEA
 *
 * @author xiaohun
 * Date: 2019/5/13
 * Time: 23:22
 * Description:
 * main class
 */
public class RtmpServerApp {
    private static int PORT = 1935;

    public static void main(String[] args) throws Exception {
        EventLoopGroup bossGroup = new NioEventLoopGroup();
        EventLoopGroup workGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap bootstrap = new ServerBootstrap();
            bootstrap.group(bossGroup, workGroup).channel(NioServerSocketChannel.class)
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        protected void initChannel(SocketChannel ch) {
                            ch.pipeline().addLast(new HandshakeHandler());
                            ch.pipeline().addLast(new RtmpDecoder());
                            ch.pipeline().addLast(new RtmpEncoder());
                            ch.pipeline().addLast(new ServerHandler());
                        }
                    })
                    .option(ChannelOption.SO_BACKLOG, 128)
                    .childOption(ChannelOption.SO_KEEPALIVE, true);

            ChannelFuture future = bootstrap.bind(PORT).sync();
            future.channel().closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workGroup.shutdownGracefully();
        }
    }
}
