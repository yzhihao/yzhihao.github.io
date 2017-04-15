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

### 交叉熵

<img src="{{ site.img_path }}/Machine Learning/Cross_entropy1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Cross_entropy2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>这里很明白的说明了最小化交叉熵就是在最小化kl散度，好的，一开始并不知道它是什么，下面摘自网上，对于kl散度和交叉熵的解释：

<img src="{{ site.img_path }}/Machine Learning/kl_sandu.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

比如TD-IDF算法就可以理解为相对熵的应用：词频在整个语料库的分布与词频在具体文档中分布之间的差异性。交叉熵可在神经网络(机器学习)中作为损失函数，**p表示真实标记的分布，q则为训练后的模型的预测标记分布，交叉熵损失函数可以衡量p与q的相似性。**交叉熵作为损失函数还有一个好处是使用sigmoid函数在梯度下降时能避免均方误差损失函数学习速率降低的问题，因为学习速率可以被输出的误差所控制。

PS：

1. 通常“相对熵”也可称为“交叉熵”，因为真实分布p是固定的，D(p||q)由H(p,q)决定。当然也有特殊情况，彼时2者须区别对待。
2. 尽管KL散度从直观上是个度量或距离函数，但它并不是一个真正的度量或者距离，因为它不具有对称性，即D(p||q)！=D(q||p)


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

