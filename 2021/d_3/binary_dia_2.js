import * as helper from "../helpers/advent_of_code_utils.js"

var input = helper.inputToStringArray("./input.txt").map((value) => { return value.split("") })

//var oxyGenRating = findRatings(mostCommonValue)
//var scrubberRating = findRatings(leastCommonValue)

function findOxyGenRating() {
    return findRatings(input, 0, "findMostFrequent")
}

function findScrubberRating() {
    return findRatings(input, 0, "findLeastFrequent")
}

function findRatings(array, bitPos, frequencyFunction) {
    console.log("current bitPos: ", bitPos)
    console.log("current array: ")
    console.table(array)
    // transpose array to find most common bit and not exceed max bit position
    let transposedArray = helper.transposeArray(array)
    if (bitPos < transposedArray.length) {
        let mostCommonBit = helper[frequencyFunction](transposedArray[bitPos])
        if (mostCommonBit.length != 1) mostCommonBit = 1
        return findOxyGenRating(array.filter((value) => value[bitPos] == mostCommonBit), ++bitPos)
    } else {
        return parseInt(array[0].join(''), 2)
    }
}

console.log(findOxyGenRating())
//console.log(helper.findMostFrequent("010001010101"))
//console.log(input)
//console.log(filterByCriteria(input, "0", 0, 1))