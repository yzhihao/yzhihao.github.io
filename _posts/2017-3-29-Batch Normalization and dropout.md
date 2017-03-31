---
layout: post
title: paper about batch normalization and dropout
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

# paper about batch normalization and dropout

# Batch Normalization

## Batch Normalization via mini-batch statistics


In the batch setting where each training step is based on the entire training set, we would use the whole set to nor malize activations. However, this is impractical when using stochastic optimization. Therefore, we make the sec-
ond simplification: since we use mini-batches in stochastic gradient training, each mini-batch produces estimates
of the mean and variance of each activation. This way, **the statistics used for normalization can fully participate in the gradient backpropagation. Note that the use of mini batches is enabled by computation of per-dimension vari- ances rather than joint covariances; in the joint case, regularization would be required since the mini-batch size is likely to be smaller than the number of activations being whitened, resulting in singular covariance matrices.**

<img src="{{ site.img_path }}/Machine Learning/Batch Normalizing1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## Training and Inference with Batch Normalized Networks

Using moving averages instead, we can track the accuracy of a model as it trains. Since the means and variances are fixed during inference, the normalization is simply a linear transform applied to each activation. It may further be composed with the scaling by γ and shift by β, to yield a single linear transform that replaces BN(x). Algorithm 2 summarizes the procedure for training batch-normalized networks.

<img src="{{ site.img_path }}/Machine Learning/Batch Normalizing2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Batch Normalization enables higher learning rate
Batch Normalization helps address these issues. **By normalizing activations throughout the network, it prevents small changes to the parameters from amplifying into larger and suboptimal changes in activations in gradients**; for instance, it prevents the training from getting stuck in the saturated regimes of nonlinearities.




# dropout

## 阻止Overfitting

**(NO.1)Overfitting can be reduced by using “dropout” to prevent complex co-adaptations on the training data**. On each presentation of each training case, each hidden unit is randomly omitted from the network with a probability of 0.5, so a hidden unit cannot rely on other hidden units being present. **(NO.2)Another way to view the dropout procedure is as a very efficient way of perform-ing model averaging with neural networks. A good way to reduce the error on the test set is to average the predictions produced by a very large number of different networks.** The standard 1way to do this is to train many separate networks and then to apply each of these networks to the test data, but this is computationally expensive during both training and testing. Random dropout makes it possible to train a huge number of different networks in a reasonable time. There is almost certainly a different network for each presentation of each training case but all of these networks share the same weights for the hidden units that are present.


## the Motivation of dropout

**(NO.1)A motivation for dropout comes from a theory of the role of sex in evolution,**Sexual reproduction involves taking half the genes of one parent and half of the other, adding a very small amount of random mutation, and combining them to produce an offspring. The asexual alternative is to create an offspring with a slightly mutated copy of the parent’s genes. It seems plausible that asexual reproduction should be a better way to optimize individual fitness because a good set of genes that have come to work well together can be passed on directly to the offspring. On the other hand, sexual reproduction is likely to break up these co-adapted sets of genes, especially if these sets are large and, intuitively, this should decrease the fitness of organisms that have already evolved complicated co- adaptations. However, sexual reproduction is the way most advanced organisms evolved.

One possible explanation for the superiority of sexual reproduction is that, over the long term, the criterion for natural selection may not be individual fitness but rather mix-ability of genes. The ability of a set of genes to be able to work well with another random set of genes makes them more robust. Since a gene cannot rely on a large set of partners to be present at all times, it must learn to do something useful on its own or in collaboration with a small number of other genes. According to this theory, the role of sexual reproduction is not just to allow useful new genes to spread throughout the population, but also to facilitate this process by reducing complex co-adaptations that would reduce the chance of a new gene improving the fitness of an individual. Similarly, each hidden unit in a neural network trained with dropout must learn to work with a randomly chosen sample of other units. This should make each hidden unit more robust and drive it towards creating useful features on its own without relying on other hidden units to correct its mistakes. However, the hidden units within a layer will still learn to do different things from each other. One might imagine that the net would become robust against dropout by making many copies of each hidden unit, but this is a poor solution for exactly the same reason as replica codes
are a poor way to deal with a noisy channel

**(NO.2)A closely related, but slightly different motivation for dropout comes from thinking about successful conspiracies**. Ten conspiracies each involving five people is probably a better way to create havoc than one big conspiracy that requires fifty people to all play their parts correctly. If conditions do not change and there is plenty of time for rehearsal, a big conspiracy can work well, but with non-stationary conditions, the smaller the conspiracy the greater its chance of still working. Complex co-adaptations can be trained to work well on a training set, but on novel test data they are far more likely to fail than multiple simpler co-adaptations that achieve the same thing.
