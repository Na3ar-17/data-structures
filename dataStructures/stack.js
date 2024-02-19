class Stack {
  constructor() {
    this.items = []
    this.count = 0
  }

  push(el) {
    this.items[this.count] = el
    this.count += 1
  }

  pop() {
    if (this.count == 0) return undefined
    let deleteElement = this.items[this.count - 1]
    this.count -= 1
    return deleteElement
  }
}

const instance = new Stack()

instance.push(10)
instance.push(11)
instance.push(12)
instance.push(13)
instance.pop()
