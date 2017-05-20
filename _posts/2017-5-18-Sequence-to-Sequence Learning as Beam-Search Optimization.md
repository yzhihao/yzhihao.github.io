# Sequence-to-Sequence Learning as Beam-Search Optimization


## 主要贡献

首先是seq2seq models的三个问题：

(1)**Exposure Bias**: the model is never exposed to its own errors during training, and so the inferred histories at test-time do not resemble the gold training histories.


(2)**Loss-Evaluation Mismatch: **training uses a word-level loss, while at test-time we target improving sequence-level evaluation metrics, such as BLEU.

(3)**the concern of label bias:（标注偏置问题）**since word probabilities at each time-step are locally normalized, guaranteeing that successors of incorrect histories receive the same mass as do the successors of the true history.我的详细看[Conditional random fields: Probabilistic models for segmenting and labeling sequence data.]() --不理解


在一定程度上解决了上面的三个问题：对于第一个问题是采用了一种新的网络结构。第二个问题和第三个问题就是采用beam search training scheme来解决的。这个用attention seq2seq对对比实验。

也就是说：beam-search是全局解码算法，其实我们的目的是要得到概率最大的句子，很显然在每一步都取概率最大的词或者直接sample并不能保证最后生成的句子概率是最大的，这个其实是一个图上的最优路径问题，应该是一个动态规划问题而不是一个贪心问题，但是每一步解码时都会有词表大小这么多个节点，想要得到全局最优解搜索空间太大，所以采用beam-search来减少搜索空间，从而得到一个接近最优解的解


注意这个approach的灵感来自[Learning as Search Optimization: Approximate Large Margin Methods for Structured Prediction](https://www.isi.edu/~marcu/papers/daume05laso.pdf)

## 论文背景

首先说明的是sqe2seq是 Encoder-decoder框架的一类[On the properties of neural machine translation: Encoder-decoder approaches.]()



## 网络结构原理



## 算法流程和讲解


定义一个函数：<img src="{{ site.img_path }}/Machine Learning/Beam_Search.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>代表在t-1的hidden-state和input representation x的得分。在实验中 ，是除去了final softmax transforation (which transforms nnormalized scores into robabilities)。然后直接输出unnormalized scores，这样就解决了label bias problem。

模型将会选择整体cores最高的序列。这里的方法借鉴了[LaSO-like]()，这个方法就叫做beam search optimization (BSO)

论文首先是定义了Search-Based Loss，

在实验中，首先是计算候选句子集合S中的得分。

<img src="{{ site.img_path }}/Machine Learning/Beam_Search1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

然后定义了全局的loss函数

<img src="{{ site.img_path }}/Machine Learning/Beam_Search2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

为了优化这个loss函数。这个算法分为两个部分，首先是Forward: Find Violations，找到候选句子集合S.然后是Backward: Merge Sequences。用反向传播的方式更新权重中


**Forward: Find Violations：**

下面的图解解释了在第一步是怎么找到候选句子s的。

<img src="{{ site.img_path }}/Machine Learning/Beam_Search3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

**Backward: Merge Sequences**

下面就是这个算法的整体：

<img src="{{ site.img_path }}/Machine Learning/Beam_Search4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## 实验过程和结果（）

文中用的是encoder和decode的框架模型，用了attention机制。然后作者在细节方面。首先是不能random initialization



## RELATED WORK加上discussion

## 文章解读和评价