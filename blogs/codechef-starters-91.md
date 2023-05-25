---
title: "Solutions to Codechef Contest Starters 91 Div 2"
date: "25 May 2023"
category: "Competitive Programming"
tags: ['Codechef','Starters 91']
about: "Codechef Contest Starters provide an excellent platform for budding programmers to test their coding skills and enhance their problem-solving abilities. In this blog post, we will delve into the solutions of the problems from Codechef Contest Starters 91 Div 2. By understanding these solutions, you can sharpen your coding prowess and gain valuable insights into tackling similar challenges in the future."
---



# Problem 1 : [Blobby Volley Scores](https://www.codechef.com/START91B/problems/BLOBBYVOLLEY)

- This is a very basic Problem and can be solved by *brute force*.


My Solution:
```Python
import sys
sys.setrecursionlimit(2147483647)
input = sys.stdin.readline

for _ in range(int(input())):
    n = int(input())
    s = input().strip()
    A_is_server = True
    A_score = 0
    B_score = 0
    for i in s:
        if i == "A":
            if A_is_server:
                A_score += 1
            else:
                A_is_server = True
        else:
            if A_is_server:
                A_is_server = False
            else:
                B_score += 1
    print(A_score, B_score)
```
<br>

___

# Problem 2 : [Odd GCD Permutation](https://www.codechef.com/START91B/problems/NAS_2523)
Problem : We want to find Permutation of {1,2,3,...,N} such that GCD(P1, P3,...) > GCD(P2,P4...).

**Observation :**
1. GCD(1,x) = 1. It means that GCD of any number and 1 will always be 1.
2. Since GCD(1,x) is always 1, hence 1 cannot be on an Odd place.


- It is not hard to see now that all even numbers will be on odd places and vice versa.

- If n is odd then if is never possible to make such a Permutation.

- Now try to make the lexologically largest Permutation.

My solution :
```Python:
import sys
sys.setrecursionlimit(2147483647)
input = sys.stdin.readline

for _ in range(int(input())):
    n = int(input())
    if n & 1:
        print(-1)
        continue
    else:
        for i in reversed(range(1, n+1, 2)):
            print(i+1, i, end=" ")
        print()
```

___

# Problem 3 : [Chef Odd](https://www.codechef.com/START91B/problems/CHEFODD)
### Probelm Statement :
- Given N and K, determine whether it’s possible to partition the integers {1,2,3...N} into exactly K groups such that:
- Each group contains atleast 2 integers.
- The sum of each group is odd.

### Observations:

1. Let n be an Even number 
We know that Odd+Odd = Even and Even+Even = Odd. 

Hence We can only club Odd and Even numbers together.

if n=6:

1 2 3 4 5 6 => (1,2) (3,4) (5,6) 

Hence the maximum number of subsets if n/2; or ceil of n/2 (if n is odd)

But if N is odd, the it cannot be n/2 as minimum number of elements in each subset is 2.

Also Odd+odd+odd = Odd.
Hence if We can form 5 subsets => 0dd+0dd+0dd+0dd+0dd ==> We can also form 3 subsets => 0dd+0dd+0dd => We can also form 1 subset.

My Solution:
```Python:
import sys
sys.setrecursionlimit(2147483647)
input = sys.stdin.readline

for _ in range(int(input())):
    n, k = map(int, input().split())
    x = (n+1) >> 1
    if n & 1:
        if k == x:
            print("NO")
            continue
    if k > x:
        print("NO")
        continue
    if x & 1:
        if k & 1:
            print("YES")
        else:
            print("NO")
    else:
        if k & 1:
            print("NO")
        else:
            print("YES")

```
___

# Problem 4 : [Maximum Sum Permutatition](https://www.codechef.com/START91B/problems/MAXSUMPERM)

### Editorial :

- Suppose $A$ was fixed. 
- Let’s look at how $X$ is computed from a different perspective.
- For each query $(L_i, R_i)$, let’s say we select all the indices from $L_i$ to $R_i$.
- Let $C_i$ be the number of times index $i$ is selected across all the queries.
- Then, the final value of $X$ is simply $\sum_{i=1}^N C_i \cdot A_i$, that is, the sum of $A_i$ multiplied by the number of times index $i$ was selected; across all $i$.
- Notice that the $C_i$ values are completely independent of ordering of $A$; and depend purely on the query indices.
- All the $C_i$ values can be computed in $\mathcal{O}(N + Q)$ time.

Let’s start with $C_i = 0$ for all $i$.
For each query $(L_i, R_i)$, we want to add $1$ to each $C_j$ such that $L_i \leq j \leq R_i$.
Doing this in a bruteforce manner will take $\mathcal{O}(N \cdot Q)$ time.
However, we can do better if we process queries offline.
In fact, processing many range-add updates like this offline is a standard trick, and can be done with the help of prefix sums/difference arrays.
The idea is as follows:

Consider a new array $D$ of length $N$, where $D_i = C_i - C_{i-1}$ (treat $C_0 = 0$).
$D$ is the difference array of $C$.
Note that if we know the values of array $D$, then finding $C$ is easy: we have $D_1 + D_2 + \ldots + D_i = (C_1 - C_0) + (C_2 - C_1) + \ldots + (C_i - C_{i-1}) = C_i - C_0 = C_i$.
So, $C$ is simply the prefix sum of the $D$ array!
Now, look at how queries on $C$ change $D$.
If we add $1$ to the range from $L$ to $R$ of $C$, then:


$D_L$ increases by $1$, because $D_L = C_L - C_{L-1}$ and the latter doesn’t change.

$D_{L+1}, D_{L+2}, \ldots, D_R$ all don’t change, since we’re both adding $1$ and subtracting $1$ from them.

$D_{R+1}$ decreases by $1$.

So, each update on $C$ only changes two values of $D$.

Maintaining this is therefore very easy: start with $D$ filled with all zeros; and for each update $(L, R)$, increment $D_L$ by $1$ and decrement $D_{R+1}$ by $1$.

Finally, obtain $C$ as the prefix sum array of $D$.
Now, each query takes $\mathcal{O}(1)$ work, and we compute prefix sums once at the end; for $\mathcal{O}(N+Q)$ time in total.

Once the $C_i$ values are known, we want to ‘match’ the values of $A$ to them so that $\sum C_i\cdot A_i$ is maximized.

Editorialist Code:

``` Python:
for test in range(int(input())):
    n, q = map(int, input().split())
    a = sorted(list(map(int, input().split())))
    ct = [0]*(n+1)
    for _ in range(q):
        l, r = map(int, input().split())
        ct[l-1] += 1
        ct[r] -= 1
    for i in range(1, n): ct[i] += ct[i-1]
    indices = list(range(n))
    indices.sort(key = lambda i : ct[i])
    ans = [0]*n
    x = 0
    for i in range(n):
        ans[indices[i]] = a[i]
        x += ct[indices[i]] * a[i]
    print(x)
    print(*ans)
```

<br>

___

# Problem 5 : [XOR & Sum](https://www.codechef.com/START91B/problems/XOR_EQ_SUM)

### PROBLEM:

Given $L$ and $R$, find the number of integers $x$ such that there exist $L \leq a \leq b \leq R$ satisfying $a+b = a\oplus b = x$.

## Editorial

First off, $a + b = a\oplus b$ means that $a$ and $b$ must have completely disjoint binary representations, i.e, a & b = 0.

With that in mind, let’s go over the subtasks.


## Subtask 1
The limits here are very small, simply iterate over all pairs of $(a, b)$, and if they satisfy the condition insert their sum into a set.
The answer is the size of the set.
The trivial implementation of this takes $\mathcal{O}((R - L)^2 \log {(R - L)})$ time, which is good enough.



## Subtask 2
Here, we have $L = 0$ and $R = 2^k - 1$, i.e, all numbers with at most $k$ significant bits.
It’s possible to make every number from $L$ to $R$ here, since to make $x$ we can choose $a = 0$ and $b = x$.
Making anything $\gt R$ is impossible, because the xor of two $k$-bit numbers cannot have $\gt k$ significant bits.
So, the answer is the length of the range $[0, R]$, which is $R+1$.
Note that $R+1 = 2^k$, so the answer essentially says we can make all $k$-bit strings.


## Subtask 3
Here, we still have $L = 0$, though we might not have $R = 2^k - 1$.
With the same logic as the previous subtask, we can certainly make all $x$ in the range $[0, R]$.
However, we might now be able to reach $x \gt R$ as well (for example, if $R = 2$ we can reach $3 = 1+2 = 1\oplus 2$).
In fact, if $R$ is a $k$-bit number, we can reach all the $k$-bit numbers!

Let $R$ be a $k$-bit number, i.e, $k$ is the smallest integer such that $R \leq 2^k - 1$.
Then, certainly we must have $2^{k-1} \leq R$.
Any $k$-bit integer $x\geq 2^{k-1}$ can be reached by choosing $b = 2^{k-1}$ and $a = x - b$.
Note that this works because $a \lt 2^{k-1}$.
Numbers $\leq R$ can be formed trivially by $(0, x)$ as noted eariler; and this method allows us to form all the numbers from $R+1$ to $2^k - 1$, so we’re done.

This gives us a simple solution: if $R$ is a $k$-bit integer, the answer is just $2^k$.
Finding $k$ requires us to find the highest set bit in $R$, which can be done by just iterating $k$ from $0$ — it’ll take $\mathcal{O}(\log R)$ time which is good enough.

## Subtask 4
The constraints here allow for a linear (or close to linear) solution.
Note that any valid $x$ must be $\leq 2R$.
So, let’s iterate over each $x$ from $0$ to $2R$ and see if we can make it.
If $x = 0$, then we can make it with $(0, 0)$ if $L = 0$, and can’t make it otherwise.
If $x \gt 0$, then we can write its binary representation as $x = 2^{p_1} + 2^{p_2} + \ldots + 2^{p_m}$ where $p_1 \gt p_2 \gt \ldots \gt p_m$.
To write $x = a\oplus b = a + b$, we need to distribute the bits $p_1, p_2, \ldots, p_m$ to $a$ and $b$.
Clearly, since $b$ is the larger one, it must receive $2^{p_1}$.
After this, it’s best to give all remaining $2^{p_i}$ to $a$, since:

Increasing $b$ too much might make it exceed $R$

Keeping $a$ too small might leave it $\lt L$


So, the best chance we have is with $a = 2^{p_2} + 2^{p_3} + \ldots  + 2^{p_m}$ and $b = 2^{p_1}$.
That is, $b = 2^{p_1}$ and $a = x \oplus b$.
Form these $a$ and $b$, and check if they both lie in $[L, R]$.
If they do, increase the answer by $1$.
The check for each $x$ can be done in $\mathcal{O}(1)$ or $\mathcal{O}(\log x)$, and we check upto $2R$ different values of $x$ so this takes $\mathcal{O}(R\log R)$ time, which is good enough.


## Subtask 5
Now, $L$ and $R$ are too large for any linear-type solutions to work.
Let’s look back at how we solved subtask $4$:

We fixed a value of $x$ between $1$ and $2R$ ($0$ was special-cased out)
We found the highest bit of $x$ and gave it to $b$; and gave all the other bits of $x$ to $a$

Then, we checked if this $a$ and $b$ were in range $[L, R]$.

Notice the second point in particular: the only $b$ we care about are powers of $2$.
So, let’s fix $b$ as a power of $2$ in the range $[L, R]$ and see which values of $a$ are valid, as per our algorithm.

First off, by our construction we must have $a \lt b$.
We also must have $a \geq L$.
It’s not hard to see that any such $a$ is valid; i.e, we can choose any $a$ in the range $[L, b-1]$.
The length of this range is $b - L$.

This gives us a pretty simple algorithm:

Fix the value of $b$ to some power of $2$ that lies in $[L, R]$.
Then, add $b - L$ to the answer.

If $L = 0$, add $1$ to the answer since we can also form $x = 0$.
Since we only care about powers of $2$ that don’t exceed $R$, we check $\log R$ of them.
So, this algorithm takes $\mathcal{O}(\log R)$ time, which is fast enough to get AC.

Editorialist Code:


```Python:
for _ in range(int(input())):
    l, r = map(int, input().split())
    ans = 1 if l == 0 else 0
    for pw in range(60):
        if 2**pw > r: break
        if 2**pw < l: continue
        ans += 2**pw - l
    print(ans)
```

<br>

___
<!-- 
# Problem 6 : [Limited Shopping](https://www.codechef.com/START91B/problems/LS)

## Problem :
There are $N$ shops; the $i$-th shop sells items with value $V_i$.
Each shop has an infinite supply of items, and each item costs exactly one dollar.
You can buy items worth at most $K$ dollars. However, the following constraints must be followed:

Suppose you but $ \text{num}_i $ items from the $i$-th shop.
Then:


$\text{num}_1 = 0$ or $\text{num}_i = 1$

For $i \gt 1$, $\text{num}_i \leq \text{num}_{i-1} + 1$

Find the maximum total value of items you can buy.

## Editorial
With bounds on the number of items you can take and an objective of maximizing values, this problem seems somewhat similar to the knapsack problem.
And indeed, this task can indeed be solved with dynamic programming, with each subtask requiring a slightly higher level of optimization.

### Subtask 1

Let’s start with the easiest one.
A very natural dp state should encapsulate:

Which shop we’re at, say $i$.
The total number of items we’ve bought so far, say $x$.

$\text{num}_i$, the number of items we’re buying from this shop.

So, let $dp(i, x, y)$ be the maximum value we can obtain if we bought exactly $x$ items from the first $i$ shops, and of them, bought exactly $y$ items from the $i$-th shop.
Buying $y$ items from the $i$-th shop gives us a value of $y\cdot V_i$.
Further, we must’ve bought exactly $x - y$ items from the previous shops; and in also at least $y-1$ items from shop $i-1$.
This gives us the transitions:
$$
dp(i, x, y) = y\cdot V_i + \max(dp(i-1, x-y, z))
$$
where the maximum is across all $y-1 \leq z \leq K$.
There are $\mathcal{O}(NK^2)$ dp states here ($i$ is upto $N$, $x$ and $y$ are upto $K$)2 and the transition from each one can be done in $\mathcal{O}(K)$ time for an overall $\mathcal{O}(NK^3)$ solution.


### Subtask 2
Now $N$ and $K$ are a bit higher, so the previous solution is too slow.
Let’s look at the dp transitions.
We have
$$
dp(i, x, y) = y\cdot V_i + \max(dp(i-1, x-y, z))
$$
across $y-1 \leq z$.
The slow part is computing the maximum across all $z$.
Note that when $i, x, y$ are fixed, what we’re looking for is a suffix maximum of the $dp(i-1, x-y, \cdot )$ table.
So, let’s just calculate these suffix maximums as well!
Define $\text{suff}(i, x, y) = \max(dp(i, x, y), dp(i, x, y+1), dp(i, x, y+2), \ldots, dp(i, x, K))$.
Then, $\text{suff}(i, x, y) = \max(dp(i, x, y), \text{suff}(i, x, y+1))$; so these suffix maximums can be computed as and when we compute the $dp$ values.
With this in hand, we have $dp(i, x, y) = y\cdot V_i + \text{suff}(i-1, x-y, y-1)$.
So, there are now $\mathcal{O}(NK^2)$ states, and an $\mathcal{O}(1)$ transition from each.
This results in a $\mathcal{O}(NK^2)$ solution, which is good enough for this subtask.


### Subtask 3
$N$ and $K$ are now large enough that we can’t even have $NK^2$ states anymore; it’ll take too much memory and generally be too slow.
Let’s try to cut it down a bit.
Suppose we buy $y$ items from a shop.
Since we can increase the maximum by only a step each time, this means we must’ve bought $1, 2, 3, \ldots, y-1$ items from other shops before this.
In particular, if we buy $y$ items from a shop, we’ve bought a total of at least $\frac{y \cdot (y+1)}{2}$ items in total.
We’re only allowed to buy $K$ items, so we don’t really care about very large $y$.
In particular, we don’t care about any $y$ such that $\frac{y \cdot (y+1)}{2}$ \gt K$; which limits us to about $y \leq \sqrt{2K}$.
In other words, we only care about $dp(i, x, y)$ for about $\mathcal{O}(NK\sqrt {K})$ states; each of which has a $\mathcal{O}(1)$ transition using the suffix trick from the previous subtask.
Implementing this optimization is enough to get AC.


Note that depending on your implementation, a solution with correct time complexity for subtasks $2$ and $3$ might be inexplicably much slower than other similar solutions.
This is most likely to be a memory-related issue.
You can optimize the memory requirement down from $\mathcal{O}(NK^2)$ or $\mathcal{O}(NK\sqrt{K})$ down to $\mathcal{O}(K^2)$ or $\mathcal{O}(K\sqrt {K})$ (or even $\mathcal{O}(K)$ using a slightly different approach) by noting that $dp(i, \ldots)$ depends only on $dp(i-1, \ldots)$ — so, it’s enough to keep only the previous row of the dp table, instead of all of them.
This is (maybe) not required to get AC, though you should likely see a major speedup on using it.
In slower languages like Python, it might be necessary to get AC.

Editorialist Code:
```Python:
n, k = map(int, input().split())
a = list(map(int, input().split()))
lim = 50

dp = [ [-1 for _ in range(lim)] for _ in range(k+1)]
dp[0][0] = 0
for i in range(n):
	for x in reversed(range(k+1)):
		for y in reversed(range(1, min(i+2, x+1, lim))):
			if dp[x-y][y-1] != -1:
				dp[x][y] = y*a[i] + dp[x-y][y-1]
			if y+1 < lim: dp[x][y] = max(dp[x][y], dp[x][y+1])
		dp[x][0] = max(dp[x][0], dp[x][1])
ans = 0
for x in range(k+1):
	for y in range(lim):
		ans = max(ans, dp[x][y])
print(ans)
```
<br>

___

# Problem 7 : [Cheapest Office](https://www.codechef.com/START91B/problems/CHEAPOFF)
 -->



<footer>
<br>
<br>
In this blog post, we explored the solutions to the problems from Codechef Contest Starters 91 Div 2. By understanding and implementing these solutions, you can improve your problem-solving skills and gain confidence in tackling coding challenges. Remember, practice and perseverance are key to mastering programming. Keep coding and exploring new problem sets to enhance your abilities further.
<br>
<br>
</footer>