import * as fs from 'fs'

export function inputToStringArray(inputFile){
    return fs.readFileSync(inputFile).toString('utf-8').split("\r\n")
}

export function inputToNumberArray(inputFile){
    return fs.readFileSync(inputFile).toString('utf-8').split("\r\n").map((Number))
}
