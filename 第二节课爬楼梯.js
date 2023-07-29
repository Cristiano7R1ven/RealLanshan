function climbStairs(n) {
  // 如果 n 为 0 或 1，那么到达楼顶的方法数都是 1
  if (n === 0 || n === 1) {
    return 1;
  }

  // 初始化一个长度为 n+1 的数组，初始值均为 0
  const dp = new Array(n + 1).fill(0);

  // 到达第 0 阶和第 1 阶的方法数都是 1
  dp[0] = 1;
  dp[1] = 1;

  // 循环计算到达第 i 阶台阶的方法数
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // 返回到达第 n 阶台阶的方法数
  return dp[n];
}
