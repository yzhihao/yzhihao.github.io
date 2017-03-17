---
layout: post
title:  cs224d-neuro network
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-16T00:00:00.000Z
categories:
  - Machine Learning
tags:
  - Machine Learning
  - AI
icon: fa-book
---


## 目录
**欢迎在文章下方评论，建议用电脑看**

* 目录
{:toc}


# cs224d-neuro network

## 训练神经网络

下面讲述的是怎么才能训练出比较好的神经网络，一些tip&trick

<img src="{{ site.img_path }}/Machine Learning/neuro_network.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

还有就是在检查神经网络的时候的梯度检查：

<img src="{{ site.img_path }}/Machine Learning/Gradient_Checks1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Gradient_Checks2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## rnn
文中简单介绍了一下rnn和他为什么难以训练，下面给出课件：

<img src="{{ site.img_path }}/Machine Learning/Recurrent_neural_network1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Recurrent_neural_network2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Recurrent_neural_network3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

文中也给出，因为我们知道训练rnn很容易梯度消失或者梯度爆炸，下面是一种切割梯度的方式，来阻止梯度抱着：

<img src="{{ site.img_path }}/Machine Learning/clipping_gradients1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/gradients2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="2017031502" data-title="cs224d-neuro network" data-url=""></div>
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

