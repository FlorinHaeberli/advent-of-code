import * as helper from "../helpers/advent_of_code_utils.js"

var input = helper.inputToStringArray("./input.txt").map((value) => { return value.split("") })

//var oxyGenRating = findRatings(mostCommonValue)
//var scrubberRating = findRatings(leastCommonValue)

function findOxyGenRating() {
    return findRatings(input, 0, "findMostFrequent", 1)
}

function findScrubberRating() {
    return findRatings(input, 0, "findLeastFrequent", 0)
}

function findRatings(array, bitPos, frequencyFunction, defaultCommonBit) {
    // transpose array to find most common bit and not exceed max bit position
    let transposedArray = helper.transposeArray(array)
    if (bitPos < transposedArray.length) {
        let mostCommonBit = helper[frequencyFunction](transposedArray[bitPos])
        if (mostCommonBit.length != 1) mostCommonBit = defaultCommonBit
        return findRatings(array.filter((value) => value[bitPos] == mostCommonBit), ++bitPos, frequencyFunction, defaultCommonBit)
    } else {
        return parseInt(array[0].join(''), 2)
    }
}

console.log("Life Support Rating: ", findOxyGenRating() * findScrubberRating())