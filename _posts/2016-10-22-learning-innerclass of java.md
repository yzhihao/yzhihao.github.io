---
layout: post
title: java内部类（一）：特点和作用
desc: 学习java内部了
keywords: 'blog,java,'
date: 2016-10-23T00:00:00.000Z
categories:
  - java
tags:
  - java
icon: fa-bookmark-o
---

# java内部类（一）：特点和作用
* 目录
{:toc}

## 先提分类
分类：<br>
(1) 在类中定义一个类(常规内部类，静态内部类)

(2) 在方法中定义一个类(局部内部类，匿名内部类)

## 下面逐个进行讲解：

### 常规内部类或成员内部类

#### 定义：
在方法与方法之间定义的普通的一个类。

#### 特点
1. 可以把类定义为私有内部类，即修饰符外private。
>**注意：**在java的外部普通类是不可以用private修饰的，不然编译不通过，下面是eclipse中的报错信息，不信可以去试试。
>`Illegal modifier for the class XXX; only public, abstract & final are permitted`

2.  在外部类的作用范围内可以任意创建内部类对象，即使内部类是私有的(私有内部类)。即内部类对包围它的外部类可见。
3. 在内部类中可以访问其外部类的所有域，即使是私有域。即外部类对内部类可见。
4. 内部类中不能定义静态成员变量。这个是和静态内部类的区别之一。
5. 内部类是Java编译器一手操办的。虚拟机并不知道内部类与常规类有什么不同。这一点会在我的下一篇博文中进行验证，如果你很想知道如何验证，请移步：[java内部类（一）:内部类原理](https://yzhihao.github.io/java/2016/10/23/deep-learning-innerclass-of-java.html)

#### 作用
>**写在前面：**下面的每一个作用我都写了demo，请移步到我的github：[常规内部类四大作用](https://github.com/yzhihao/MyJavaDemo/tree/BaseJava/src)
>**注意：下面的四大作用分别对应文件夹：innerclass1-4**

****

1. 内部类可以很好的实现隐藏。一般的非内部类，是不允许有 private 与protected权限的，但内部类可以，这样就实现了除了本身的外部类的其他类都不能访问该内部类。
2. 内部类拥有外围类的所有元素的访问权限，这也是常规内部类的特点
3. 可以实现多重继承。
4. 可以避免修改接口而实现同一个类中两种同名方法的调用。即若你要继承和实现的接口中都有你要覆写的方法，而且方法名一样，这是你有不能修改方法名的话，就可以用内部类解决问题。
> 记得在网上看过：内部类和可以实现多个接口是解决java单继承的不足的方式，当然，这个在我们的第三四个作用总就有明显的提到这样的作用。

### 静态内部类：

#### 定义：
在方法和方法之间定义的一个带有static的静态内部类。

#### 特点：
1. 只能访问外部类的静态成员。这是由Java语法中"静态方法不能直接访问非静态成员"所限定。
2. 可以创建静态变量。
3.  生成（new）一个静态内部类不需要外部类成员：这是静态内部类和成员内部类的区别。静态内部类的对象可以直接生成：Outer.Inner in=new Outer.Inner()；而不需要通过生成外部类对象来生成。这样实际上使静态内部类成为了一个顶级类。可以定义私有静态内部类。
>下面是一个静态内部类的特点详解，代码演示

```
package com.devin;

public class MyMain{
    private static String name = "woobo";
    private String num = "X001";
    // 静态内部类可以用public,protected,private修饰
    static class Person {
        // 静态内部类中可以定义静态或者非静态的成员
        private String address = "China";

        private static String x = "as";
        public String mail = "kongbowoo@yahoo.com.cn";// 内部类公有成员

        public void display() {
            // System.out.println(num);//不能直接访问外部类的非静态成员

            // 静态内部类不能访问外部类的非静态成员(包括非静态变量和非静态方法)
            System.out.println(name);// 只能直接访问外部类的静态成员

            // 静态内部类只能访问外部类的静态成员(包括静态变量和静态方法)
            System.out.println("Inner " + address);// 访问本内部类成员。
        }
    }

    public void printInfo() {
        Person person = new Person();

        // 外部类访问内部类的非静态成员:实例化内部类即可
        person.display();

        // System.out.println(mail);//不可访问
        // System.out.println(address);//不可访问
        System.out.println(person.address);// 可以访问内部类的私有成员

        System.out.println(Person.x);// 外部类访问内部类的静态成员：内部类.静态成员
        System.out.println(person.mail);// 可以访问内部类的公有成员
    }

    public static void main(String[] args) {
        MyMain staticTest = new MyMain();
        staticTest.printInfo();
    }
}
```

####  作用：
*  静态内部类的作用都是建立在其特点之上的，其实在大部分时间来说，还是很不常用的在网上我查过了许多。总体来说，记住他的特点。

> 下面介绍几个具体作用：

1. 在设计模式的单例模式中，有一种单例模式的实现是IODH，他是利用静态内部类在初始类的初始化时就加载的原理。具体什么是IODH,网上有一大把，自己查。
2. 在某些特殊的情况下，少了这个静态内部 类还真是不行。如在进行代码程序测试的时候，如果在每一个Java源文件中都设置一个主方法(主方法是某个应用程序的入口，必须具有)，那么会出现很多额 外的代码。而且最主要的时这段主程序的代码对于Java文件来说，只是一个形式，其本身并不需要这种主方法。但是少了这个主方法又是万万不行的。在这种情 况下，就可以将主方法写入到静态内部类中，从而不用为每个Java源文件都设置一个类似的主方法。这对于代码测试是非常有用的。在一些中大型的应用程序开 发中，则是一个常用的技术手段。
3. 在很多框架的源码或者jdk的源码中，会涉及到静态内部类的话，就要是作为工具类，然后把访问限制到最大。比如在ConcurrentHashMap 中HashEntry。

### 局部内部类

#### 定义：
　　就是在方法中定义的类。

#### 特点：
1. 该内部类没有任何的访问控制权限
2. 外围类看不见方法中的局部内部类的，但是局部内部类可以访问外围类的任何成员。
3. 方法体中可以访问局部内部类，但是访问语句必须在定义局部内部类之后。
4. 局部内部类只能访问方法体中的常量，即用final修饰的成员。

#### 作用：

* 根据其特点可以得出其作用。基本上没有怎么用吧。能力有限。。。如有任何见解，可以评论，。

### 匿名内部类

#### 定义：
　　匿名内部类也就是没有名字的内部类，正因为没有名字，所以匿名内部类只能使用一次，它通常用来简化代码编写。但使用匿名内部类还有个前提条件：必须继承一个父类或实现一个接口。

#### 特点和实例
* 实例1:不使用匿名内部类来实现抽象方法

```
abstract class Person {
    public abstract void eat();
}

class Child extends Person {
    public void eat() {
        System.out.println("eat something");
    }
}

public class Demo {
    public static void main(String[] args) {
        Person p = new Child();
        p.eat();
    }
}
运行结果：eat something
```

>可以看到，我们用Child继承了Person类，然后实现了Child的一个实例，将其向上转型为Person类的引用。
但是，如果此处的Child类只使用一次，那么将其编写为独立的一个类岂不是很麻烦？
这个时候就引入了匿名内部类。


* 实例2：匿名内部类的基本实现

```
abstract class Person {
    public abstract void eat();
}
 
public class Demo {
    public static void main(String[] args) {
        Person p = new Person() {
            public void eat() {
                System.out.println("eat something");
            }
        };
        p.eat();
    }
}
运行结果：eat something
```

>可以看到，我们直接将抽象类Person中的方法在大括号中实现了,这样便可以省略一个类的书写。

***并且，匿名内部类还能用于接口上***

* 实例3：在接口上使用匿名内部类

```
interface Person {
    public void eat();
}
 
public class Demo {
    public static void main(String[] args) {
        Person p = new Person() {
            public void eat() {
                System.out.println("eat something");
            }
        };
        p.eat();
    }
}
运行结果：eat something
```


>由上面的例子可以看出，只要一个类是抽象的或是一个接口，那么其子类中的方法都可以使用匿名内部类来实现

****
>最常用的情况就是在多线程的实现上，因为要实现多线程必须继承Thread类或是继承Runnable接口

* 实例4：Thread类的匿名内部类实现

```
public class Demo {
    public static void main(String[] args) {
        Thread t = new Thread() {
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    System.out.print(i + " ");
                }
            }
        };
        t.start();
    }
}
运行结果：1 2 3 4 5

```


* 实例5：Runnable接口的匿名内部类实现

```
public class Demo {
    public static void main(String[] args) {
        Runnable r = new Runnable() {
            public void run() {
                for (int i = 1; i <= 5; i++) {
                    System.out.print(i + " ");
                }
            }
        };
        Thread t = new Thread(r);
        t.start();
    }
}
运行结果：1 2 3 4 5
```

<!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="201610231" data-title="learning-innerclass of java（1）" data-url=""></div>
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