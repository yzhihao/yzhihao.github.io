---
layout: post
title: reinforcement learning
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-4-2T00:00:00.000Z
categories:
  - Machine L2017-04-25 17-22-27屏幕截图earning
tags:
  - Machine Learning
  - AI
icon: fa-book
---


## 目录
**欢迎在文章下方评论，建议用电脑看**

* 目录
{:toc}

## reinforcement learning

## 强化学习是什么


强化学习是多学科多领域交叉的一个产物，它的**本质就是解决“decision making”问题，即学会自动进行决策**。在computer science领域体现为机器学习算法。在Engineering领域体现在决定the sequence of actions来得到最好的结果。在Neuroscience领域体现在理解人类大脑如何做出决策，主要的研究是reward system。在Psychology领域，研究动物如何做出决策，动物的行为是由什么导致的。在Economics领域体现在博弈论的研究。这**所有的问题最终都归结为一个问题，人为什么能够并且如何做出最优决策。是怎么样找到最优决策的**

## What makes reinforcement learning different from other machine learning paradigms?

1. There is no supervisor, only a reward signal(用**奖励来提升模型能力,而不是label**)
2. Feedback is delayed, not instantaneous（**做出一系列行为后最终反馈回来的reward signal**）
3. Time really matters (sequential, non i.i.d data)（时间是主要原因）
4. Agent’s actions affect the subsequent data it receives
5. 强化学习面对的**输入(状态)总是在变化且不独立，输入不像监督学习是独立同分布的**。而每当算法做出一个行为，它影响了下一次决策的输入。


##  Examples of Reinforcement Learning

1. Fly stunt manoeuvres in a helicopter（直升机特技表演）
2. Defeat the world champion at Backgammon（棋类等智力比赛）
3. Manage an investment portfolio（管理金融证卷）
4. Control a power station（控制电力站）
5. Make a humanoid robot walk（机器人行走）
6. Play many different Atari games better than humans（玩智力游戏）

### 强化学习组成



<img src="{{ site.img_path }}/Machine Learning/rl_baseknow1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/rl_baseknow2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Rewards
A reward Rt is a scalar feedback signal，which indicates how well agent is doing at step t.The agent’s job is to maximise cumulative reward and All goals can be described by the maximisation of expected cumulative reward in Reinforcement learning which is based on the reward hypothesis.

>简单来说，对于上面的例子，当模型做出正确的事就给奖励，做出不正确的就给出惩罚。

## Sequential Decision Making

Goal: select actions to maximise total future reward

Actions may have long term consequences and reward that it may be better to sacrifice immediate  to gain more
long-term reward may be delayed

Examples:

	A financial investment (may take months to mature)
	Refuelling a helicopter (might prevent a crash in several hours)
	Blocking opponent moves (might help winning chances many
	moves from now)

>在强化学习中，可以比作我们人和周围环境的交互，人在观察之后做出动作就会得到环境的相对应的反馈。而在强化学习中，我们就充当那个环境，我们给他一些数据给他观察，然后它做出动作，然后我们在制定一些反馈，随着时间的进行，模型就会越来越趋向于我们所想要的那样！

## History and State

The history is the sequence of **observations, actions, rewards（三个共同作用）**。

<img src="{{ site.img_path }}/Machine Learning/history.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

State is the information used to determine what happens next 。Formally, state is a function of the history:

<img src="{{ site.img_path }}/Machine Learning/formally.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Observable Environments

**MDP描述了强化学习的environment，且是fully Observable的**

### Fully Observable Environments:

Full observability: agent directly observes environment state ，i.e :Agent state = environment state = information state。Formally, this is a **Markov decision process (MDP)**

### Partially Observable Environments

Partial observability: agent indirectly observes environment,i.e:Now agent state != environment state

	A robot with camera vision isn’t told its absolute location
	A trading agent only observes current prices
	A poker playing agent only observes public cards

<img src="{{ site.img_path }}/Machine Learning/pomdp.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## An RL agent may include one or more of these components:

* Policy: agent’s behaviour function(行为函数)
* Value function: how good is each state and/or action（激励函数）
* Model: agent’s representation of the environment（模型函数，对环境的表现力）

### Policy

A policy is the agent’s behaviour It is a map from state to action, e.g.

Deterministic policy: a = π(s)（确定策略）
Stochastic policy: π(a|s) = P[A(t) = a|S（t） = s]（随机策略，由状态决定）

>**注意，policy是状态到动作的一组映射，他表示在一系列状态下采取的一系列相应的动作**

### state transition distribution

状态转换分布（state transition distribution）。对于每个属于集合S的状态s和每个属于集合A的动作a，如果我们在状态s中采取了动作s，那么我们就会转换到一个新的状态中，而状态转换分布就给出了我们会随机转换到哪个状态的概率分布。

<img src="{{ site.img_path }}/Machine Learning/zhuangtaizhuanhuan.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>也就是在某个状态采取某个动作之后的一些转换概率

### Value Function

Value function is a prediction of future reward Used to evaluate the goodness/badness of states And therefore to select between actions, e.g.

<img src="{{ site.img_path }}/Machine Learning/vaule_found.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Model

A model predicts what the environment will do next，P predicts the next state;R predicts the next (immediate) reward, e.g.

<img src="{{ site.img_path }}/Machine Learning/model.png" alt="header1"style="height:auto!important;width:auto%;max-width:1020px;"/>

## Categorizing RL agents

1:Value Based

- No Policy (Implicit)
- Value Function

2：Policy Based

- Policy
- No Value Function

3：Actor Critic

- Policy
- Value Function

4： Model Free

- Policy and/or Value Function
- No Model

5： Model Based

- Policy and/or Value Function
- Model


<img src="{{ site.img_path }}/Machine Learning/Taxonomy rl.png" alt="header1"style="height:auto!important;width:auto%;max-width:1020px;"/>

## 探索和利用

强化学习是一种试错(trial-and-error)的学习方式，一开始不清楚environment的工作方式，不清楚执行什么样的行为是对的，什么样是错的。因而agent需要从不断尝试的经验中发现一个好的policy，从而在这个过程中获取更多的reward。

在这样的学习过程中，就会有一个在Exploration和Exploitation之间的权衡，**前者是说会放弃一些已知的reward信息，而去尝试一些新的选择，**即在某种状态下，算法也许已经学习到选择什么action让reward比较大，但是并不能每次都做出同样的选择，也许另外一个没有尝试过的选择会让reward更大，即Exploration希望能够探索更多关于environment的信息。**而后者是指根据已知的信息最大化reward。**例如，在选择一个餐馆时，Exploitation会选择你最喜欢的餐馆，而Exploration会尝试选择一个新的餐馆。













