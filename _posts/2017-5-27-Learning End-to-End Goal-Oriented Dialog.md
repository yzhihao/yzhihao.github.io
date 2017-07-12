---
layout: post
title:  Learning End-to-End Goal-Oriented Dialog
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-5-27T00:00:00.000Z
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

# Learning End-to-End Goal-Oriented Dialog

## 主要贡献

这篇论文主要是讲解了End-to-End 模型（基于Memory）在Goal-Oriented Dialog system的的优缺点。并用 restaurant reservation来进行说明。 提出（1）favors reproducibility and comparisons, and （2） is lightweight and easy to use的模型标准。在传统的每一小部分（具体如下图）都用上把bAbI tasks use that to gauge the strengths and weaknesses of current end-to-end systems with no domain knowledge.而不是改进模型。

<img src="{{ site.img_path }}/Machine Learning/End_Goal_Oriented_Dialog.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

**也就是说：这个模型其实就是在验证Memory network 在dialogue systems 上也是有用的!**



## 论文背景



## 网络结构原理

<img src="{{ site.img_path }}/Machine Learning/Memory_network.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

上图是Memory network 的一个架构图。在QA方面，这个结构是比较有用的，体现出了其不错的性质。

<img src="{{ site.img_path }}/Machine Learning/Memory_network1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## 算法流程和讲解


## 实验过程和结果（）

对话数据：文中所用数据并非全部为真实数据，有5个task都是simulated conversation. simulation的方法是，用43种pattern生成user utterance，用20种pattern生成bot utterance。（显然，和真实场景比还是太少了。。。）另一组真实task数据是从Dialog State Tracking Challenge的订餐数据中转过来的（并没有用数据中标注的dialog state）。
Database: 每个restaurant的property包括：{口味，地点，价格区间，桌子大小（int，不是list），地址，电话，打分}

## RELATED WORK加上discussion

由于之前或者现在的模型大多是分成小部分的，也就是说其模型数据也是基于之前的模型的，很少可以直接用于end to end 训练的。

## 文章解读和评价