## GAN FOR NLP

主要想记录生成序列的gan在nlp的应用。主要是下面两篇论文
[SeqGAN: Sequence Generative Adversarial Nets with Policy Gradient](https://arxiv.org/pdf/1609.05473v5.pdf)
[Maximum-Likelihood Augmented Discrete Generative Adversarial Networks](https://arxiv.org/pdf/1702.07983v1.pdf)

## 主要问题

GAN最开始是设计用于生成连续数据，但是自然语言处理中我们要用来生成离散tokens的序列。在生成离散tokens的序列时，会产生如下的问题：

1.因为生成器(Generator，简称G)需要利用从判别器(Discriminator，简称D)得到的梯度进行训练，而G和D都需要完全可微，碰到有离散变量的时候就会有问题，只用BP不能为G提供训练的梯度。在**GAN中我们通过对G的参数进行微小的改变，令其生成的数据更加“逼真”。若生成的数据是基于离散的tokens，D给出的信息很多时候都没有意义，**因为和图像不同。图像是连续的，微小的改变可以在像素点上面反应出来，但是你对tokens做微小的改变，在对应的dictionary space里面可能根本就没有相应的tokens.

2.GAN只可以对已经生成的完整序列进行打分，而对一部分生成的序列，如何判断它现在生成的一部分的质量和之后生成整个序列的质量也是一个问题。

## SeqGAN: Sequence Generative Adversarial Nets with Policy Gradient

在这篇论文中，针对上面第一个问题，首先是将D的输出作为Reward，然后用Policy Gradient Method来训练G,也就是用D的输出作为Reward作为指导来改变Policy Gradient的方向，这也符合对抗网络的思想。针对第二个问题，通过蒙特卡罗搜索，针对部分生成的序列，用一个Roll-Out Policy（也是一个LSTM）来Sampling完整的序列，再交给D打分，最后对得到的Reward求平均值。

## 网络结构和训练


<img src="{{ site.img_path }}/Machine Learning/GAN_FOR_NLP.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

1。左图为GAN网络训练的步骤1，即根据真实样本和伪造样本训练判别器D网 络，这里的D网络用的CNN实现。

2、右图为GAN网络训练的步骤2，根据D网络回传的判别概率通过增强学习更新G网络，这里的G网络用的LSTM实现。

3、已知G网络的更新策略是增强学习，而增强学习的三个要素点状态state，action，reward。

本文state指的当前timestep之前的decode结果，也就是lstm随机生成的t个词，action指的当前待解码词，也就是用mcs来Sampling的词为T-t个词，D网络判别伪造数据的置信度即为奖励，伪造数据越逼真则相应奖励越大，但该奖励是总的奖励，分配到每个词选择上的reward则采用了以下的近似方法。

<img src="{{ site.img_path }}/Machine Learning/GAN_FOR_NLP1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

简单解释，即**当解码到t时，即对后面T-t个timestep采用蒙特卡洛搜索搜索出N条路径，将这N条路径分别和已经decode的结果组成N条完整输出，然后将D网络对应奖励的平均值作为reward.**因为当t=T时无法再向后探索路径，所以直接以完整decode结果的奖励作为reward。蒙特卡洛搜索是指在选择下一个节点的时候用蒙特卡洛采样的方式，而蒙特卡洛采样是指根据当前输出词表的置信度随机采样。

算法结构如下：

<img src="{{ site.img_path }}/Machine Learning/GAN_FOR_NLP2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

通过G网络生成sequence用D网络去评判，得到reward。


根据（4）计算得到每个action选择得到的奖励并求得累积奖励的期望，以此为loss function，并求导对网络进行梯度更新。

<img src="{{ site.img_path }}/Machine Learning/GAN_FOR_NLP3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

5、以下是标准的D网络误差函数，训练目标是最大化识别真实样本的概率，最小化误识别伪造样本的概率。

<img src="{{ site.img_path }}/Machine Learning/GAN_FOR_NLP4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

最后还像提一下的是，后来的[Adversarial Learning for Neural Dialogue Generation](https://arxiv.org/pdf/1701.06547.pdf)用了Policy Gradient Method来对GAN进行训练，和SeqGAN的方法并没有很大的区别，主要是用在了Dialogue Generation这样困难的任务上面。还有两点就是：第一点是除了用蒙特卡罗搜索来解决部分生成序列的问题之外，因为MC Search比较耗费时间，还可以训练一个特殊的D去给部分生成的序列进行打分（这里其实应该是联想到actor critic的做法）。但是从实验效果来看，MC Search的表现要更好一点。

## Maximum-Likelihood Augmented Discrete Generative Adversarial Networks（MaliGAN）

这篇论文的主要贡献如下：

1.为G**构造一个全新的目标函数，用到了Importance Sampling，将其与D的output结合起来，令训练过程更加稳定同时梯度的方差更低。**尽管这个目标函数和RL的方法类似，但是相比之下更能够降低estimator的方差（强烈建议看原文的3.2 Analysis，分析了当D最优以及D经过训练但并没有到最优两种情况下，这个新的目标函数仍然能发挥作用）

2.生成较长序列的时候需要用到多次random sampling，所以文章还提出了两个降低方差的技巧：第一个是蒙特卡罗树搜索，这个大家都比较熟悉; 第二个文章称之为Mixed MLE-Mali Training，就是从真实数据中进行抽样，若序列长度大于N，则固定住前N个词，然后基于前N个词去freely run G产生M个样本，一直run到序列结束。

<img src="{{ site.img_path }}/Machine Learning/GAN_FOR_NLP3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>







