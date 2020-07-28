def f(s):
    x = []
    l, i = len(s), 0
    while i < l:
        j = i
        while j < l and s[j] == s[i]:
            j += 1
        x.append((s[i], j-i))
        i = j
    return x


class Solution:
    def expressiveWords(self, s: str, y: List[str]) -> int:
        s = f(s)
        l = len(s)
        x = []
        for i in y:
            x.append(f(i))
        res = 0
        for i in x:
            if len(i) != l:
                continue
            flag = True
            for j in range(l):
                a, b = s[j]
                c, d = i[j]
                if a != c or b < d or (b < 3 and b != d):
                    flag = False
                    break
            res += flag
        return res
