---
layout: post
title:  "learning git"
desc: "git--github学习"
keywords: "git,github,jekyll,"
date:   2016-10-01
categories: [tools]
tags: [tools]
icon: fa-bookmark-o
---

# git--github学习

* 可以add多个文件
>$ git add file1.txt<br>
$ git add file2.txt file3.txt<br>
$ git commit -m "add 3 files."

* 下面是一个(包括文件**上传下拉，分支操作**)[网上学习笔记](http://note.youdao.com/share/?id=29b306d4f3c6ac93c1f9713f7442d2a6&type=note#/)

##git的一些常用命令
* git log查看之前的版本

>首先是两篇博文：
> [版本回退](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013744142037508cf42e51debf49668810645e02887691000)
[文件删除](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758392816224cafd33c44b4451887cc941e6716805c000)<hr>

git rm --cached \* -r   删除所有缓冲区的文件，*表示通配符，这里可以统配其他文件。
本地上传
* git init
* git add (folder_name)
* git commit -m ("txt")
* git remote add (respority_name url)
* git push （respority_name branch）
* git remote -v 查看远程仓库的地址
* git pull （respority_name branch
* git branch
* git checkout branch_name
* git clone  respority_url
>也会创建一个新的仓库，并自动将github上的分支设为远端分支。

##文件操作
cat filename 查看文件
vi  filename  操作文件：wq表示退出保存， :q!表示不保存单单退出
git rm --cached * -r   删除所有缓冲区（已在分支上）的文件
git rm name 删除文件
输入 touch .gitignore 在文件夹就生成了一个“.gitignore”文件。
touch name 新增文件
git checkout -- name 删除文件后把本地版本库的回复到文件夹中

## 分支（冲突）
>如果对git的分支的概念及其内容有疑问，请看这里：[git分支](http://www.open-open.com/lib/view/open1328069889514.html#articleHeader15)<br>
如果对git的分支冲突解决，请看廖老师的：[解决冲突](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375840202368c74be33fbd884e71b570f2cc3c0d1dcf000)<hr>

五：分支
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
git remote remove 链接名   ->移除存在的连接
git push remote :<branch>  ->移除远程分支
##ssh网络服务传输协议
有了ssh之后就可以使用ssh协议来传输。

输入 touch .gitignore 在文件夹就生成了一个“.gitignore”文件。
>如果对.gitignore文件有什么疑问，可以查看这个博客：[.gitignore文件详解](http://www.cnblogs.com/eddy-he/archive/2012/03/08/git_ignore_file.html)

##版本回退
git reflog 看所有操作
git reset --hard HEAD^ 回退到上一个版本
git reset --hard 3628164 后面7位版本号

##冲突操作

合并某分支到当前分支：git merge name
告诉我们冲突的内容：git status
git log --graph命令可以看到分支合并图。

## githubpage学习
在githubpage学习中，这个网页本身就是githubpage的一个静态博客。
在用githubpage编写博客时，最常用的就是githubpage加jekyll进行创建属于自己的博客。
在jekll中有许许多多的模板，模板的github地址在[Jekyll  github地址](https://github.com/jekyll/jekyll/wiki/Configuration)

###最后
<img src="{{ site.img_path }}/tools/git.jpg" alt="header" style="height:100%;width:100%;"/>
