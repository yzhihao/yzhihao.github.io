---
layout: post
title:  Encoder-Decoder框架
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-5-6T00:00:00.000Z
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


# Encoder-Decoder框架

encoder-decoder模型的想法很简单：**对于RNN语言模型，在我们计算输出序列E的概率时，先另一个RNN处理源序列F，来计算语言模型的初始状态。encoder-decoder的含义是：通过第一个神经网络来“编码”F的信息到一个隐层状态，在使用第二个神经网络来预测E“解码”该隐层到输出序列。**


模型结构如图


<img src="{{ site.img_path }}/Machine Learning/encoder_decoder.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

模型的训练目标则是期望这个由Encoder得到的向量能够cover整个句子的语义，从研究人员做的大量实验来看我们发现这样的结构确实可以使得Encoder得到的向量cover**整个句子信息。**同时Decoder-RNN又能很好的生成一句话。**模型cost function为Decoder产生的句子的交叉熵。**


## Attention 思想

传统的Encoder-Decoder缺点是，无论之前的context有多长，包含多少信息量，最终都要被压缩成一个几百维的vector。这意味着context越大，最终的state vector会丢失越多的信息。

事实上，因为context在输入时已知，一个模型完全可以在decode的过程中利用context的全部信息，而不仅仅是最后一个state。

**而Attention的思想，即在得到Encoder向量后，在进行Decoder的时候模型不仅会用到向量还会用到每个词对应的RNN隐层向量。**这里多插入一句，Attention其实是一种思想，它可以有多种实现方式。

<img src="{{ site.img_path }}/Machine Learning/encoder_decoder1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>