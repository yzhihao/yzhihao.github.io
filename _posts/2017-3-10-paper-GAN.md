---
layout: post
title: 论文笔记-GAN
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-2-24T00:00:00.000Z
categories:
  - Machine Learning
tags:
  - Machine Learning
  - AI
icon: fa-book
---

# GAN

这里的论文主要


## 为什么要有GAN

**论文原文：**

Deep generative models have had less of an impact, due to the difficulty of approximating many intractable probabilistic computations that arise in maximum likelihood estimation and related strategies, and due to difficulty of leveraging the benefits of piecewise linear units in the generative context. We propose a new generative model estimation procedure that sidesteps these difficulties.

>讲述了传统深度网络很难用极大似然或者其他策略去逼急那个概率，同时也很难扩充分段的网络结构去生成那些相应内容的优势！

## GAN的算法流程和整体概念图

**论文原文：**

<img src="{{ site.img_path }}/Machine Learning/P-GAN1.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/P-GAN2.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## GAN散度

**论文原文：**

<img src="{{ site.img_path }}/Machine Learning/P-GAN3.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/P-GAN4.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

注意上面的式子,也就变成了下面这个
![](http://zhihu.com/equation?tex=2JS%28P_r+%7C%7C+P_g%29+-+2%5Clog+2)
GAN定义的判别器loss，我们可以得到最优判别器的形式；而在最优判别器的下，我们可以把原始GAN定义的生成器loss等价变换为最小化真实分布P_r与生成分布P_g之间的JS散度。我们越训练判别器，它就越接近最优，最小化生成器的loss也就会越近似于最小化P_r和P_g之间的JS散度。
但其实在散度的表示存在很多问题,详细见:[生成对抗网络]()

## GAN收敛
**论文原文：**

<img src="{{ site.img_path }}/Machine Learning/P-GAN5.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>在这里注意的是可以理解为**在优化最佳判别器的时候同时在给生成器最佳的梯度**，简单理解就是在判别器在判别的时候，它在同时告诉生成器，应该要怎么生成一张图片或其他来让判别器认为生成的图片更加的真实。



 <!-- 多说评论框 start -->

  <div class="ds-thread" data-thread-key="2017031001" data-title="gan" data-url=""></div>

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