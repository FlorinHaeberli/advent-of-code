import * as helper from "../helpers/advent_of_code_utils.js"

var input = helper.inputToNumberArray("./input.txt")
var increased = 0

input.forEach((value, index, array) => {
    if (value > array[index-1]) increased++
})

console.log("Number of increases :" , increased)