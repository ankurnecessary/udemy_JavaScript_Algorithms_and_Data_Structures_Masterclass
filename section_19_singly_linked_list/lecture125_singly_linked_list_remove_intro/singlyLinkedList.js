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

    // 1. If the index is greater than the last index or smaller then 0 then return false
    if (idx < 0 || idx > this.length) return false;

    // 2. If the index is same as the length, push a new node to the end of the list
    if (idx === this.length) return !!this.push(val);

    // 3. If the index is 0, unshift a new node to the beggining of the list
    if (idx === 0) return !!this.unshift(val);

    // 4. Otherwise using the get method, access the node at the (index - 1)
    const node = new Node(val);

    // 6. Set the next property of the new node to be the previous next
    node.next = this.get(idx);

    // 5. Set the next property of that node to be the new node
    this.get(idx - 1).next = node;

    // 7. Increment the length
    this.length++;

    // 8. Return true
    return true;
  }

  // To remove a node from the passed index
  remove(idx) {

    // 1. If the index is less than 0 or greater than the length, return undefined
    if (idx < 0 || idx >= this.length) return undefined;

    // 2. if the index is same as the length-1, pop
    if (idx === (this.length - 1)) return this.pop();

    // 3. if the index is 0, shift
    if (idx === 0) return this.shift();

    // 4. otherwise, using the get method, access the node at the index -1
    let previousNode = this.get(idx - 1);
    let nodeRemoved = this.get(idx);

    // 5. Set the next property on that node to be the next of the next node
    previousNode.next = nodeRemoved.next;

    // 6. Decrement the length
    this.length--;

    // 7. Return the value of the node removed
    return nodeRemoved;
  }

}

let list = new SinglyLinkedList();
list.push('00');
list.push('11');
list.push('22');
list.push('33');
list.push('44');
list.push('55');
list.push('66');
