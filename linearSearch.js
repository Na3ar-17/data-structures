const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let count = 0
const search = (arr, el) => {
  for (let i = 0; i < arr.length; i++) {
    count++
    if (arr[i] === el) {
      return i
    }
  }

  return -1
}

console.log(search(arr, 100))

console.log(count)
