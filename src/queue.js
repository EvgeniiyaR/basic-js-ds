const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.current = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      this.current.next = node;
    }
    this.current = node;
    this.length++;
  }

  dequeue() {
    let node = this.head;
    this.head = node.next;
    if (this.current === node) {
      this.current = node.next;
      this.length--;    
    }
    return node.value;
  }
}

module.exports = {
  Queue
};
