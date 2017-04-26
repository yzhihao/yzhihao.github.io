# Generalization and Equilibrium in Generative Adversarial Nets


这篇论文主要工作如下：提出一个新的量度--神经网络距离来量度真实分布概率和生车概率之间的差距,并证明Wasserstein距离存在的局限性。证明了均衡状态的存在性同时提出一个新的方案-mix+gan.来训练GAN

## 生成模型存在的一些问题

<img src="{{ site.img_path }}/Machine Learning/Equilibrium-GANs.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## JS距离和Wasserstein距离的缺陷




<img src="{{ site.img_path }}/Machine Learning/js_wess1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/js_wess2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

<img src="{{ site.img_path }}/Machine Learning/js_wess3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>