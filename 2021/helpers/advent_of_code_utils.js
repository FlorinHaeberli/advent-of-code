import * as fs from 'fs'

export function inputToStringArray(inputFile) {
    return fs.readFileSync(inputFile).toString('utf-8').split("\r\n")
}

export function inputToNumberArray(inputFile) {
    return fs.readFileSync(inputFile).toString('utf-8').split("\r\n").map((Number))
}

export function transposeArray(array) {
    var newArray = []
    for (let i = 0; i < array[0].length; i++) {
        newArray.push(array.map(value => value[i]))
    }
    return newArray
}