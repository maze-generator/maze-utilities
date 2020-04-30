export default class Stack {
	private data: Array<any>

	constructor(
		...data: Array<any>
	) {
		this.data = data
	}

	// get the "height" of the stack, or number of nodes.
	get size (
	): number {
		return this.data.length
	}

	// the stack has nodes if its size is greater than zero.
	get hasNodes (
	): boolean {
		return this.size !== 0
	}

	// add an node to the "top" of the stack.
	push (
		node: any
	): void {
		this.data.push(node)
	}

	// remove a node from the "top" of the stack,
	// and then return it.
	pop (
	): any {
		return this.data.pop()
	}

	// return the node at the "top" of the stack,
	// but do not remove it.
	peek (
	): any {
		return this.data.slice(-1)[0]
	}
}
