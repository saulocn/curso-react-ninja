'use strict'

const filter = (arr=[], fn = () => true) => {
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i], i, arr)) newArr.push(arr[i])
    }
    return newArr
}

export default filter