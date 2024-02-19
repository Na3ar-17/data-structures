function binarySearch(arr, el) {
  const newArr = arr.sort()

  let start = -1
  let end = newArr.length

  while (end - start > 1) {
    let middle = Math.floor((end - start) / 2)

    if (newArr[middle] === el) {
      return middle
    }

    if (newArr[middle] > el) {
      end = middle
    } else {
      start = middle
    }
  }

  return -1
}

const instance = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)
