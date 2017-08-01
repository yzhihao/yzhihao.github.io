# Hierarchical Recurrent Attention Network for Response Generation

## 主要贡献

1. 在生成式模型上注重的多轮对话上下文信息，对历史信息进行建模
2. 提出一种Hierarchical Recurrent Attention Network，注重在word level的信息提取。
3. 在人工测评和Evaluation Metrics（Perplexity）上实现了state of the art



## 论文背景


## 网络结构原理

Hierarchical_Recurrent_network

这个模型主要分为三个部分，分别是Word Level Encoder，Hierarchical Attention and Utterance Encoder，decoder and Response。

简单来说：首先是用Word Level Encoder將上下文转变成hidden vectors。然后，在生成每一个词时，分层的注意力机制分别在词级的attention和话语级的attention提取相应的重要成分。在其中多个word level attention 将会把自己提取到的上下文信息 uploaded 到一个 utterance level encoder，重新综合上下文信息。最后变成综合当前query输入给decoder生成对话。


下面是三个部分详细说明：




## 算法流程和讲解


## 实验

## RELATED WORK+discussion

## 文章解读和评价

不足：