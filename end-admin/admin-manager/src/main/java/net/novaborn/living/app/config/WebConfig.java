package net.novaborn.living.app.config;

import cn.hutool.core.collection.CollectionUtil;
import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.support.http.StatViewServlet;
import com.alibaba.druid.support.http.WebStatFilter;
import com.alibaba.druid.support.spring.stat.BeanTypeAutoProxyCreator;
import com.alibaba.druid.support.spring.stat.DruidStatInterceptor;
import net.novaborn.living.app.common.xss.XssFilter;
import net.novaborn.living.app.config.properties.JwtProperties;
import net.novaborn.living.app.config.properties.RestProperties;
import net.novaborn.living.app.modular.auth.filter.AuthFilter;
import net.novaborn.living.app.modular.auth.security.DataSecurityAction;
import net.novaborn.living.app.modular.auth.security.impl.Base64SecurityAction;
import net.novaborn.living.app.modular.auth.util.JwtTokenUtil;
import org.springframework.aop.Advisor;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.aop.support.JdkRegexpMethodPointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.boot.web.servlet.ServletListenerRegistrationBean;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.web.context.request.RequestContextListener;

import java.util.ArrayList;
import java.util.List;

/**
 * web配置
 * @author xiaohun
 */
@EnableAspectJAutoProxy(exposeProxy = true, proxyTargetClass = true)
@Configuration
public class WebConfig {
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtProperties jwtProperties;

//    @Bean
//    @ConditionalOnProperty(prefix = RestProperties.REST_PREFIX, name = "auth-open", havingValue = "true", matchIfMissing = true)
//    public AuthFilter jwtAuthenticationTokenFilter() {
//        return new AuthFilter();
//    }

    @Bean
    @ConditionalOnProperty(prefix = RestProperties.REST_PREFIX, name = "auth-open", havingValue = "true", matchIfMissing = true)
    public FilterRegistrationBean jwtAuthenticationTokenFilter() {
        AuthFilter authFilter = new AuthFilter();
        authFilter.setJwtProperties(this.jwtProperties);
        authFilter.setJwtTokenUtil(this.jwtTokenUtil);
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(authFilter);

        //添加不需要忽略的格式信息.
        List<String> exclusions = new ArrayList<>();
        exclusions.add("/api/admin/" + jwtProperties.getAuthPath());
        exclusions.add("/api/client/" + jwtProperties.getAuthPath());
//        exclusions.add("/api/client/*");
        filterRegistrationBean.addInitParameter("exclusions", CollectionUtil.join(exclusions, ","));
        //添加过滤规则.
        filterRegistrationBean.addUrlPatterns("/api/*");
        return filterRegistrationBean;
    }

    @Bean
    public DataSecurityAction dataSecurityAction() {
        return new Base64SecurityAction();
    }

    /**
     * druidServlet注册
     */
    @Bean
    public ServletRegistrationBean druidServletRegistration() {
        ServletRegistrationBean registration = new ServletRegistrationBean(new StatViewServlet());
        registration.addUrlMappings("/druid/*");
        return registration;
    }

    /**
     * druid监控 配置URI拦截策略
     */
    @Bean
    public FilterRegistrationBean druidStatFilter() {
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean(new WebStatFilter());
        //添加过滤规则.
        filterRegistrationBean.addUrlPatterns("/*");
        //添加不需要忽略的格式信息.
        filterRegistrationBean.addInitParameter(
                "exclusions", "/static/*,*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid,/druid/*");
        //用于session监控页面的用户名显示 需要登录后主动将username注入到session里
        filterRegistrationBean.addInitParameter("principalSessionName", "username");
        return filterRegistrationBean;
    }

    /**
     * druid数据库连接池监控
     */
    @Bean
    public DruidStatInterceptor druidStatInterceptor() {
        return new DruidStatInterceptor();
    }

    @Bean
    public JdkRegexpMethodPointcut druidStatPointcut() {
        JdkRegexpMethodPointcut druidStatPointcut = new JdkRegexpMethodPointcut();
        String patterns = "net.novaborn.gamecenter.modular.*.service.*";
        //可以set多个
        druidStatPointcut.setPatterns(patterns);
        return druidStatPointcut;
    }

    /**
     * druid数据库连接池监控
     */
    @Bean
    public BeanTypeAutoProxyCreator beanTypeAutoProxyCreator() {
        BeanTypeAutoProxyCreator beanTypeAutoProxyCreator = new BeanTypeAutoProxyCreator();
        beanTypeAutoProxyCreator.setTargetBeanType(DruidDataSource.class);
        beanTypeAutoProxyCreator.setInterceptorNames("druidStatInterceptor");
        return beanTypeAutoProxyCreator;
    }

    /**
     * druid 为druidStatPointcut添加拦截
     *
     * @return
     */
    @Bean
    public Advisor druidStatAdvisor() {
        return new DefaultPointcutAdvisor(druidStatPointcut(), druidStatInterceptor());
    }

    /**
     * RequestContextListener注册
     */
    @Bean
    public ServletListenerRegistrationBean<RequestContextListener> requestContextListenerRegistration() {
        return new ServletListenerRegistrationBean<>(new RequestContextListener());
    }

    /**
     * xssFilter注册
     */
    @Bean
    public FilterRegistrationBean xssFilterRegistration() {
        XssFilter xssFilter = new XssFilter();
//        xssFilter.setUrlExclusion(Arrays.asList("/notice/update", "/notice/add"));
        FilterRegistrationBean registration = new FilterRegistrationBean(xssFilter);
        registration.addUrlPatterns("/*");
        return registration;
    }
}
