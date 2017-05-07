---
layout: post
title:  Conditional GANS
desc: 我的博客
keywords: 'blog,Machine Learning,AI'
date: 2017-5-4T00:00:00.000Z
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

# Conditional GANS

## 主要思想

在生成模型G和判别模型D中同时**加入条件约束y来引导数据的生成过程。**条件可以是任何补充的信息，如类标签，其它模态的数据等，这样使得GAN能够更好地被应用于跨模态问题，例如图像自动标注。

## Generative Adversarial Nets

[原文](https://arxiv.org/pdf/1411.1784.pdf)

<img src="{{ site.img_path }}/Machine Learning/CGAN.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

上图所示是CGAN的结构。

把**噪声z和条件y作为输入同时送进生成器**，生成跨域向量，再通过非线性函数映射到数据空间。

把**数据x和条件y作为输入同时送进判别其**，生成跨域向量，并进一步判断x是真实训练数据的概率。

<img src="{{ site.img_path }}/Machine Learning/CGAN1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Image-to-Image Translation with Conditional Adversarial Networks

[原文](https://phillipi.github.io/pix2pix/)

本文主要在三个部分改进了原始的cGAN， 包括目标函数，生成器的网络结构和判别器的判别方式


### 1.对目标函数的修改

<img src="{{ site.img_path }}/Machine Learning/CGAN2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

加入了L1约束项，使生成图像不仅要像真实图片，也要更接近于输入的条件图片。

### 2.在生成器中，用U-net结构代替encoder-decoder

<img src="{{ site.img_path }}/Machine Learning/CGAN3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/CGAN4.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

在Image-to-Image Translation的大多任务中，图像的底层特征同样重要，所以利用U-net代替encoder-decoder。

### 3.提出PatchGAN

通常判断都是对生成样本整体进行判断，比如对一张图片来说，就是直接看整张照片是否真实。而且Image-to-Image Translation中很多评价是像素对像素的，所以在这里提出了分块判断的算法，在图像的每个`N×N`块上去判断是否为真，最终平均给出结果。


## Generative Adversarial Text to Image Synthesis

[原文](https://arxiv.org/pdf/1605.05396.pdf)

我们的目标实际上是通过“文字”生成“图像”。为此我们需要解决以下两个问题：

**1.如何把文字描述表示成合适的向量。**

**2.如何利用这个描述向量生成合适的图片。**



其中，第一个问题是用了之前一篇论文中的技术[Learning Deep Representations of Fine-grained Visual Descriptions](https://arxiv.org/abs/1605.05395)，这里就不细讲了。**这里就假设文字描述为t，我们可以通过一个函数<img src="{{ site.img_path }}/Machine Learning/CGAN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>将其转换为一个向量<img src="{{ site.img_path }}/Machine Learning/CGAN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>(t)。**

第二个问题，如何利用向量<img src="{{ site.img_path }}/Machine Learning/CGAN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>(t)生成合适的图像？这就是GAN的工作，文中GAN的结构如下图所示：

<img src="{{ site.img_path }}/Machine Learning/CGAN6.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

对比原始的GAN结构，这里对生成网络G和判别网络D的输入部分做了更改：

对于图像生成网站G，原来是接收一个无意义的噪声z，输出一个图像G(z)。而这里不仅接收噪声z，还接收文字描述向量<img src="{{ site.img_path }}/Machine Learning/CGAN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>(t)，用这两部分共同生成一个图像G(z, <img src="{{ site.img_path }}/Machine Learning/CGAN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>(t))。
对于判别网络D，原来是接收图像x, 输出打分D(x)，现在不仅接收图像x，还接收文字描述<img src="{{ site.img_path }}/Machine Learning/CGAN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>(t)。最后输出打分D(x, <img src="{{ site.img_path }}/Machine Learning/CGAN5.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>(t))
这实际上就是一个条件GAN(conditional GAN)。对照原始的GAN，只有几个简单的修改。到了这里，就可以直接训练了，也可以完成我们文字 -> 图片的生成任务。但是直接训练的生成图片的质量不是很好，对此作者又提出了两点改进。

### 改进一：GAN-CLS（针对判别器Ｄ的改进）

<img src="{{ site.img_path }}/Machine Learning/CGAN7.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

### 改进二：GAN-INT（针对G的改进）

<img src="{{ site.img_path }}/Machine Learning/CGAN8.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

放一张论文作者实验的图，他是做了花的生成，最上面一行是Ground Truth，下面依次是GAN，GAN-CLS，GAN-INT，GAN-INT-CLS：

<img src="{{ site.img_path }}/Machine Learning/CGAN9.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## StackGAN: Text to Photo-realistic Image Synthesis with Stacked Generative Adversarial Networks

[原文]((https://arxiv.org/pdf/1605.05396.pdf)

针对根据文本句子描述生成图像的任务，借鉴别人提出两个GAN叠加在一起的结构，改进了输入条件的部分，使以前只能生成`96*96`的图片，而现在可以用于生成`256*256`的图片。

<img src="{{ site.img_path }}/Machine Learning/CGAN10.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

其中两个GAN的作用是：**第一个GAN用于根据文本描述生成一张相对粗糙的图像，包括目标物体的大致形状和颜色等，然后再通过第二个GAN去修正之前生成的图并添加细节，比如鸟的嘴和眼睛等。**

<img src="{{ site.img_path }}/Machine Learning/CGAN11.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/CGAN12.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

总结：传统的方法就是只有一个GAN，于是就有人提出用两个GAN堆在一起。实际上，思想就是提出把传统的任务拆成两部分，分段完成。正常我们画图也是会先画出轮廓再上色，把一个相对困难的任务拆分成两个简单的任务。但是任务分开后，如果对所有问题的做法都一样可能效果也不会很好，因此要针对各个任务去找重点。















