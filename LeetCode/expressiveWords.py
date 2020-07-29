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

def max_sliding_window(nums, k)
  max_window = []
  queue = []
  
  nums.size.times do |i|
    while queue.any? && queue[0] < i-k+1  do
      queue.shift
    end
    
    while queue.any? && nums[queue[-1]] < nums[i] do
      queue.pop
    end

    queue.push i
    max_window.push nums[queue[0]] if i >= k-1
  end
  
  max_window
end