# Professor Forcing: A New Algorithm for Training Recurrent Networks

## 主要贡献

Teacher Forcing 算法通过将被观察到的序列值作为训练过程中的输入和使用该网络自己的提前一步的预测（one-step-ahead predictions）来进行多步采样（multi-step sampling）。我们在这里介绍 Professor Forcing 算法，其使用了对抗域适应（adversarial domain adaptation）来**促进训练网络的动态（dynamics）在训练网络时和从网络中进行多个时间步骤的采样时一样**。将 Professor Forcing 应用到了语言建模、在原始波形的声音合成、手写生成和图像生成上。我们的实验表明 Professor Forcing 可用作正则化器（regularizer），其能提升在字符级 Penn Treebank 和序列的 MNIST 上的测试似然（test likelihood）。我们还发现该模型可以定性地改进样本，尤其是当要进行大量时间步骤的采样时。这也得到了人类对样本质量的评估的支持。**讨论了 Professor Forcing 和 Scheduled Sampling 之间的权衡。我们产生了 T-SNE，表明 Professor Forcing 能成功使训练过程和采样过程中的网络动态更为相似。**

## 论文背景

By far the most popular training strategy is via the maximum likelihood principle. In the RNN literature, this form of training is also known as teacher forcing。参见这篇[Sequence to Sequence Learning with Neural Networks](https://arxiv.org/abs/1409.3215)

teacher forcing有Exposure Bias的问题，然后在之后有很多论文都试图解决这个问题，其中[Scheduled sampling for sequence prediction with recurrent neural networks]()就是其中一个，但是Scheduled sampling导致的问题就是biased estimator。但这确实也有改进之前teacher forcing的问题。

## 网络结构原理

这个网络收GAN的启发，

<img src="{{ site.img_path }}/Machine Learning/Professor_Forcing.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

首先G网路has single hidden layer of gated recurrent units (GRU),

然后D网络是bidirectional recurrent neural network。对于D网络MLP has three layers, each composing an affine transformation and a rectifier (ReLU). Finally, the output layer composes an affine transformation and a sigmoid that outputs D(b).


在实验中，因为D网络太好或者太差都不利于判别G网络。所以在这个实验中，D网络只有在75%-99%的时候才有用。优化器用的是Adam algorithm

## 算法流程和讲解

对于D网络来说，它的loss函数是

<img src="{{ site.img_path }}/Machine Learning/Professor_Forcing1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

对于maximize the likelihood网络，它的loss函数就是negative log-likelihood objective，如下：

<img src="{{ site.img_path }}/Machine Learning/Professor_Forcing2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

对于free-running model 它的loss函数是：

<img src="{{ site.img_path }}/Machine Learning/Professor_Forcing3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

free-running model的loss函数或者就是这样的

<img src="{{ site.img_path }}/Machine Learning/Professor_Forcing4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

In our experiments we either perform stochastic gradient steps on NLL+Cf or on NLL+Cf+Ct
to update the generative RNN parameters, while we always do gradient steps on C d to update the discriminator parameters.


## 实验过程和结果（）

## RELATED WORK加上discussion

在这篇论文中，说这样的方式就像一个regularizer，这种方式的话，收敛更加的快速，也更加的稳定。

## 文章解读和评价