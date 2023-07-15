---
title: "Solutions for CSES Graph Problems | CSES Problem Set Guide"
date: "12 July 2023"
category: "CP & Interviews"
tags: ["CSES", "Sorting", "Searching"]
about: "Explore efficient solutions to the Sorting and Searching section in the CSES Problem Set. Master essential algorithms and optimize your code for optimal performance."
---

# Counting Rooms

Link: https://cses.fi/problemset/task/1192/

You are given a map of a building, and your task is to count the number of its rooms. The size of the map is n×m squares, and each square is either floor or wall. You can walk left, right, up, and down through the floor squares.

- This is a problem of connected components.
- Every room represents a component.
- Keep a count variable for answer.
- Whenever we encounter an unvisited square increase the count.
- Run the dfs and set all the visited to true for connected squares.

```cpp:
#include<bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define endl '\n'
 
const ll mod = 1000000007;
int n,m;
char grid[1001][1001];
int visited[1001][1001];
 
void dfs(int i,int j){
    stack < pair<int,int> > s;
    s.push({i,j});
    while (!s.empty()){
        pair<int,int> u = s.top();
        s.pop();
        int x = u.first; int y = u.second;
        if (x+1<n && visited[x+1][y]==0 && grid[x+1][y]=='.' ){
            visited[x+1][y]=1;
            s.push({x+1,y});
        }
        if (x-1>=0 && visited[x-1][y]==0 && grid[x-1][y]=='.' ){
            visited[x-1][y]=1;
            s.push({x-1,y});
        }
        if (y-1>=0 && visited[x][y-1]==0 && grid[x][y-1]=='.' ){
            s.push({x,y-1});
            visited[x][y-1]=1;
        }
        if (y+1<m && visited[x][y+1]==0 && grid[x][y+1]=='.' ){
            s.push({x,y+1});
            visited[x][y+1]=1;
        }
    }
}
 
int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);
 
    cin>>n>>m;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            visited[i][j]=0;
            cin>>grid[i][j];
        }
    }
    int count=0;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            if (grid[i][j]=='.' && visited[i][j]==0){
                count++;
                dfs(i,j);
            }
        }
    }
    cout<<count<<endl;
    return 0;
}
```

<br>

___

# Labyrinth

Link: You are given a map of a labyrinth, and your task is to find a path from start to end. You can walk left, right, up and down.

Solution:

- This is a simple BFS traversal problem. 
- We need some way to track down the path we took.
- For that we can maintain a prev_step array. Whenever we move to a new square, set prev[new_square] = cur_square.
- Once we reach the end. Run a while loop in the prev from end to start, till we reach the start point.
- Reverse the path.

```cpp:
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

// 0-up 1-right 2-down 3-left
int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};
string step = "URDL";

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int n, m;
    cin >> n >> m;
    pair<int, int> start, end;
    char grid[n][m];
    bool visited[n][m];

    for (int i = 0; i < n; i++){
        for (int j = 0; j < m; j++){
            cin >> grid[i][j];
            visited[i][j] = false;
            if (grid[i][j] == 'A')
            {
                start = {i, j};
            }
            if (grid[i][j] == 'B')
            {
                end = {i, j};
            }
        }
    }

    visited[start.first][start.second] = true;
    int prevstep[n][m];

    queue<pair<int, int>> q;
    q.push(start);

    while (!q.empty())
    {
        pair<int, int> u = q.front();
        q.pop();
        for (int i = 0; i < 4; i++){
            pair<int, int> v = make_pair(u.first + dx[i], u.second + dy[i]);
            if (v.first < 0 || v.first >= n || v.second < 0 || v.second >= m)
                continue;
            if (grid[v.first][v.second] == '#')
                continue;
            if (visited[v.first][v.second])
                continue;
            visited[v.first][v.second] = true;
            prevstep[v.first][v.second] = i;
            q.push(v);
        }
    }

    if (visited[end.first][end.second]){
        cout << "YES" << endl;
        vector<int> steps;
        while (end != start){
            int p = prevstep[end.first][end.second];
            steps.push_back(p);
            end = make_pair(end.first - dx[p], end.second - dy[p]);
        }
        reverse(steps.begin(), steps.end());
        cout << steps.size() << endl;
        for (char c : steps){
            cout << step[c];
        }
    }
    else{
        cout << "NO" << endl;
    }

    return 0;
}
```

<br>

___

# Building Roads

Link: https://cses.fi/problemset/task/1666

Byteland has n cities, and m roads between them. The goal is to construct new roads so that there is a route between any two cities.

Your task is to find out the minimum number of roads required, and also determine which roads should be built.

Solution:

- This problem is same as the previous problem. We need to print the count of connected compoennts in the graph.
- We can connect all the roads to first city.

```CPP:
#include<bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define endl '\n'
 
const ll mod = 1000000007;
 
void dfs(vector<bool>&visited,vector<vector<int>>&graph,int i){
    stack<int>s;
    s.push(i);
    while(!s.empty()){
        int u = s.top();s.pop();
        if (visited[u]==false){
            visited[u]=true;
            for(int child:graph[u]){
                s.push(child);
            }
            cout<<endl;
        }
    }
}
 
int main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);
    int n,m;cin>>n>>m;
    vector < vector<int> > graph(n+1);
    vector<bool> visited(n+1);
    
    for (int i = 0; i < m; i++)
    {
        int a,b;cin>>a>>b;
        graph[a].push_back(b);
        graph[b].push_back(a);
    }
    int count=0;
    vector<int>l;
    for(int i=1;i<n+1;i++){
        if(visited[i]==false){
            dfs(visited,graph,i);
            l.push_back(i);
            count++;
        }
    }
    cout<<count-1<<endl;
    for(int i=1;i<count;i++){
        cout<<l[0]<<" "<<l[i]<<endl;
    }
 
    
    return 0;
}
```

<br>

___

# Message Route

Link: https://cses.fi/problemset/task/1667

Syrjälä's network has n computers and m connections. Your task is to find out if Uolevi can send a message to Maija, and if it is possible, what is the minimum number of computers on such a route.

Solution:
- Use BFS and track the path using a prev array.

```CPP:
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);

    int n,m;
    cin>>n>>m;
    vector < vector<int> > graph(n+1,vector<int>());
    for (int i = 0; i < m; i++){
        int a,b; cin>>a>>b;
        graph[a].push_back(b);
        graph[b].push_back(a);
    }
    vector<int> prev(n+1,0);
    queue<int> q;
    q.push(1);
    while (!q.empty()){
        int cur = q.front(); q.pop();
        if (cur==n){
            break;
        }
        for (int child : graph[cur]){
            if (prev[child]==0){
                prev[child]=cur;
                q.push(child);
            }
        }
    }
    if (prev[n]==0){
        cout<<"IMPOSSIBLE";
    }
    else{
        vector<int>path;
        path.push_back(n);
        int end = prev[n];
        while(end!=1){
            path.push_back(end);
            end=prev[end];
        }
        path.push_back(end);
        reverse(path.begin(),path.end());
        cout<<path.size()<<endl;
        for(int c:path) cout<<c<<" ";
    }
    return 0;
}
```

<br>

___



# Building Teams

Link: https://cses.fi/problemset/task/1668

There are n pupils in Uolevi's class, and m friendships between them. Your task is to divide the pupils into two teams in such a way that no two pupils in a team are friends. You can freely choose the sizes of the teams.

Solution:
- This is a problem of graph coloring.
- Keep assigning the teams and check for contradictions using DFS.

```cpp:
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

int N = 100001;

vector<int> team(N, 0);
vector<vector<int>> graph(N, vector<int>());
bool check = true;

void dfs(int node)
{
    if (team[node]==0) team[node]=1;
    int new_team;
    if (team[node] == 1)
        new_team = 2;
    else
        new_team = 1;
    for (int child : graph[node]){
        if (team[child] == 0){
            team[child] = new_team;
            dfs(child);
        }
        else{
            if (team[child] != new_team){
                check = false;
                return;
            }
        }
    }
}

signed main()
{
    int n, m;
    cin >> n >> m;
    for (int i = 0; i < m; i++){
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }
    for (int i = 1; i < n + 1; i++){
        if (team[i] == 0){
            dfs(i);
        }
        if (!check){
            cout << "IMPOSSIBLE";
            break;
        }
    }
    if (check){
        for (int i = 1; i <= n; i++){
            cout << team[i] << " ";
        }
    }
    return 0;
}
```

<br>

___


# Round Trip

Link: https://cses.fi/problemset/task/1669

Byteland has n cities and m roads between them. Your task is to design a round trip that begins in a city, goes through two or more other cities, and finally returns to the starting city. Every intermediate city on the route has to be distinct.

Solution:


```

```

<br>

___