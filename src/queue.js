export default class Queue {
	constructor(...data) {
		this.data = data
	}

	// get the "length" of the queue, or number of nodes.
	get size () {
		return this.data.length
	}

	// the queue has nodes if its size is greater than zero.
	get hasNodes () {
		return this.size !== 0
	}

	// add an node to the "back" of the queue.
	enqueue (node) {
		this.data.push(node)
	}

	// remove an node from the "front" of the queue,
	// and then return it.
	dequeue () {

		// get the result, which might be undefined.
		const result = this.data.shift()

		// filter out the possibility of returning undefined.
		if (result !== undefined) {
			return result
		} else {
			throw new Error('Cannot dequeue an empty queue!')
		}
	}

	// return the node at the "front" of the queue,
	// but do not remove it.
	front () {

		// get the result, which might be undefined.
		const result = this.data[0]

		// filter out the possibility of returning undefined.
		if (result !== undefined) {
			return result
		} else {
			throw new Error('Cannot see front of an empty queue!')
		}
	}
}
