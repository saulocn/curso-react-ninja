'use strict'

const map = (arr = [], fn = (item) => item) => {
    if(!Array.isArray(arr)) throw new TypeError('The first parameter must be an array')
    if(typeof fn !== 'function') throw new TypeError('The second parameter must be a function')
    let newArr = []
    for (let i = 0; i < arr.length; i++)
        newArr.push(fn(arr[i], i, arr))
    return newArr
}

export default map