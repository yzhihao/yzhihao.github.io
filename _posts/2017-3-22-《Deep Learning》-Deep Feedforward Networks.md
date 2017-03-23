---
layout: post
title: 《Deep Learning》-Deep Feedforward Networks
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-24T00:00:00.000Z
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

# 《Deep Learning》-Deep Feedforward Networks

**from new on,I will write my blog of the book(deep learning)  in English,I am sorry that my English is so poor,but ,i will try my best**


##  Feedforward neural networks
* Feedforward neural networks are called networks because they are typically represented by composing together many different functions.
* these networks are called neural because they are loosely inspired by neuroscience.
* There are no feedback connections in which outputs of the model are fed back into itself. When feedforward neural networks are extended to include feedback connections, they are called recurrent neural networks
* It is best to think of feedforward networks as function approximation machines that are designed to achieve statistical generalization, occasionally drawing some insights from what we know about the brain, rather than as models of brain function


## linear models and nonlinear functions

To extend linear models to represent nonlinear functions of x, we can apply the linear model not to x itself but to a transformed input φ(x), where φ is a nonlinear transformation. Equivalently, we can apply the kernel trick described in Sec. 5.7.2 , to obtain a nonlinear learning algorithm based on implicitly applying the φ mapping. We can think of φ as providing a set of features describing x, or as providing a new representation for x .

## how to choose the mapping φ(kernel)
1. One option is to use a very generic φ, such as the infinite-dimensional φ that is implicitly used by kernel machines based on the RBF kernel. If φ(x) is of high enough dimension, we can always have **enough capacity to fit the training set(advantage)**, but **generalization to the test set often remains poor(disadvange,by overfitting)**. Very generic feature mappings are usually based only on the principle of local smoothness and do not encode enough prior information to solve advanced problems.
2. Another option is to manually engineer φ . Until the advent of deep learning, this was the dominant approach. This approach requires decades of human effort for each separate task, with practitioners specializing in different domains such as speech recognition or computer vision, and with little transfer between domains.


  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="2017032401" data-title=" 《Deep Learning》-Deep Feedforward Networks" data-url=""></div>
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