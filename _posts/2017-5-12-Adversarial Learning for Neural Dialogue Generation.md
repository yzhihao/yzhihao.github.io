---
layout: post
title:  Adversarial Learning for Neural Dialogue Generation
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-5-13T00:00:00.000Z
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

# Adversarial Learning for Neural Dialogue Generation

## 主要贡献

把GAN放在对话系统上，有有较好的提升。

## 论文背景

之前的对话模型的问题如下：over-simplified，responses are highly dull and generic repetitive and short-sighted，而要解决这些问题，首先是要回答下面的几个问题：what are the crucial aspects that define an ideal conversation, how can we quantitatively measure them, and how can we incorporate them into a machine learning system?

之前有做过[Deep reinforcement learning for dialogue generation](https://arxiv.org/abs/1606.01541)提出过三个标准来衡量好坏，但问题在于，这样的方法manually defined reward functions can’t possibly cover all crucial aspects and can lead to suboptimal generated utterances，简单来说就是不能cover所有主要层次导致的次优等生成对话。

好的对话系统应该是人类无法识别是人类还是机器的，这个也是第一篇人工智能论文中提到的[Turing test中文版](http://www.worldofai.com/bbs/simple/?t59.html)，所以借鉴GAN的博弈的思想，也就是让真实的和机器生成的放在一起来对抗博弈。

实验证明是可以做的比普通的seq2seq的结果要好！



## 网络结构原理


因为本文是用于开放式对话生成，所以文中的生成器采用seq2seq模型 (而非普通的LSTM模型)。 判别器则采用了hierarchical encoder (而非CNN)。

## 算法流程和讲解

<img src="{{ site.img_path }}/Machine Learning/Adversarial_Dialogue.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

总体来说，本文的思路和SeqGAN是大体一样的，但是有几处不同和改进的地方：

采取了两种方法为完全生成或者部分生成的序列计算reward。除了 Monte Carlo search (与SeqGAN相似) 方法，本文新提出了一个能对部分生成的序列进行reward计算的方法。早期产生的部分(partially)序列会出现在许多的训练数据中，比如生成的第一个token y_1将会出现在所有的部分生成 (partially generated) 的序列里。这样使用所有完全 (fully) 和部分 (partially) 解码的序列来训练判别器会造成overfitting。所以本文借鉴阿尔法狗的思路，采用仅仅分别从正(positive)序列 y+ 和负(negative)序列y-的每个子序列中随机地选取一个 sample来训练判别器D。这个方法比Monte Carlo search更快速，但是也会使得判别器更弱，更不准确。

在训练G的时候同时还用了Teacher-Forcing（MLE）的方法，这点和后面的MaliGAN有异曲同工之处。为什么要这样做的原因是在对抗性训练的时候，G不会直接接触到真实的目标序列（gold-standard target sequence），当G生成了质量很差的序列的时候（生成质量很好的序列其实相当困难），而D又训练得很好，G就会通过得到的Reward知道自己生成的序列很糟糕，但却又不知道怎么令自己生成更好的序列， 这样就会导致训练崩溃，也就是会随机的sample，很不稳定（**这也正是seqGAN中的问题**）。所以借鉴这篇文章[Professor Forcing: A New Algorithm for Training Recurrent Networks](http://papers.nips.cc/paper/6099-professor-forcing-a-new-algorithm-for-training-recurrent-networks.pdf)，通过对抗性训练更新G的参数之后，还通过传统的MLE就是用真实的序列来更新G的参数。类似于有一个“老师”来纠正G训练过程中出现的偏差，类似于一个regularizer。

### adversarial evaluation

作者出的对抗评估，借鉴的是第一次发表的在[Generating sentences from a continuous space]()和之后的一个调查[Adversarial evaluation of dialogue models. In NIPS 2016 Work shop on Adversarial Training.]()。

需要注意的是这个模型在train和test的时候有有对抗评估，在train的时候很明显，但是在test的时候是借助在外的sample，如果不能判别说明这个模型只有50%的正确率。


## 实验过程和结果（）



部分实验结果：
	
<img src="{{ site.img_path }}/Machine Learning/Adversarial_Dialogue1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## RELATED WORK加上discussion

这篇文章是[ Deep reinforcement learning for dialogue generation]()的一个扩展。在传统的[ A network-based end-to-end trainable task-oriented dialogue system.]()做了改进。RL在对话系统中[Continuously Learning Neural Dialogue Management]()是首先结合对话系统的。[Online Sequence-to-Sequence Active Learning for Open-Domain Dialogue Generation]()这篇是一篇在线对话系统训练的模型。

##　文章解读和评价


值得思考的地方：文中只尝试用判别器的结果作为reward, 结合 原文作者之前在dialogue system文中提出的其他reward机制(e.g., mutual information)会不会提高效果？








