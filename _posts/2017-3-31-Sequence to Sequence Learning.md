---
layout: post
title: paper about Sequence to Sequence Learning with Neural Networks
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-29T00:00:00.000Z
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

# paper about Sequence to Sequence Learning with Neural Networks

>Long Short-Term Memory (LSTM) architecture [16] can solve general sequence to sequence problems.

##  shortage of traditional DNN

Despite their flexibility and power, **DNNs can only be applied to problems whose inputs and targets can be sensibly encoded with vectors of fixed dimensionality.** It is a significant limitation, since many important problems are best expressed with sequences whose lengths are not known a-priori. For example, speech recognition and machine translation are sequential problems. Likewise, question answering can also be seen as mapping a sequence of words representing the question to a sequence of words representing the answer. It is therefore clear that **a domain-independent method that learns to map sequences to sequences would be useful**

## the model

<img src="{{ site.img_path }}/Machine Learning/Sequence to Sequence.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>**a trick:**the LSTM did not suffer on very long sentences,The simple trick of reversing the words in the source sentence is one of the key technical contributions of this work

<img src="{{ site.img_path }}/Machine Learning/Sequence to Sequence Learning.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>