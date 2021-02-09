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
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);