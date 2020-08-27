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
}