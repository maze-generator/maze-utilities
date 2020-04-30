export default class Stack<DataType> {
	private data: Array<DataType>

	constructor(
		...data: Array<DataType>
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
		node: DataType
	): void {
		this.data.push(node)
	}

	// remove a node from the "top" of the stack,
	// and then return it.
	pop (
	): DataType|undefined {

		// get the result, which might be undefined.
		const result: DataType|undefined = this.data.pop()

		// filter out the possibility of returning undefined.
		if (result !== undefined) {
			return result
		} else {
			throw new Error('Cannot pop an empty stack!')
		}
	}

	// return the node at the "top" of the stack,
	// but do not remove it.
	peek (
	): DataType|undefined {

		// get the result, which might be undefined.
		const result: DataType|undefined = this.data.slice(-1)[0]

		// filter out the possibility of returning undefined.
		if (result !== undefined) {
			return result
		} else {
			throw new Error('Cannot peek into an empty stack!')
		}
	}
}
