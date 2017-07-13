# Emotional Chatting Machine: Emotional Conversation Generation with Internal and External Memory

## 主要贡献

1. **首次将情感因素引入了基于深度学习的生成式对话系统**，提出了基于记忆网络的情感对话系统 Emotional Chatting Machine (ECM) ，在传统的 Sequence to Sequence 模型的基础上，ECM 使用了静态的情感向量嵌入表示，动态的情感状态记忆网络和情感词外部记忆的机制，使得 ECM 可以根据用户的输入以及指定情感分类输出相应情感的回复语句。

## 论文背景



## 网络结构原理

<img src="{{ site.img_path }}/Machine Learning/Emotional Chatting Machine1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

模型的总体框架如上图所示，用户问题输入为“What a lovely day!”，通过 Encoder 将其编码为隐向量表示 h，然后通过注意力机制，**结合 decoder 的状态向量 s 在生成不同的词时，对问题的隐向量表示 h 的不同部分的信息选择性的加强，得到向量 c。**指定情感类别为“Happiness”，经过索引得到**情感类别嵌入向量，初始的情感状态记忆向量和相应的情感词表。**decoder接受经过注意力机制的**问题向量 c，情感类别嵌入向量和初始的情感状态记忆向量作为输入**，通过循环神经网络生成下个词的生成概率 o，之后**再经过情感词表对情感词和非情感词的加权**，得到最终词的生成概率，通过采样即可得到输出“Haha, so happy today!”。


## 算法流程和讲解


## 实验过程和结果（）



## RELATED WORK加上discussion



## 文章解读和评价
