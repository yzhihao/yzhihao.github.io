---
layout: post
title: 《Deep Learning》-Machine Learning Basics
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-23T00:00:00.000Z
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

# 《Deep Learning》-Machine Learning Basics

## kinds of machine Learning

<img src="{{ site.img_path }}/Machine Learning/deep-learning1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/deep-learning2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## bais
<img src="{{ site.img_path }}/Machine Learning/Bias.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Manifold Learning

<img src="{{ site.img_path }}/Machine Learning/Manifold1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Manifold2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Manifold3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Manifold4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

　　假设数据是均匀采样于一个高维欧氏空间中的低维流形，流形学习就是从高维采样数据中恢复低维流形结构，即找到高维空间中的低维流形，并求出相应的嵌入映射，以实现维数约简或者数据可视化。它是从观测到的现象中去寻找事物的本质，找到产生数据的内在规律。流形学习方法是模式识别中的基本方法，分为线性流形学习算法和非线性流形学习算法，线性方法就是传统的方法如主成分分析（PCA）和线性判别分析（LDA），非线行流形学习算法包括等距映射（Isomap），拉普拉斯特征映射（LE）等

流形学习是个很广泛的概念。这里我主要谈的是自从2000年以后形成的流形学习概念和其主要代表方法。自从2000年以后，流形学习被认为属于非线性降维的一个分支。众所周知，引导这一领域迅速发展的是2000年Science杂志上的两篇文章: Isomap and LLE (Locally Linear Embedding)。

### 流形学习的基本概念

那流形学习是什莫呢？为了好懂，我尽可能应用少的数学概念来解释这个东西。所谓流形（manifold）就是一般的几何对象的总称。比如人，有中国人、美国人等等；流形就包括各种维数的曲线曲面等。和一般的降维分析一样，流形学习把一组在高维空间中的数据在低维空间中重新表示。和以往方法不同的是，在流形学习中有一个假设，就是所处理的数据采样于一个潜在的流形上，或是说对于这组数据存在一个潜在的流形。对于不同的方法，对于流形性质的要求各不相同，这也就产生了在流形假设下的各种不同性质的假设，比如在Laplacian Eigenmaps中要假设这个流形是紧致黎曼流形等。对于描述流形上的点，我们要用坐标，而流形上本身是没有坐标的，所以为了表示流形上的点，必须把流形放入外围空间（ambient space）中，那末流形上的点就可以用外围空间的坐标来表示。比如R^3中的球面是个2维的曲面，因为球面上只有两个自由度，但是球面上的点一般是用外围R^3空间中的坐标表示的，所以我们看到的R^3中球面上的点有3个数来表示的。当然球面还有柱坐标球坐标等表示。对于R^3中的球面来说，那末流形学习可以粗略的概括为给出R^3中的表示，在保持球面上点某些几何性质的条件下，找出找到一组对应的内蕴坐标（intrinsic coordinate）表示，显然这个表示应该是两维的，因为球面的维数是两维的。这个过程也叫参数化（parameterization）。直观上来说，就是把这个球面尽量好的展开在通过原点的平面上。在PAMI中，这样的低维表示也叫内蕴特征（intrinsic feature）。一般外围空间的维数也叫观察维数，其表示也叫自然坐标（外围空间是欧式空间）表示,在统计中一般叫observation。

  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="2017032301" data-title=" 《Deep Learning》-Machine Learning Basics" data-url=""></div>
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
