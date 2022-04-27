const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(data) {
		this.data = data,
			this.leftChild = null,
			this.rightChild = null
	}
}

class BinarySearchTree {

	constructor() {
		this.rootNode = null;
	}

	root() {
		return this.rootNode;
	}

	add(data) {
		let newNode = new Node(data)
		if (!this.rootNode) {
			this.rootNode = newNode;
			return;
		}
		let current = this.rootNode;
		while (current) {
			if (data < current.data) {
				if (!current.leftChild) {
					current.leftChild = newNode;
					break;
				}
				current = current.leftChild;
			}
			else
				if (data >= current.data) {
					if (!current.rightChild) {
						current.rightChild = newNode;
						break;
					}
					current = current.rightChild
				}
		}
	}

	has(data) {
		let current = this.rootNode;
		while (current) {
			if (data == current.data)
				return true;
			if (data < current.data) {
				current = current.leftChild;
			}
			else
				if (data >= current.data) {
					current = current.rightChild
				}
		}
		return false;
	}

	find(data) {
		let current = this.rootNode;
		while (current) {
			if (data == current.data)
				return current;
			if (data < current.data) {
				current = current.leftChild;
			}
			else
				if (data >= current.data) {
					current = current.rightChild
				}
		}
		return null;
	}

	remove(data) {
		if (!this.has(data))
			return;
		else {
			let current = this.rootNode;
			let previous = this.rootNode;
			while (current) {
				if (data == current.data) {
					break;
				}
				else
					if (data < current.data) {
						previous = current;
						current = current.leftChild;
					}
					else
						if (data >= current.data) {
							previous = current;
							current = current.rightChild
						}
			}
			if (!current.leftChild && !current.rightChild) {
				if (data < previous.data) {
					previous.leftChild = null;
				}
				else
					if (data >= previous.data) {
						previous.rightChild = null;
					}
			}
			else
				if (current.leftChild && current.rightChild) {
					let temp = current.rightChild;
					let prev_temp = current.rightChild;
					while (temp) {
						if (!temp.leftChild) {
							break;
						}
						prev_temp = temp;
						temp = temp.leftChild;
					}
					current.data = temp.data;
					temp.rightChild ? prev_temp.leftChild = temp.rightChild : prev_temp.leftChild = null;
				}
				else {
					if (previous.rightChild == current) {
						current.leftChild ? previous.rightChild = current.leftChild : previous.rightChild = current.rightChild;
					}
					else
						if (previous.leftChild == current) {
							current.leftChild ? previous.leftChild = current.leftChild : previous.leftChild = current.rightChild;
						}
				}
		}
	}

	min() {
		let current = this.rootNode;
		while (current) {
			if (current.leftChild)
				current = current.leftChild;
			else
				return current.data;
		}
		return null;
	}

	max() {
		let current = this.rootNode;
		while (current) {
			if (current.rightChild)
				current = current.rightChild;
			else
				return current.data;
		}
		return null;
	}

	toString(current) {
		if (current) {
			console.log(current.data);
			console.log(`Left child of ${current.data}:`);
			this.toString(current.leftChild);
			console.log(`Right child of ${current.data}:`);
			this.toString(current.rightChild);
		}
	}
}


module.exports = {
	BinarySearchTree
};