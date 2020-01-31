// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// module.exports = Node

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor(root) {
        this.root = root
    }
    // add = (val) => {
    //     let node = new Node(val)
    //     if (!this.root) {
    //         this.root = node
    //     } else {
    //         let currNode = this.root
    //         while (currNode) {
    //             if (val < currNode.value) {
    //                 if (currNode.left === null) {
    //                     currNode.left = node
    //                     return
    //                 }
    //                 currNode = currNode.left
    //             } else {
    //                 if (currNode.right === null) {
    //                     currNode.right = node
    //                     return
    //                 }
    //                 currNode = currNode.right
    //             }
    //         }
    //     }
    // }
    add = (val, root = this.root) => {
        if (!root) {
            this.root = new Node(val)
            return
        }
        if (val < root.value) {
            if (root.left === null) {
                root.left = new Node(val)
                return
            }
            this.add(val, root.left)
        } else {
            if (root.right === null) {
                root.right = new Node(val)
                return
            }
            this.add(val, root.right)
        }
    }
    find = (val) => {
        let curr = this.root
        if (curr === null) {
            return false
        } else {
            while (curr) {
                console.log('curr =>', curr)
                if (curr.value === val) {
                    return true
                } else if (val < curr.value) {
                    curr = curr.left
                } else {
                    curr = curr.right
                }
            }
        }
        return false
    }
    bfPrintB = () => {
        let result = []
        let tempQ = []
        tempQ.push({ el: this.root, depth: 1 })
        while (tempQ.length > 0) {
            const { el, depth } = tempQ.shift()
            result.push({ el, depth })
            if (el.left) {
                tempQ.push({ el: el.left, depth: depth + 1 })
            }
            if (el.right) {
                tempQ.push({ el: el.right, depth: depth + 1 })
            }
        }
        let currDepth = 1
        for (let i = 0; i < result.length; i++) {
            const { el, depth } = result[i]
            if (currDepth !== depth) {
                process.stdout.write("\n")
                currDepth = depth
            }
            process.stdout.write(el.value + ' ')
        }
    }
    bfPrintD = () => {
    }
}

module.exports = Tree;
