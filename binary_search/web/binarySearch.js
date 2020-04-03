class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
        this.length = 0
    }
    append(val) {
        const newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
        } else {
            let curr = this.root
            while (curr) {
                if (val < curr.val) {
                    if (!curr.left) {
                        curr.left = newNode
                        break
                    }
                    curr = curr.left
                } else {
                    if (!curr.right) {
                        curr.right = newNode
                        break
                    }
                    curr = curr.right
                }
            }
        }
        this.length++
        return val
    }
    print() {
        if (!this.root) {
            console.log(`This tree is empty`)
            return
        }
        let returnArr = []
        let depth = 0
        let curr = this.root
        let queue1 = []
        // const queue2 = []
        queue1.push(curr)

        const buildString = (q) => {
            // console.log(q)
            let str = ``
            let queue = []
            q.forEach(ele => {
                if (ele === `x`) {
                    str += ele + `      `
                    queue.push(`x`)
                    return
                }
                str += ele.val + `      `
                if (ele.left != null) {
                    queue.push(ele.left) 
                } else {
                    queue.push(`x`)
                }
                if (ele.right != null) {
                    queue.push(ele.right)
                } else {
                    queue.push(`x`)
                }
            })
            return [str, queue]
        }

        while(queue1.length) {
            const [rowStr, newQueue] = buildString(queue1)
            returnArr = returnArr.map(ele => {
                for (let i = 0; i < depth; i++) {
                    ele += ` `
                }
                ele += ele
                return ele
            })
            returnArr.push(rowStr)
            queue1 = [...newQueue]
            if (queue1.every(ele => ele === `x`)) {
                break
            }
            console.log(queue1)
            depth++
        }

        console.log(returnArr.join(`\n\n`))
        return returnArr.join(`\n`)
    }
}

const root = new Tree()
root.append(5)
root.append(1)
root.append(10)
root.append(15)
root.append(20)
root.append(12)
root.append(3)
root.append(4)

// console.log(root)

root.print()