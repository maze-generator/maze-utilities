export default class Queue<DataType> {
	private data: Array<DataType>

	constructor(
		...data: Array<DataType>
	) {
		this.data = data
	}

	// get the "length" of the queue, or number of nodes.
	get size (
	): number {
		return this.data.length
	}

	// the queue has nodes if its size is greater than zero.
	get hasNodes (
	): boolean {
		return this.size !== 0
	}

	// add an node to the "back" of the queue.
	enqueue (
		node: DataType
	): void {
		this.data.push(node)
	}

	// remove an node from the "front" of the queue,
	// and then return it.
	dequeue (
	): DataType {

		// get the result, which might be undefined.
		const result: DataType|undefined = this.data.shift()

		// filter out the possibility of returning undefined.
		if (result !== undefined) {
			return result
		} else {
			throw new Error('Cannot dequeue an empty queue!')
		}
	}

	// return the node at the "front" of the queue,
	// but do not remove it.
	front (
	): DataType {

		// get the result, which might be undefined.
		const result: DataType|undefined = this.data[0]

		// filter out the possibility of returning undefined.
		if (result !== undefined) {
			return result
		} else {
			throw new Error('Cannot see front of an empty queue!')
		}
	}
}
