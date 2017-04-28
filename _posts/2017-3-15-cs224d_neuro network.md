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

因为神经网络基础已经讲过了，在这里就不重复细讲，在这里主要讲的是结合nlp中的一些trick和tip，顺带讲下对**交叉熵**的进一步理解

## 训练神经网络

下面讲述的是怎么才能训练出比较好的神经网络，一些**tip&trick**

<img src="{{ site.img_path }}/Machine Learning/neuro_network.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

1. 选择适当的网络结构
	1. 结构：单个词，固定窗口，词袋，递归 vs 循环，CNN，基于句子 vs 基于文档
	2. 非线性函数选择
2. 用梯度检查来校验是否有实现bug
3. 参数初始化
4. 优化技巧
5. 检查模型是否能够在数据集上过拟合
	1. 如果不能，那么需要改变模型结果或者让模型参数规模更大（例如增加隐藏层）
	2. 如果可以，那么增加正则化项

**还有就是在检查神经网络的时候的梯度检查：**

<img src="{{ site.img_path }}/Machine Learning/Gradient_Checks1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Gradient_Checks2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/Gradient Check.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## rnn
文中简单介绍了一下rnn和他为什么难以训练，下面给出课件：

<img src="{{ site.img_path }}/Machine Learning/Recurrent_neural_network1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Recurrent_neural_network2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Recurrent_neural_network3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

文中也给出，因为我们知道训练rnn很容易梯度消失或者梯度爆炸，下面是一种切割梯度的方式，来阻止梯度爆炸：

<img src="{{ site.img_path }}/Machine Learning/clipping_gradients1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/gradients2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>需要注意的是，在后面讲到的lstm中，它是可以防止梯度消失，但不能防止梯度爆炸，具体原因请查看[这篇博文](https://yzhihao.github.io/machine%20learning/2017/03/12/%E5%BE%AA%E7%8E%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.html#lstm-如何来避免梯度弥撒和梯度爆炸)

## 交叉熵

<img src="{{ site.img_path }}/Machine Learning/Cross_entropy1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Cross_entropy2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>这里很明白的说明了**最小化交叉熵就是在最小化kl散度**，好的，一开始并不知道它是什么，下面摘自网上，对于kl散度和交叉熵的解释：

<img src="{{ site.img_path }}/Machine Learning/kl_sandu.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

比如TD-IDF算法就可以理解为相对熵的应用：词频在整个语料库的分布与词频在具体文档中分布之间的差异性。交叉熵可在神经网络(机器学习)中作为损失函数，**p表示真实标记的分布，q则为训练后的模型的预测标记分布，交叉熵损失函数可以衡量p与q的相似性。**交叉熵作为损失函数还有一个好处是使用sigmoid函数在梯度下降时能避免均方误差损失函数学习速率降低的问题，因为学习速率可以被输出的误差所控制。

PS：

通常“相对熵”也可称为“交叉熵”，因为真实分布p是固定的，`D(p||q)`由`H(p,q)`决定。当然也有特殊情况，彼时2者须区别对待。

尽管**KL散度从直观上是个度量或距离函数，但它并不是一个真正的度量或者距离，因为它不具有对称性，**即`D(p||q)！=D(q||p)`

[维基百科-Cross_entropy](https://en.wikipedia.org/wiki/Cross_entropy)


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

