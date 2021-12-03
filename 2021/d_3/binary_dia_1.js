import * as helper from "../helpers/advent_of_code_utils.js"

var input = helper.inputToStringArray("./input.txt").map((value) => { return value.split("") })
var transposedInput = helper.transposeArray(input)
let gammaRate = []
let epsilonRate = []

function calcRates(array) {
    array.forEach((subArray) => {
        var falseCount = 0;
        var trueCount = 0;
        subArray.forEach((value) => {
            if (Number(value)) ++trueCount;
            else ++falseCount;
        })
        gammaRate.push(+(trueCount > falseCount))
        epsilonRate.push(+ !(trueCount > falseCount))
    })
}

calcRates(transposedInput)

console.log("The submarines power consumption: " , parseInt(gammaRate.join(''), 2) * parseInt(epsilonRate.join(''), 2))