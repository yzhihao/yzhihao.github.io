---
layout: post
title: TensorFlow 基础
desc: 我的博客系统介绍
keywords: 'blog,Machine Learning,AI'
date: 2017-5-12T00:00:00.000Z
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

# TensorFlow 基础

## 基本概念：

    使用图 (graph) 来表示计算任务.
    在被称之为 会话 (Session) 的上下文 (context) 中执行图.
    使用 tensor 表示数据.
    通过 变量 (Variable) 维护状态.
    使用 feed 和 fetch 可以为任意的操作(arbitrary operation) 赋值或者从其中获取数据.

### Tensor

TensorFlow 程序使用 tensor 数据结构来代表所有的数据, 计算图中, 操作间传递的数据都是 tensor. 你可以把 TensorFlow tensor 看作是一个 n 维的数组或列表. 一个 tensor 包含一个静态类型 rank, 和 一个 shape.

### 计算的过程

* 一个 TensorFlow 图描述了计算的过程. 为了进行计算, 图必须在 会话 里被启动. 会话 将图的 op 分发到诸如 CPU 或 GPU 之类的 设备 上, 同时提供执行 op 的方法. 这些方法执行后, 将产生的 tensor 返回. 在 Python 语言中, 返回的 tensor 是 numpy ndarray 对象
* TensorFlow 程序通常被组织成一个构建阶段和一个执行阶段. 在构建阶段, op 的执行步骤 被描述成一个图. 在执行阶段, 使用会话执行执行图中的 op.

>例如： 通常在构建阶段创建一个图来表示和训练神经网络, 然后在执行阶段反复执行图中的训练 op.

### 构建图

Python 库中, op 构造器的返回值代表被构造出的 op 的输出, 这些返回值可以传递给其它 op 构造器作为输入.

TensorFlow Python 库有一个默认图 (default graph), op 构造器可以为其增加节点. 这个默认图对 许多程序来说已经足够用了.
>这里就是说我们直接引入TensorFlow就是一个默认图

    import tensorflow as tf

    # 创建一个常量 op, 产生一个 1x2 矩阵. 这个 op 被作为一个节点
    # 加到默认图中.
    #
    # 构造器的返回值代表该常量 op 的返回值.
    matrix1 = tf.constant([[3., 3.]])

    # 创建另外一个常量 op, 产生一个 2x1 矩阵.
    matrix2 = tf.constant([[2.],[2.]])

    # 创建一个矩阵乘法 matmul op , 把 'matrix1' 和 'matrix2' 作为输入.
    # 返回值 'product' 代表矩阵乘法的结果.
    product = tf.matmul(matrix1, matrix2)

默认图现在有三个节点, 两个 constant() op, 和一个matmul() op. 为了真正进行矩阵相乘运算, 并得到矩阵乘法的 结果, 你必须在会话里启动这个图.
>想着，tf进行一次的操作，就有一个op，也就是一个节点

### 在一个会话中启动图

构造阶段完成后, 才能启动图. 启动图的第一步是创建一个 Session 对象, 如果无任何创建参数, 会话构造器将启动默认图.

    # 启动默认图.
    sess = tf.Session()

    # 调用 sess 的 'run()' 方法来执行矩阵乘法 op, 传入 'product' 作为该方法的参数. 
    # 上面提到, 'product' 代表了矩阵乘法 op 的输出, 传入它是向方法表明, 我们希望取回
    # 矩阵乘法 op 的输出.
    #
    # 整个执行过程是自动化的, 会话负责传递 op 所需的全部输入. op 通常是并发执行的.
    # 
    # 函数调用 'run(product)' 触发了图中三个 op (两个常量 op 和一个矩阵乘法 op) 的执行.
    #
    # 返回值 'result' 是一个 numpy `ndarray` 对象.
    result = sess.run(product)
    print result
    # ==> [[ 12.]]

    # 任务完成, 关闭会话.
    sess.close()

Session 对象在使用完后需要关闭以释放资源. 除了显式调用 close 外, 也可以使用 "with" 代码块 来自动完成关闭动作.

    with tf.Session() as sess:
      result = sess.run([product])
      print result

>在实现上, TensorFlow 将图形定义转换成分布式执行的操作, 以充分利用可用的计算资源(如 CPU 或 GPU). 一般你不需要显式指定使用 CPU 还是 GPU, TensorFlow 能自动检测. 如果检测到 GPU, TensorFlow 会尽可能地利用找到的第一个 GPU 来执行操作.

## 指定机器设备

如果机器上有超过一个可用的 GPU, 除第一个外的其它 GPU 默认是不参与计算的. 为了让 TensorFlow 使用这些 GPU, 你必须将 op 明确指派给它们执行. with...Device 语句用来指派特定的 CPU 或 GPU 执行操作:

    with tf.Session() as sess:
      with tf.device("/gpu:1"):
        matrix1 = tf.constant([[3., 3.]])
        matrix2 = tf.constant([[2.],[2.]])
        product = tf.matmul(matrix1, matrix2)
        ...

设备用字符串进行标识. 目前支持的设备包括:

* "/cpu:0": 机器的 CPU.
* "/gpu:0": 机器的第一个 GPU, 如果有的话.
* "/gpu:1": 机器的第二个 GPU, 以此类推.

### 交互式使用
文档中的 Python 示例使用一个会话 Session 来 启动图, 并调用 Session.run() 方法执行操作.

为了便于使用诸如 IPython 之类的 Python 交互环境, 可以使用 InteractiveSession 代替 Session 类, 使用 Tensor.eval() 和 Operation.run() 方法代替 Session.run(). 这样可以避免使用一个变量来持有会话.

    # 进入一个交互式 TensorFlow 会话.
    import tensorflow as tf
    sess = tf.InteractiveSession()

    x = tf.Variable([1.0, 2.0])
    a = tf.constant([3.0, 3.0])

    # 使用初始化器 initializer op 的 run() 方法初始化 'x' 
    x.initializer.run()

    # 增加一个减法 sub op, 从 'x' 减去 'a'. 运行减法 op, 输出结果 
    sub = tf.sub(x, a)
    print sub.eval()
    # ==> [-2. -1.]


## 变量

Variables for more details. 变量维护图执行过程中的状态信息. 下面的例子演示了如何使用变量实现一个简单的计数器.

    # 创建一个变量, 初始化为标量 0.
    state = tf.Variable(0, name="counter")

    # 创建一个 op, 其作用是使 state 增加 1

    one = tf.constant(1)
    new_value = tf.add(state, one)
    update = tf.assign(state, new_value)

    # 启动图后, 变量必须先经过`初始化` (init) op 初始化,
    # 首先必须增加一个`初始化` op 到图中.
    init_op = tf.initialize_all_variables()

    # 启动图, 运行 op
    with tf.Session() as sess:
      # 运行 'init' op
      sess.run(init_op)
      # 打印 'state' 的初始值
      print sess.run(state)
      # 运行 op, 更新 'state', 并打印 'state'
      for _ in range(3):
        sess.run(update)
        print sess.run(state)

    # 输出:

    # 0
    # 1
    # 2
    # 3

代码中 assign() 操作是图所描绘的表达式的一部分, 正如 add() 操作一样. 所以在调用 run() 执行表达式之前, 它并不会真正执行赋值操作.
>要注意的是update = tf.assign(state, new_value)这一句，因为add是构建，没有run之前都不会复制

通常会将一个统计模型中的参数表示为一组变量. 例如, 你可以将一个神经网络的权重作为某个变量存储在一个 tensor 中. 在训练过程中, 通过重复运行训练图, 更新这个 tensor.

## Fetch

为了取回操作的输出内容, 可以在使用 Session 对象的 run() 调用 执行图时, 传入一些 tensor, 这些 tensor 会帮助你取回结果. 在之前的例子里, 我们只取回了单个节点 state, 但是你也可以取回多个 tensor:

    input1 = tf.constant(3.0)
    input2 = tf.constant(2.0)
    input3 = tf.constant(5.0)
    intermed = tf.add(input2, input3)
    mul = tf.mul(input1, intermed)

    with tf.Session() as sess:
      result = sess.run([mul, intermed])
      print result

    # 输出:
    # [array([ 21.], dtype=float32), array([ 7.], dtype=float32)]

>注意是数组

需要获取的多个 tensor 值，在 op 的一次运行中一起获得（而不是逐个去获取 tensor）。

## 数据读取


### feed 机制

供给数据(Feeding)： 在TensorFlow程序运行的每一步， 让Python代码来供给数据。

TensorFlow 提供了 feed 机制, 该机制 可以临时替代图中的任意操作中的 tensor 可以对图中任何操作提交补丁, 直接插入一个 tensor.

feed 使用一个 tensor 值临时替换一个操作的输出结果. 你可以**提供 feed 数据作为 run() 调用的参数. **feed 只在调用它的方法内有效, 方法结束, feed 就会消失. **最常见的用例是将某些特殊的操作指定为 "feed" 操作, 标记的方法是使用 tf.placeholder() 为这些操作创建占位符.**

例子如下：

    input1 = tf.placeholder(tf.float32)
    input2 = tf.placeholder(tf.float32)
    output = tf.mul(input1, input2)

    with tf.Session() as sess:
      print sess.run([output], feed_dict={input1:[7.], input2:[2.]})

    # 输出:
    # [array([ 14.], dtype=float32)]

for a larger-scale example of feeds. 如果没有正确提供 feed, placeholder() 操作将会产生错误. MNIST 全连通 feed 教程 (source code) 给出了一个更大规模的使用 feed 的例子.

### 从文件读取数据

从文件读取数据： 在TensorFlow图的起始， 让一个输入管线从文件中读取数据。

这个详细可以看[数据读取](http://wiki.jikexueyuan.com/project/tensorflow-zh/how_tos/reading_data.html#AUTOGENERATED-reading-from-files)

读取CSV 文件时，是


	filename_queue = tf.train.string_input_producer(["file0.csv", "file1.csv"])

	reader = tf.TextLineReader()
	key, value = reader.read(filename_queue)

	# Default values, in case of empty columns. Also specifies the type of the
	# decoded result.
	record_defaults = [[1], [1], [1], [1], [1]]
	col1, col2, col3, col4, col5 = tf.decode_csv(
		value, record_defaults=record_defaults)
	features = tf.concat(0, [col1, col2, col3, col4])

	with tf.Session() as sess:
	  # Start populating the filename queue.
	  coord = tf.train.Coordinator()
	  threads = tf.train.start_queue_runners(coord=coord)

	  for i in range(1200):
		# Retrieve a single instance:
		example, label = sess.run([features, col5])

	  coord.request_stop()
	  coord.join(threads)



### 预加载数据： 在TensorFlow图中定义常量或变量来保存所有数据(仅适用于数据量比较小的情况)。


上面是一种方式，当然还有另为一种方式就是输入列队来喂入数据的。

## Saving Variables

Create a Saver with tf.train.Saver() to manage all variables in the model.

也就是暂存结果的操作。

    # Create some variables.
    v1 = tf.Variable(..., name="v1")
    v2 = tf.Variable(..., name="v2")
    ...
    # Add an op to initialize the variables.
    init_op = tf.global_variables_initializer()

    # Add ops to save and restore all the variables.
    saver = tf.train.Saver()

    # Later, launch the model, initialize the variables, do some work, save the
    # variables to disk.
    with tf.Session() as sess:
      sess.run(init_op)
      # Do some work with the model.
      ..
      # Save the variables to disk.
      save_path = saver.save(sess, "/tmp/model.ckpt")
      print("Model saved in file: %s" % save_path)

## Restoring Variables

The same Saver object is used to restore variables. Note that when you restore variables from a file you do not have to initialize them beforehand.

也就是在重新使用的方法。

    # Create some variables.
    v1 = tf.Variable(..., name="v1")
    v2 = tf.Variable(..., name="v2")
    ...
    # Add ops to save and restore all the variables.
    saver = tf.train.Saver()

    # Later, launch the model, use the saver to restore variables from disk, and
    # do some work with the model.
    with tf.Session() as sess:
      # Restore variables from disk.
      saver.restore(sess, "/tmp/model.ckpt")
      print("Model restored.")
      # Do some work with the model
      ...

