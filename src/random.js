// which random function to use as default.
const RANDOM = Math.random

// random shuffle helper function.
// uses fisher yates randomizer.
export const shuffle = (
	list,
	items = undefined,
	random = RANDOM,
) => {

	// create an array-type copy of input list.
	const array = [...list]

	// if the number of items to return was not specified,
	// assume user wants the entire input list shuffled.
	if (items === undefined) {
		items = array.length
	}

	// store final choices here.
	const results = []

	// retrieve a number of "items" equal to the given input.
	for (let i = 0; i < items; i++) {

		// choose a random index.
		const choice = Math.floor(random() * array.length)

		// add choice to results.
		results.push(array[choice])

		// remove choice from the array copy.
		array.splice(choice, 1)
	}
	return results
}
