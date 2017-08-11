# Learning through Dialogue Interactions by Asking Questions



## 主要贡献

1. 是end-to-end学习交互对话代理的第一步，当一个学生被老师提问，但他对答案并不确定时，他可以向老师请求详细点的说名或者给些提示。一个好的agent（learn/bot/student）也应当有**这种能力可以和一个对话参与者（teacher/user）进行交互**

（1）learner在理解对话者的文本表面形式时会出现问题，例如一个问题的描述；

（2）learner在推理上会出现问题，例如在即将回应的问题上，learner不能检索并联系相关的知识；

（3）learner在起初就缺乏回答问题的必要知识源，也就说learner已经学习的知识源不包含需要的信息。

上面说到的那三种情况都有可能通过与对话参与者交互来解决。一些交互可以被用来学习，以便在未来的对话中有更好的表现形式

**（1）问题澄清：当bot无法理解user的文本语意时。（2）知识操作：bot需要借助一个现有的基本知识库做推理。（3）知识获取：bot的知识库时不完整的，需要补充。**

## 论文背景


## 网络结构原理

### Question Clarification（问题澄清）

这里有两种情况：

（i）问题的释义：student会请求（例如：what do you mean）请求teacher使用没有拼写错误的解释语句来澄清该问题。

（ii）问题的确认：student会通过类似“Do you mean which film Tom appear in”的方式来确认带有拼写错误的问题是否对应一条没有拼写错误的问题

### Knowledge Operation（知识操作）

请求相关的知识（Task 3）：bot会直接请求teacher指出相关的KB事实；

知识的验证（Task 4）：bot会请教teacher的问题是否和KB 中一个具体的fact相关

具体如下图:

<img src="{{ site.img_path }}/Machine Learning/Asking_Questions_chatbot.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

### Knowledge Acquisition（知识获取)

细看图3。例如给定一个问题：“Which movie did Tom star in ?”，缺少的部分可以是teacher正在询问的实体（简称为question entity，该例子中的问题实体是Tom），相关实体（starred actors），问题的答案（Forrest Gump），或者者三者都有。

在所有的例子中，**由于相关知识库的缺乏，bot很难给出正确答案。它就需要teacher给出正确的答案来学到缺失的这部分知识。Teacher给出答案后会继续问其他的问题。Teacher然后再返回重问该问题，这时候bot就需要给出一个答案了，因为这个实体不再是未见过的了**


**Missing Question Entity**：teacher正在提问中的实体在基本知识库中缺失。所有包含该question entity的KB facts将对bot隐藏。例如Task 5中的图3，因为teacher的问题中含有Tom实体，那么包含Tom实体的KB facts将对bot不可见。

**Missing Answer Entity**：对于bot来说，问题的answer entity是不可知的。那么所有含有answer entity的KB facts将会被隐藏。因此在图3的Task 6中，所有包含“Forrest Gump”的KB facts将对bot不可见。

**Missing Relation Entity**：相关类型对于bot来说是未知的。在图3的Task 7中，所有和starred actors相关的KB facts对bot是不可见的。

**Missing Triples**：对于同时出现question entity，answer entity 和relation entity的所有KB facts对bot不可见。如图3的Task 8.

**Missing Everything**：对包含question entity，answer entity 和relation entity中任意一种的所有KB facts都将对bot不可见。如图3的Task 9.

<img src="{{ site.img_path }}/Machine Learning/Asking_Questions_chatbot1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

## 算法流程和讲解

## Train/Test Regime（训练/测试规则）

**第一，我们想要测试下提问问题的有效性。第二，我们想要训练我们的student bot在什么时候提问，并且问什么问题。**

为了能够完成这两个目标，我们使用了两种方法来探索着训练我们的模型：**Offline Supervised Learning 和 Online Reinforcement Learning。**

### Offline Supervised Learning

使用线下监督环境训练我们student模型的目的主要是测试**提出问题能力的有效性.**



我们采纳的第一个学习策略是基于Reward的模拟策略（简称vanilla-MemN2N） (Weston, 2016)。在训练时，该模型将student提供的答案做最大化对数似然估计（丢弃那些错误答案的示例）。候选的答案是在记忆中出现的词，这也就意味着bot只能从它之前看过的知识库中预测实体。

我们也使用了MemN2N的一个变体，称为“context MemN2N”（Cont-MemN2N for short），即我们将每个词向量**用该词向量和该词周围出现的其他词向量的平均值来替换。**我们使用前面和后面的单词作为上下文，上下文单词的数量是在dev集合上选择的超参数。

模型 vanilla-MemN2N 和 Cont-MemN2N 的共同问题是它们只能利用bot的答案作为信息，而忽略了teacher的反馈。因此，我们提出了一个可以联合预测bot答案和teacher反馈的模型（可以简称为TrainQA（+FP））。Bot的答案可以使用vanilla-MemN2N来预测，teacher的反馈可以使用ForwardPrediction(FP)模型（Jason Weston. Dialog-based language learning. arXiv preprint arXiv:1604.06045, 2016）来反馈。我们建议读者可以细读下FP模型的细节。在训练时，模型可以同时从teacher的反馈预测和具有正向reward的答案中学习。在测试时，模型将只能预测bot的答案。
在第四章节的TestModelAQ设定中，模型需要决定要问什么问题，我们这里同样使用vanilla-MemN2N，输入question和上下文，然后输出bot要问的问题。


### Online Reinforcement Learning（RL）

我们也探索了student学习**在何时提问和提问什么内容的能力，换句话说就是student怎样学习。**

student在每次交流时都会提出问题，这样感觉还不错，因为对student问题的回答中会包含一些额外的信息，但我们并不想让我们的模型学习这种行为。因为当现实中的student提问时，总会有一个这种行为的成本。这种成本可以视为**teacher耐心的反应**。或者更一般的人机交互间的影响：**如果bot总是请求解释问题，那么用户就不会发现bot的优点。**Student对何时提问和提问什么应该有一定的判断力。例如：如果student对答案很自信，那么就没有必要在提问了；或者如果老师的问题太难，即使解释了也不助于你得到正确答案，那么就也没必要提问。



一个二元的vanilla-MemN2N（可以视为）模型用来决定bot是否需要提问，即为了给teacher答复，bot是否需要问一些东西。第二个MemN2N模型用来决定bot的回答，可以视为。对应QA和AQ两种不同的模型，这也就意味这bot会根据它是否选择提问而使用两种不同的模型作为最后答案的预测。

## 实验

## RELATED WORK+discussion

## 文章解读和评价




