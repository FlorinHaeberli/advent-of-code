import * as helper from "../helpers/advent_of_code_utils.js"

var input = helper.inputToNumberArray("./input.txt")
var increased = 0

// calculate window for given index
function calcWindow(index) {
    // only calculate window for valid indices
    if (index <= input.length - 3) return input.slice(index, index + 3).reduce((partSum, a) => partSum + a, 0)
    // return 0 otherwise
    return 0
}

// calculate increases for given array from given index with recursion
function calcIncreases(array, index, prevWindow) {
    // stop recursion if end of array is reached
    if (index < array.length) {
        // calculate window for current index
        let newWindow = calcWindow(index)
        // increase count if newWindow is bigger than previous
        if (index && newWindow > prevWindow)increased++
        // if newWindow is not 0, null or undefined, continue recursion
        if (!!newWindow) calcIncreases(array, ++index, newWindow)
    }
}

calcIncreases(input, 0, 0)
console.log("Number of increases :" , increased)