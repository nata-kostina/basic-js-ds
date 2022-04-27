const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
	constructor() {
		this.head = null;
	}

	getUnderlyingList() {
		if (this.head) {
			return this.head;
		}
		else
			return null;
	}

	enqueue(value) {
		let newNode = new ListNode(value);
		if (!this.head) {
			this.head = newNode;
		}
		else {
			let current = this.head;
			let prev = this.head;
			while (current) {
				prev = current;
				current = current.next;
			}
			prev.next = newNode;
		}

	}

	dequeue() {
		if (this.head) {
			let temp = this.head;
			if (this.head.next) {
				this.head = this.head.next;
			}
			else {
				this.head = null;
			}
			return temp.value;
		}
		else
			return null;
	}
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.dequeue()
queue.dequeue()

module.exports = {
	Queue
};
