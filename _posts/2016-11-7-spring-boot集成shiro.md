---
layout: post
title: spring-boot集成shiro
desc: 我的博客系统介绍
keywords: 'blog,java,framework'
date: 2016-11-07T00:00:00.000Z
categories:
  - java
tags:
  - java
  - framework
icon: icon-java
---



# spring-boot集成shiro

## 目录
**欢迎在文章下方评论**

* 目录
{:toc}

## Shiro简单介绍
Shiro是Apache下的一个开源项目，我们称之为Apache Shiro。它是一个很易用与Java项目的的安全框架，提供了认证、授权、加密、会话管理，与 Spring Security 一样都是做一个权限的安全框架，但是与Spring Security 相比，在于 Shiro 使用了比较简单易懂易于使用的授权方式。
>**在这里强烈建议要先去学习shiro，可以到[开涛的博客](http://jinnianshilongnian.iteye.com/blog/2018398)学习**

在这里我默认你是学过shiro的，如果不想敲demo的话。我的github上有[shiro的demo](https://github.com/yzhihao/MyJavaDemo/tree/shiro)，欢迎查看。



## spring-boot的简单介绍
Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run". We take an opinionated view of the Spring platform and third-party libraries so you can get started with minimum fuss. Most Spring Boot applications need very little Spring configuration.
>上面是spring-boot的官方简介，很明确，spring-boot就是一个让项目配置变的极其简单，达到快速目的的微型框架。如果没有学过spring-boot，没有关系，直接到官网看文档，当然，网上中文文档也一找一大堆。你会发现它是一个很好上手简单方便的框架。



## spring-boot集成shiro

既然是集成，我会着重的讲下配置的集成，而maven的那些配置,数据库的5张表就不详细说明了。

在配置之前先说明shiro的核心类

## 启用注解和配置shiro生命周期

```
@Bean
	@DependsOn("lifecycleBeanPostProcessor")
	public DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator() {

		DefaultAdvisorAutoProxyCreator shiroAutoProxyCreator =
				new DefaultAdvisorAutoProxyCreator();
		shiroAutoProxyCreator.setProxyTargetClass(true);
		return shiroAutoProxyCreator;
	}

	/**
	 *
	 */
	@Bean
	public LifecycleBeanPostProcessor lifecycleBeanPostProcessor() {

		return new LifecycleBeanPostProcessor();
	}
```

### ShiroFilterFactory
>配置ShiroFilterFactory

```
	/**
	 * shiro filter
	 */
	@Bean(name = "shiroFilter")
	public ShiroFilterFactoryBean ShiroFilterFactoryBean() {

		ShiroFilterFactoryBean factoryBean = new ShiroFilterFactoryBean();
		factoryBean.setSecurityManager(defaultWebSecurityManager());
		factoryBean.setFilterChainDefinitionMap(createFilterChainMap());
		factoryBean.setUnauthorizedUrl("/dongjun/user/unauthorized");
		factoryBean.setLoginUrl("/dongjun/login");
		return factoryBean;
	}

	/**
	 * <p>*：匹配零个或多个字符串
	 * <p>**：匹配路径中的零个或多个路径
	 * <p>url模式匹配顺序是按照在配置中的声明顺序匹配，即从头开始使用第一个匹配的url模式对应的拦截器链
	 */
	private Map<String, String> createFilterChainMap() {
		Map<String, String> map = new LinkedHashMap<>();
		map.put("//*", "anon");
		map.put("//**", "roles[super_admin]");
		map.put("//**", "authc");
		return map;
	}
```

ShiroFilterFactory，Shiro过滤器工厂类，具体的实现类是：ShiroFilterFactoryBean，此实现类是依赖于SecurityManager安全管理器。

### SecurityManager
配置SecurityManager
```
@Bean
	public DefaultWebSecurityManager defaultWebSecurityManager() {

		DefaultWebSecurityManager manager = new DefaultWebSecurityManager();
		manager.setRealm(jdbcAuthenticationRealm());
		return manager;
	}
```

SecurityManager,Shiro的安全管理，主要是身份认证的管理，缓存管理，cookie管理，所以在实际开发中我们主要是和SecurityManager进行打交道的，ShiroFilterFactory主要配置好了Filter就可以了。当然SecurityManager并进行身份认证缓存的实现，我们需要进行对应的编码然后进行注入到安全管理器中。

### Realm
集成spring-boot，直接在application类中写

```

	@Bean
	public JdbcRealm jdbcAuthenticationRealm() {

		JdbcRealm realm = new JdbcRealm();

		HashedCredentialsMatcher credentialsMatcher = new HashedCredentialsMatcher();
		SimpleCredentialsMatcher matcher = new SimpleCredentialsMatcher();
		credentialsMatcher.setHashAlgorithmName("SHA-256");
		realm.setDataSource(dataSource());
		realm.setCredentialsMatcher(matcher);
		realm.setAuthenticationCacheName("shiro.authorizationCache");
		realm.setAuthenticationQuery("select password from user where name = ?");
		realm.setSaltStyle(SaltStyle.NO_SALT);

		/**
		 * 查询用户的角色时只能通过用户的名字查，查询用户的权限时只能通过用户的角色名查
		 */
		realm.setUserRolesQuery("select role from role where id in " +
				"(select role_id from user_role where user_id in " +
				"(select id from user where name = ?))");
		realm.setPermissionsQuery("select permission from permission where id in " +
				"(select permission_id from role_permission where role_id in " +
				"(select id from role where role = ?))");
		realm.setPermissionsLookupEnabled(true);
		return realm;
	}

```

Realm,用于身份信息权限信息的验证。


## 其他配置
其它的就是缓存管理，记住登录之类的，这些大部分都是需要自己进行简单的实现，然后注入到SecurityManager让Shiro的安全管理器进行管理就好了。

## 使用shiro
直接再controller上加上权限注解，相信学过shiro的同学会懂怎么加的了，这里不一一介绍

>写在后面，上个星期总体感觉有点堕落啊，时间没有安排好吧。这周开始要好好的写博文学习啦。


  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="201611071" data-title="shiro-spring-boot" data-url=""></div>
<!-- 多说评论框 end -->
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
var duoshuoQuery = {short_name:"yzhhome"};
  (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] 
     || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
  </script>
<!-- 多说公共JS代码 end -->






