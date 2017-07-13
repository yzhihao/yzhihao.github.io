---
layout: post
title: 集成学习(一)_Boosting
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-2-11T00:00:00.000Z
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



# 集成学习(一)--Boosting

一句话概述Adaboost算法的话就是：把多个简单的分类器结合起来形成个复杂的分类器。也就是“三个臭皮匠顶一个诸葛亮”的道理。

下面先来一个简单的认识：

如下图所示：
在D1这个数据集中有两类数据“+”和“-”。

<img src="{{ site.img_path }}/Machine Learning/Boosting1.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


对于这个数据集，你会发现，用简单分类器，不管是这么分，都无法很好的分类

我们这样分：

<img src="{{ site.img_path }}/Machine Learning/Boosting2.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


或者这样分：


<img src="{{ site.img_path }}/Machine Learning/Boosting3.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


总有误分类点存在；
那么如果我们把上面三种分发集合起来呢？像下面这样：

<img src="{{ site.img_path }}/Machine Learning/Boosting4.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


会发现把上面三个弱分类器组合起来会变成下面这个分类器：

<img src="{{ site.img_path }}/Machine Learning/Boosting5.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>



这样一来用这个分类器就可以完美的分类数据了。
可以说这就是集成学习的整体思想！

是不是十分简单粗暴？好了，下面我们就正经的说下**集成学习：**

* 集成学习的一般结构：先生成一组“个体学习器”，再用某种策略将他们结合起来。
* 集成学习分为**同质（同种类型学习器）和异质（不同类型学习器）**。
* 集成学习通过将多个学习器进行结合，常可以获得比单一学习器显著优越的泛化性能，这对“弱学习器”（指泛化性能略优于随机猜测的学习器）尤为明显。**要想获得好的集成，个体学习器应该“好而不同”，即个体学习器要有一定的准确性，并且要有多样性。但是准确性与多样性通常会产生冲突，因为个体学习器往往是为解决同一个问题训练出来的，不可能存在相互独立。如何产生好而不同的学习器是学习研究的核心。**

## 集成学习分类

1. 个体学习器之间存在强依赖关系、必须**串行生成的序列化方法。（Boosting）**
2. 个体学习器之间不存在强依赖关系、可**同时生成的并行化方法。（Bagging和RF）**

> 既然集成学习分为Boosting，Bagging和RF。那下面我们就从这些分类中讲，在这篇博文中，我会讲下Boosting的代表：AdaBoost和提升树，讲下Bagging的代表：随机森林。

## Boosting

* Boosting是一族将弱学习器提升为强学习器的算法。工作机制如下：
	* 先从初始训练集中**训练出一个基学习器，再根据基学习器的表现对训练样本进行调整，使得先前基学习器做的的训练样本在后继受到更多的关注，**然后基于调整后的样本分布来训练下一个基学习器；如此重复进行，直至基学习器的数目达到实现指定的值T，最终将这T个学习器进行加权结合。

### AdaBoost

#### Adaboost算法的思想

1. Adaboost给每一个训练数据添加“权值”，且最初这个权值是平均分配的。然后在之后的步骤中，**提高那些被前一轮弱分类器错误分类样本的权值，并降低那些被正确分类样本的权值**，这样一来，那些没有得到正确分类的数据，由于其权值的加大而受到**后一轮弱分类器的更大关注**
2. Adaboost给**每一个弱分类器添加“权值”**，且采取多数表决的方法组合弱分类器。具体地，加大分类误差率小的弱分类器的权值，使其在表决中起较大的作用；减少分类误差率大的弱分类器的权值，使其在表决中起较小的作用。

Adaboost的巧妙之处就在于它将这些想法自然且有效地实现在一种算法里。

#### Adaboost算法的步骤


<img src="{{ site.img_path }}/Machine Learning/Boosting6.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


**然后对上面的步骤做一些说明：**

* 步骤1假设训练数据集具有均匀的分布，即每个训练样本在基本分类器的学习中作用相同。这一假设保证了第1步中能用在原始数据上学习弱分类器G1(x)。
* 步骤2反复学习弱分类器，在每一轮m= 1, 2, ..., M顺次地执行下列操作：
    * a: 使用当期分布Dm加权的训练数据集，学习基本分类器Gm(x)。
    * b: 计算基本分类器Gm(x)在加权训练数据集上的分类误差率：

<img src="{{ site.img_path }}/Machine Learning/Boosting7.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

这里，wmi表示第m轮中第i个实例的权值，且：

<img src="{{ site.img_path }}/Machine Learning/Boosting8.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

这表明，Gm(x)在加权的训练数据集上的分类误差率是被Gm(x)误分类样本的权值之和，由此可以看出数据权值分布Dm与弱分类器Gm(x)的分类误差率的关系。
c: 计算弱分类器Gm(x)的系数am，am表示Gm(x)在最终分类器中的重要性。由式8.2可知，当em <= 1/2时，am >=0，并且am随em的减小而增大，所以分类误差率越小的弱分类器在最终分类器中的作用越大。
d: 更新训练数据的权值分布为下一轮做准备。式8.4可以写成：

<img src="{{ site.img_path }}/Machine Learning/Boosting9.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

由此可知，被弱分类器Gm(x)误分类样本的权值得以扩大，而被正确分类样本的权值却得以缩小。两相比较，误分类样本的权值被放大<img src="{{ site.img_path }}/Machine Learning/Boosting10.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>倍。
因此，误分类样本在下一轮学习中起更大的作用。
而，“不改变所给的训练数据，而不断改变训练数据的权值分布，使得训练数据在若分类器的学习中起不同的作用”就是Adaboost的一个特点。

步骤3中通过线性组合f(x)实现M个弱分类器的加权表决。系数am表示了弱分类器Gm(x)的重要性，这里，所有am之和并不为1。f(x)的符号决定实例x的类，f(x)的绝对值表示分类的确信度。“利用弱分类器的线性组合构建最终分类器”是Adaboost的另一个特点。

#### 例子
讲完上面的基本概念，我们直接上《统计学习方法》的例子：

<img src="{{ site.img_path }}/Machine Learning/Boosting11.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

给定上面这张训练数据表所示的数据，假设弱分类器由`x<v或x>v`产生，其阈值v使该分类器在训练数据集上的分类误差率最低，试用Adaboost算法学习一个强分类器。

解：

	1. 令m = 1
	则初始化数据权值分布：
    Dm = (wm1, wm2,..., wm10)，即：D1 = (w11, w12, ..., w110)
    wmi = 0.1， i = 1, 2,..., 10，即：w1i = 0.1， i = 1, 2, ..., 10
    a:用下面的方式从v=1.5遍历到v=9.5
        for( v=1.5;v<=9.5; v++) {
            if(x < v) G1(x)=1;
            elseif (x > v) G1(x) = -1;
        }
        并统计v取各个值使得误差率(误差率的计算方法是：所有误分类点的权值之和)。
        然后发现，当v取2.5时，误分类点为x=6, 7, 8，其权值和为0.3，误差率最低，此时，当前弱分类器为：

        G1(x) 在训练数据集上的误差率e1= P(G1(xi) != yi) = 0.3
    b:计算G1(x)的系数：a1 =(1/2) log [(1-e1)/e1] = 0.4236
    c:更新训练数据的权值分布：
        D2=  (w21, w22, ...,w210)
        w2i= (w1i/Z1)exp(-a1yiG1(xi))，i = 1, 2,..., 10
        于是
        D2 = (0.0715, 0.0715, 0.0715, 0.0715,0.0715, 0.0715, 0.1666, 0.1666, 0.1666, 0.0715)
        f1(x) = 0.4236G1(x)
        分类器sign[f1(x)]在训练数据集上有3个误分类点。

    2. 令m = 2，做和上一步同上的操作。
        发现在权值分布为D2的训练数据上，v = 8.5时误差率最低，此时：
        当前弱分类器为：
        误差率是e2 = 0.2143
        a2= 0.6496
        于是
        权值分布为：D3 =(0.0455, 0.0455, 0.0455, 0.1667, 0.1667, 0.1667, 0.1060, 0.1060, 0.1060,0.0455)
        f2(x)= 0.4236G1(x) + 0.6496G2(x)
        分类器sign[f2(x)]在训练数据集上有3个误分类点。
    3. 令m = 3。
        所以在权值分布为D3的训练数据上，v =5.5时分类误差率最低，此时的弱分类器为：

        G3(x)在训练样本上的误差率为e3= 0.1820
        a3= 0.7514
        于是
        权值分布为：D4 =(0.125, 0.125, 0.125, 0.102, 0.102, 0.102, 0.065, 0.065, 0.065, 0.125)
        f3(x)= 0.4236G1(x) + 0.6496G2(x) + 0.7514G3(x)
        因为分类器sign[f3(x)]在训练数据集上的误分类点个数为0.
    于是最终分类器为：
    G(x)= sign[f3(x)] = sign[0.4236G1(x) + 0.6496G2(x)+ 0.7514G3(x)]

可以说，通过这个例子，我们教好的理解了Adaboost的大致思想。

### 前向分布算法

AdaBoost算法还有另一个解释，即可以认为AdaBoost算法是模型为加法模型、损失函数为指数函数、学习算法为前向分步算法时的二类分类学习方法。
前向分步算法(forward stagewise algorithm)

加法模型：

<img src="{{ site.img_path }}/Machine Learning/Boosting12.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


其中，b为基函数，r为基函数的参数，beta为基函数的系数。
前向分步算法同时求解从m=1到M所有参数的优化问题简化为逐次求解各个参数的优化问题.


<img src="{{ site.img_path }}/Machine Learning/Boosting13.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


注意：前向分步算法与AdaBoost是等价的。


### 提升树


提升树是以分类树或回归树为基本分类器的提升方法。提升树被认为是统计学习中性能最好的方法之一。

#### 提升树模型

提升方法实际采用加法模型(即基函数的线性组合)与前向分步算法。以决策树为基函数的提升方法称为提升树(boosting tree)。对分类问题决策树是二叉分类树，对回归问题决策树是二叉回归树。
基本分类器`x<v或x>v`，可以看作是由一个根结点直接连接两个叶结点的简单决策树，即所谓的决策树桩(decision stump)。
提升树模型可以表示为决策树的加法模型:

<img src="{{ site.img_path }}/Machine Learning/Boosting14.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

其中，T表示决策树，theta为决策树的参数，M为树的个数。

#### 提升树算法

提升树算法采用前向分步算法。首先确定初始提升树f0(x)=0，第m步的模型是

<img src="{{ site.img_path }}/Machine Learning/Boosting15.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


其中，fm-1(x)为当前模型，通过经验风险极小化确定下一棵决策树的参数。


<img src="{{ site.img_path }}/Machine Learning/Boosting16.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


不同问题的提升树学习算法主要区别在于使用的损失函数不同。包括用平方误差损失函数的回归问题，用指数损失函数的分类问题，以及用一般损失函数的一般决策问题。
对于二类分类问题，提升树算法只需将AdaBoost算法8.1中的基本分类器限制为二类分类树即可，是AdaBoost算法的特殊情况。

#### 回归问题的提升树算法

当采用平方误差损失函数时，

<img src="{{ site.img_path }}/Machine Learning/Boosting17.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


在前向分步算法的第m步，损失变为，

<img src="{{ site.img_path }}/Machine Learning/Boosting18.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


其中是当前模型拟合数据的残差(residual)。
所以对回归问题的提升树算法来说，求解经验风险极小化的问题只需简单地拟合当前模型的残差。


<img src="{{ site.img_path }}/Machine Learning/Boosting19.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>



**梯度提升算法（GBDT）**

提升树利用加法模型与前向分步算法实现学习的优化过程。当损失函数是平方损失和指数损失函数时。每一步优化是很简单的。但对一般损失函数而言，往往每一步优化并不那么容易。针对这一问题，Freidmao提出了梯度提升(gradient boosting)算法。**这是利用最速下降法的近似方法，其关键是利用损失函数的负梯度在当前模型的值:**

<img src="{{ site.img_path }}/Machine Learning/Boosting20.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

**作为回归问题提升树算法中的残差的近似值，拟合一个回归树。**

<img src="{{ site.img_path }}/Machine Learning/Boosting21.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


算法第1步初始化，估计使损失函数极小化的常数值，它是只有一个根结点的树，即` x>c 和 x<c；`

第2 (a)步计算损失函数的负梯度在当前模型的值，将它作为残差的估计。对于平方损失函数，它就是通常所说的残差；对
于一般损失函数，它就是残差的近似值。

第2 (b)步估计回归树叶结点区域，以拟合残差的近似值

第2 (c)步利用线性搜索估计叶结点区域的值，使损失函数极小化

第2 (d)步更新回归树。

第3步得到输出的最终模型。

#### 提升树例子：


还是《统计学习方法》的那个例子，直接上截图（逃）：

<img src="{{ site.img_path }}/Machine Learning/Boosting22.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/Boosting23.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/Boosting24.jpg" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


### xgboost

xgboost是在GBDT的基础上对boosting算法进行的改进，内部决策树使用的是回归树,它和GBDT大体类似就不细讲了，但XGBoost风靡Kaggle、天池、DataCastle、Kesci等国内外数据竞赛平台，是比赛夺冠的必备大杀器。所以还是挺常用的，所以这里说下：

**xgboost相比传统gbdt有何不同？xgboost为什么快？xgboost如何支持并行？**


* 传统GBDT以**CART作为基分类器，xgboost还支持线性分类器，**这个时候xgboost相当于带L1和L2正则化项的逻辑斯蒂回归（分类问题）或者线性回归（回归问题）。
* 传统GBDT在优化时只用到一阶导数信息，xgboost则对代价函数进行了二阶泰勒展开，同时用到了一阶和二阶导数。顺便提一下，xgboost工具支持自定义代价函数，只要函数可一阶和二阶求导。
* xgboost在代价函数里**加入了正则项，用于控制模型的复杂度。正则项里包含了树的叶子节点个数、每个叶子节点上输出的score的L2模的平方和。从Bias-variance tradeoff角度来讲，正则项降低了模型的variance，使学习出来的模型更加简单，防止过拟合，**这也是xgboost优于传统GBDT的一个特性。
* Shrinkage（缩减），相当于学习速率（xgboost中的eta）。xgboost在进行完一次迭代后，会将叶子节点的权重乘上该系数，主要是为了削弱每棵树的影响，让后面有更大的学习空间。实际应用中，一般把eta设置得小一点，然后迭代次数设置得大一点。（补充：传统GBDT的实现也有学习速率）
* 列抽样（column subsampling）。xgboost借鉴了随机森林的做法，支持列抽样，不仅能降低过拟合，还能减少计算，这也是xgboost异于传统gbdt的一个特性。
* 对缺失值的处理。对于特征的值有缺失的样本，xgboost可以自动学习出它的分裂方向。
* xgboost工具支持并行。boosting不是一种串行的结构吗?怎么并行的？注意xgboost的并行不是tree粒度的并行，xgboost也是一次迭代完才能进行下一次迭代的（第t次迭代的代价函数里包含了前面t-1次迭代的预测值）。xgboost的并行是在特征粒度上的。我们知道，决策树的学习最耗时的一个步骤就是对特征的值进行排序（因为要确定最佳分割点），xgboost在训练之前，预先对数据进行了排序，然后保存为block结构，后面的迭代中重复地使用这个结构，大大减小计算量。这个block结构也使得并行成为了可能，在进行节点的分裂时，需要计算每个特征的增益，最终选增益最大的那个特征去做分裂，那么各个特征的增益计算就可以开多线程进行。
* 可并行的近似直方图算法。树节点在进行分裂时，我们需要计算每个特征的每个分割点对应的增益，即用贪心法枚举所有可能的分割点。当数据无法一次载入内存或者在分布式情况下，贪心算法效率就会变得很低，所以xgboost还提出了一种可并行的近似直方图算法，用于高效地生成候选的分割点。

**xgboost使用经验总结**

1. 多类别分类时，类别需要从0开始编码
2. Watchlist不会影响模型训练。
3. 类别特征必须编码，因为xgboost把特征默认都当成数值型的
4. 调参：Notes on Parameter Tuning 以及 Complete Guide to Parameter Tuning in XGBoost (with codes in Python)
5. 训练的时候，为了结果可复现，记得设置随机数种子。
6. XGBoost的特征重要性是如何得到的？某个特征的重要性（feature score），等于它被选中为树节点分裂特征的次数的和，比如特征A在第一次迭代中（即第一棵树）被选中了1次去分裂树节点，在第二次迭代被选中2次…..那么最终特征A的feature score就是 1+2+….



### Boosting 注意和总结
1. 需要注意的是Boosting算法在训练的每一轮都要检查当前生成的基学习器是否满足基本条件（检查基分类器是否比随机猜测好），一旦条件不满足，当前基学习器被抛弃掉，学习过程停止。在这种情形下，初始设置的学习轮数T也许还远远未达到，可能导致最终集成中只包含很少的基学习器而导致性能不佳。若采用“重采样”，则可以获得“重启动”机会避免过早停止。即在抛弃不满足条件的当前基学习器之后，根据当前的分布重新对训练样本进行采样，再基于新的采样结果重新训练出基学习器，从而使得学习过程可以持续到预制的T轮。

2. 从**“偏差-方差”分解的角度看，Boosting主要关注降低偏差，**因此基于泛化性能相当弱学习器能构建出很强的集成。


参考资料：


《统计学习方法》-李航<br>
《机器学习》-周志华<br>
《机器学习实战》-Peter Harrington<br>
斯坦福大学公开课-机器学习<br>
网上的各位大牛的博文<br>

  <!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="201702111" data-title="Booting" data-url=""></div>
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




