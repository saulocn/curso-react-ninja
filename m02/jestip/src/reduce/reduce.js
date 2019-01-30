'use strict'

const reduce = (arr, fn, initialValue) => {
    let index = 0;
    let acc = initialValue || arr[index++]
    for(let i=index; i<arr.length; i++){
        acc = fn(acc, arr[i])
    }
    return acc
}

export default reduce