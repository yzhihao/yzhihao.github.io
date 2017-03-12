---
layout: post
title: paper-Optimization
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-11T00:00:00.000Z
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

# Optimization

## Momentum and Nesterov’s Accelerated Gradient

**论文原文：**

<img src="{{ site.img_path }}/Machine Learning/momentum1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>
<img src="{{ site.img_path }}/Machine Learning/momentum2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>
<img src="{{ site.img_path }}/Machine Learning/momentum3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>
<img src="{{ site.img_path }}/Machine Learning/momentum4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

上面截取了一大段，看起来有些突兀，但我觉的这些都是非常重要的。这里说明了普通动量更新和Nesterov动量更新的主要思想。

## adam

<img src="{{ site.img_path }}/Machine Learning/adam1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>算法的整体流程如上图，它看起来像是RMSProp的动量版。简化的代码是下面这样。而关于RMSProp，请看这篇博文。

<img src="{{ site.img_path }}/Machine Learning/adam2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

>以上就是这个算法的详细解释，主要在讲的就是怎么自适应学习率的变化

下面就是这个算法的详细的证明过程：

<img src="{{ site.img_path }}/Machine Learning/adam3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/adam4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>
