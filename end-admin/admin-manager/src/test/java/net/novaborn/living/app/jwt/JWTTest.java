package net.novaborn.living.app.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.impl.DefaultClaims;
import io.jsonwebtoken.impl.crypto.MacProvider;

import java.security.Key;
import java.util.UUID;

/**
 * jwt测试
 *
 * @author fengshuonan
 * @date 2017-08-21 16:34
 */
public class JWTTest {

    public static void main(String[] args) {

        Key key = MacProvider.generateKey();

        String compactJws = Jwts.builder()
                .setSubject("Joe")
                .setClaims(new DefaultClaims().setId(UUID.randomUUID().toString()))
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();

        System.out.println(compactJws);


        assert Jwts.parser().setSigningKey(key).parseClaimsJws(compactJws).getBody().getSubject().equals("Joe");

        try {
            Claims body = Jwts.parser().setSigningKey(key).parseClaimsJws(compactJws).getBody();
            System.out.println(body);
            System.out.println(body.getExpiration());

            System.out.println("trust");
        } catch (SignatureException e) {
            System.out.println("not trust");
        } catch (ExpiredJwtException e) {
            System.out.println("ExpiredJwtException");
        }
    }
}
