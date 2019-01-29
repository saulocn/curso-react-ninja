'use strict'

const some = (arr, fn) => {
    return (function internalSome(arrInternal, counter){
        const [head, ...tail] = arrInternal
        return arrInternal.length === 0 ?
        false : 
        (fn(head, counter, arr) ? true
        : internalSome(tail, counter + 1))
    })(arr, 0)
}

export default some