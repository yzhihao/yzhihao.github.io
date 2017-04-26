---
layout: post
title: Markov decision processes
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-4-2T00:00:00.000Z
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



# 基础概念

状态集合S: **有限状态state集合，s表示某个特定状态**

动作集合A: **有限动作action集合，a表示某个特定动作**

### state transition distribution(状态转换分布)

状态转换分布（state transition distribution）。对于每个属于集合S的状态s和每个属于集合A的动作a，如果我们在状态s中采取了动作s，那么我们就会转换到一个新的状态中，而状态转换分布就给出了我们会随机转换到哪个状态的概率分布。

<img src="{{ site.img_path }}/Machine Learning/zhuangtaizhuanhuan.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>
分布（state transition distribution）。对于每个属于集合S的状态s和每个属于集合A的动作a，如果我们在状态s中采取了动作s，那么我们就会转换到一个新的状态中，而状态转换分布就给出了我们会随机转换到哪个状态的概率分布。

>也就是在某个状态采取某个动作之后的一些转换概率


<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

# Markov Process

**从MP开始到MRP再到MDP，了解值函数的具体概念与reward有什么联系**

**MDP描述了强化学习的environment，且是fully Observable的**

## 马尔可夫链/过程(Markov Chain/Process)

先说说马尔可夫性质：`“The future is independent of the past given the present”`

<img src="{{ site.img_path }}/Machine Learning/Markov Property.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

The state captures all relevant information from the history，Once the state is known, the history may be thrown away。i.e. The state is a sufficient statistic of the future

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

**课件原文：**

For a Markov state s and successor state s‘, the state transition probability is defined by

<img src="{{ site.img_path }}/Machine Learning/successor state s.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

State transition matrix P defines transition probabilities from all
states s to all successor states s'：

<img src="{{ site.img_path }}/Machine Learning/successor states s1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

where each row of the matrix sums to 1

A Markov process is a memoryless random process, i.e. a sequence of random states S1, S2, ... with the Markov property

A Markov Process (or Markov Chain) is a tuple <S,P> where S is a (finite) set of states and P is a state transition probability matrix,
P（ss'） = P [S（t+1) = s’| S（t）= s]


## 马尔可夫奖赏过程(Markov Reward Process)

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes6.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## 马尔可夫决策过程(Markov Decision Process)

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes7.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/26Markov_decision_processes8.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>






















