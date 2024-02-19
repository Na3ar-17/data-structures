class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(data) {
    const node = new Node(data, this.head)

    this.head = node
  }

  append(data) {
    const node = new Node(data)
    if (this.tail) {
      this.tail.next = node
    }

    if (!this.head) {
      this.head = node
    }

    this.tail = node
  }

  insertAfter(el, data) {
    const found = this.find(el)

    if (!found) return undefined

    const node = new Node(data, found.next)

    found.next = node
  }

  delete(data) {
    if (!this.head) return undefined

    while (this.head && this.head.data === data) {
      this.head = this.head.next
    }

    let current = this.head

    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next
      } else {
        current = current.next
      }
    }

    if (this.tail.data === data) {
      this.tail = current
    }
  }

  find(data) {
    if (!this.head) return undefined

    let current = this.head
    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }
  }
}

const list = new LinkedList()
list.append(100)
list.append(200)

list.delete(200)
list // ?
