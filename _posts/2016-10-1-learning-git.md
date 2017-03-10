---
layout: post
title: learning git
desc: git--github学习
keywords: 'git,github,jekyll,'
date: 2016-10-01T00:00:00.000Z
Thread_Key: 20161011
commeturl: tools/2016/10/01/learning-git.html
categories:
  - tools
tags:
  - tools
icon: fa-bookmark-o
comments:
  - author:
      type: full
      displayName: yzhihao
      url: 'https://github.com/yzhihao'
      picture: 'https://avatars.githubusercontent.com/u/18466640?v=3&s=73'
    content: '123'
    date: 2016-10-18T05:34:01.344Z
  - author:
      type: full
      displayName: yzhihao
      url: 'https://github.com/yzhihao'
      picture: 'https://avatars.githubusercontent.com/u/18466640?v=3&s=73'
    content: >-
      &#x6765;&#x6765;&#x6765;&#xFF0C;&#x4E00;&#x8D77;&#x5B66;&#x4E60;git-github&#xFF0C;&#x6B22;&#x8FCE;&#x5728;&#x8FD9;&#x91CC;&#x7559;&#x8A00;&#x3002;
    date: 2016-10-18T06:17:32.407Z
---

# git--github学习

* 目录
{:toc}

## 首先什么是github，什么是git。

* git是一个版本控制工具，是一个系统，在windows下就是一个软件。
* github是一个用git做版本控制的项目托管平台，是一个网站。

* 想快速入门的话可以先查看是一个(包括文件**上传下拉，分支操作**)[网上入门学习笔记](http://note.youdao.com/share/?id=29b306d4f3c6ac93c1f9713f7442d2a6&type=note#/)
* 网上教程也有一堆，推荐的话还是廖雪峰老师的:[git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)

## 几个概念：
* 工作区（Working Directory）：就是你在电脑里能看到的目录下的工作区间。
* 版本库（Repository）：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。
* Git的版本分为两大部分，一是：称为stage（或者叫index）的暂存区；还有就是分支,创建仓库时会默认创建master分支。
* 什么是分支：每次的提交到版本库，都有一个记录，Git都把它们串成一条时间线，这条时间线就是一个分支。在Git里，有个主分支，即master分支。
* 当我用git add ...时，是讲工作区的提交到版本库的暂存区。
* 当我们用git commit -m ... 时，是提交到版本库的当前分支。

<img src="{{ site.img_path }}/tools/git1.jpg" alt="header1" style="height:auto!important;width:auto!important;max-width:1020px;"/>

## git的一些常用命令

* git init 创建一个仓库
* git add (folder_name) 将文件提交到暂存区，当folder_name被替换成.的时候，即git add . 表示将所有文件提交到暂存区。
* git commit -m ("txt") 将暂存区文件提交到当前分支。
* git remote add (respority_name url) 添加一个远程连接。
* git push （respority_name branch） 将当前分支提交到远程仓库。
* git remote -v 查看远程仓库的地址
* git pull （respority_name branch）将远程仓库的某个分支拉下
**注意：git pull可以看成是git fetch加上git merge两个命令**

* git branch 查看所有分支。
* git checkout branch_name 切换分支。
* 可以用add添加文件到暂存区。代码如下：

```
git add file1.txt//增加file1.txt文件
git add file2.txt file3.txt//增加file1.txt，file3.txt文件
```

* git clone  respority_url 克隆远程仓库。
>也会创建一个新的仓库，并自动将github上的分支设为远端分支。

## 文件操作
* cat filename 查看文件（没有此文件的话不会新建）
* vi  filename  操作文件（没有此文件的话会新建）
>退出编辑文件操作按esc健后：
`：wq表示退出保存， :q!表示不保存单单退出`

* git rm --cached * -r   删除所有缓冲区（已在分支上）的文件
* git rm name 删除文件
* 输入 touch .gitignore 在文件夹就生成了一个“.gitignore”文件。
>* gitignore”文件表示你不想push到github上去的配置文件。
>* 如果对.gitignore文件内容语法有什么疑问，可以查看这个博客：[.gitignore文件详解](http://www.cnblogs.com/eddy-he/archive/2012/03/08/git_ignore_file.html)

* touch name 单纯新增文件
* git checkout -- name 删除文件后把本地版本库的回复到文件夹中
* git rm --cached \* -r   删除所有缓冲区的文件，*表示通配符，这里可以统配其他文件。

>如果对文件删除操作比较生疏，可以查看这篇博文：[文件删除](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758392816224cafd33c44b4451887cc941e6716805c000)

## 分支
总结创建与合并分支命令如下：
**只有commit之后才能操作分支**

删除远程的分支：git push origin :（分支名）
查看分支：git branch

创建分支：git branch name

切换分支：git checkout name

创建+切换分支：git checkout –b name

合并某分支到当前分支：git merge name

git reflog用来记录你的每一次命令

删除分支：git branch –d name

* 合并就是时间线的合并
* vi (folder_name)修改文件
* 用esc健：wq就是保存退出
* 冲突发生在同一文件名上

## 连接远程操作
* git remote remove 链接名   ->移除存在的连接
* git push remote :<branch>  ->移除远程分支
* git remote -v 详细查看连接信息。

### ssh网络服务传输协议
有了ssh之后就可以使用ssh协议来传输。



## 版本回退
* git log查看之前的版本（自打开一个 ）
* git reflog 看所有之前的commit操作（自从仓库创建算起）
* git reset --hard HEAD^ 回退到上一个版本
* git reset --hard 3628164 后面7位版本号，这样可以回退到任意版本

>关于版本回退，也可看查看这篇博文：[版本回退](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013744142037508cf42e51debf49668810645e02887691000)

## 分支（冲突）
>如果对git的分支的概念及其内容有疑问，请看这里：[git分支](http://www.open-open.com/lib/view/open1328069889514.html#articleHeader15)<br>
如果对git的分支冲突解决，请看廖老师的：[解决冲突](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840202368c74be33fbd884e71b570f2cc3c0d1dcf000)

## 冲突操作
* 合并某分支到当前分支：git merge name
* 告诉我们冲突的内容：git status
* git log --graph命令可以看到分支合并图。

## githubpage学习
* 在githubpage学习中，这个网页本身就是githubpage的一个静态博客。
在用githubpage编写博客时，最常用的就是githubpage加jekyll进行创建属于自己的博客。
* 在jekll中有许许多多的模板，模板的github地址在[Jekyll  github地址](https://github.com/jekyll/jekyll/wiki/Configuration)

## 最后
<img src="{{ site.img_path }}/tools/git.jpg" alt="header" style="height:100%;width:100%;"/>


<!-- 多说评论框 start -->
  <div class="ds-thread" data-thread-key="20161011" data-title="learning git" data-url=""></div>
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
