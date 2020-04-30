export default class Queue {
	private data: Array<any>

	constructor(
		...data: Array<any>
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
		node: any
	): void {
		this.data.push(node)
	}

	// remove an node from the "front" of the queue,
	// and then return it.
	dequeue (
	): any {
		return this.data.shift()
	}

	// return the node at the "front" of the queue,
	// but do not remove it.
	front (
	): any {
		return this.data[0]
	}
}
