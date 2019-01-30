'use strict'

const find = (arr, fn) => {
    for(let i = 0; i<arr.length; i++){
        if(fn(arr[i], i, arr)) return arr[i]
    }
}

export default find