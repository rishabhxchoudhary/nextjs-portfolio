---
title: "Solutions for CSES Graph Problems | CSES Problem Set Guide"
date: "17 July 2023"
category: "CP & Interviews"
tags: ["CSES", "Graph"]
about: "Explore efficient solutions and master essential algorithms for CSES Graph problems in the CSES Problem Set. I have tried to cover most of the problems here."
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

Link: https://cses.fi/problemset/task/1193

You are given a map of a labyrinth, and your task is to find a path from start to end. You can walk left, right, up and down.

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


# Monsters

Link: https://cses.fi/problemset/task/1194

You and some monsters are in a labyrinth. When taking a step to some direction in the labyrinth, each monster may simultaneously take one as well. Your goal is to reach one of the boundary squares without ever sharing a square with a monster.

Solution:
- This is a problem of multisource BFS.

```cpp:
#include <bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define int ll
#define endl '\n'
 
signed main()
{
    int n, m;
    cin >> n >> m;
 
    vector<string> grid(n);
    vector<pair<int, int>> monsters;
    pair<int, int> start;
 
    for (int i = 0; i < n; i++)
    {
        cin >> grid[i];
        for (int j = 0; j < m; j++)
        {
            if (grid[i][j] == 'M')
            {
                monsters.push_back(make_pair(i, j));
            }
            else if (grid[i][j] == 'A')
            {
                start = make_pair(i, j);
            }
        }
    }
 
    vector<vector<int>> dist(n, vector<int>(m, INT_MAX));
    queue<pair<int, int>> que;
 
    for (auto monster : monsters)
    {
        que.push(monster);
        dist[monster.first][monster.second] = 0;
    }
 
    while (!que.empty())
    {
        auto node = que.front();
        que.pop();
 
        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
 
        for (auto direction : directions)
        {
            int x = node.first + direction.first;
            int y = node.second + direction.second;
 
            if (x >= 0 && x < n && y >= 0 && y < m && dist[x][y] > dist[node.first][node.second] + 1 &&
                (grid[x][y] == '.' || grid[x][y] == 'A'))
            {
                dist[x][y] = dist[node.first][node.second] + 1;
                que.push(make_pair(x, y));
            }
        }
    }
 
    vector<vector<int>> dist2(n, vector<int>(m, INT_MAX));
    dist2[start.first][start.second] = 0;
    que.push(start);
    map<pair<int, int>, pair<int, int>> prev;
 
    while (!que.empty())
    {
        auto node = que.front();
        que.pop();
 
        vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
 
        for (auto direction : directions)
        {
            int x = node.first + direction.first;
            int y = node.second + direction.second;
 
            if (x >= 0 && x < n && y >= 0 && y < m && dist2[x][y] > dist2[node.first][node.second] + 1 && grid[x][y] == '.')
            {
                dist2[x][y] = dist2[node.first][node.second] + 1;
                que.push(make_pair(x, y));
                prev[make_pair(x, y)] = node;
            }
        }
    }
 
    bool found = false;
    pair<int, int> boundaryNode;
 
    for (int i = 0; i < n; i++)
    {
        if (dist2[i][0] < dist[i][0])
        {
            found = true;
            boundaryNode = make_pair(i, 0);
            break;
        }
        if (dist2[i][m - 1] < dist[i][m - 1])
        {
            found = true;
            boundaryNode = make_pair(i, m - 1);
            break;
        }
    }
 
    if (!found)
    {
        for (int j = 0; j < m; j++)
        {
            if (dist2[0][j] < dist[0][j])
            {
                found = true;
                boundaryNode = make_pair(0, j);
                break;
            }
            if (dist2[n - 1][j] < dist[n - 1][j])
            {
                found = true;
                boundaryNode = make_pair(n - 1, j);
                break;
            }
        }
    }
 
    if (found)
    {
        cout << "YES" << endl;
        string ans = "";
        auto node = boundaryNode;
 
        while (node != start)
        {
            int x = node.first;
            int y = node.second;
 
            if (prev[node].first == x + 1)
            {
                ans += 'U';
            }
            else if (prev[node].first == x - 1)
            {
                ans += 'D';
            }
            else if (prev[node].second == y + 1)
            {
                ans += 'L';
            }
            else if (prev[node].second == y - 1)
            {
                ans += 'R';
            }
 
            node = prev[node];
        }
 
        cout << ans.size() << endl;
        reverse(ans.begin(), ans.end());
        cout << ans << endl;
        return 0;
    }
 
    cout << "NO" << endl;
    return 0;
}
```

<br>

___


# Round Trip

Link: https://cses.fi/problemset/task/1669

Byteland has n cities and m roads between them. Your task is to design a round trip that begins in a city, goes through two or more other cities, and finally returns to the starting city. Every intermediate city on the route has to be distinct.

Solution:
- Run DFS, check for cycles ,is next node is already visited? if YES, a cycle if detected!.
- If length of cycle is >3 print it.


```cpp:
#include <bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define int ll
#define endl '\n'
 
const ll mod = 1000000007;
 
bool check = false;
 
void dfs(int node, vector<vector<int>> &graph, vector<bool> &visited, vector<int> &prevNode)
{
    stack<int> s;
    s.push(node);
    while (!s.empty()){
        int u = s.top();
        s.pop();
        visited[u] = true;
        for (int v : graph[u]){
            if (!visited[v]){
                prevNode[v] = u;
                s.push(v);
            }
            else{
                int _end = u;
                int _start = v;
                vector<int> path;
                path.push_back(_start);
                path.push_back(_end);
                while (_end != _start && _end != -1){
                    _end = prevNode[_end];
                    path.push_back(_end);
                }
                if (path[path.size() - 1] != -1 && path.size() > 3){
                    cout << path.size() << endl;
                    for (int u : path)
                        cout << u << " ";
                    cout << endl;
                    check = true;
                    return;
                }
            }
        }
    }
    cout << endl;
}
 
signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
 
    int n, m;
    cin >> n >> m;
 
    vector<vector<int>> graph(n + 1, vector<int>());
    vector<bool> visited(n + 1, false);
    vector<int> prevNode(n + 1, -1);
 
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        graph[u].emplace_back(v);
        graph[v].emplace_back(u);
    }
 
    for (int i = 1; i < n + 1; i++)
    {
        if (!visited[i])
            dfs(i, graph, visited, prevNode);
        if (check)
            break;
    }
 
    if (!check)
        cout << "IMPOSSIBLE";
 
    return 0;
}
```

<br>

___

# Shortest Routes I

Link: https://cses.fi/problemset/task/1671

There are n cities and m flight connections between them. Your task is to determine the length of the shortest route from Syrjälä to every city.

Solution:
- This is a standered problem on dijkstra.

```cpp:
#include<bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define int ll
#define endl '\n'
 
const ll mod = 1000000007;
 
signed main()
{
    int n, m;
    cin >> n >> m;
    vector<vector<pair<int, int>>> adj(n+1);
    for(int i = 0; i < m; i++)
    {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});
    }
 
    vector<int> dist(n+1, 1e18);
    dist[1] = 0;
 
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, 1});
 
    while(!pq.empty())
    {
        int u = pq.top().second;
        int d = pq.top().first;
        pq.pop();
 
        if(d > dist[u]) continue;
 
        for(auto it: adj[u])
        {
            int v = it.first;
            int w = it.second;
 
            if(dist[v] > dist[u] + w)
            {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
 
    for(int i = 1; i <= n; i++)
        cout << dist[i] << " ";
    cout << endl;
 
    return 0;
}
```

<br>

___


# Shortest Routes II

Link: https://cses.fi/problemset/task/1672

There are n cities and m roads between them. Your task is to process q queries where you have to determine the length of the shortest route between two given cities.

Solution:

```cpp:
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
 
    int n, m, q;
    cin >> n >> m >> q;
    vector<vector<int>> dist(n, vector<int>(n, 1e18));
    for(int i = 0; i < n; i++) dist[i][i] = 0;
    for(int i = 0; i < m; i++)
    {
        int u, v, w;
        cin >> u >> v >> w; u--; v--;
        dist[u][v] = min(dist[u][v], w);
        dist[v][u] = min(dist[v][u], w);
    }
    for(int k = 0; k < n; k++)
        for(int i = 0; i < n; i++) for(int j = 0; j < n; j++)
            dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]);
    while(q--)
    {
        int u, v;
        cin >> u >> v; u--; v--;
        cout << (dist[u][v] == 1e18 ? -1 : dist[u][v]) << endl;
    }
 
    return 0;
}
```

<br>

___


# High Score

Link: https://cses.fi/problemset/task/1673

You play a game consisting of n rooms and m tunnels. Your initial score is 0, and each tunnel increases your score by x where x may be both positive or negative. You may go through a tunnel several times.
Your task is to walk from room 1 to room n. What is the maximum score you can get?

Solution:
- This is a standered problem of Bellman ford algorithm.
- Instead of detecting a negative weight cycle, we have to detect positive weight cycle.
- Whenever there is a positive weight cycle, check if its possible to reach n from that cycle, if yes? ans if INFINITY/-1.


```cpp:
#include <bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define int ll
#define endl '\n'
 
const ll mod = 1000000007;
 
signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
 
    int n, m;
    cin >> n >> m;
    vector<vector<pair<int, int>>> graph(n + 1, vector<pair<int, int>>());
    for (int i = 0; i < m; i++){
        int u, v, w;
        cin >> u >> v >> w;
        graph[u].push_back(make_pair(v, w));
    }
    vector<int> dist(n + 1, -1e10);
    dist[1] = 0;
    for (int i = 0; i < n - 1; i++){
        for (int j = 1; j < n + 1; j++){
            if (dist[j] != -1e10){
                for (pair<int, int> x : graph[j]){
                    int v = x.first;
                    int w = x.second;
                    if (dist[j] + w > dist[v])
                        dist[v] = dist[j] + w;
                }
            }
        }
    }
    for (int u = 1; u < n + 1; u++){
        if (dist[u] != -1e10){
            for (pair<int, int> x : graph[u]){
                int v = x.first;
                int w = x.second;
                if (dist[u] + w > dist[v]){
                    queue<int> q;
                    q.push(u);
                    vector<bool> visited(n + 1, false);
                    while (!q.empty()){
                        int node = q.front();
                        q.pop();
                        if (node == n){
                            cout << -1;
                            exit(0);
                        }
                        visited[node] = true;
                        for (pair<int, int> x : graph[node]){
                            if (!visited[x.first]){
                                q.push(x.first);
                            }
                        }
                    }
                }
            }
        }
    }
 
    cout << dist[n];
 
    return 0;
}
```

<br>

___


# Flight Discount

Link: https://cses.fi/problemset/task/1195/

Your task is to find a minimum-price flight route from Syrjälä to Metsälä. You have one discount coupon, using which you can halve the price of any single flight during the route. However, you can only use the coupon once.

Solution:
- We can solve this using dijkstra and dynamic programming.
- Let DP[i][0] = min cost without using the ticket and
- DP[i][1] = min cost after using the ticket.
- For every node in dijkstra, calculate for all neighbors v: dp[v][1] = min(dp[i][1],cur_cost+w/2).


*This python code gives TLE in 1 test case, but if you convert if to c++, it will pass all test cases.

Here is code for cpp: https://cses.fi/paste/63266e6ff8d247946099cf/

```python:
import heapq
import sys
from collections import defaultdict
from math import inf
 
n, m = map(int, sys.stdin.readline().split())
graph = defaultdict(list)
 
for _ in range(m):
    u, v, w = map(int, sys.stdin.readline().split())
    graph[u].append((v, w))
 
# 0 - ticket used
# 1 - ticket unused
dist = [[inf, inf] for _ in range(n + 1)]
 
# start with city 1 at distance 0 with ticket unused(0)
pq = [(0, 1, 0)]
 
while pq:
    cur_dist, city, used = heapq.heappop(pq)
    if cur_dist > dist[city][used]:
        continue
 
    for v, w in graph[city]:
        if used == 0:  # try using the ticket
            if (new_cost := cur_dist + w // 2) < dist[v][1]:
                dist[v][1] = new_cost
                heapq.heappush(pq, (new_cost, v, 1))
 
        if (new_cost := cur_dist + w) < dist[v][used]:
            dist[v][used] = new_cost
            heapq.heappush(pq, (new_cost, v, used))
 
print(dist[n][1])
```

<br>

___


# Cycle Finding

Link: https://cses.fi/problemset/task/1197/

You are given a directed graph, and your task is to find out if it contains a negative cycle, and also give an example of such a cycle.

Solution:
- This is a standered bellmanford problem.

```cpp:
#include <bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define int ll
#define endl '\n'
 
const ll mod = 1000000007;
 
signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
 
    int n, m;
    cin >> n >> m;
    vector<vector<pair<int, int>>> graph(n + 1, vector<pair<int, int>>());
 
    for (int i = 0; i < m; i++)
    {
        int u, v, w;
        cin >> u >> v >> w;
        if (u == v && w < 0)
        {
            cout << "YES" << endl
                 << u << " " << v;
            exit(0);
        }
        graph[u].push_back({v, w});
    }
 
    vector<int> dist(n + 1, INT_MAX);
    vector<int> prevNode(n + 1, -1);
    dist[1] = 0;
 
    for (int _ = 0; _ < n - 1; _++)
    {
        for (int u = 1; u < n + 1; u++)
        {
            for (pair<int, int> x : graph[u])
            {
                if (dist[x.first] > dist[u] + x.second)
                {
 
                    prevNode[x.first] = u;
                    dist[x.first] = dist[u] + x.second;
                }
            }
        }
    }
 
    for (int u = 1; u < n + 1; u++)
    {
        if (dist[u] != INT_MAX)
        {
            for (pair<int, int> x : graph[u])
            {
                if (dist[x.first] > dist[u] + x.second)
                {
                    cout << "YES" << endl;
                    int slow = prevNode[u];
                    int fast = prevNode[slow];
                    while (slow != fast)
                    {
                        fast = prevNode[prevNode[fast]];
                        slow = prevNode[slow];
                    }
                    int start = slow;
                    vector<int> path;
                    path.push_back(start);
                    int end = prevNode[start];
                    while (end != start)
                    {
                        path.push_back(end);
                        end = prevNode[end];
                    }
                    path.push_back(end);
                    reverse(path.begin(), path.end());
                    for (int i = 0; i < (int)path.size(); i++)
                    {
                        cout << path[i] << " ";
                    }
                    cout << endl;
                    return 0;
                }
            }
        }
    }
    cout << "NO" << endl;
 
    return 0;
}
```

<br>

___


# Flight Routes

Link: https://cses.fi/problemset/task/1196

Your task is to find the k shortest flight routes from Syrjälä to Metsälä. A route can visit the same city several times.
Note that there can be several routes with the same price and each of them should be considered (see the example).

Solution:
- Idea is to maintain a max heap for all the nodes and caluculate top k distances for each route.

```cpp:
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    int n, m, k;
    cin >> n >> m >> k;
    vector<vector<pair<int, int>>> graph(n + 1, vector<pair<int, int>>());
    priority_queue<int> best[n + 1];
    for (int i = 0; i < m; i++)
    {
        int a, b, c;
        cin >> a >> b >> c;
        graph[a].push_back({b, c});
    }

    best[1].push(0);

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, 1});

    while (!pq.empty())
    {
        pair<int, int> node = pq.top();
        pq.pop();
        if (node.first > best[node.second].top())
            continue;
        for (pair<int, int> x : graph[node.second])
        {
            int tmp = node.first + x.second;
            if (best[x.first].size() < k)
            {
                best[x.first].push(tmp);
                pq.push({tmp, x.first});
            }
            else if (tmp < best[x.first].top())
            {
                best[x.first].pop();
                best[x.first].push(tmp);
                pq.push({tmp, x.first});
            }
        }
    }
    vector<int> ans;
    while (!best[n].empty())
    {
        ans.push_back(best[n].top());
        best[n].pop();
    }
    reverse(ans.begin(), ans.end());
    for (int a : ans)
        cout << a << " ";

    return 0;
}

```

<br>

___


# Round Trip II

Link: https://cses.fi/problemset/task/1678/

Byteland has n cities and m flight connections. Your task is to design a round trip that begins in a city, goes through one or more other cities, and finally returns to the starting city. Every intermediate city on the route has to be distinct.

Solution:
- We can solve this using simple dfs with coloring method to divide the nodes into 3 sets: white, gray and black while keeping track of previous nodes to solve this problem.
- White set represents unvisited nodes, gray set represents nodes which are visited but not all its neighbors are visited, black represents completely visited nodes.

- Read more on this approach here: https://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/

- Another way to think about this is that, if there is a cycle, topological sort of this graph will never exist.
- Maintain a stack or nodes, where a node forms a cycle backtrack and print it.

Coloring Approach
```cpp:
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

unordered_map<int, vector<int>> graph;
unordered_set<int> white, grey, black;
unordered_map<int, int> parent;
bool cycle = false;

void dfs(int node) {
    white.erase(node);
    grey.insert(node);
    for (int child : graph[node]) {
        if (grey.count(child) > 0) {
            cycle = true;
            vector<int> path;
            path.push_back(child);
            
            int currNode = node;
            while (currNode != child) {
                path.push_back(currNode);
                if (currNode == parent[currNode]) {
                    return;
                }
                currNode = parent[currNode];
            }
            path.push_back(currNode);

            if (path.size() > 2) {
                cout << path.size() << endl;
                for (int i = path.size() - 1; i >= 0; i--) {
                    cout << path[i] << " ";
                }
                cout << endl;
                exit(0);
            }
        }
        if (white.count(child) > 0) {
            parent[child] = node;
            dfs(child);
        }
    }
    grey.erase(node);
    black.insert(node);
}

signed main() {
    int n, m;
    cin >> n >> m;
    for (int i = 0; i < m; i++) {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
    }
    for (int i = 1; i <= n; i++) {
        white.insert(i);
    }
    parent[1] = -1;
    parent[-1] = -1;

    for (int i = 1; i <= n; i++) {
        if (white.count(i) > 0) {
            dfs(i);
        }
    }
    cout << "IMPOSSIBLE" << endl;

    return 0;
}
```

<br>

___


# Course Schedule

Link: https://cses.fi/problemset/task/1679

Solution:
- Standered problem on topological sorting.

```cpp:
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

vector<int> top_sort;

void dfs(int u, vector<bool> &visited, vector<vector<int>> &graph){
    visited[u] = true;
    for(int v:graph[u]){
        if (!visited[v]){
            dfs(v,visited,graph);
        }
    }
    top_sort.push_back(u);
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);

    int n,m;
    cin>>n>>m;

    vector<vector<int>> graph(n+1,vector<int> ());
    for (int i = 0; i < m; i++) {
        int u,v;
        cin>>u>>v;
        graph[u].push_back(v);
    }

    vector<bool> visited(n+1,false);

    for (int i = 1; i <= n; i++) {
        if (!visited[i]){
            dfs(i,visited,graph);
        }
    }
    reverse(top_sort.begin(),top_sort.end());

    // Check if top. sort is valid.
    vector<int> ind(n+1);
    for (int i = 1; i <= n; i++) {
        ind[top_sort[i]]=i;
    }

    for (int i = 1; i <= n; i++) {
        for(int j:graph[i]){
            if (ind[j]<=ind[i]){
                cout<<"IMPOSSIBLE"<<endl;
                exit(0);
            }
        }
    }

    for(int x:top_sort) cout<<x<<" ";
    return 0;
}
```

<br>

___



# Longest Flight Route

Link: https://cses.fi/problemset/task/1680

Uolevi has won a contest, and the prize is a free flight trip that can consist of one or more flights through cities. Of course, Uolevi wants to choose a trip that has as many cities as possible.
Uolevi wants to fly from Syrjälä to Lehmälä so that he visits the maximum number of cities. You are given the list of possible flights, and you know that there are no directed cycles in the flight network.

Solution:

- This is problem of topological sorting and dynamic programming.
- Let $dp[v]$ denote the length of the longest path ending at the node $v$.
- Clearly $$dp[v]=\max_{\text{edge } u\to v \text{ exists}}dp[u]+1,$$
- We only need to make sure that we travel u first, that we can do using topological sort with BFS  for level order traversal using Kanh's algorithm.
- Read more here: https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/

```cpp:
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

    vector<vector<int>> graph(n+1,vector<int> ()), rev_graph(n+1,vector<int> ());
    vector<int> parent(n+1,-1), in_degree(n+1,0), dist(n+1,-1e18);

    for (int i = 0; i < m; i++) {
        int a,b;
        cin>>a>>b;
        in_degree[b]++;
        graph[a].push_back(b);
        rev_graph[b].push_back(a);
    }

    // Kanh's algorithm.
    queue<int>q;
    for (int i = 1; i < n; i++) if (in_degree[i]==0) q.push(i);
    while(!q.empty()){
        int u = q.front(); q.pop();
        for(int v:graph[u]){
            in_degree[v]--;
            if (in_degree[v]==0) q.push(v);
        }

        // Update the distance
        int max_dist = -1e18;
        int max_node = -1;
        for(int p:rev_graph[u]){
            if (dist[p]+1>max_dist){
                max_dist = dist[p]+1;
                max_node = p;
            }
        }
        dist[u] = max_dist;
        if (u==1) dist[u]=1;
        parent[u] = max_node;
    }

	stack<int> answer;
	int temp = n;

	bool contains1 = false;
	if (temp == 1) contains1 = true;
	while (temp != -1 && dist[temp] >= 0) {
		answer.push(temp);
		temp = parent[temp];
		if (temp == 1) contains1 = true;
	}
	if (contains1) {
		cout << dist[n] << "\n";
		while (!answer.empty()) {
			cout << answer.top()<<" ";
			answer.pop();
		}
	} else {
		cout << "IMPOSSIBLE\n";
	}
    return 0;
}
```

<br>

___


# Game Routes

Link: https://cses.fi/problemset/task/1681/

A game has n levels, connected by m teleporters, and your task is to get from level 1 to level n. The game has been designed so that there are no directed cycles in the underlying graph. In how many ways can you complete the game?

Solution:
- Very similar to previous problem. The previous code can be modified to solve this.
- Instead of taking max, just sum the distances.

```cpp:
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
    vector<vector<int>> graph(n+1,vector<int> ()), rev_graph(n+1,vector<int> ());
    vector<int> parent(n+1,-1), in_degree(n+1,0), dist(n+1,0);

    for (int i = 0; i < m; i++) {
        int a,b;
        cin>>a>>b;
        in_degree[b]++;
        graph[a].push_back(b);
        rev_graph[b].push_back(a);
    }

    // Kanh's algorithm.
    dist[1]=1;

    queue<int>q;
    for (int i = 1; i < n; i++) if (in_degree[i]==0) q.push(i);
    while(!q.empty()){
        int u = q.front(); q.pop();
        for(int v:graph[u]){
            in_degree[v]--;
            if (in_degree[v]==0) q.push(v);
        }

        for(int p:rev_graph[u]){
            dist[u] = dist[u]+dist[p];
            dist[u] = dist[u]%mod;
        }
    }
    cout<<dist[n];
    return 0;
}
```

<br>

___


# Investigation

Link: https://cses.fi/problemset/task/1202

You are going to travel from Syrjälä to Lehmälä by plane. You would like to find answers to the following questions:
- what is the minimum price of such a route?
- how many minimum-price routes are there?
- what is the minimum number of flights in a minimum-price route?
- what is the maximum number of flights in a minimum-price route?

Solution:
- Use dijkstra to get the shortest path. Whenever the distance changes, update the min and max values.

```cpp:
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
    vector<vector< pair<int,int> >> graph(n+1,vector< pair<int,int>  > ());
    for (int i = 0; i < m; i++) {
        int u,v,w;
        cin>>u>>v>>w;
        graph[u].push_back({v,w});
    }

    vector<int> dist(n+1,1e18);
    vector<int> nums(n+1,0);
    vector<int> maxn(n+1,0);
    vector<int> minn(n+1,0);
    vector<bool> visited(n+1,false);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    dist[1]=0;
    pq.push({0,1});
    nums[1]=1;
    while(!pq.empty()){
        pair<int,int> x = pq.top(); pq.pop();
        if (visited[x.second]) continue;
        visited[x.second]=true;
        for(auto [next,cost]:graph[x.second]){
            int new_dist = cost + dist[x.second];
            if (new_dist==dist[next]){
                nums[next] = (nums[next]+nums[x.second])%mod;
                minn[next] = min(minn[next],minn[x.second]+1);
                maxn[next] = max(maxn[next],maxn[x.second]+1);
            } else if (new_dist < dist[next] ) {
                nums[next] = nums[x.second];
                minn[next] = minn[x.second]+1;
                maxn[next] = maxn[x.second]+1;
                dist[next] = new_dist;
                pq.push({new_dist,next});
            }
        }
    }
    cout<<dist[n]<<" "<<nums[n]<<" "<<minn[n]<<" "<<maxn[n];
    return 0;
}
```

<br>

___


# Planets Queries I

Link: https://cses.fi/problemset/task/1750

You are playing a game consisting of n planets. Each planet has a teleporter to another planet (or the planet itself).

Your task is to process q queries of the form: when you begin on planet x and travel through k teleporters, which planet will you reach?

Solution:
- This is a standered problem on functional graphs.
- Look at the constraints, 0≤k≤10^9, since k is very large, we cannot simply query in O(k).
- This hints for some binary jumping approach or using a sparse table. 
- We can store the next nodes at powers of 2 and then query. 

```cpp:
#include<bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define int ll
#define endl '\n'
 
const ll mod = 1000000007;
 
const int N = 2e5;
 
int sparseTable[N+1][30];
 
int jump(int x, int k) {
    for (int i = 0; i < 30; i++) {
        if (k & (1 << i)) {
            x = sparseTable[x][i];
        }
    }
    return x;
}
 
signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);
 
    int n,q;
    cin>>n>>q;
    for (int i = 1; i <= n; i++) cin>>sparseTable[i][0];
 
    for (int i = 1; i < 30; i++) {
        for (int j = 1; j <= n; j++) {
            sparseTable[j][i] = sparseTable[ sparseTable[j][i-1] ][i-1];
        }
    }
    while(q--){
        int x,k;
        cin>>x>>k;
        cout<<jump(x,k)<<endl;
    }
    return 0;
}
```

<br>

___



# Planets Cycles

Link: https://cses.fi/problemset/task/1751

You are playing a game consisting of n planets. Each planet has a teleporter to another planet (or the planet itself).
You start on a planet and then travel through teleporters until you reach a planet that you have already visited before.
Your task is to calculate for each planet the number of teleportations there would be if you started on that planet.


Solution:
- Once we have $\texttt{path}$ and $\texttt{steps}$ we can calculate the $\texttt{pathlength}$ of all the planets in this $\texttt{path}$. We know the $\textit{repeat}$ will always be the planet at the end of the $\texttt{path}$, but it may appear elsewhere as well. We can break this down into two cases:

- The $\textit{repeat}$ was visited twice in the current $\texttt{path}$. The planets in the $\texttt{path}$ between the two occurrences of the $\textit{repeat}$ form a $\textit{cycle}$. The $\textit{repeat}$ only appears at the end of the current $\texttt{path}$. All of the planets in the $\texttt{path}$ are not part of a $\textit{cycle}$.

- For planets inside a $\textit{cycle}$, the repeating planet when starting from that planet is itself. For all the planets in the $\texttt{path}$ but outside the $\textit{cycle}$, the planet that repeats when starting from each planet will still be the  $\textit{repeat}$.

```cpp:
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

const int N = 2e5+1;
int destinations[N];
bool visited[N]{};
int pathLength[N]{};
queue<int>path;
int steps = 0;

void dfs(int planet){
    path.push(planet);
    if (visited[planet]){
        steps+=pathLength[planet];
        return;
    }
    visited[planet]=true;
    steps++;
    dfs(destinations[planet]);
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);

    int n;
    cin>>n;
    for (int i = 1; i <= n; i++) {
        cin>>destinations[i];
    }
    for (int i = 1; i <= n; i++) {
        if(!visited[i]){
            steps = 0;
            dfs(i);
            int decrement = 1;
            // For each planet in the path, calculate the path length;
            while(!path.empty()){
                // if we are in a cycle, all nodes will have same path length.
                if (path.front()==path.back()) decrement=0;
                pathLength[path.front()] = steps;
                steps-=decrement;
                path.pop();
            }
        }
    }
    for (int i = 1; i <= n; i++) { 
        cout << pathLength[i] << " "; 
    }
    return 0;
}
```

<br>

___


# Road Reparation

Link: https://cses.fi/problemset/task/1675

Solution:
- This is standered problem on Minimum spanning tree.
- We just need to calculate the cost.
- We can implement Krushkal's algorithm with DSU to achieve a better time complexity.
- Read more here: https://cp-algorithms.com/graph/mst_kruskal_with_dsu.html

```cpp:
#include <algorithm>
#include <iostream>
#include <limits>
#include <vector>

using namespace std;
typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

int find(vector<int>& parent, int x) {
    if (parent[x] == x)
        return x;
    return parent[x] = find(parent, parent[x]);
}

bool unite(vector<int>& parent, vector<int>& size, int x, int y) {
    x = find(parent, x);
    y = find(parent, y);
    if (x == y)
        return false;
    if (size[x] > size[y])
        swap(x, y);
    parent[x] = y;
    size[y] += size[x];
    return true;
}

long long kruskal(int N, vector<pair<long long, pair<int, int>>>& edges) {
    sort(edges.begin(), edges.end());
    long long ans = 0;
    vector<int> parent(N + 1);
    vector<int> size(N + 1, 1);
    for (int i = 1; i <= N; i++)
        parent[i] = i;

    for (const auto& e : edges) {
        if (unite(parent, size, e.second.first, e.second.second))
            ans += e.first;
    }
    return (size[find(parent, 1)] == N ? ans : -1);
}

signed main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    int n, m;
    cin >> n >> m;
    vector<pair<long long, pair<int, int>>> edges;
    for (int i = 0; i < m; i++) {
        int a, b;
        long long c;
        cin >> a >> b >> c;
        edges.push_back({ c, {a, b} });
    }
    long long ans = kruskal(n, edges);
    if (ans >= 0) {
        cout << ans;
    } else {
        cout << "IMPOSSIBLE";
    }
    return 0;
}

```

<br>

___


# Road Construction

Link: https://cses.fi/problemset/task/1676/

There are n cities and initially no roads between them. However, every day a new road will be constructed, and there will be a total of m roads.
A component is a group of cities where there is a route between any two cities using the roads. After each day, your task is to find the number of components and the size of the largest component.

Solution:
- Normal DSU problem.
- Store the size of component in parent vector.

```cpp:
#include <bits/stdc++.h>

using namespace std;

vector<int> parent;

int findRoot(int x) {
    return (parent[x] < 0 ? x : parent[x] = findRoot(parent[x]));
}

bool uniteSets(int x, int y) {
    x = findRoot(x);
    y = findRoot(y);
    if (x == y)
        return false;
    if (parent[x] > parent[y])
        swap(x, y);
    parent[x] += parent[y];
    parent[y] = x;
    return true;
}

int main() {
    int n, m;
    cin >> n >> m;
    parent = vector<int>(n, -1);
    int connectedComponents = n, largestSetSize = 1;

    while (m--) {
        int a, b;
        cin >> a >> b;
        a--;
        b--;
        if (uniteSets(a, b)) {
            largestSetSize = max(largestSetSize, -parent[findRoot(a)]);
            connectedComponents--;
        }
        cout << connectedComponents << ' ' << largestSetSize << '\n';
    }

    return 0;
}

```

<br>

___


# Flight Routes Check

Link: https://cses.fi/problemset/task/1682

There are n cities and m flight connections. Your task is to check if you can travel from any city to any other city using the available flights.

Solution:

- If there is a vertex such which can be reached by all other vertices and it reaches all other vertices, then ans is yes.
- This problem can also be solved by Strongly connected somponents.
- Below is the solution using Kosaraju's algorithm.

```cpp:
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

vector<int>topo(0);

void dfs1(int node, vector<bool>&visited,vector<vector<int>> &graph ){
    visited[node]=true;
    for(int child:graph[node]){
        if(!visited[child]){
            dfs1(child,visited,graph);
        }
    }
    topo.push_back(node);
}

void dfs(int node, vector<bool>&visited,vector<vector<int>> &graph ){
    visited[node]=true;
    for(int child:graph[node]){
        if(!visited[child]){
            dfs(child,visited,graph);
        }
    }
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);

    int n,m;
    cin>>n>>m;
    vector<vector<int>> graph(n+1,vector<int> ());
    vector<vector<int>> rev_graph(n+1,vector<int> ());
    for (int i = 0; i < m; i++) {
        int a,b;
        cin>>a>>b;
        graph[a].push_back(b);
        rev_graph[b].push_back(a);
    }
    vector<bool> visited(n+1,false);
    for (int i = 1; i <= n; i++) {
        if (!visited[i]){
            dfs1(i,visited,graph);
        }
    }

    for (int i = 1; i <= n; i++) {
        visited[i]=false;
    }
    reverse(topo.begin(), topo.end());
    vector<int> ssc;
    for(int node:topo){
        if (!visited[node]){
            ssc.push_back(node);
            dfs(node,visited,rev_graph);
        }
    }
    if(ssc.size()==1){
        cout<<"YES"<<endl;
    }
    else{
        cout<<"NO"<<endl;
        cout<<ssc[1]<<" "<<ssc[0];
    }
    return 0;
}
```

<br>

___


# Planets and Kingdoms

Link: https://cses.fi/problemset/task/1683/

A game has n planets, connected by m teleporters. Two planets a and b belong to the same kingdom exactly when there is a route both from a to b and from b to a. Your task is to determine for each planet its kingdom.

Solution:
- Modify the code of previous problem to assign colors to each SSC.

```cpp:
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
#define int ll
#define endl '\n'

const ll mod = 1000000007;

vector<int>topo(0);

void dfs1(int node, vector<bool>&visited,vector<vector<int>> &graph ){
    visited[node]=true;
    for(int child:graph[node]){
        if(!visited[child]){
            dfs1(child,visited,graph);
        }
    }
    topo.push_back(node);
}

int color = 1;

void dfs(int node, vector<bool>&visited,vector<vector<int>> &graph, vector<int> &colors ){
    visited[node]=true;
    colors[node] = color;
    for(int child:graph[node]){
        if(!visited[child]){
            dfs(child,visited,graph,colors);
        }
    }
}

signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);

    int n,m;
    cin>>n>>m;
    vector<vector<int>> graph(n+1,vector<int> ());
    vector<vector<int>> rev_graph(n+1,vector<int> ());
    for (int i = 0; i < m; i++) {
        int a,b;
        cin>>a>>b;
        graph[a].push_back(b);
        rev_graph[b].push_back(a);
    }
    vector<bool> visited(n+1,false);
    for (int i = 1; i <= n; i++) {
        if (!visited[i]){
            dfs1(i,visited,graph);
        }
    }

    for (int i = 1; i <= n; i++) {
        visited[i]=false;
    }
    reverse(topo.begin(), topo.end());
    vector<int> colors(n+1,0);
    for(int node:topo){
        if (!visited[node]){
            dfs(node,visited,rev_graph,colors);
            color++;
        }
    }
    cout<<color-1<<endl;
    for (int i = 1; i <= n; i++) {
        cout<<colors[i]<<" ";
    }
    return 0;
}
```

<br>

___


# Giant Pizza

Link: https://cses.fi/problemset/task/1684

Uolevi's family is going to order a large pizza and eat it together. A total of n family members will join the order, and there are m possible toppings. The pizza may have any number of toppings.

Each family member gives two wishes concerning the toppings of the pizza. The wishes are of the form "topping x is good/bad". Your task is to choose the toppings so that at least one wish from everybody becomes true (a good topping is included in the pizza or a bad topping is not included).

Solution:
- This is problem on 2-SAT (Boolean satisfiability problem).
- It can be solved using Strongly connected components.
- Read more here: https://cp-algorithms.com/graph/2SAT.html

```cpp:
#include <iostream>
#include <vector>
#include <cstring>
using namespace std;


vector<int> adj[200002];
vector<int> adj_t[200002];
vector<int> topo;
int colors[200002];
bool visited[200002];

void dfs(int node){
    visited[node] = true;
    for (int child: adj[node]){
        if (!visited[child])
            dfs(child);
    }
    topo.push_back(node);
}

void dfs2(int node, int color){
    visited[node] = true;
    colors[node] = color;
    for (int child: adj_t[node]){
        if (!visited[child])
            dfs2(child, color);
    }
}

int main(){
    int m, n;
    cin >> m >> n;
    for (int i = 0; i < m; i++){
        char c1, c2;
        int x1, x2;
        cin >> c1 >> x1 >> c2 >> x2;
        x1--;
        x2--;
        int b1 = c1 == '+' ? 1 : 0;
        int b2 = c2 == '+' ? 1 : 0;
        adj[n * (1 - b1) + x1].push_back(n * b2 + x2);
        adj_t[n * b2 + x2].push_back(n * (1 - b1) + x1);
        adj[n * (1 - b2) + x2].push_back(n * b1 + x1);
        adj_t[n * b1 + x1].push_back(n * (1 - b2) + x2);
    }
    
    memset(visited, false, sizeof(visited));
    for (int i = 0; i < 2 * n; i++){
        if (!visited[i])
            dfs(i);
    }
    
    memset(visited, false, sizeof(visited));
    reverse(topo.begin(),topo.end());
    int color = 0;
    for (int node:topo){
        if (!visited[node])
            dfs2(node, color++);
    }
    vector<char> ans(n);
    for (int i = 0; i < n; i++){
        if (colors[i] == colors[i + n]){
            cout << "IMPOSSIBLE" << endl;
            return 0;
        }
        if (colors[i] < colors[i + n]){
            ans[i] = '+';
        }
        if (colors[i] > colors[i + n]){
            ans[i] = '-';
        }
    }
    
    for (int i = 0; i < n; i++)
        cout << ans[i] << " ";
    cout << endl;
    
    return 0;
}

```

<br>

___


# *Coin Collector

Link: https://cses.fi/problemset/task/1686/

A game has n rooms and m tunnels between them. Each room has a certain number of coins. What is the maximum number of coins you can collect while moving through the tunnels when you can freely choose your starting and ending room?

Solution:

- Make a condensed graph of Strongly connected components and use dynamic programming to solve it.

```cpp:
#include<bits/stdc++.h>
using namespace std;
 
typedef long long ll;
#define int ll
#define endl '\n'
 
const ll mod = 1000000007;
const int N = 1e5+1;
vector<int> graph[N], rev_graph[N];
vector<int> topo;
vector<int> ssc;
vector<int> condensed_reverse_graph[N];

bool visited[N+1]{};
int colors[N+1]{};
int sums[N+1]{};
int dp[N+1]{};

void dfs1(int node){
    visited[node]=true;
    for(int child: graph[node]){
        if (!visited[child]) dfs1(child);
    }
    topo.push_back(node);
}

void dfs2(int node, int color){
    visited[node]=true;
    colors[node] = color;
    for(int child: rev_graph[node]){
        if (!visited[child]) dfs2(child,color);
    }
}

int dfs3(int node){
    if (dp[node]) return dp[node];
    dp[node] = sums[node];
    for(int j:condensed_reverse_graph[node]){
        dp[node] = max(dp[node],sums[node]+dfs3(j));
    }
    return dp[node];
}
 
signed main()
{
    ios_base::sync_with_stdio(0);
    cin.tie(0);cout.tie(0);
 
    int n,m;
    cin>>n>>m;
    int coins[n+1];
    for (int i = 1; i <= n; i++) cin>>coins[i];
    for (int i = 0; i < m; i++) {
        int a,b;
        cin>>a>>b;
        graph[a].push_back(b);
        rev_graph[b].push_back(a);
    }
    topo.clear();
    for (int i = 1; i <= n; i++) {
        if(!visited[i]) dfs1(i);
    }

    reverse(topo.begin(),topo.end());
    memset(visited,false,sizeof(visited));
    for (int node:topo) {
        if(!visited[node]) {
            dfs2(node,node);
            ssc.push_back(node);
        }
    }
    for (int i = 1; i <= n; i++) {
        sums[colors[i]]+=coins[i];
    }
    for (int i = 1; i <= n; i++) {
        for(int j:graph[i]){
            if (colors[i]==colors[j]) continue;
            condensed_reverse_graph[colors[j]].push_back(colors[i]);
        }
    }
    
    int ans = 0;
    for(int x:ssc){
        ans = max(ans,dfs3(x));
    }
    cout<<ans<<endl;
    return 0;
}
```

<br>

___


# Hamiltonian Flight

Link: https://cses.fi/problemset/task/1690

There are n cities and m flight connections between them. You want to travel from Syrjälä to Lehmälä so that you visit each city exactly once. How many possible routes are there?

Solution:
- The constraints are small, use dp with bit masking.

```cpp:
signed main()
{
    int n, m;
    cin >> n >> m;
    vector<vector<int>> dp((1 << n), vector<int>(n, 0));
    vector<vector<int>> graph(n, vector<int>());
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        graph[--v].emplace_back(--u);
    }
    dp[1][0] = 1;
    for (int mask = 2; mask < (1 << n); mask++){
        if ((mask & 1) == 0) continue;
        if (((mask & (1 << (n - 1)))) && (mask != ((1 << n) - 1))) continue;
        for (int i = 0; i < n; i++){
            if ((mask & (1 << i)) == 0) continue;
            int new_mask = mask ^ (1 << i);
            for (int prev_city : graph[i]) {
                if (mask & (1 << prev_city)) {
                    dp[mask][i] += dp[new_mask][prev_city];
                    dp[mask][i] %= mod;
                }
            }
        }
    }
    cout << dp[(1 << n) - 1][n - 1] << endl;
    return 0;
}

```

___

<footer>
<br>
<br>
Thanks for Reading.
<br>
<br>
</footer>

