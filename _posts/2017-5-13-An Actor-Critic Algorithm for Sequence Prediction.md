# An Actor-Critic Algorithm for Sequence Prediction


## 主要贡献

The contributions of the paper can be summarized as follows: 1) we describe how RL methodology like the actor-critic approach can be applied to supervised learning problems with structured outputs; and 2) we investigate the performance and behavior of the new method on both a synthetic task and a real-world task of machine translation, demonstrating the improvements over maximum-likelihood and REINFORCE brought by the actor-critic training.

主要就是RL在nlp的应用是怎么实现，第二就是分析了这种方法的效果比之前极大似然和REINFORCE的好。

当前对数似然训练方法受限于他们的训练和测试之间的差异模式,即RNN在training时接受ground truth input，但testing时却接受自己之前的output，这两个setting不一致会导致error accumulate，这篇论文**解决这个问题，这个问题也叫做exposure bias问题。**这使得一个更接近训练阶段的test过程，允许直接优化为特定任务的评分，如BLEU。

## 论文背景

在这个论文之前，传统的机器翻译或者其他语言模型，大都是用encoder-decoder框架加上attention机制来做的。

当然这篇论文也是encoder-decoder加attention机制，只不过在训练上是用actor-critic算法来做。其中，因为attention机制有很多形式，具体的看[这篇博文](https://yzhihao.github.io/machine%20learning/2017/05/06/Encoder-Decoder%E6%A1%86%E6%9E%B6.html)，在这篇论文中用的是soft attention mechanism

具体来说这个机制的公式如下：

<img src="{{ site.img_path }}/Machine Learning/An_Actor_Critic_Algorithm3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## RELATED WORK加上discussion


首先是[Sequence level training with recurrent neural networks](https://arxiv.org/pdf/1511.06732.pdf) 这篇用REINFORCE algorithm做语言模型,其缺点就是：**高方差加上不能挖掘出the availability of the ground-truth，The approach also relies on a curriculum learning scheme.**

当然，之前[Structured prediction with reinforcement learning](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.323.8169&rep=rep1&type=pdf)这篇Standard value-based RL algorithms like SARSA and OLPOMDP have also been applied to structured prediction 同样的是do not use the ground-truth for value prediction.

还有就是一些Imitation learning，但是不好的原因在于**A limitation is that the token k for the ground-truth answer is used as the target at step k,** which might not always be the optimal strategy.（这个//TODO，暂时还没有搞懂。）

一些approaches that aim to approximate the gradient of the expected score，这些方式的缺点都是在于not include the ground-truth as well，优点并不好。（这里看出bais exposure是一个大问题）

最后是method is to optimize a global sequence cost with respect to the selection and pruning behavior of the beam search procedure itself。比如这篇[Sequence-to-Sequence Learning as Beam-Search Optimization](https://arxiv.org/abs/1606.02960)但它是designed specifically for the precise inference procedure involved. 也就是为精确推导而作的。

总结：之前大部分文章都是不能解决bais exposure问题。这个文章解决了这个问退。

## 网络结构原理

结构如图：

<img src="{{ site.img_path }}/Machine Learning/An_Actor_Critic_Algorithm.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

从神经网络结构看：actor和critic都是encoder和decoder的结构。actor中中encoder输入的是X（若在机器翻译中就是原始序列），decoder输出生成的序列（在机器翻译中就是输出序列），然后生成的每一词都输入到critic对这些序列进行评价。其中critic的encoder输入的是Y（若在机器翻译中就是翻译后的序列），decoder输入的就是attention机制生成的input summary加上actor的当下生成词，输出的就是对当下生成词的一个评价！具体的看下面的算法流程图。

从传统的RL来看，状态就是actor中的decoder之前的序列，动作就是下一个生成词，这个critic对这个动作进行评价，返回的就是Q，也就是reward。

怎么解决bais exposure问题：**从结构中看，就是在训练的时候actor和测试的时候一样，都是用previous guesses 去生成下来的序列。然后ground-truth tokens用于critic的value prediction。也就是充分利用了ground-truth tokens**


## 算法流程和讲解


具体的算法流程如下：

<img src="{{ site.img_path }}/Machine Learning/An_Actor_Critic_Algorithm1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/An_Actor_Critic_Algorithm2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

Note that we use the probability rather than the log probability in this formula (which is more typical in RL applications) as we are summing over actions rather than taking an expectation. Intuitively, this equality corresponds to increasing the probability of actions that give high values, and decreasing the probability of actions that give low values

注意到这里采用的不是log probability，而是probability，因为他们是求和而不是期望。可以在做实验的时候做下log probability的



### 一些trick

（1）应用的是**Temporal-difference learning**来评估策略，这个应该不算是一个trick，而是在actor-critic中本来就有的。

（2）其次是trick是Applying deep RL techniques，首先是如果Q是非线性的话，就会产生梯度偏离的问题，为了解决这个问题作者借鉴[Continuous control with deep reinforcement learning](https://arxiv.org/abs/1509.02971)，使用了一个额外的target network，他们试图remove掉target network ，但那样的效果不好。然后也需要注意的是两个模型都用到对方的output来训练自己。这个容易造成的结果就是creates a potentially dangerous feedback loop（危险反复循环）。解决问题就是借鉴[Continuous control with deep reinforcement learning](https://arxiv.org/abs/1509.02971)，sample一些prediction来保证他们真正的训练到。

(3)然后是trick是Dealing with large action spaces，This can be alleviated by putting constraints on the critic values for actions that are rarely sampled. We found experimentally that shrinking the values of these rare actions is necessary for the algorithm to converge。也就是在跟新critic的时候加上一个类似正则化的项，这个的作用就是缩小那些几乎不出现的动作的价值，降低critic的output的方差。这个trick在[Learning simple algorithms from examples](https://arxiv.org/abs/1511.07275)也有用到。这个trick具体如下：

<img src="{{ site.img_path }}/Machine Learning/An_Actor_Critic_Algorithm5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


（4）最后的trick是Reward shaping


## 实验过程和结果（未复现）

论文给了两个实验，一个是spelling correction task另一个是machine translation。评价标准是BLUE


在machine translation中


##　文章解读和评价












