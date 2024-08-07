
Codechef Starters 111 Solutions


## Problem Name: Exam

Link: https://www.codechef.com/problems/EXAMCHEF

Solution:

```
for _ in range(int(input())):
    x, y, z = map(int, input().split())
    total_students = x*y
    percentage = z*100/total_students
    if percentage>50:
        print("YES")
    else:
        print("NO")
```

<br>

___

## Reach Codetown

Link: https://www.codechef.com/problems/CODETOWN

Solution:

```
S = "CODETOWN"
vowels = "AEIOU"

for _ in range(int(input())):
    x = input()
    check = True
    for i in range(8):
        if x[i] in vowels:
            if S[i] not in vowels:
                check = False
                break
        else:
            if S[i] in vowels:
                check = False
                break
    if check:
        print("YES")
    else:
        print("NO")
```

<br>

___

Beautiful Strings


Prefixing
LCM Mania
Prime Range Game
ODI Cricket
Component Count
Square Count