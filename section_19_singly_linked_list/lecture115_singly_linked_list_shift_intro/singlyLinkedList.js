// piece of data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // To add a node at the end of the singly linked list
  push(val) {

    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // Traversing till the end of the singly linked list
  /* traverse() {
    let current = this.head;
    while (current.next) {
        current = current.next;
    }

    return current;
  }*/

  // Removing last node of the singly linked list
  pop() {

    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    // Decreasing the length of list
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;

  }

  // To remove the first item of the list
  shift() {

    if (!this.head) {
      return undefined;
    }

    let nodeRemoved;

    nodeRemoved = this.head;
    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return nodeRemoved;
  }

}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
