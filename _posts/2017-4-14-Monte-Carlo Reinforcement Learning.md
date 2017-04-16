---
layout: post
title: model free-Prediction
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-4-15T00:00:00.000Z
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

## unknown MDP

**environment是未知的，不清楚做出了某个action之后会变到哪一个state也不知道这个action好还是不好，**也就是说不清楚environment体现的model是什么，在这种情况下需要解决的prediction和control问题就是Model-free prediction和Model-free control。显然这种新的问题只能从与environment的交互得到的experience中获取信息。

## episode

将从某个起始状态开始执行到终止状态的一次遍历**S1,A1,R2,…,Sk(状态，动作，回报)称为episode**。已知很多的episodes。

## Monte-Carlo Reinforcement Learning

1. MC methods learn directly from episodes of experience(从episodes获得信息)
2. MC is model-free: no knowledge of MDP transitions / rewards（没有特定的转换函数和价值函数）
3. MC learns from complete episodes: no bootstrapping
4. MC uses the simplest possible idea: value = mean return（不是return的期望，而是均值）
5. Caveat: can only apply MC to episodic MDPs
	All episodes must terminate（一定要执行到终止状态）




<img src="{{ site.img_path }}/Machine Learning/Monte-Carlo1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Temporal-Difference Learning

<img src="{{ site.img_path }}/Machine Learning/Monte-Carlo2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Temporal-Difference Learning 和 Monte-Carlo Reinforcement Learning



我的理解是，**一个是即时反馈，一个是完整的过程之后才反馈，**视频中有一个撞车的例子，讲如果在开着车太快而差点撞上（没有撞上）迎面来的车的话，Temporal-Difference Learning会负反馈，就像告诉你不要开太快避免撞车，而Monte-Carlo Reinforcement Learning是不会有负面反馈的，原因是在本质上整个过程中没有撞车！

 Temporal-Difference Learning可以找到正真的价值函数，Monte-Carlo Reinforcement Learning得到也是正真的价值函数，**根据大数定律**！


<img src="{{ site.img_path }}/Machine Learning/Temporal_ca1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Temporal_ca2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>




