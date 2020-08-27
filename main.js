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
    // add node to tree
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

    // remove node from tree
    remove(val) {
        return !this.head
            ? 'no nodes in this tree'
            : this.removeHelper(this.head, val)
    }
    removeHelper(node, val) {
        if (node.val == val) {
            let newVal = this.findReplacement(node, val)
            if (newVal.currentNode) {
                node.val = newVal.currentNode.val
                newVal.parent.right = newVal.currentNode.left
            } else {
                node.val = newVal
            }
            return
        }
        else if (node.val > val) {
            this.removeHelper(node.left, val)
        } else {
            this.removeHelper(node.right, val)
        }

    }
    // findReplacement
    findReplacement(node, val) {
        if (!node.left) {
            return node.right
        } else {
            let currentNode = node.left
            let parent = node
            while (currentNode.right) {
                if (currentNode.right.right) {
                    parent = currentNode.right
                    currentNode = currentNode.right.right
                } else {
                    parent = currentNode
                    currentNode = currentNode.right
                    break
                }
            }
            return { parent, currentNode }
        }
    }


    // search for node in tree
    search(val) {
        if (!this.head) {
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