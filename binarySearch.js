// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let count = 0

// const search = (arr, el) => {
//   let start = -1
//   let end = arr.length

//   while (end - start > 1) {
//     const middle = Math.floor((start + end) / 2)
//     count++
//     if (arr[middle] === el) {
//       return middle
//     }

//     if (arr[middle] > el) {
//       end = middle
//     } else {
//       start = middle
//     }
//   }
//   return -1
// }

// console.log(search(arr, 10))
// console.log(count)
// ===================================

const arr = [
  1, 2, 4, 5, 2, 6, 8, 23, 8, 8, 87, 23232, 445, 767, 23, 3, 4, 5, 6, 7, 2,
]
const sorted = arr.sort((a, b) => a - b)

function search(arr, el) {
  let start = -1
  let end = arr.length

  while (end - start > 1) {
    const middle = Math.floor((start + end) / 2)
    if (arr[middle] === el) {
      return middle
    }

    if (arr[middle] > el) {
      end = middle
    } else {
      start = middle
    }
  }
  return -1
}

function countFreq(arr, el) {
  const posEl = search(arr, el)
  if (posEl == -1) {
    return 0
  }

  let i = posEl
  while (arr[i] === el) {
    i--
  }

  let j = posEl
  while (arr[j] === el) {
    j++
  }

  return j - i - 1
}

console.log(countFreq(sorted, 8))
