class Node {
  constructor(data, next = null, prev = null) {
    this.data = data
    this.next = next
    this.prev = prev
  }
}

class DoubleLinkedList {
  constructor() {
    this.first = null
    this.last = null
  }

  push(data) {
    const node = new Node(data)

    if (this.last) {
      this.last.next = node
      node.prev = this.last
    }

    if (!this.first) {
      this.first = node
    }

    this.last = node
  }

  unshift(data) {
    const node = new Node(data, this.first)

    if (this.first) {
      this.first.prev = node
    } else {
      this.last = node
    }

    if (!this.last) {
      this.last = node
    }

    this.first = node
  }
}

const list = new DoubleLinkedList()

list.push('Nazar')
list.push('))')
list.unshift("I'm")
list.unshift('Hi')
console.log(list)
