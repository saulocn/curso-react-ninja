'use strict'

const mainReduce = (arr, fn, initialValue) => {
    let acc = initialValue
    let arrCopy = arr
    if(initialValue === undefined) {
        acc = arr[0]
        arrCopy = arr.slice(1)
    }
    for(let i=0; i<arrCopy.length; i++){
        acc = fn(acc, arrCopy[i], i, arrCopy)
    }
    return acc
}

export default mainReduce