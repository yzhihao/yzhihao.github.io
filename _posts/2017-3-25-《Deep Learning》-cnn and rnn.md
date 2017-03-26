---
layout: post
title: 《Deep Learning》-cnn and rnn
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-3-24T00:00:00.000Z
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

# 《Deep Learning》-cnn and rnn

## Motivation of CNN
Convolution leverages three important ideas that can help improve a machinelearning system: **sparse interactions , parameter sharing and equivariant representations.** Moreover, convolution provides a means for working with inputs of variable size

#### advantage of sparse interactions:

This means that we need to store fewer parameters, which both reduces the memory requirements of the model and improves its statistical efficiency. It also means that computing the output requires fewer operations. These improvements in efficiency are usually quite large.

For example, when processing images, it is useful to detect edges in the first layer of a convolutional network. The same edges appear more or less everywhere in the image, so it is practical to share parameters across the entire image.


### what is the equivariant representations

In the case of convolution, the particular form of parameter sharing causes the layer to have a property called **equivariance to translation.** To say a function is equivariant means that if the input changes, the output changes in the same way. Specifically, **a function f(x) is equivariant to a function g if f (g(x)) = g(f(x))**.In the case of convolution, if we let g be any function that translates the input, i.e., shifts it, then the convolution function is equivariant to g. For example, let I be a function giving image brightness at integer coordinates. Let g be a function mapping one image function to another image function,** such that I'= g(I) is the image function with I' (x, y) = I( x − 1, y). This shifts every pixel of I one unit to the right. If we apply this transformation to I , then apply convolution, the result will be the same as if we applied convolution to I' , then applied the transformation g to the output**. When processing time series data, this means that convolution produces a sort of timeline that shows when different features appear in the input. If we move an event later in time in the input, the exact same representation of it will appear in the output, just later in time. **Similarly with images, convolution creates a 2-D map of where certain features appear in the input. If we move the object in the input, its representation will move the same amount in the output.** This is useful for when we know that some function of a small number of neighboring pixels is useful when applied to multiple input locations. For example, when processing images, it is useful to detect edges in the first layer of a convolutional network. **The same edges appear more or less everywhere in the image, so it is practical to share parameters across the entire image.** In some cases, we may not wish to share parameters across the entire image. For example, if we are processing images that are cropped to be centered on an individual’s face, we probably want to extract different features at different locations—the part of the network processing the top of the face needs to look for eyebrows, while the part of the network processing the bottom of the face needs to look for a chin.

Convolution is not naturally equivariant to some other transformations, such as changes in the scale or rotation of an image. Other mechanisms are necessary for handling these kinds of transformations.

Finally, some kinds of data cannot be processed by neural networks defined by matrix multiplication with a fixed-shape matrix. Convolution enables processing of some of these kinds of data
