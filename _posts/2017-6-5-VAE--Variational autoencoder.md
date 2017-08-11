---
layout: post
title:  VAE--Variational autoencoder
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-6-5T00:00:00.000Z
categories:
  - Machine Learning
tags:
  - Machine Learning
  - AI
icon: fa-book
---


## 目录
**建议用电脑看**

* 目录
{:toc}

# VAE--Variational autoencoder

同GAN类似，其最重要的idea是基于一个令人惊叹的数学事实：对于一个目标概率分布，给定任何一种概率分布，总存在一个可微的可测函数，将其映射到另一种概率分布，使得这种概率分布与目标的概率分布任意的接近。

可测函数之间的编解码？什么样的可测函数？可测函数是测度论中的概念，它是真实世界的随机事件到数学世界的随机事件的映射。

在生成手写数字时，一个直观的方法是手工构造隐含因素（笔画粗细、笔尖的角度、写者的书写习惯等）的概率分布，但是现实是这些因素是无穷的，不能手工构造。VAE巧妙地避开了这个问题，利用一个联合高斯分布作为隐含可测函数的分布（这个隐含可测函数将上面所说的所有现实世界影响写字样式的隐含因素映射到欧式空间中去了），随即将问题转化为学习一个从隐含可测函数（隐含变量）到一个所希望生成样本的映射。

后面我们会看到，这个过程就是解码过程。可以想象，这个映射会极为复杂。我们自然会想到利用深度学习强大的函数拟合能力来学习这个映射。如下图：

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


其中z是隐含变量（隐含可测函数），将其输入到某种解码器，输出f(z)，使得f(z)尽可能在保证样本多样性的同时与真实样本相似。

但是如何通过学习得到这样的解码器呢？

## 得到VAE核心等式（二）

这就需要我们回归到目标函数中去考虑问题了。我们仅仅已知一些现成的样本S={x(i),i=1,...,m}，比如，回到我们的例子，我们仅仅已知0-9这些手写体图片的样本，希望生成一些具有多样性类似的样本。那么自然会想到利用极大似然法来估计可学习的参数Θ，即 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

不失一般性，我们下面只针对单样本x进行讨论（略去其指标和可学习参数）。上面的似然函数仅仅是关于x的函数，我们需要想办法凑出隐变量z来。 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

其中q(z|x)是给定样本下z的某一个条件概率分布。

这一步变换值得深思，为什么选用一个条件概率分布呢，而不选用q(z)或者p(z|x)呢？

因为q(z)的选取范围太大，我们**更感兴趣的是那些更有可能生成x的隐变量z**；关于p(z|x)，p(⋅)可以认为是真实的概率分布，我们很难得到，我们希望做的是通过q(⋅)去逼近p(⋅)，因此前者可以理解为某一种近似的概率分布。

我们继续进行推导， 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

我们考查其中的第一项，利用贝叶斯公式

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## 得到VAE核心等式（理解二）

在这里讲的东西其实有另外一种解释，那种解释更加的容易理解，如下

我们选择了KL散度这个指标用来衡量两者的相近程度。由于两边都是可以看作针对z的概率分布，因此用KL散度这个指标实际上非常合适。

所以就有了：

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder14.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

我们做一下贝叶斯公式的变换，就得到了：

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder15.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

再将和z无关的项目从积分符号中拿出来，就得到了：

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder16.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Variational Auto-encoder

左右整理一下，就得到了，这样我们就推导出VAE的一个核心等式， 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

下面可以开始建模了。由前面的讨论（利用一个联合高斯分布作为隐含可测函数的分布）， 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder6.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

同样，q(z|x)和p(x|z)用联合高斯去建模， 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder.png7" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

自然地，问题就转化成了用神经网络学习四种映射关系。但是，即使做了这样的建模，对于DKL(q(z|x)||p(z|x))，我们仍然难以给出其闭式解（归一化因子是一个复杂的多重积分）。因此只能退而求其次，我们对其做缩放 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder8.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

对对数似然的下界进行最大化。

进一步推导，我们将前面建模的概率模型带入这个下界中去。注意到在实际实现过程中，为了简化起见，Λ(z)取与z无关的单位阵I，于是有 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder9.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

最大化这个下界等价于最小化 

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder10.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

其中Θ为四个待学习映射的可学习参数集合。

至此，整个的学习框架就清晰了，如下图所示。

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder11.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

总结起来，**整个训练框架就是在对样本x进行编解码。Q是将样本x编码为隐变量z，而P又将隐含变量z解码成f(z)，进而最小化重构误差**。训练的目的是学习出**编码器的映射函数和解码器的映射函数**，所以训练过程实际上是在进行变分推断，即寻找出某一个函数来优化目标。因此取名为变分自编码器VAE(Variational Auto-encoder).


>什么叫做变分：变分其实就是一句话：用简单的分布q去近似复杂的分布p
就是选择合适的分布（函数）来逼近真实的后验概率分布（对于多个隐藏因子的情况，就是联合分布）。因为是概率分布，所以相似度或者距离就用KL值来表达。也因此，可以把这理解成一个泛函问题。所以它是一种Approximate Inference的方法。之所以approximate, 是因为这时Exact Inference计算复杂度太高（求后验概率的贝叶斯公式中分母的问题）。而Approximate的时候可以从特定的distribution family中选取q, 来方便计算。
大多数情况下后验分布很难求啊。如果后验概率好求解的话我们直接EM就搞出来了




关注具体实现的读者可能会发现在“解码器Decoder到μ(x)和Σ(x)”这个阶段从技术上没办法进行梯度反传。的确如此，上图只是作为帮助大家理解的示意图，而真正实现过程中，我们需要利用**重参数化**这个trick，如下图所示。

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder12.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

重参数化这个名字听起来很神秘，其实就是基于下面的一个简单的数学事实： 
如果z∼N(μ,Σ)，那么随机变量z可以写成

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder13.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

其中ϵ∼N(0,I).

利用重参数化这个trick，我们成功地规避了这个问题。


## 理解VAE（二）

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder16.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Variational_autoencoder17.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>



## 为什么深度学习那么强大

许多优秀的深度学习模型，它们达到了非常好的精度和效果。众人曾十分认真地分析过为什么这些模型的效果这么好，结论是深度模型的非线性拟合能力确实很强。不管曾经多么复杂的问题，一个深度模型出马，立刻把问题解决的八九不离十。
VAE也是利用了这个特点，我们用深度模型去拟合一些复杂的函数，从而解决实际问题。

