// function factorial(n) {
//   if (n == 0 || n == 1) {
//     return 1
//   }

//   return n * factorial(n - 1)
// }

// function factorial2(n) {
//   const st = [[n, 1]]

//   while (st.length > 0) {
//     const [curr, res] = st.pop()

//     if (curr == 0 || curr == 1) {
//       return res
//     }

//     st.push([curr - 1, res * curr])
//   }
// }

// function factorial3(n) {
//   let res = 1
//   for (let i = 1; i <= n; i++) {
//     res *= i
//   }

//   return res
// }
// console.log(factorial3(5))
