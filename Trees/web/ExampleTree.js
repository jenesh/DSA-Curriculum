const Node = require('./Node')

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')
const g = new Node('G')
const h = new Node('H')
const i = new Node('I')
const j = new Node('J')
const k = new Node('K')

a.left = b;
a.right = g;

b.left = c;
b.right = f;

c.left = d;
c.right = e;

g.left = h;
g.right = k;

h.left = i;
h.right = j;

// We could visualize the tree constructed as: 
//           (A)
//     (B)       (G)
//   (C) (F)  (H)   (K)
// (D)(E)   (I)(J)

const inOrderPrint = (root, arr = []) => {
    if (root === null) return;

    inOrderPrint(root.left, arr)
    // console.log(root.val)
    arr.push(root.val)
    inOrderPrint(root.right, arr)
    return arr
}

console.log(`In order printing`)
console.log(inOrderPrint(a))
console.log(`In order finished`)

const preOrderPrint = (root, arr = []) => {
    if (!root) return;
    // console.log(root.val)
    arr.push(root.val)
    preOrderPrint(root.left, arr)
    preOrderPrint(root.right, arr)
    return arr
}

console.log(`Pre order printing`)
console.log(preOrderPrint(a))
console.log(`Pre order finished`)

const postOrderPrint = (root, arr = []) => {
    if (!root) return;

    postOrderPrint(root.left, arr)
    postOrderPrint(root.right, arr)
    // console.log(root.val)
    arr.push(root.val)
    return arr
}

console.log(`Post order printing`)
console.log(postOrderPrint(a))
console.log(`Post order finished`)