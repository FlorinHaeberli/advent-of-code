import * as helper from "../helpers/advent_of_code_utils.js"

var input = helper.inputToStringArray("./input_test.txt").map((value) => { return value.split("") })
var mostCommonValue  = []
var leastCommonValue  = []

findCommonValues();

var oxyGenRating = findRatings(mostCommonValue)
var scrubberRating = findRatings(leastCommonValue)


function findRatings(commonValue) {
    return commonValue.map((value) => { return filterByCriteria(input, value, 0, true)
    });
}

// recursively filter array for bitCriteria until only one entry remains
function filterByCriteria(array, bitCriteria, index, isNotFinished) {
    if (isNotFinished) {
        // filter array for all values wich have bitCriteria at index
        array = array.filter((value) => {
            return value[index] == bitCriteria
        })
        // increase index
        ++index
        // keep going until array has only one entry
        isNotFinished = array.length-1
        // run function again
        return filterByCriteria(array, bitCriteria, index, isNotFinished)
    } else {
        // return array with one entry
        return array[0];
    }
}

// find most common value for each position
function findCommonValues(array, findMostCommon) {
    
    // go through transposed array
    helper.transposeArray(array).forEach((subArray) => {
        // count 0s and 1s
        var falseCount = 0;
        var trueCount = 0;
        subArray.forEach((value) => {
            if (Number(value)) ++trueCount;
            else ++falseCount;
        })
        // push most common bit at current position 
        mostCommonValue.push((+ (trueCount >= falseCount)).toString())
        leastCommonValue.push((+ !(trueCount >= falseCount)).toString())
    })
}

//console.log(input)
console.log(oxyGenRating)
console.log(scrubberRating)
//console.log(filterByCriteria(input, "0", 0, 1))