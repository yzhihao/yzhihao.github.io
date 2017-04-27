# Planning by Dynamic Programming

Dynamic: sequential or temporal component to the problem

Programming: optimising a “program”, i.e. a policy  c.f. linear programming

By breaking them down into subproblems，Solve the subproblems and then Combine solutions to subproblems

Dynamic Programming is a very general solution method for problems which have two properties:

- Optimal substructure
	- Principle of optimality applies
	- Optimal solution can be decomposed into subproblems
- Overlapping subproblems
	- Subproblems recur many times
	- Solutions can be cached and reused

>这里用最短路径作为例子。注意整体的问题可以分解成众多子问题。

**Markov decision processes satisfy both properties**

1. Bellman equation gives recursive decomposition
2. Value function stores and reuses solutions

Dynamic programming assumes full knowledge of the MDP,It is used for planning in an MDP


## 动态规划与Planning

动态规划是这样一种方法，它将一个复杂的问题切分成一系列简单的子问题，一旦解决了这些简单的子问题，再将这些子问题的解结合起来变成复杂问题的解，同时将它们的解保存起来，如果下一次遇到了相同的子问题那么就不用再重新计算子问题的解[1]。其中“动态”是指某个问题是由序列化状态组成，状态step-by-step的改变，从而可以step-by-step的来解这个问题，“规划”即优化子问题。而MDP有Bellman方程能够被递归的切分成子问题，同时它有值函数，保存了每一个子问题的解，因此它能通过动态规划来求解。针对MDP，切分成的子问题就是在每个状态下应该选择的action是什么，MDP的子问题是以一种递归的方式存在，这一时刻的子问题取决于上一时刻的子问题选择了哪个action。

MDP需要解决的问题有两种，**第一种是prediction，它已知MDP的S,A,P,R,γ以及policy，目标是算出在每个状态下的value function，即处于每个状态下能够获得的reward是多少。而第二种是control，它已知MDP的S,A,P,R,γ但是policy未知，因此它的目标不仅是计算出最优的value function而且要给出最优的Policy。**

当已知MDP的状态转移矩阵时，environment的模型就已知了，此时可以看成Planning问题，动态规划则是用来解决MDP的Planning问题，主要解决途径有两种，**Policy Iteration和Value Iteration。**

##  problem of prediction and control

<img src="{{ site.img_path }}/Machine Learning/control and pre1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

1. prediction可以看成就是在评估一个策略，**注意这里的策略已经给出**，用到的Bellman是期望
2. prediction可以看成就是在寻找一个策略，注意这里的策略是没有给出的，是要我们去寻找的，这里用到的Bellman就是最优解。

## value iteration and policy iteration

<img src="{{ site.img_path }}/Machine Learning/itertion1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


###  policy iteration

<img src="{{ site.img_path }}/Machine Learning/27Policy_Iteration.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

那么这里要注意的是policy evaluation部分。这里的迭代很重要的一点是需要知道state状态转移概率p。也就是说依赖于model模型。而且按照算法要反复迭代直到收敛为止。所以一般需要做限制。比如到某一个比率或者次数就停止迭代。那么需要特别说明的是不管是策略迭代还是值迭代都是在理想化的情况下（上帝视角）推导出来的算法，本质上并不能直接应用，因为依赖Model。

###  value iteration


<img src="{{ site.img_path }}/Machine Learning/27value_iteration.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/27Iteration_any.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


## Greedy Policy Improvement

<img src="{{ site.img_path }}/Machine Learning/greedily.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

In Small Gridworld improved policy was optimal, π‘ = π∗and In general, need more iterations of improvement / evaluation，But this process of policy iteration always converges to π∗

>在这里需要说明的是，在那个例子中，因为是在一个状态的一个策略之后就是另外一个状态，所以这里可以看成是简单的两个s（k）相加看成s（k+1），注意这里的衰减因子是1.

## solve for known MDP

>解决环境已知的情况的（ transitions / rewards（没有特定的转换函数和价值函数）已知）的问题！


因此，针对MDP要解决的两个问题，有如下几种方式来解决。针对prediction，因为它的目标是在已知的Policy下得到收敛的value function，因此针对问题不断迭代计算Bellman Expectation Equation就够了，但是control则需要同时获得最优的policy，那么在Iterative Policy Evaluation的基础上加入一个选择Policy的过程就行了，也就是上面的Policy Iteration，另外Value Iteration虽然在迭代的过程中没有显式计算出policy，但是在得到最优的value function之后就能推导出最优的policy，因此也能用做解决control问题。


<img src="{{ site.img_path }}/Machine Learning/mdp_solver.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

