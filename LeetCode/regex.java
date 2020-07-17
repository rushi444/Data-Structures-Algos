class Solution {
    public boolean isMatch(String s, String p) {
    boolean[][] dp = new boolean[s.length()+1][p.length()+1];

    // because empty string matches with empty pattern
    dp[0][0] = true;

    // Fill all values in row zero based on what the pattern is for empty string
    for (int i = 1; i <= p.length(); i++) {
        if (p.charAt(i-1) == '*') {
            dp[0][i] = dp[0][i-2];
        }

    }
    
    // actual logic
    for (int i = 1; i<= s.length(); i++) {
      for (int j = 1; j <= p.length(); j++) {
        // if the values are equal or matches with .
        if (s.charAt(i-1) == p.charAt(j-1) || p.charAt(j-1) == '.')
          dp[i][j] = dp[i-1][j-1];
        else if (p.charAt(j-1) == '*') {
          // matching with zero occurance of previous character in the pattern
          dp[i][j] = dp[i][j-2];
          
          // if the character in string matches with the previous character in pattern
          // or previous character in pattern is .
          if (p.charAt(j-2) == s.charAt(i-1) || p.charAt(j-2) == '.')
            dp[i][j] = dp[i][j-2] | dp[i-1][j];
        }
        else
          dp[i][j] = false;
      }
    }
    
    return dp[s.length()][p.length()];
  }
}