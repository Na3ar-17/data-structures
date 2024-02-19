class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  append(data) {
    const node = new Node(data)

    if (this.root === null) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  search(node, data) {
    if (node === null) {
      return null
    } else if (data < node.data) return this.search(node.left, data)
    else if (data > node.data) return this.search(node.right, data)
    else return node
  }
}

const instance = new BinaryTree()
instance.append(9)
instance.append(8)
instance.append(20)
instance.append(21)
instance.append(25)
instance.append(22)
instance.search(22)

console.log(instance.root)
