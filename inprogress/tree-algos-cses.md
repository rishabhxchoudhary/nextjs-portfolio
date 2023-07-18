---
title: "Tree Algorithms Solutions for CSES and Other Problem Sets"
date: "12 July 2023"
category: "CP & Interviews"
tags: ['Tree Algorithms',"CSES"]
about: "Explore efficient solutions to dynamic programming problems from the CSES problem set and other reputable sources. Improve your algorithm optimization skills and enhance your competitive programming and interview preparation"
---


# *Tree Distances II

Link: 

Solution:
- The key observation is that if we reroot the tree at node 1's neighbour (let's say node 2), then
    - The depths of all nodes in node 2's subtree decrease by 1.
    - The depths of all nodes outside of its subtree increase by 1.
    - Observe that the change in answer is only n-2 $n - 2(\text{node 2's subtree size})$.

```cpp:
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;
const int N = 2e5+1;
vector<int> adj[N];
int dp[N]{};
int ans[N]{};
int n;

void dfs1(int node = 1, int parent = 0, int depth = 0){
    ans[1] += depth;
    dp[node] = 1;
    for(int i:adj[node]){
        if (i==parent) continue;
        dfs1(i,node,depth+1);
        dp[node]+=dp[i];
    }
}

void dfs2(int node = 1,int parent = 0){
    for(int i:adj[node]){
        if (i==parent) continue;
        ans[i] = ans[node] + n - 2*dp[i];
        dfs2(i,node);
    }
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);

    int a,b;
    cin>>n;
    for (int i = 0; i < n-1; i++) {
        cin>>a>>b;
        adj[a].push_back(b);
        adj[b].push_back(a);
    }
    dfs1();
    dfs2();
    for (int i = 1; i <= n; i++) {
        cout<<dp[i]<<" ";
    }
    cout<<endl;
    for (int i = 1; i <= n; i++) {
        cout<<ans[i]<<" ";
    }

    return 0;
}
```

<br>

___