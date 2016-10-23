
# java内部类（一）：特点和作用

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
5. 内部类是Java编译器一手操办的。虚拟机并不知道内部类与常规类有什么不同。这一点会在我的下一篇博文中进行验证，如果你很想知道如何验证，请移步：[java内部类（一）:内部类原理]()

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

####  作用
1. 静态内部类的

