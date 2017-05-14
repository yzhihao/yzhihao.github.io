---
layout: post
title: Matplotlib基础
desc: 我的博客系统介绍
keywords: 'blog,Machine Learning,AI'
date: 2017-1-16T00:00:00.000Z
categories:
  - Python
tags:
  - Machine Learning
  - Python
icon: fa-book
---

## 目录
**欢迎在文章下方评论，建议用电脑看**

* 目录
{:toc}

# Matplotlib基础


## 基本用法

	import matplotlib.pyplot as plt #使用import导入模块matplotlib.pyplot，并简写成plt 
	import numpy as np # 使用import导入模块numpy，并简写成np

	x = np.linspace(-1, 1, 50) #使用np.linspace定义x：范围是(-1,1);个数是50. 仿真一维数据组(x ,y)表示曲线1.
	y = 2*x + 1


	plt.figure()# 使用plt.figure定义一个图像窗口.
	plt.plot(x, y)# 使用plt.plot画(x ,y)曲线.
	plt.show()# 使用plt.show显示图像.

得到的图片如下：

Matplotlib


`plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--')`# 曲线的宽度(linewidth)为1.0；曲线的类型(linestyle)为虚线. 使用plt.show显示图像,需要注意的就是这些属性。


## 设置坐标轴

`plt.xlim((-1, 2))`#设置x坐标轴范围：(-1, 2)；
`plt.ylim((-2, 3))`#设置y坐标轴范围：(-2, 3)；
`plt.xlabel('I am x')`#设置x坐标轴名称：’I am x’
`plt.ylabel('I am y')`#设置y坐标轴名称：’I am y’

`plt.yticks([-2, -1.8, -1, 1.22, 3],[r'$really\ bad$', r'$bad$', r'$normal$', r'$good$', r'$really\ good$'])`#使用`plt.yticks`设置y轴刻度以及名称：刻度为[-2, -1.8, -1, 1.22, 3]；对应刻度的名称为[‘really bad’,’bad’,’normal’,’good’, ‘really good’].


`new_ticks = np.linspace(-1, 2, 5) plt.xticks(new_ticks)`：np.linspace定义范围以及个数：范围是(-1,2);个数是5. 使用print打印出新定义的范围. 使用plt.xticks设置x轴刻度：范围是(-1,2);个数是5.


## 图例

legend将要显示的信息来自于上面代码中的 label. 所以我们只需要简单写下一下代码, plt 就能自动的为我们添加图例，也就是lengend加上图例

参数 loc='upper right' 表示图例将添加在图中的右上角.


l1, = plt.plot(x, y2, label='linear line')
l2, = plt.plot(x, y1, color='red', linewidth=1.0, linestyle='--', label='square line')
plt.legend(loc='upper right')


其实matplotlib大部分都是api，而这些东西我们可以在用到的时候在查下，不用都一个一个的记住，提供[这个教程](https://morvanzhou.github.io/tutorials/data-manipulation/plt/)


















