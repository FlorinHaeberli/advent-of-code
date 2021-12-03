import * as helper from "../helpers/advent_of_code_utils.js"

var depth = 0
var position = 0
var aim = 0

var input = helper.inputToStringArray("./input.txt")
var direction = input.map((value) => {
    return value.split(" ")
}).map((subArray) => {
    return [subArray[0], Number(subArray[1])]
})

direction.forEach((element) => evalCommand(element[0], element[1]));

function evalCommand(command, value) {
    switch (command) {
        case "forward": 
        position+=value
        depth+=aim*value
        break
        case "up": 
        aim-=value
        break
        case "down": 
        aim+=value
        break
    }
}

console.log("New position: " , depth*position)