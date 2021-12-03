import * as helper from "../helpers/advent_of_code_utils.js"

var input = helper.inputToStringArray("./input_test.txt").map((value) => { return value.split("") })
var ss = input.map((value, index) => input.map(value => value[index]))
console.table(input)
console.table(ss)