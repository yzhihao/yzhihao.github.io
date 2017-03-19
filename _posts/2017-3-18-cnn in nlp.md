---
layout: post
title:  cs224d-cnn in nlp
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-18T00:00:00.000Z
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

## cs224d-cnn in nlp

在之前我们可以看到从convolution在图像处理方面的大放异彩，在nlp领域，其实cnn也从示弱，下面记下cnn在nlp中的一些模型原理与recurrent neural network和recursive neural network的一些区别和比较。

## from rnn to cnn

首先来看下rnn到cnn，因为recursive network需要parser tree，然后recurrent network就比较依赖前面的词。

<img src="{{ site.img_path }}/Machine Learning/RNN_disad1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## cnn—single layer 

cnn的主要论文或者原理在前面有比较多的笔记或者博文了，可以看下这篇[cnn]()，在这里就不讲，现在主要讲解的是cnn在应用在nlp时的结构：

<img src="{{ site.img_path }}/Machine Learning/single_layer_cnn.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/single_layer_cnn1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/single_layer_cnn2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/single_layer_cnn3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## pooling

<img src="{{ site.img_path }}/Machine Learning/Pooling1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Pooling2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## structure

<img src="{{ site.img_path }}/Machine Learning/structure1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/structure2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<!-- 多说评论框 start -->
<div class="ds-thread" data-thread-key="2017031801" data-title="cs224d-cnn in nlp" data-url=""></div>
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
