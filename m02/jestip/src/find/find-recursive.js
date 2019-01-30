'use strict'

const find = (arr, fn) => {
    return (function internalFind(arrInternal, counter){
        const [head, ...tail] = arrInternal
        return arrInternal.length === 0 ?
        undefined :    
        fn(head, counter, arr) ? head : internalFind(tail, counter+1)
    })(arr, 0)
}

export default find