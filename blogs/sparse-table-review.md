---
title: "Sparse Table Data Structure Review"
date: "23 May 2023"
category: "Competitive Programming"
tags: ['Data Structure','Sparse Table']
about: "The Sparse Table is a data structure used to efficiently answer range queries on a static array. It is used for frequent range queries, such as finding the minimum, maximum, sum, or any other associative operation over a subarray.The main advantage of the Sparse Table is that it allows us to perform range queries in O(1) time complexity while having a preprocessing time of O(n log n). This makes it an excellent choice for scenarios where the array is static or changes infrequently."
---

# Sparse Table: A Powerful Data Structure for Efficient Range Queries

- The Sparse Table is a data structure used to efficiently answer range queries on a static array. 
- It is used for frequent range queries, such as finding the minimum, maximum, sum, or any other associative operation over a subarray.
- It allows us to perform range queries in O(1) time complexity while having a preprocessing time of O(n log n). 
- This makes it an excellent choice for scenarios where the array is static or changes infrequently.

## **The Sparse Table Basically Stores 2<sup>i</sup> th Parent of Nodes**

- Lets try to make Sparse Table of the following Binary Tree.

<img style="width: 500px;" src="/images/sparse_table_and_lca/bin_tree.png"/>


*We can see that*
- Node 1 is root hence it has no parent. Let default parent be 0.
- Node 2 and 3 have 1st parent as 1 and 2nd parent 0.
- Node 4 and 5 have 1st parent as 2 and 2nd parent as 1 and 4th parent as 0.
- Node 6 1st parent as 3 and 2nd parent as 1 and 4th parent as 0.
- Node 7 and 8 have 1st parent as 4 and 2nd parent as 2 and 4th parent as 0.

*Basically we want to look at 2<sup>i</sup> th parent of every node and store it in a table.*

- Hence the Sparce Table for this Binary Tree will look like : 
 
<img style="width: 500px;" src="/images/sparse_table_and_lca/sparse_table.png"/>

## Coding Sparse Table

<p>We can use Dynamic Programming to Code Sparse Table</p>
<p>
Recurrence Relation is given as :
</p>
<code>
    Parent[cur][j] = Parent[ Parent[cur][j-1] ][j-1]
</code>

### Python Code :
```python:
class Sparse_Table:
    def __init__(self, graph: dict):
        self.M = int(math.log2(len(graph)+3) + 2)
        self.parent = [[0]*self.M for _ in range(len(graph)+3)]
        self.depth = [0]*(len(graph)+3)
        self.dfs(graph)

    def dfs(self, graph: dict):
        def dfs1(curr: int, par: int):
            self.parent[curr][0] = par
            self.depth[curr] = self.depth[par] + 1
            for j in range(1, self.M):
                self.parent[curr][j] = self.parent[self.parent[curr][j-1]][j-1]
            for child in graph[curr]:
                if child != par:
                    dfs1(child, curr)
        dfs1(1, 0)
```

### C++ Code : 
```
class Sparse_Tale
{
private:
    int M;
    vector<vector<int>> PARENT;
    vector<int> DEPTH;

public:
    Sparse_Tale(vector<vector<int>> &graph)
    {
        M = int(log2(graph.size())) + 1;
        PARENT.resize(graph.size(), vector<int>(M, -1));
        DEPTH.resize(graph.size(), -1);
        DFS(graph, 1, 0);
    }

    void DFS(vector<vector<int>> &graph, int node, int parent)
    {
        PARENT[node][0] = parent;
        DEPTH[node] = DEPTH[parent] + 1;
        for (int j = 1; j < M; j++)
            PARENT[node][j] = PARENT[PARENT[node][j - 1]][j - 1];
        for (int i : graph[node])
        {
            if (i != parent)
                DFS(graph, i, node);
        }
    }
};
```

## Common Applications of Sparce Table

- **Range Minimum/Maximum Query (RMQ):** Sparse tables can be used to solve the RMQ problem efficiently. They can answer queries for finding the minimum or maximum value in a given range of an array in O(1) time after O(n log n) preprocessing, where n is the size of the array.


- **Range Sum Query (RSQ)**: Sparse tables can also be used to solve the RSQ problem, which involves finding the sum of elements in a given range of an array. They can answer queries for range sums in O(1) time after O(n log n) preprocessing.


- **Lowest Common Ancestor (LCA)**: Sparse tables can be applied to efficiently find the lowest common ancestor of two nodes in a tree. By precomputing information about the tree, sparse tables can answer LCA queries in O(1) time after O(n log n) preprocessing.


- **Range Mode Query**: Sparse tables can be extended to find the mode (most frequent element) in a given range of an array efficiently. By storing additional information during preprocessing, sparse tables can answer mode queries in O(1) time after O(n log n) preprocessing.


- **Range GCD/LCM Query**: Sparse tables can be used to find the greatest common divisor (GCD) or least common multiple (LCM) of a given range of elements in an array. They can answer GCD/LCM queries in O(1) time after O(n log n) preprocessing.


- **Range Kth Smallest/Largest Query**: Sparse tables can be employed to find the Kth smallest or largest element in a given range of an array. By storing additional information during preprocessing, sparse tables can answer Kth smallest/largest queries in O(1) time after O(n log n) preprocessing.


<footer class="my-5">
Thanks for Reading!
</footer>