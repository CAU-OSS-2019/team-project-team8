package net.novaborn.living.app.web.api.admin;

import net.novaborn.living.app.web.dto.AuthRequest;
import net.novaborn.living.app.web.dto.AuthResponse;
import net.novaborn.living.app.modular.auth.validator.IReqValidator;
import net.novaborn.living.app.common.exception.SysException;
import net.novaborn.living.app.common.exception.SysExceptionEnum;
import net.novaborn.living.app.modular.auth.util.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * 请求验证的
 *
 * @author fengshuonan
 * @Date 2017/8/24 14:22
 */
@Controller
@RequestMapping("/api/admin")
public class AdminAuthController {

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Resource
    private IReqValidator reqValidator;

    @PostMapping(value = "${jwt.auth-path}")
    public ResponseEntity<?> createAuthenticationToken(@ModelAttribute AuthRequest authRequest) {
        boolean validate = reqValidator.validate(authRequest);

        if (validate) {
            final String randomKey = jwtTokenUtil.getRandomKey();
            final String token = jwtTokenUtil.generateToken(authRequest.getUserName(), randomKey);
            return ResponseEntity.ok(new AuthResponse(token, randomKey));
        } else {
            throw new SysException(SysExceptionEnum.AUTH_REQUEST_ERROR);
        }
    }
}
