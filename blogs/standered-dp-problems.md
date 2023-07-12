---
title: "Dynamic Programming Standered Problems"
date: "12 July 2023"
category: "CP & Interviews"
tags: ['Dynamic Programming']
about: "Solutions of CSES and other good problem set on Dynamic Programming"
---

# Dice Combinations

Problem Link: https://cses.fi/problemset/task/1633

Solution:

```cpp:
int main()
{
    int t;
    cin >> t;
    vector<int> dp(t + 1, 0);
    dp[0] = 1;
    for (int i = 1; i <= t; i++)
    {
        for (int j = 1; j <= 6; j++)
        {
            if (i - j < 0)
                break;
            dp[i] += dp[i - j];
            dp[i] = dp[i] % mod;
        }
    }
    cout << dp[t];
    return 0;
}
```

# Minimizing Coins

Problem Link: https://cses.fi/problemset/task/1634/

Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to produce a sum of money x using the available coins in such a way that the number of coins is minimal.

Solution:

```CPP:
int main()
{
    int n,x;cin>>n>>x;

    int coins[n];

    for(int i=0;i<n;i++)cin>>coins[i];

    vector<int>dp(x+1,1e9);

    dp[0]=0;

    for(int i=1;i<=x;i++){
        for(auto c:coins){
            if (i-c>=0){
                dp[i] = min(dp[i],1+dp[i-c]);
            }
        }
    }

    if (dp[x]==1e9) cout<<-1;
    else cout<<dp[x];

    return 0;
}
```

# Coin Combinations I

Link: https://cses.fi/problemset/task/1635

Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ways you can produce a money sum x using the available coins.

Solution:

```CPP:
int main()
{
    int n,x;
    cin>>n>>x;
    int coins[n];
    for(int i=0;i<n;i++) cin>>coins[i];
    vector<int> dp(x+1,0);
    dp[0]=1;
    for(int i=1;i<x+1;i++){
        for(auto c:coins){
            if (i-c>=0){
                dp[i]=(dp[i]+dp[i-c])%mod;
            }
        }
    }
    cout<<dp[x];
    return 0;
}
```

# Coin Combinations II

Link: https://cses.fi/problemset/task/1636

Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ordered ways you can produce a money sum x using the available coins.

```CPP:
int main()
{
    int n,x;
    cin>>n>>x;
    ll coins[n];
    for(int i=0;i<n;i++) cin>>coins[i];
    vector<ll> dp(x+1,0);
    dp[0]=1;
    for(auto c:coins){
        for(int i=1;i<x+1;i++){
            if (i-c>=0){
                dp[i]=(dp[i]+dp[i-c])%mod;
            }
        }
    }
    cout<<dp[x];
    return 0;
}
```

# Grid Paths

Link: https://cses.fi/problemset/task/1638

Consider an n×n grid whose squares may have traps. It is not allowed to move to a square with a trap.

```CPP:
typedef long long ll;
ll mod = 1000000007;
int main()
{
    ll n; cin>>n;
 
    ll arr[n][n];
 
    for(ll i=0;i<n;i++){
        for(ll j=0;j<n;j++){
            arr[i][j]=-1;
        }
    }
 
    for(ll i=0;i<n;i++){
        char s[n];
        for(int k=0;k<n;k++){
            cin>>s[k];
        }
        for(ll j=0;j<n;j++){
            if (s[j]=='*'){
                arr[i][j]=0;
            }
        }
    }
 
    for(ll i=0;i<n;i++){
        if(arr[0][i]==-1) arr[0][i]=1;
        if(arr[i][0]==-1) arr[i][0]=1;
        if(i>0){
            if (arr[0][i-1]==0) arr[0][i]=0;
            if (arr[i-1][0]==0) arr[i][0]=0;
        }
    }
 
    for(ll i=1;i<n;i++){
        for(ll j=1;j<n;j++){
            if (arr[i][j]==-1){
                arr[i][j] = (arr[i-1][j]+arr[i][j-1])%mod;
            }
        }
    }
    cout<<arr[n-1][n-1]<<endl;
    return 0;
}
```

# Book Shop

Link: https://cses.fi/problemset/task/1158

You are in a book shop which sells n different books. You know the price and number of pages of each book.

```CPP:
int main()
{
    int n,x; cin>>n>>x;
 
    vector<int> prices(n+1),pages(n+1);
    prices[0]=0; pages[0]=0;
    for(int i=1;i<n+1;i++) cin>>prices[i];
    for(int i=1;i<n+1;i++) cin>>pages[i];

    vector< vector<int> > dp(n+1,vector<int>(x+1,0));
 
    for(int i=1;i<n+1;i++){
        for(int j=0;j<x+1;j++){
            dp[i][j]=dp[i-1][j];
            if(j-prices[i]>=0){
                dp[i][j] = max ( dp[i][j], dp[i-1][j-prices[i]]+pages[i] );
            }
        }
    }
    cout<<dp[n][x];
}
```

# Array Description

Link: https://cses.fi/problemset/task/1746

You know that an array has n integers between 1 and m, and the absolute difference between two adjacent values is at most 1.
Given a description of the array where some values may be unknown, your task is to count the number of arrays that match the description.

```CPP:
int main()
{
    fast;
    int n,m;
    cin>>n>>m;
    vector<int> x(n+1);
    for(int i=1;i<n+1;i++) cin>>x[i];
    vector< vector<int> > dp(n+1, vector<int> (m+1,0));
    if (x[1]==0) for(int i=0;i<m+1;i++) dp[1][i]=1;
    else dp[1][x[1]]=1;
    for(int i=2;i<n+1;i++){
        int x0 = x[i];
        if (x0==0){
            for(int j=1;j<m+1;j++){
                for(int k : {j-1,j,j+1}){
                    if (k>=1 && k<=m) dp[i][j] = (dp[i][j]+dp[i-1][k])%mod;
                }
            }
        }
        else{
            for(int k : {x0-1,x0,x0+1}){
                if (k>=1 && k<=m) dp[i][x0] = (dp[i][x0]+dp[i-1][k])%mod;
            }
        }
    }
 
    int ans=0;
    for(int i=1;i<m+1;i++){
        ans=(ans+dp[n][i])%mod;
    }
    cout<<ans<<endl;
    
    return 0;
}
```

# Edit Distance

Link: https://cses.fi/problemset/task/1639

The edit distance between two strings is the minimum number of operations required to transform one string into the other.

The allowed operations are:
    - Add one character to the string.
    - Remove one character from the string.
    - Replace one character in the string.

```cpp:
int main()
{
    string a,b;
    cin>>a>>b;
    int na = a.length();
    int nb = b.length();
    vector < vector<int> > dp(na+1,vector<int>(nb+1,1e9));
    dp[0][0]=0;
    for(int i=0;i<na+1;i++){
        for(int j=0;j<nb+1;j++){
            if (i>0) dp[i][j]=min(dp[i][j],1+dp[i-1][j]);
            if (j>0) dp[i][j]=min(dp[i][j],1+dp[i][j-1]);
            if (j>0 and i>0){
                if (a[i-1]==b[j-1]) dp[i][j]=min(dp[i][j],dp[i-1][j-1]);
                else{
                    dp[i][j]=min(dp[i][j],1+dp[i-1][j-1]);
                }
            }
        }
    }
    cout<<dp[na][nb]<<endl;
    return 0;
}
```

# Rectangle Cutting

Link: https://cses.fi/problemset/task/1744/

Given an a×b rectangle, your task is to cut it into squares. On each move you can select a rectangle and cut it into two rectangles in such a way that all side lengths remain integers. What is the minimum possible number of moves?

```cpp:
int main()
{
    int a,b;
    cin>>a>>b;
    vector< vector<int> > dp(a+1 , vector<int> (b+1,1e9));
    for(int i=0;i<a+1;i++){
        for(int j=0;j<b+1;j++){
            if(i==j){
                dp[i][j]=0;
            }
            else{
                for(int k=1;k<i;k++){
                    dp[i][j]=min(dp[i][j],dp[i-k][j]+dp[k][j]+1);
                }
                for(int k=1;k<j;k++){
                    dp[i][j]=min(dp[i][j],dp[i][j-k]+dp[i][k]+1);
                }
            }
        }
    }
    cout<<dp[a][b]<<endl;
    return 0;
}
```

# Money Sums

Link: https://cses.fi/problemset/task/1745

You have n coins with certain values. Your task is to find all money sums you can create using these coins.

```CPP:
int main()
{
    fast;
    int n; cin>>n;
    int N=1000*n;
    vector<int> coins(n+1,0);
    for(int i=1;i<=n;i++) cin>>coins[i];
    vector< vector<int> > dp(n+1, vector<int>(N+1,0));
    dp[0][0]=1;
    int ans=0;
    for(int i=1;i<n+1;i++){
        for(int j=1;j<=N;j++){
            if (dp[i-1][j]) dp[i][j]=1;
            if (coins[i]==j) dp[i][j]=1;
            int l=j-coins[i];
            if (l>0){
                if (dp[i-1][l]) dp[i][j]=1;
            }
            if(i==n){
                if (dp[i][j]==1)ans++;
            }
        }
    }
    cout<<ans<<endl;
    for(int i=1;i<=N;i++) if (dp[n][i]) cout<<i<<" ";
    return 0;
}
```

# Removal Game

Link: https://cses.fi/problemset/task/1097/

There is a list of n numbers and two players who move alternately. On each move, a player removes either the first or last number from the list, and their score increases by that number. Both players try to maximize their scores.

```CPP:
ll score(vector<vector<ll>> &dp, ll l[], int i, int j)
{
    if (dp[i][j] != 1e9) return dp[i][j];
 
    if (i == j)
    {
        dp[i][j] = l[i];
        return l[i];
    }
    if (i + 1 == j)
    {
        dp[i][j] = max(l[i], l[j]);
        return max(l[i], l[j]);
    }
    dp[i][j] = max(
        min(score(dp, l, i + 1, j - 1), score(dp, l, i + 2, j)) + l[i],
        min(score(dp, l, i, j - 2), score(dp, l, i + 1, j - 1)) + l[j]);
    return dp[i][j];
}
 
// Code
int main()
{
    fast;
    ll n;
    cin >> n;
    ll l[n];
    for (int i = 0; i < n; i++)
        cin >> l[i];
    vector<vector< ll > > dp(n, vector<ll>(n, 1e9));
    cout << score(dp, l, 0, n - 1);
    return 0;
}
```

# Two Sets II

Link: https://cses.fi/problemset/task/1093

Your task is to count the number of ways numbers 1,2,…,n can be divided into two sets of equal sum.

```cpp:
int main()
{
    int n;cin>>n;
    ll x = (1ll)*n*(n+1);
    if (x%4!=0) cout<<"0"<<endl;
    else{
        x = x/4;
        vector< vector<ll> > dp(n,vector<ll>(x+1,0));
        dp[0][0]=1;
        for(ll i=1;i<n;i++){
            for(ll j=0;j<=x;j++){
                if (j>=i){ 
                    dp[i][j] += dp[i-1][j-i];
                }
                dp[i][j]=(dp[i][j]+dp[i-1][j])%mod;
            }
        }
        cout<<dp[n-1][x]<<endl;
    }
 
    return 0;
}
```

