// Linked List -> Linked List class & Node class

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
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) { // Where there are no nodes in the List
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        } else {
            this.tail.next = newNode; // Current Tails next => newNode
            this.tail = newNode; // New Tail => newNode
            this.length++;
            return;
        }
    }
    print() {
        const arrow = ' => ';
        let pointer = this.head;

        if (pointer === null) {
            return `null`;
        }

        let listString = `(HEAD) ${pointer.value}`;

        while(pointer.next) {
            pointer = pointer.next;
            listString += arrow + pointer.value;
        }
        return listString;
    }
    nodeAt(index) {
        if (index < this.length) {
            let counter = 0;
            let pointer = this.head;
            while (counter < index) {
                pointer = pointer.next;
                counter++;
            }
            return pointer.value;
        } else {
            return `Error: Index out of bounds!`;
        }
    }
    pop() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--;
            return deletedTail;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;
        this.length--;
        return deletedTail;
    }
    shift() { // Remove the first ele and return the node.
        
    }
    removeAt(index) { // Remove ele at index provided and return the node.

    }
    find(value) { // Find and return the index of the node with the value. If it doesn't exist return -1.

    }
    toArray() { // Returns an array with values of the linked list.
        
    }
}

let pizzaList = new LinkedList();

// pizzaList.push('Large Pepporini');
// pizzaList.push('Small Ham and Eggs');
pizzaList.push('Large Pineapple');
// console.log(pizzaList);

pizzaList.append('Large Mushroom');
pizzaList.append('Large Chicken');
// console.log(pizzaList);
console.log(pizzaList.print());
console.log('NodeAt => ', pizzaList.nodeAt(1));
console.log('Pop => ', pizzaList.pop());
console.log(pizzaList.print());



