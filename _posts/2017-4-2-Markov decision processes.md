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


# Markov decision processes

Markov decision processes formally describe an environment for reinforcement learning Where the environment is fully observable.i.e. The current state completely characterises the process

Almost all RL problems can be formalised as MDPs, e.g.

	Optimal control primarily deals with continuous MDPs
	Partially observable problems can be converted into MDPs
	Bandits are MDPs with one state

## Markov Property

`“The future is independent of the past given the present”`

<img src="{{ site.img_path }}/Machine Learning/Markov Property.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

The state captures all relevant information from the history，Once the state is known, the history may be thrown away。i.e. The state is a sufficient statistic of the future

## State Transition Matrix

For a Markov state s and successor state s‘, the state transition probability is defined by

<img src="{{ site.img_path }}/Machine Learning/successor state s.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

State transition matrix P defines transition probabilities from all
states s to all successor states s'：

<img src="{{ site.img_path }}/Machine Learning/successor states s1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

where each row of the matrix sums to 1

A Markov process is a memoryless random process, i.e. a sequence of random states S1, S2, ... with the Markov property

A Markov Process (or Markov Chain) is a tuple <S,P> where S is a (finite) set of states and P is a state transition probability matrix,
P（ss'） = P [S（t+1) = s’| S（t）= s]

## Markov Reward Process

>A Markov reward process is a Markov chain with values

<img src="{{ site.img_path }}/Machine Learning/Markov-values.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Return
<img src="{{ site.img_path }}/Machine Learning/Return-mdp.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

The discount γ ∈ [0, 1] is the present value of future rewards
The value of receiving reward R after k + 1 time-steps is γ^kR.
This values immediate reward above delayed reward.

- γ close to 0 leads to ”myopic” evaluation
- γ close to 1 leads to ”far-sighted” evaluation

### Most Markov reward and decision processes are discounted. Why?

- Mathematically convenient to discount rewards
- Avoids infinite returns in cyclic Markov processes
- Uncertainty about the future may not be fully represented
- If the reward is financial, immediate rewards may earn more interest than delayed rewards
- Animal/human behaviour shows preference for immediate reward()
- It is sometimes possible to use undiscounted Markov reward processes (i.e. γ = 1), e.g. if all sequences terminate.

## Value Function

The value function v(s) gives the long-term value of state s

<img src="{{ site.img_path }}/Machine Learning/value function-mdp.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>注意，这里是所有return的期望值，也就是平均值！


## Bellman Equation

>有这个公式只是为了更加的方便计算v(s)，而不是用上面的定义式

The value function can be decomposed into two parts:

1. immediate reward Rt+1
2. discounted value of successor state γv(S（t+1）)


<img src="{{ site.img_path }}/Machine Learning/Bellman Equation.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Bellman Equation2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

可以得出其计算公式

### Bellman Equation in Matrix Form

The Bellman equation can be expressed concisely using matrices,

v = R + γPv

where v is a column vector with one entry per state

<img src="{{ site.img_path }}/Machine Learning/per state1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

### Solving the Bellman Equation

The Bellman equation is a linear equation so i t can be solved directly:

<img src="{{ site.img_path }}/Machine Learning/Solving the Bellman Equation.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

Computational complexity is O(n^3) for n states.Direct solution only possible for small MRPs for the complexity is relly heigh

There are many iterative methods for large MRPs, e.g.

	Dynamic programming
	Monte-Carlo evaluation
	Temporal-Difference learning

# Markov Decision Process

>A Markov decision process (MDP) is a Markov reward process with decisions. It is an environment in which all states are Markov

<img src="{{ site.img_path }}/Machine Learning/Markov Decision Process.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Policies

<img src="{{ site.img_path }}/Machine Learning/Policies1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

A policy fully defines the behaviour of an agent **MDP policies depend on the current state (not the history)**

i.e. Policies are stationary (time-independent),
A（t） ∼ π(·|S（t）), ∀（t） > 0

<img src="{{ site.img_path }}/Machine Learning/Policies3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Value Function in 

<img src="{{ site.img_path }}/Machine Learning/Value Function3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Bellman Expectation Equation

The state-value function can again be decomposed into immediate reward plus discounted value of successor state,

<img src="{{ site.img_path }}/Machine Learning/Bellman Expectation Equation2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

The action-value function can similarly be decomposed,

<img src="{{ site.img_path }}/Machine Learning/Bellman Expectation Equation3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>注意这里的q函数指的是在特点的行为下的一组激励值


<img src="{{ site.img_path }}/Machine Learning/Bellman Expectation Equation for Vπ.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Bellman Expectation Equation for Qπ.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Bellman Expectation Equation for vπ (2).png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/Bellman Expectation Equation for qπ (2).png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Bellman Expectation Equation (Matrix Form)

The Bellman expectation equation can be expressed concisely using the induced MRP,

<img src="{{ site.img_path }}/Machine Learning/Expectation Equation (Matrix Form)1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

with direct solution：

<img src="{{ site.img_path }}/Machine Learning/Expectation Equation (Matrix Form)2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Optimal Value Function

<img src="{{ site.img_path }}/Machine Learning/Optimal Value Function1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

The optimal value function specifies the best possible performance in the MDP.An MDP is “solved” when we know the optimal value fn.

## Bellman Optimality Equation for v∗，Q∗
The optimal value functions are recursively related by the Bellman optimality equations:


<img src="{{ site.img_path }}/Machine Learning/Optimality Equation for v1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/Optimality Optimality Equation for v2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/Optimality Equation for Q∗3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/Optimality Equation for Q∗31.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Solving the Bellman Optimality Equation

Bellman Optimality Equation is non-linear，No closed form solution (in general)

Many iterative solution methods：

- Value Iteration
- Policy Iteration
- Q-learning
- Sarsa


## POMDPs


A Partially Observable Markov Decision Process is an MDP with hidden states. It is a hidden Markov model with actions.

<img src="{{ site.img_path }}/Machine Learning/POMDPs.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>





















