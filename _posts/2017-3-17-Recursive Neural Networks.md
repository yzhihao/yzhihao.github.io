---
layout: post
title:  cs224d-Recursive Neural Networks
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-17T00:00:00.000Z
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


# cs224d-Recursive Neural Networks

## 简要
Recursive Neural Networks is indeed a superset of the previously discussed Recurrent Neural Network

The syntactic rules of language are highly recursive. So we take advantage of that recursive structure with a model that respects it!

要解决下面的问题：

1. There are literally an infinite amount of possible combinations of words. Storing and training an infinite amount of vectors would just be absurd.
2. Some combinations of words while they might be completely reasonable to hear in language, may never be represented in our training/dev corpus. So we would never learn them.

>就是词的组合无限，我们是学不来全部词组的，现在我们要一种方式用有限的词向量来解决接近无限的自然语言处理问题，不过实践证明，Recursive Neural Networks是可以做到这一点的。

## A simple single layer RNN

<img src="{{ site.img_path }}/Machine Learning/Recursive_Neural_Networks1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Recursive Neural Networks2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Syntactically Untied SU-RNN

<img src="{{ site.img_path }}/Machine Learning/Syntactically Untied SU-RNN4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## MV-RNN’s (Matrix-Vector Recursive Neural Networks)
<img src="{{ site.img_path }}/Machine Learning/Syntactically Untied SU-RNN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## RNTNs (Recursive Neural Tensor Network)
<img src="{{ site.img_path }}/Machine Learning/Syntactically Untied SU-RNN6.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<!-- 多说评论框 start -->
<div class="ds-thread" data-thread-key="2017031701" data-title="cs224d-Recursive Neural Networks" data-url=""></div>
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