class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.head = null
    }
    // to node to tree
    add(val) {
        let node = new Node(val)
        if (this.head == null) { this.head = node; return }
        else this.addHelper(this.head, node)
    }
    addHelper(parent, child) {
        if (child.val < parent.val) {
            !parent.left
                ? parent.left = child
                : this.addHelper(parent.left, child)
        } else {
            !parent.right
                ? parent.right = child
                : this.addHelper(parent.right, child)
        }
    }

    // search for node in tree
    search(val) {
        if (this.head == null) {
            return false
        } else {
            return this.searchHelper(this.head, val)
        }
    }
    searchHelper(node, val) {
        if (node.val == val) return true
        else if (node.val > val) {
            return node.left
                ? this.searchHelper(node.left, val)
                : false
        } else {
            return node.right
                ? this.searchHelper(node.right, val)
                : false
        }
    }
}