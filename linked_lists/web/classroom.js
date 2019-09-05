class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        if (this.tail === null) {
            this.tail = newNode;
        }
        this.length++;
    }

    append(value) {
        let newNode = new Node(value);
        let currentNode = this.head;
    }

}

let list = new LinkedList();
list.push('Pizza');
list.push('Burger');
console.log(list);




// let num = .120033;
// counter = 0;
// console.log(1 / num)
// function digits(n) {
//     if (n < 10) {
//         return counter;
//     } else {
//         counter++;
//         return digits(n / 10);
//     }
// }

// console.log(digits(num))

// function findOne(x) {
//     if (x % 10 === 1) {
//         return true;
//     } else if (x / 10 < 1) {
//         return false;
//     } else {
//         return findOne(Math.floor(x / 10));
//     }
// }



// console.log(findOne(num));