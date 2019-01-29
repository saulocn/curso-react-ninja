'use strict'

const every = (arr, fn) => {
    return (function internalEvery(arrInternal, counter) {
        const [head, ...tail] = arrInternal
        return arrInternal.length === 0 ?
        true : 
            (!fn(head, counter, arr) ? false 
            : internalEvery(tail, counter + 1))
    })(arr, 0)
}

export default every