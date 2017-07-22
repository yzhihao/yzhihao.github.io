# Assigning Personality/Identity to a Chatting Machine for Coherent Conversation Generation

## 主要贡献


对于 chatbot 的发展，我们给出了两个长期的研究目标：

1. 我们希望它能从任务驱动型到闲聊都能够有**较好的回复**随着大数据时代的不断发展，闲聊机器人系统可以用更丰富的对话数据进行训练；并且为避免繁杂的人工定义，在大数据上可以自动聚类或抽取对话行为等信息。

2. 能够更加**有一致的人格**，并且能够有较高的“情商”，即聊天机器人的个性化情感抚慰、心理疏导和精神陪护等能力。


本文的创新点主要有两点:

第一，作者尝试为闲聊机器人定义一个固定的角色/身份。本文只是一个初步的探索，在未来的工作中会尝试定义机器人的属性、个性、语言风格等，甚至可以为机器人的实时想法进行建模，从而达到更好的前后文一致性。

第二，作者提出了一个新颖的生成模型用于识别并回答与机器人自身相关的问题，巧妙地运用不一致的训练数据，训练出具有一致性回复的聊天机器人。

## 论文背景




## 网络结构原理


首先，此文为闲聊机器人设定了固定的属性，包括但不限于姓名、性别、爱好等。这些属性被整理为 <Key, Value> 的形式，当机器人被问及与自身属性相关的问题时，应生成与自身属性相一致的回复。如下图所示：此文为 chatbot 设定为一个名叫汪仔的三岁男孩，他热爱动漫，特长是弹钢琴。

<img src="{{ site.img_path }}/Machine Learning/Identity_chatbot.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


那么，研究面临的挑战是什么呢？实际上是主要来**源于数据属性的不一致性，一方面是训练数据相互之间不一致，另一方面是训练数据与机器人不一致。**例如，考虑训练数据中针 对“爱好”的回答，有喜欢篮球的，有喜欢足球的，还有喜欢羽毛球的，这些回答本身就不具有一致性；然而我们机器人的爱好可能是游泳，这与训练数据也不一致。如何使用这些不一致的数据训练模型，成为了此研究最大的挑战。

如何解决上述问题呢？本文提出了**位置检测器（Position Detector），注意这个只在训练时有用，因为只是在找到目标回答中的替换词**，它着眼于在训练数据中定位属性值的位置。作者基于词向量的相似度实现 Position Detector 模块。例如，在“我 /喜欢”这句话中，由于“篮球”和“游泳”的词向量距离最近，所以断定“篮球”为属性值。此外，本文还将提出一种**基于语言模型的方法定位属性值的位置**，以追求更好的性能。 **当 Position Detector 定位到 Reply 中的属性值后，可以通过替换的方法将消除训练数据的不一致性。**


**方法思路介绍：**如下图所示，本文模型包含三个重要的子模块。首先，为了判断给定的 Post 是否涉及机器人自身的属性，以及涉及了哪一条属性，属性检测器（Profile Detector）将对给定的 Post 进行分类。训练 Profile Detector 的过程中使用了带有噪音的监督数据。若分类结果不涉及机器人属性，则使用传统方法 seq2seq 解码。若分类结果涉及机器人属性，则使用双向解码器（Bidirectional Decoder）以属性值为中心进行双向解码。Bidirectional Decoder 是通过与属性相关的 <Post, Response> 数据训练的。

<img src="{{ site.img_path }}/Machine Learning/Identity_chatbot1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

▲ 图3：整个过程的生成图解

训练的时候因为很多训练数据里的属性都不是机器人的真实属性，于是使用**机器人属性去做生成的 response 与训练数据的 response 会有不一致**，所以就想到了**用 position detector 替换一下消除这种不一致**。因此，需要使用位置检测器（Position Detector）对训练过程做特殊的预处理，Position Detector 可以在训练数据中定位属性值的位置，从而解决在训练与测试过程中的落差。需要注意的是，Position Detector 在测试的过程中不参与生成（generation）过程。具体情况如下图所示，给定一对 <x，y>，Position Detector 将会预测属性值钢琴（Piano）会被小提琴-4（violin）这一位置所替代，该位置将会被用于训练 Bidirectional Decoder。

<img src="{{ site.img_path }}/Machine Learning/Identity_chatbot2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

▲ 图4：模型的训练过程

细节剖析：其中的编码器（Encoder）是将 post 编码成向量，以便后续深度生成模型利用。属性检测器（Profile Detector）在这里有两个目的：**一是判断给定的 Post 是否涉及机器人自身的属性，二是判断涉及了哪一条属性，将检测到的属性 <key,value> 放入相应的解码器中。**双向解码器（Bidirectional Decoder）的目的是生成一个涉及机器人属性的反应 （Response(y)），在测试阶段以机器人的属性值（Profile Value）为起点来生成整个序列。双向解码器这一点是受到了牟力立同学在 2016 年发表的一篇论文（Mou et al., 2016）[1] 启发，**他们的工作是通过双向解码器生成包含限制条件的回复。与之不同的是，在训练过程中我们使用了 Position Detector 去预测关键词的位置，取代了（Mou et al., 2016）工作中随机替换关键词训练 Decoder 的方法。**




## 算法流程和讲解


## 实验

## RELATED WORK+discussion

## 文章解读和评价

这篇文章讲的是给机器一个人格，这个思路是非常好的，更加细化，我们转变思路，不同于这篇中的是对不同的机器进行建模，或许我们可以让机器对不同的人进行建模，这样来实现正真的个性化。