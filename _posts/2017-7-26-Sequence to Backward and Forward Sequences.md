# Sequence to Backward and Forward Sequences

## 主要贡献



## 论文背景


## 网络结构原理


本文旨在提出一种叫做content introducing的方法来生成短文本reply，一共分为两个step，如下图：

<img src="{{ site.img_path }}/Machine Learning/Sequence_Backward_chatbot.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

step 1 给定query之后，预测一个keyword作为reply的topic，这个topic词性是名词，这里的keyword并不能捕捉复杂的语义和语法，而只是根据query的每个词来预估出一个PMI（Pointwise Mutual Information）最高的名词作为keyword，两个单词之间的PMI由下式计算：

<img src="{{ site.img_path }}/Machine Learning/Sequence_Backward_chatbot1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

每个单词与query之间的PMI由下式计算：

<img src="{{ site.img_path }}/Machine Learning/Sequence_Backward_chatbot2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

虽然数学上不太严谨，但后面的实验表明用这个来计算结果还是不错的。

step 2 本文的模型叫做Sequence To Backward and Forward Sequences，首先进行backward step，给定一个query，用encoder表示出来得到一个context，decoder的部分首先给定keyword作为第一个词，然后进行decoding，生成的这部分相当于keyword词前面的部分；接下来进行的是forward step，也是一个典型的seq2seq，用encoder将query表示成context，然后给定backward生成的话和keyword作为decoder的前半部分，继续decoding生成后半部分。整个的流程这样简单描述下：

query + keyword => backward sequence

query + keyword + backward sequence(reverse) => forward sequence

reply = backward (reverse) sequence + keyword + forward sequence

传统的seq2seq模型都是从第一个词生成到最后一个词，无法生成指定词，而本文的模型可以生成指定词，并且该词可以出现在reply的任意位置。

## 算法流程和讲解


## 实验

实验中数据集是从百度贴吧上爬下来的对话数据，规模有500k的query reply pairs，PMI统计是由100M的query reply paris。

## RELATED WORK+discussion

## 文章解读和评价