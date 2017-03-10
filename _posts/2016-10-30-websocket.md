---
layout: post
title: spring4+websocket
desc: spring4+websocket
keywords: 'blog,java'
date: 2016-10-30T00:00:00.000Z
categories:
  - java
tags:
  - java
  - web
icon: fa-bookmark-o
---
# WebSocket+spring4学习

## 目录
**欢迎在文章下方评论**

* 目录
{:toc}

## WebSocket是什么？
WebSocket protocol 是HTML5一种新的协议。它实现了浏览器与服务器全双工通信(full-duplex)。一开始的握手需要借助HTTP请求完成。

## WebSocket有什么好的地方。
在浏览器中通过http仅能实现单向的通信,comet可以一定程度上模拟双向通信,但效率较低,并需要服务器有较好的支持; flash中的socket和xmlsocket可以实现真正的双向通信,通过 flex ajax bridge,可以在javascript中使用这两项功能. 可以预见,如果websocket一旦在浏览器中得到实现,将会替代上面两项技术,得到广泛的使用.面对这种状况，HTML5定义了WebSocket协议，能更好的节省服务器资源和带宽并达到实时通讯。

## websocket单独使用的缺陷
1. websocket是一个比较底层的协议，如果实现推送效果，需要写大量代码。
2. 在许多的低级浏览器（别ie7,8等）中是不支持websocket的。

## spring支持websocket
>根据以上两个缺陷，spring给出自己的解决方式

* 一个是stomp，这是一种通信协议，暂时不介绍它，只需要知道是一种更方便更安全的发送消息的库就行了。在实现消息推送的时候，spring借助stomp更简单的实现。解决了第一个问题。
* 一个是借助Sock.Js，在使用websocket的时候，在spring用.withSockJS()一小段就可以完美解决第二个部分低级浏览器不支持的问题。
* withSockJs，这是什么呢？SockJs是一个WebSocket的通信js库，Spring对这个js库进行了后台的自动支持，也就是说，我们如果使用SockJs，那么我们就不需要对后台进行更多的配置，只需要加上这一句就可以了。

## STOMP协议和SockJS

* 直接使用 WebSocket（SockJS） 就很类似于 使用 TCP 套接字来编写 web 应用；因为没有高层协议，因此就需要我们定义应用间所发送消息的语义，还需要确保 连接的两端都能遵循这些语义；
* STOMP 在 WebSocket 之上提供了一个基于 帧的线路格式层，用来定义消息语义，使得发消息变得更加简单

## websocket的作用
在javaweb开发中，主要是用来做推送用，其他的话不是很了解，若想深入交接websocket，请看一本叫《HTML5 WebSocket权威指南》

# demo的讲解
由于在网上spring4 结合websocket的demo有点乱七八槽，很多都是错的，既然这样，那我就自己结合网上，做了一个demo。下面主要是spring结合websocket通过sock.js连接及订阅发布的讲解。

>建议这个时候同时打开我在github的demo，[websocket_demo](https://github.com/yzhihao/MyJavaDemo/tree/websocket)

## 用或不用sock.js的讲解

### 首先是重要的websocketconfig



* 在一开始我们看到

```
@Configuration
@EnableWebMvc
@EnableWebSocket
public class WebSocketConfig extends WebMvcConfigurerAdapter implements WebSocketConfigurer{}
```

>这注解三个大致意思是使这个类支持以@Bean的方式加载bean，并且支持springmvc和websocket，不是很准确大致这样，试了一下@EnableWebMvc不加也没什么影响，@Configuration本来就支持springmvc的自动扫描。
>然后是继承WebMvcConfigurerAdapter，和实现WebSocketConfigurer。

* 下面的注册方法

```
@Override
public void registerWebSocketHandlers(WebSocketHandlerRegistry registry)  {
        registry.addHandler(systemWebSocketHandler(), "/websck").addInterceptors(new HandshakeInterceptor());

        System.out.println("registed!");
        registry.addHandler(systemWebSocketHandler(), "/sockjs/websck/info").addInterceptors(new HandshakeInterceptor())
                .withSockJS();
```

>在重写的registerWebSocketHandlers方法中，我们可以看到两种注册方式。一个是有.withSockJS()的连接，一个是没有的。同时指定了在连接之后的的信息处理类是systemWebSocketHandler（）

### 下面我们就来看看同时指定了在连接之后的的信息处理类是systemWebSocketHandler（）这个处理类

```
SystemWebSocketHandler implements WebSocketHandler{}//继承WebSocketHandler

 @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {...//处理连接之后
    
    @Override
    public void handleMessage(WebSocketSession wss, WebSocketMessage<?> wsm) throws Exception {...//处理客户端传来的信息
    
     @Override
    public void handleTransportError(WebSocketSession wss, Throwable thrwbl) throws Exception {...//处理当异常产生
    
    @Override
    public void afterConnectionClosed(WebSocketSession wss, CloseStatus cs) throws Exception {...//处理连接关闭后
    
    @Override
    public boolean supportsPartialMessages() {...
    
    @Override
    public boolean supportsPartialMessages() {...//是否把消息分割成几个handleMessage来处理
```

>在这个类中大家还会看到其他两个自定义方法，其实主要是为了业务的逻辑处理也产生的。

### 当然，在连接的时候可以设置拦截器，也就是HandshakeInterceptor

```
HandshakeInterceptor extends HttpSessionHandshakeInterceptor{...}//在这里的Interceptor继承了HttpSessionHandshakeInterceptor

@Override
	public boolean beforeHandshake(ServerHttpRequest request,
			ServerHttpResponse response, WebSocketHandler wsHandler,
			Map<String, Object> attributes) throws Exception {...//也就是在握手之前处理

@Override
	public void afterHandshake(ServerHttpRequest request,
			ServerHttpResponse response, WebSocketHandler wsHandler,
			Exception ex) {...//也就是在握手之后处理
```
>我这里的拦截器只是简单的输出了下日志，久不加详细讲解了


### 最后就是客户端的解析了，在demo是webSocket_sock.jsp

>在connect()方法中，我们可以看到
>首先是引入sock.js的支持

```
 ws= new WebSocket("ws://localhost:8080/SpringWebSocketPush/websck");
 ws = new SockJS("http://localhost:8080/SpringWebSocketPush/sockjs/websck");
```
>这里创建两个js对象，分别是WebSocket，和SockJS，其中和SockJS是用到了sock.js的支持的。

* 最后，在浏览器中，我们就可以用这两种方式来进行连接和消息处理了。


## 基于stomp协议的订阅发布的demo

### 首先还是WebSocketConfig

```
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {
  @Override
  public void configureMessageBroker(MessageBrokerRegistry config) {
      config.enableSimpleBroker("/topic", "/queue");
      config.setApplicationDestinationPrefixes("/app");
  }

  @Override
  public void registerStompEndpoints(StompEndpointRegistry registry) {
      registry.addEndpoint("/hello").withSockJS();
  }
}
```

* configureMessageBroker，大意是设置消息代理，也就是页面上用js来订阅的地址，也是我们服务器往WebSocket端接收js端发送消息的地址
* @EnableWebSocketMessageBroker 注解的作用： 能够在 WebSocket 上启用 STOMP

* `registry.addEndpoint("/hello").withSockJS();`这个路径与之前发送和接收消息的目的路径有所不同， 这是一个端点，客户端在订阅或发布消息 到目的地址前，要连接该端点，即 用户发送请求 url='/server/hello' 与 STOMP server 进行连接，之后再转发到 订阅url；（server== name of your springmvc project ）（干货——端点的作用——客户端在订阅或发布消息 到目的地址前，要连接该端点）
* configureMessageBroker() 方法：配置了一个 简单的消息代理。如果不重载，默认case下，会自动配置一个简单的 内存消息代理，用来处理 "/topic" 为前缀的消息。但经过重载后，消息代理将会处理前缀为 "/topic" and "/queue" 消息。也就是说，在发布者发布的时候是以/app为前缀的，而订阅者，可以通过以"/topic", "/queue"为前缀的来接受，具体看下面的controller


### 下来是 GreetingController

```
    @Controller
    public class GreetingController {
        @MessageMapping("/hello")
        @SendTo("/topic/greetings")
        public Greeting greeting(HelloMessage message) throws Exception {
            System.out.println("receiving " + message.getName());
            System.out.println("connecting successfully.");
            return new Greeting("Hello, " + message.getName() + "!");
        }
        
        @SubscribeMapping("/macro")
	public Greeting handleSubscription() {
		System.out.println("this is the @SubscribeMapping('/marco')");
		Greeting greeting = new Greeting("i am a msg from SubscribeMapping('/macro').");
		return greeting;
	}
    }
```

* @MessageMapping注解：表示 handleShout()方法能够处理 指定目的地上到达的消息；
* 这个目的地（消息发送目的地url）就是 "/server/app/hello"，其中 "/app" 是 隐含的 ,"/server" 是 springmvc 项目名称；，也就是发布者的发布时候的地址
* ` @SendTo("/topic/greetings")`表示的是发布者发送的消息的最终目的，也就是订阅者接受消息是要连接的地址。
* 在第二个方法中@SubsribeMapping注解实现 请求-回应模式
* @SubscribeMapping注解 的方法来处理 对 "/app/macro" 目的地订阅（与 @MessageMapping类似，"/app" 是隐含的 ）；
* 请求-回应模式与 HTTP GET 的全球-响应模式差不多： 关键区别在于， HTTP GET 请求是同步的，而订阅的全球-回应模式是异步的，这样客户端能够在回应可用时再去处理，而不必等待；

### 最后就是客户端websocket_stomp.jsp
```
<script type="text/javascript">
        var stompClient = null;

        function setConnected(connected) {
            document.getElementById('connect').disabled = connected;
            document.getElementById('disconnect').disabled = !connected;
            document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
            document.getElementById('response').innerHTML = '';
        }

        function connect() {
            var socket = new SockJS("<c:url value='/hello'/>");
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function(frame) {
                setConnected(true);
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/greetings', function(greeting){
                    showGreeting(JSON.parse(greeting.body).content);
                });
            });
        }

        function disconnect() {
            if (stompClient != null) {
                stompClient.disconnect();
            }
            setConnected(false);
            console.log("Disconnected");
        }

        function sendName() {
            var name = document.getElementById('name').value;
            stompClient.send("/app/hello", {}, JSON.stringify({ 'name': name }));
        }

        function showGreeting(message) {
            var response = document.getElementById('response');
            var p = document.createElement('p');
            p.style.wordWrap = 'break-word';
            p.appendChild(document.createTextNode(message));
            response.appendChild(p);
        }
    </script>
```
对以上代码的 分析（Analysis）：

1. 以上代码连接“/hello” 端点并发送 ”name“;
2. stompClient.send("/app/hello", {}, JSON.stringify({'name':name}))： 第一个参数：json 负载消息发送的 目的地； 第二个参数：是一个头信息的Map，它会包含在 STOMP 帧中；第三个参数：负载消息；
3. stomp client 连接地址 和 发送地址不一样的，连接地址为 <c:url value='/hello'/> ==localhost:8080/springmvc_project_name/hello , 而 发送地址为 '/app/hello'，这里要当心

### 下面附上一张图

<div>
<img src="{{ site.img_path }}/java/websocket1.jpg" alt="header1" style="height:auto!important;width:100%;max-width:1020px;"/>
</div>

>关于stomp，在[这篇博文](http://m.blog.csdn.net/article/details?id=51914567)中有详细介绍,可以去看看

## 注意
* 因为两个demo我把他们合在了一起，在演示不同的方式的时候要记得修改websocketconfig，其实也就是注释和解注释了的。
* 在测试用sock.js的时候，要记得把GreetingController全部注释了。不然会报错。
* 在测试stomp的时候就改
* 其实实现消息的推送和消息还有很多方式。下次会结合消息中间件activeQM来继续讲解。


  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="201610301" data-title="spring4+websocket" data-url=""></div>
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