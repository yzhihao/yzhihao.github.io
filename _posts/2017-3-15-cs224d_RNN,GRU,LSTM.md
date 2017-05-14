---
layout: post
title:  cs224d-rnn,gru,lstm
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


# cs224d-rnn,gru,lstm

因为rnn和lstm的讲解在这篇博文已经讲过比较多了，这里就不详细讲解rnn和lstm了，下面主要是rnn的训练和一种变种！

## RNN


<img src="{{ site.img_path }}/Machine Learning/cs224d_rnn1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

RNN语言模型中非常关键的一点是**每个时刻采用的W矩阵都是一个，所以参数规模不会随着依赖上下文的长度增加而指数增长。** 通常来说采用交叉熵作为损失函数，那么在t时刻的损失为：


<img src="{{ site.img_path }}/Machine Learning/cs224d_rnn2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

用来**衡量语言模型的一个常用指标是困惑度（perplexity），困惑度越低表示预测下个词的置信度越高**，困惑度和交叉熵的关系如下：

<img src="{{ site.img_path }}/Machine Learning/cs224d_rnn3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## RNN训练

其实RNN本质上还是一个普通的多层神经网络，只是**层与层之间使用的是同一个权重矩阵**而已， 同样可以利用后向误差传播的原理来进行后向误差传播， 只需要把t时刻的误差一直传播到t=0时刻，但是在实际实现的时候一般只需要向后传播τ≈3−5个时间单位。

<img src="{{ site.img_path }}/Machine Learning/cs224d_rnn4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/cs224d_rnn5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Lstm

**笔记原文:**

<img src="{{ site.img_path }}/Machine Learning/lstm.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/lstm2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## GRU

GRU可以看成是LSTM的变种，GRU把**LSTM中的`forget gate`和`input gate`用`update gate`来替代。** 把`cell state`和隐状态h(t)进行合并，在计算当前时刻新信息的方法和LSTM有所不同。

**笔记原文:**
<img src="{{ site.img_path }}/Machine Learning/gru1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/gru2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/gru3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

**下图是GRU更新h(t)的过程：**

<img src="{{ site.img_path }}/Machine Learning/gru_cs224d1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/gru_cs224d.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## GRUS and Lstm


GRU有两个门，LSTM有三个门;GRU没有不同于隐状态的内部记忆c_{t}，没有LSTM中的输出门;GRU输入门和遗忘门通过更新门z进行耦合，重置门r被直接应用于之前的隐状态。因此，**LSTM中的重置门的责任实质上被分割到了r和z中。GRU在计算输出时，没有使用第二个非线性单元。**

现在你已经看到了两个能够解决消失梯度问题的模型，你可能会疑惑：使用哪一个？GRU非常新，它们之间的权衡没有得到完全的研究。根据[Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling](http://link.zhihu.com/?target=http%3A//arxiv.org/abs/1412.3555)和 [An Empirical Exploration of Recurrent Network Architectures](http://link.zhihu.com/?target=http%3A//jmlr.org/proceedings/papers/v37/jozefowicz15.pdf)的实验结果，两者之前没有很大差别。在许多任务中，两种结构产生了差不多的性能，调整像层大小这样的参数可能比选择合适的架构更重要。**GRU的参数更少，因而训练稍快或需要更少的数据来泛化。另一方面，如果你有足够的数据，LSTM的强大表达能力可能会产生更好的结果。**



  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="2017031701" data-title="cs224d-rnn,gru,lstm" data-url=""></div>
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
  
两宴书长，一与家天斜。出寒看阶帆，竺却参雴飞。

