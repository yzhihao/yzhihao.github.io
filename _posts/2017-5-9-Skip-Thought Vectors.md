---
layout: post
title:  Skip-Thought Vectors
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-5-9T00:00:00.000Z
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

# Skip-Thought Vectors

[论文原文](http://cn.arxiv.org/pdf/1506.06726v1.pdf)

word level表示已经有太多无监督模型，然而sentence level表示大多仍停留在监督模型的范畴内，比如之前分享过的RNN、CNN、RCNN等模型来表示一个句子，主要是针对具体的分类任务来构造句子向量，仅适用于本任务，不具有一般性。之前，Tomas Mikolov（word2vec的作者）提出了一种类似于Word2vec的paragraph vector，也是一种无监督模型，但并不能很好地扩展来用。

本文旨在提出一个通用的**无监督句子表示模型，借鉴了word2vec中skip-gram模型，通过一句话来预测这句话的上一句和下一句。**本文的模型被称为skip-thoughts，生成的向量称为skip-thought vector。模型采用了当下流行的端到端框架，通过搜集了大量的小说作为训练数据集，将得到的模型中encoder部分作为feature extractor，可以给任意句子生成vector。

## 模型结构

本文的模型，参考下图来理解：

<img src="{{ site.img_path }}/Machine Learning/Skip_Thought_Vectors.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>



模型分为两个部分，一个是encoder，一个是两个decoder，分别decode出当前句子的上一句和下一句。

encoder-decoder框架可参看[这篇博文]()，这里不再赘述。本文采用了GRU-RNN作为encoder和decoder，encoder部分的最后一个词的hidden state作为decoder的输入来生成词。这里用的是最简单的网络结构，并没有考虑复杂的多层网络、双向网络等提升效果。decoder部分也只是一个考虑了encoder last hidden state的语言模型，并无其他特殊之处，只是有两个decoder，是一个one maps two的情况，但计算方法一样。模型中的目标函数也是两个部分，一个来自于预测下一句，一个来自于预测上一句。如下式：


<img src="{{ site.img_path }}/Machine Learning/Skip_Thought_Vectors1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## 表示未登录词-词汇表扩展。

如果测试数据中有未登录词，如何表示这个未登录词？针对这个问题，本文提出了一种词汇表扩展的方法来解决这个问题。



借鉴于Tomas Mikolov的一篇文章[Exploiting Similarities among Languages for Machine Translation](https://arxiv.org/pdf/1309.4168.pdf)中解决机器翻译missing words问题的思路，对本文训练集产生的词汇表V(RNN)进行了扩展，具体的思路可参考Mikolov的文章，达到的效果是建立了大数据集下V(Word2Vec)和本文V(RNN)之间的映射，V(Word2Vec)的规模远远大于V(RNN)，本文中V(RNN)包括了20000个词，V(Word2Vec)包括了930000多个词，成功地解决了这一问题，使得本文提出的无监督模型有大的应用价值。文中给出了一个例子，如下图：

<img src="{{ site.img_path }}/Machine Learning/Skip_Thought_Vectors2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

当然，词汇表扩展有很多方法，比如不同词，而用字符来作为基本元素，这种思路在语言模型中也常常被用到。

最后，作者在Semantic relateness、Paraphrase detection、Image-sentence ranking和classification任务中进行了测试和对比，验证了本文模型的效果。最后还给出了在多个数据集上对句子聚类的可视化结果，以及用decoder部分生成一段话。

## future work

关于未来的改进，作者有几点想法：

用更深的encoder和decoder网络。

用更大的窗口，而不仅仅预测上一句和下一句。

试着将sentence替换成paragraph。

换一些别的encoder来做，比如用CNN。

每个想法都可能会是未来另一篇牛paper的思路。

看过了很多的decoder，有char-level，word-level和sentence-level，我有一个小小的想法是，到底哪种level生成的paragraph更出色呢？速度方面，不必比较了，sentence-level一定要快一些，但是质量方面呢？文中最后给出了一个本文模型生成的demo，如下：

<img src="{{ site.img_path }}/Machine Learning/Skip_Thought_Vectors4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

本文作者还开源了该模型的实现代码。

