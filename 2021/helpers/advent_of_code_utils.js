import * as fs from 'fs'

export function inputToStringArray(filePath) {
    return fs.readFileSync(filePath).toString('utf-8').split("\r\n")
}

export function inputToNumberArray(filePath) {
    return fs.readFileSync(filePath).toString('utf-8').split("\r\n").map((Number))
}

export function transposeArray(array) {
    var newArray = []
    for (let i = 0; i < array[0].length; i++) {
        newArray.push(array.map(value => value[i]))
    }
    return newArray
}

export function findLeastFrequent(object) {
    return evalFrequentType(object, 0)
}

export function findMostFrequent(object) {
    return evalFrequentType(object, 1)
}

function evalFrequentType(object, findMost) {
    if (typeof(object) == 'string' || typeof(object) == 'number') {
        return findFrequentString(object.toString(), findMost)
    } else if (typeof(object) == 'object') {
        return findFrequentArray(object, findMost)
    } else return 0
}

function findFrequentString(string, findMost) {
    let freqCount = {}
    let lowString = string.toLowerCase()
    let freqChar = lowString[0]
    for (let char of lowString) {
        freqCount[char] = freqCount[char] + 1 || 1
    }
    for (let char in freqCount) {
        // determine most frequent
        if (findMost && freqCount[char] > freqCount[freqChar[0]]) freqChar = char 
        // determine least frequent
        else if (!findMost && freqCount[char] < freqCount[freqChar[0]]) freqChar = char
        // add chars with same frequency as freqChar[0] to freqChar
        if (freqCount[char] == freqCount[freqChar[0]] &&  !freqChar.includes(char)) freqChar +=char  
    }
    return freqChar
}

function findFrequentArray(array, findMost) {
    // join array and use String method
    return findFrequentString(array.map((value) => value.toString()).join(''), findMost)
}