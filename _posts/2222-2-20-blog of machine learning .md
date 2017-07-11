---
layout: post
title: 顶！总目录--机器学习博文（笔记）
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2222-2-22T00:00:00.000Z
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


# 总目录--机器学习博文（笔记）

经过挺久的输出，终于基本上写好了这个系列，斗胆称为博文，其实还是笔记占大多数的，当然，还有很多的不对的地方，还有很多事很难理解的地方，也有很多事我也不理解的地方，见谅，之后有什么新的见解和认识，我都会进行相应的**添加或者修改**，见谅！还有就是这个系列是没有代码的，全理论，但机器学习是讲究理论和实践结合的，对于我，也是很大程度上是工程能力不够的，再补吧。。。。



从上学期11月中旬吧，入机器学习的坑以来，一直是在学习，很多时候是很骄傲的，因为这个方向够高大上，一直都是这样想的。虽然现实可能并不是这样，人工智能也是经过多次大起大落，在2012年（不准确）以来由于深度学习的出现，而又一次的大火，不知道这次会火多久，希望是一直下去，但不管它火多久，反正内心那学习的火要一直火就行了。

下面介绍一下机器学习吧！先上一个图：

<img src="{{ site.img_path }}/Machine Learning/the title.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

最简单的理解，就是看上面的图了，在我们常说的机器学习是AI中的一个分支，而现在非常火的深度学习是机器学习的分支，其实深度学习就是深度神经网络，只不过由于end-to-end（end-to-end就是构建一个整体的系统，输入是最原始素材（比如图像分类就是原始图像），中间经过系统自身的处理（卷积和池化等操作），最后是分类任务（分类器）。这样的系统从头至尾不受人的干预，当然卷积等操作中的参数还是hyperparameter，这个还暂时没办法自行学习。）的思想，不用经过很多如降维之类预处理了，其实还是神经网络。

关于学习机器学习，我的看法是，最重要要的是**英语**和数学基础，为什么要标注英语为重点，因为结合现在很多学机器学习的人的英语都不好，但是如果想发展的更快，想直接读那些paper，讲真这个领域的牛人还是外国人较多的,想看他们的教学或者blog的话，必须英语好，现在我也是烂啃英语之中。。。对于数学的话，不用说了，各种模型，下面的笔记中有！

# 目录

## 基础
(1):[机器学习有关的数学基础知识-线代](https://yzhihao.github.io/machine%20learning/2017/02/13/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%9C%89%E5%85%B3%E7%9A%84%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86-%E7%BA%BF%E4%BB%A3.html)

(2):[机器学习有关的数学基础知识-概率](https://yzhihao.github.io/machine%20learning/2017/02/14/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%9C%89%E5%85%B3%E7%9A%84%E6%95%B0%E5%AD%A6%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86-%E6%A6%82%E7%8E%87.html)

>此外，机器学习中也用了挺多高数导数的知识，比如BP算法等，在这里就不Generative Adversarial networks详细介绍了，等讲到相应的算法会进行讲述。

(3):[数据处理，特征工程](https://yzhihao.github.io/machine%20learning/2017/01/18/%E7%89%B9%E5%BE%81%E5%B7%A5%E7%A8%8B-%E6%A8%A1%E5%9E%8B%E8%AF%84%E4%BB%B7-%E4%B8%80.html)

(4):[模型选择与评价，降维](https://yzhihao.github.io/machine%20learning/2017/02/11/%E7%89%B9%E5%BE%81%E5%B7%A5%E7%A8%8B-%E6%A8%A1%E5%9E%8B%E8%AF%84%E4%BB%B7-%E4%BA%8C.html)

(4):[机器学习基础概念](https://yzhihao.github.io/machine%20learning/2017/01/19/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5.html)

## 有监督/无监督学习，关联分析等

(1):[线性回归](https://yzhihao.github.io/machine%20learning/2017/02/16/%E5%9B%9E%E5%BD%92-%E7%AE%80%E5%8D%95%E5%88%86%E7%B1%BB.html)

(2):[一般线性模型](https://yzhihao.github.io/machine%20learning/2017/02/17/%E4%B8%80%E8%88%AC%E7%BA%BF%E6%80%A7%E6%A8%A1%E5%9E%8B.html)

(3):[决策树](https://yzhihao.github.io/machine%20learning/2017/02/18/%E5%86%B3%E7%AD%96%E6%A0%91.html)

(4):[支持向量机（SVM）](https://yzhihao.github.io/machine%20learning/2017/03/25/%E6%94%AF%E6%8C%81%E5%90%91%E9%87%8F%E6%9C%BA.html)

(5):[生成，判别模型-贝叶斯分类](https://yzhihao.github.io/machine%20learning/2017/03/12/%E7%94%9F%E6%88%90-%E5%88%A4%E5%88%AB%E6%A8%A1%E5%9E%8B-%E8%B4%9D%E5%8F%B6%E6%96%AF%E5%88%86%E7%B1%BB.html)

(6):[排序算法-ListNet原理](https://yzhihao.github.io/machine%20learning/2017/02/22/ListNet%E5%8E%9F%E7%90%86.html)

(7):[集成学习(一)--Boosting](https://yzhihao.github.io/machine%20learning/2017/02/11/%E9%9B%86%E6%88%90%E5%AD%A6%E4%B9%A0_Boosting.html)

(8):[集成学习(二)--Bagging](https://yzhihao.github.io/machine%20learning/2017/02/11/%E9%9B%86%E6%88%90%E5%AD%A6%E4%B9%A0_Bagging.html)

(9):[关联分析（一）Apriori](https://yzhihao.github.io/machine%20learning/2017/02/23/%E5%85%B3%E8%81%94%E5%88%86%E6%9E%90apriori.html)

(10):[关联分析(二) FP-growth算法](https://yzhihao.github.io/machine%20learning/2017/02/24/%E5%85%B3%E8%81%94%E5%88%86%E6%9E%90-FP-growth%E7%AE%97%E6%B3%95.html)

(11):[EM算法](https://yzhihao.github.io/machine%20learning/2017/02/21/EM%E7%AE%97%E6%B3%95.html)

(12):[简单聚类](https://yzhihao.github.io/machine%20learning/2017/02/25/%E7%AE%80%E5%8D%95%E8%81%9A%E7%B1%BB.html)

## 强化学习

(1):[DQN](https://yzhihao.github.io/machine%20learning/2017/04/26/DQN.html)

(2):[Policy Gradient](https://yzhihao.github.io/machine%20learning/2017/04/26/Policy-Gradient.html)

(3):[Actor critic](https://yzhihao.github.io/machine%20learning/2017/04/27/Actor-Critic.html)

(4):[蒙特卡洛树搜索 mcts](https://yzhihao.github.io/2017/04/28/%E8%92%99%E7%89%B9%E5%8D%A1%E6%B4%9B%E6%A0%91%E6%90%9C%E7%B4%A2-MCTS.html)


### UCL Course on RL

一个关于RL的课！应该说很练内功，很值得一看。附上[链接](http://www0.cs.ucl.ac.uk/staff/d.silver/web/Home.html)

(1):[introduction for reinforcement learning ](https://yzhihao.github.io/machine%20learning/2017/04/02/reinforcement-learning.html)

(2):[Markov decision processes](https://yzhihao.github.io/machine%20learning/2017/04/02/Markov-decision-processes.html)

(3):[Planning by dynamic programming](https://yzhihao.github.io/2017/04/13/Planning-by-Dynamic-Programming.html)

(4):[model free-Prediction](https://yzhihao.github.io/machine%20learning/2017/04/15/Monte-Carlo-Reinforcement-Learning.html)

(5):[Model free-Control](https://yzhihao.github.io/machine%20learning/2017/04/15/model-free-Control.html)

(6):[Value Function Approximation](https://yzhihao.github.io/machine%20learning/2017/04/15/Value-Function-Approximation.html)

(7):[Policy Gradient](https://yzhihao.github.io/machine%20learning/2017/04/21/Policy-Gradient.html)

(8):[Integrating Learning and Planning](https://yzhihao.github.io/machine%20learning/2017/04/22/Integrating-Learning-and-Planning.html)

(9):[ Exploration and Exploitation](https://yzhihao.github.io/machine%20learning/2017/04/25/Exploration-and-Exploitation.html)

## 深度学习

(1):[神经网络-基本概念](https://yzhihao.github.io/2017/03/13/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C-%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5.html)

(2):[神经网络-BP，更新参数策略](https://yzhihao.github.io/machine%20learning/2017/03/12/%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C-BP%E5%92%8C%E5%AF%BB%E6%89%BE%E6%9C%80%E4%BC%98%E5%8C%96.html)

(3):[convolution neural network](https://yzhihao.github.io/machine%20learning/2017/03/18/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.html)

(4):[word2woc](https://yzhihao.github.io/machine%20learning/2017/03/12/Word2Vec.html)

(5):[recurrent neural network](https://yzhihao.github.io/machine%20learning/2017/03/12/%E5%BE%AA%E7%8E%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C.html)

(6):[Generative Adversarial networks](https://yzhihao.github.io/machine%20learning/2017/03/14/%E7%94%9F%E6%88%90%E5%AF%B9%E6%8A%97%E7%BD%91%E7%BB%9C.html)

(7):[Wasserstein GAN](https://yzhihao.github.io/machine%20learning/2017/04/20/Wasserstein-GAN.html)


## 论文笔记

(1):[paper-ImageNet](https://yzhihao.github.io/machine%20learning/2017/02/24/paper-ImageNet.html)

(2):[paper-Optimization](https://yzhihao.github.io/machine%20learning/2017/03/11/paper-Optimization.html)

(3):[paper-GAN](https://yzhihao.github.io/machine%20learning/2017/02/24/paper-GAN.html)

(4):[paper about batch normalization and dropout](https://yzhihao.github.io/machine%20learning/2017/03/29/Batch-Normalization-and-dropout.html)

(5):[Paper about Very Deep Convolutional Networks for Text Classification](https://yzhihao.github.io/machine%20learning/2017/03/31/paper-about-Very-Deep-Convolutional-Networks.html)

(6):[paper about Sequence to Sequence Learning with Neural Networks](https://yzhihao.github.io/machine%20learning/2017/03/29/Sequence-to-Sequence-Learning.html)


## 学习笔记

### cs224d

这是一个关于自然语言处理的深度学习教程，很值得一看！下面是关于这个课程的一些笔记和我的观点！

(1): [cs224d-word Vectors](https://yzhihao.github.io/machine%20learning/2017/03/15/cs224d.html)

(2):[cs224d-neuro network (交叉熵)](https://yzhihao.github.io/machine%20learning/2017/03/16/cs224d_neuro-network.html)

(3):[cs224d-rnn,gru,lstm](https://yzhihao.github.io/machine%20learning/2017/03/17/cs224d_RNN,GRU,LSTM.html)

(4):[cs224d-Recursive Neural Networks](https://yzhihao.github.io/machine%20learning/2017/03/17/Recursive-Neural-Networks.html)

(5):[cs224d-cnn in nlp](https://yzhihao.github.io/machine%20learning/2017/03/18/cnn-in-nlp.html)

(6):[Cs224d_state of the art](https://yzhihao.github.io/2017/03/19/cs224d_state-of-the-art.html)

### book-《deep learning》，《neural network and deep learning》

在入门deep learning的时候，非常推荐的是《neural network and deep learning》这本书，这本书中用简单的minist手写任务来通俗的讲解。然后在需要理论积累的时候，就非常推荐《deep learning》这本书，特别是part2部分，被很多人所称赞！


(1):[《Deep Learning》-Machine Learning Basics](https://yzhihao.github.io/machine%20learning/2017/03/23/Deep-Learning-Machine-Learning-Basics.html)

(2):[《Deep Learning》-Deep Feedforward Networks](https://yzhihao.github.io/machine%20learning/2017/03/24/Deep-Learning-Deep-Feedforward-Networks.html)

(3):[《Deep Learning》-cnn and rnn](https://yzhihao.github.io/machine%20learning/2017/03/24/Deep-Learning-cnn-and-rnn.html)

(4):[《Deep Learning》-representation learning](https://yzhihao.github.io/machine%20learning/2017/03/26/Representation-Learning.html)



**最后，学习，最重要的是思考，深入的去思考！加油，前行！**

  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="201702221" data-title="AI_note" data-url=""></div>
<!-- 多说评论框 end -->
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
var duoshuoQuery = {short_name:"yzhhome"};
  (function() {
    var ds = document.createElement('script');
    ds.type = 'text/javascript';ds.async = true;
    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
    ds.charset = 'UTF-8';
    (document.getElementsByTagName('head')[0] 
     || document.getElementsByTagName('body')[0]).appendChild(ds);
  })();
  </script>
<!-- 多说公共JS代码 end -->



