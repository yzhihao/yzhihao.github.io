---
layout: post
title: 《Deep Learning》-representation learning
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-26T00:00:00.000Z
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

## representation learning

##  representation learning

We can think of feedforward networks trained by supervised learning as performing a kind of representation learning. Specifically, the last layer of the network is typically a linear classifier, such as a softmax regression classifier. The rest  of the network learns to provide a representation to this classifier. Training with a supervised criterion naturally leads to the representation at every hidden layer (but more so near the top hidden layer) taking on properties that make the classification task easier. For example, classes that were not linearly separable in the input features may become linearly separable in the last hidden layer. In principle, the last layer could be another kind of model, such as a nearest neighbor classifier (Salakhutdinov and Hinton , 2007a ). The features in the penultimate layer should learn different properties depending on the type of the last layer.


### why humans can learning well by small set of labeled examples
Humans and animals are able to learn from very few labeled examples. We do not yet know how this is possible. Many factors could explain improved human performance—for example, the brain may use very large ensembles of classifiers or Bayesian inference techniques. One popular hypothesis is that the brain is able  to leverage unsupervised or semi-supervised learning. There are many ways to leverage unlabeled data. In this chapter, we focus on the hypothesis that the  unlabeled data can be used to learn a good representation.

## Greedy Layer-Wise Unsupervised Pretraining

### what:
Unsupervised learning played a key historical role in the revival of deep neural networks, allowing for the first time to train a deep supervised network without requiring architectural specializations like convolution or recurrence. We call this procedure unsupervised pretraining, or more precisely, greedy layer-wise unsupervised pretraining.

### the advantage of  Unsupervised Pretraining

Unsupervised pretraining combines two different ideas. First, it makes use of the idea that the choice of initial parameters for a deep neural network can have a significant **regularizing effect on the model (and, to a lesser extent, that it can improve optimization)**. Second, it makes use of the more general idea that learning about the input distribution can **help to learn about the mapping from inputs to outputs.**

### the disadvantage of unsupervised Pretraining
Compared to other ways of incorporating this belief by using unsupervised learning, unsupervised pretraining has the disadvantage that it **operates with two separate training phases.**

1. One reason that these two training phases are disadvantageous is that there is not a single hyperparameter that predictably reduces or increases the strength of the regularization arising from the unsupervised pretraining.
2. Another disadvantage of having two separate training phases is that each phase has its own hyperparameters. The performance of the second phase usually cannot be predicted during the first phase, so there is a long delay between proposing hyperparameters for the first phase and being able to update them using feedback from the second phase


### today,deep learning and unsupervised pretraining

Today, unsupervised pretraining has been largely abandoned, except in the
field of natural language processing.we can regard  word2vec which use widely in netural language processing as the method of unsupervised pretraining
**for the reason as follow:**

These same techniques  outperform unsupervised pretraining on mediumsized datasets such as CIFAR-10 and MNIST, which have roughly 5,000 labeled examples per class. On extremely small datasets, such as the alternative splicing dataset, Bayesian methods outperform methods based on unsupervised pretraining (Srivastava , 2013 ). For these reasons, the popularity of unsupervised pretraining has declined.