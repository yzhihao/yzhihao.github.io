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

## 探索的必要性：

由于不知道智能体与环境交互的模型，蒙特卡罗方法是利用经验平均来估计值函数。能否得到正确的值函数，取决于经验。**如何获得充足的经验是无模型强化学习的核心所在。**

在动态规划方法中，为了保证值函数的收敛性，算法会对状态空间中的状态进行逐个扫描。无模型的方法充分评估策略值函数的前提是每个状态都能被访问到。因此，在蒙特卡洛方法中必须采用一定的方法保证每个状态都能被访问到。其中一种方法是探索性初始化。

## 怎么理解Prediction

在我的理解看来，Prediction就是对策略的评估，然后要进行迭代评估，原因是agent在执行一次一个策略得到一个episode来评估是不能有效代表这个策略的期望价值的，只有多次迭代才能找到价值期望。同时有证明TD和MC方法都是可以收敛的。


## Monte-Carlo Reinforcement Learning

1. MC methods learn directly from episodes of experience(从episodes获得信息)
2. MC is model-free: no knowledge of MDP transitions / rewards（没有特定的转换函数和价值函数）
3. MC learns from complete episodes: no bootstrapping
4. MC uses the simplest possible idea: value = mean return（不是return的期望，而是均值）
5. Caveat: can only apply MC to episodic MDPs
	All episodes must terminate（一定要执行到终止状态）




<img src="{{ site.img_path }}/Machine Learning/Monte-Carlo1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


>最后说明，Prediction是一种在某种确定的策略下求值的方式，在[课件中的21点的例子中](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Teaching_files/MC-TD.pdf)，多次迭代才能求出值的原因就是一次的episode并不能求出值，而是多次的episode才能找出在这种策略下，这些状态的值。或者说，在求值的过程中，其实我们是在寻找那个状态到价值的那个参数，但仅仅一次或几次的episode，不能找到那个合适的参数映射，只有数据量很大的时候才能，当然是存在收敛的时候的！

## Temporal-Difference Learning

<img src="{{ site.img_path }}/Machine Learning/Monte-Carlo2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Temporal-Difference Learning 和 Monte-Carlo Reinforcement Learning



我的理解是，**一个是即时反馈，一个是完整的过程之后才反馈，**视频中有一个撞车的例子，讲如果在开着车太快而差点撞上（没有撞上）迎面来的车的话，Temporal-Difference Learning会负反馈，就像告诉你不要开太快避免撞车，而Monte-Carlo Reinforcement Learning是不会有负面反馈的，原因是在本质上整个过程中没有撞车！

 Temporal-Difference Learning可以找到正真的价值函数，Monte-Carlo Reinforcement Learning得到也是正真的价值函数，**根据大数定律**！


<img src="{{ site.img_path }}/Machine Learning/Temporal_ca1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Temporal_ca2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## mp（动态规划），mc，td的区别

<img src="{{ site.img_path }}/Machine Learning/mp_mc_td.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>





