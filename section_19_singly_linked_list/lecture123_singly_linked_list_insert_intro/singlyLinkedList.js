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

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return currentHead;
  }

  // To add an item at the beggining of the list
  unshift(val) {
    // 1. This function should accept a value

    const newNode = new Node(val);
    // 2. Create a new node using the value passed to the function

    if (!this.head) {
      // 3. If there is no head property on the list, set the head and tail to be the newly created node
      this.head = newNode;
      this.tail = this.head;
    } else {
      // 4. Otherwise set the newly created node's next property to be the current head property
      newNode.next = this.head;
      // 5. Set the head property to the newly created node
      this.head = newNode;
    }

    // 5. Increment the length of the list by 1
    this.length++;

    // 6. Return the linked list
    return this;
  }

  // To fetch a value at an index
  // 1. This function should accept an index
  get(index) {

    // 2. If the index is greater than or equal to the length of the list or if the index is less than 0 then return null
    if (index >= this.length || index < 0) {
      return null;
    }

    let counter = 0;
    let current = this.head;

    // 3. Loop through the list until you reach the index and return the node at that specific index
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;

  }

  // To set a value at an index
  set(idx, val) {

    const node = this.get(idx);
    if (!node) {
      return false;
    }
    node.val = val;
    return true;

  }

  // To insert a new node in the singly linked list
  insert(idx, val) {

    if (idx < 0 || idx > this.length) {
      // 1. If the index is greater than the last index or smaller then 0 then return false
      return false;
    } else if (idx === this.length) {
      // 2. If the index is same as the length, push a new node to the end of the list
      this.push(val);
    } else if (idx === 0) {
      // 3. If the index is 0, unshift a new node to the beggining of the list
      this.unshift(val);
    } else {
      // 4. Otherwise using the get method, access the node at the (index - 1)
      const node = new Node(val);

      // 6. Set the next property of the new node to be the previous next
      node.next = this.get(idx);

      // 5. Set the next property of that node to be the new node
      this.get(idx - 1).next = node;
    }
    // 7. Increment the length
    this.length++;

    // 8. Return true
    return true;
  }

}

let list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
