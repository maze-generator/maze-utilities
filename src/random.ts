// which random function to use as default.
const RANDOM = Math.random

// random shuffle helper function.
// uses fisher yates randomizer.
export const shuffle = (
	list: Array<any> | Set<any>,
	items?: number,
	random: Function = RANDOM,
): Array<any> => {

	// create an array-type copy of input list.
	const array: Array<any> = [...list]

	// store final choices here.
	const results: Array<any> = []

	// retrieve a number of "items" equal to the given input.
	for (let i: number = 0; i < items; i++) {

		// choose a random index.
		const choice: number = Math.floor(random() * array.length)

		// add choice to results.
		results.push(array[choice])

		// remove choice from the array copy.
		array.splice(choice, 1)
	}
	return results
}
