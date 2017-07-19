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

上面的公式可能不太好理解，下面结合例子和公式，在理解下！

<img src="{{ site.img_path }}/Machine Learning/27Policy_Iteration.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

那么这里要注意的是policy evaluation部分。这里的迭代很重要的一点是需要知道state状态转移概率p。也就是说依赖于model模型。而且按照算法要反复迭代直到收敛为止。所以一般需要做限制。比如到某一个比率或者次数就停止迭代。那么需要特别说明的是不管是策略迭代还是值迭代都是在理想化的情况下（上帝视角）推导出来的算法，本质上并不能直接应用，因为依赖Model。

图是一个叫Small Gridworld的例子，左上角和右下角是终点，γ=1，移动一步reward减少1，起始的random policy是朝每个能走的方向概率相同，先单独看左边一列，它表示在第k次迭代每个state上value function的值，这一列始终采用了random policy，这里的value function就是通过Bellman Expectation Equation得到的，考虑k=2的情况，-1.7 = -1.0 + 2*(1/3.0)*(-1)，-2.0 = -1.0 + 4*(1/4.0)*(-1)。而右边一列就是在当前的value function情况下通过greedy算法找到当前朝哪个方向走更好。

Policy Iteration会一直迭代到收敛，具体证明过程可以去看视频(46:09起)。

<img src="{{ site.img_path }}/Machine Learning/37value_iteration1.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


###  value iteration


<img src="{{ site.img_path }}/Machine Learning/27value_iteration.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


<img src="{{ site.img_path }}/Machine Learning/27Iteration_any.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

第一种是对于所有的状态计算出式子右边的部分，然后同时更新所有的V(s),这种称作 同步更新（Synchronous Update）；另一种叫做异步更新（Asynchronous Update），假设我们按照固定的状态顺序更新V(s)，那么首先会更新第1个状态 的V(s)，接着是第2个状态的V(s)、第3个状态的V(s)、第4个状态的V(s) ，如果在更新第5个状态的V(s)用到的V(s′)恰好是第1、2、3、4状态的， 那么我们使用的V(s′)是前面几次迭代更新的版本。两种方法中异步更新会 收敛地稍微快一点，值迭代会使得V(s)不断地向V<sup>∗</sup>(s)接近，如 是最后求解出来的V<sup>∗</sup>(s)。

<img src="{{ site.img_path }}/Machine Learning/37value_iteration3.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

求解出V<sup>∗</sup>(s)之后，根据就可以计算π<sup>∗</sup>(s)， 下面举一个例子计算π([3,1])的最优策略，可以 计算出采取各个动作的未来总回报的期望，假设机器人碰到墙壁之后会回到 原来的位置，所以机器人向EE走的时候有0.1的可能性会碰到墙壁然后又 返回到[3,1]位置。

<img src="{{ site.img_path }}/Machine Learning/37value_iteration2.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>


对比4个方向的未来总回报的期望值之后，发现采取E动作之后得到的值最大， 所以在[3,1]位置会采取动作E。对每个状态都计算最优动作之后就可以得到如 所示的结果。


## 加深理解

第一：这个是对于model的最优决策寻找方式！第二：在value iteration中的可以直接看作 Greedy Policy Improvement的另一种作用（更新值而不是寻找策略），可以看到，他们的公式是一样的。第三：看上去value iteration是比policy iteration更加直接的。

## Greedy Policy Improvement

<img src="{{ site.img_path }}/Machine Learning/greedily.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

In Small Gridworld improved policy was optimal, π‘ = π∗and In general, need more iterations of improvement / evaluation，But this process of policy iteration always converges to π∗

>在这里需要说明的是，在那个例子中，因为是在一个状态的一个策略之后就是另外一个状态，所以这里可以看成是简单的两个s（k）相加看成s（k+1），注意这里的衰减因子是1.

## solve for known MDP

>解决环境已知的情况的（ transitions / rewards（没有特定的转换函数和价值函数）已知）的问题！


因此，针对MDP要解决的两个问题，有如下几种方式来解决。针对prediction，因为它的目标是在已知的Policy下得到收敛的value function，因此针对问题不断迭代计算Bellman Expectation Equation就够了，但是control则需要同时获得最优的policy，那么在Iterative Policy Evaluation的基础上加入一个选择Policy的过程就行了，也就是上面的Policy Iteration，另外Value Iteration虽然在迭代的过程中没有显式计算出policy，但是在得到最优的value function之后就能推导出最优的policy，因此也能用做解决control问题。


<img src="{{ site.img_path }}/Machine Learning/mdp_solver.png" alt="header1" style="height:auto!important;width:auto%;max-width:1020px;"/>

