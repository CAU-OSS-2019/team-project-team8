package net.novaborn.living.app.jwt;

import cn.hutool.crypto.SecureUtil;
import com.alibaba.fastjson.JSON;
import net.novaborn.living.app.modular.auth.converter.BaseTransferEntity;
import net.novaborn.living.app.modular.auth.security.impl.Base64SecurityAction;

import java.util.HashMap;
import java.util.Map;

/**
 * jwt测试
 *
 * @author fengshuonan
 * @date 2017-08-21 16:34
 */
public class DecryptTest {

    public static void main(String[] args) {
        String salt = "ih593k";

        Map<String, Object> simpleObject = new HashMap<>();
        simpleObject.put("user", "stylefeng");

        String jsonString = JSON.toJSONString(simpleObject);
        String encode = new Base64SecurityAction().doAction(jsonString);
        String md5 = SecureUtil.md5(encode + salt);

        BaseTransferEntity baseTransferEntity = new BaseTransferEntity();
        baseTransferEntity.setObject(encode);
        baseTransferEntity.setSign(md5);

        System.out.println(JSON.toJSONString(baseTransferEntity));
    }
}
