'use strict'

const isInitialValueUndefined = initialValue => initialValue === undefined

const mainReduce = (arr, fn, initialValue) => {
    const acc = isInitialValueUndefined(initialValue) ? arr[0] : initialValue
    const arrCopy = isInitialValueUndefined(initialValue) ? arr.slice(1) : arr
    return (function internalReduce(accInternal, arrInternal, counter){
        const [head, ...tail] = arrInternal
        const accNext = () => fn(accInternal, head, counter, arrCopy)
        return arrInternal.length === 0
            ? accInternal
            : internalReduce(accNext(), tail, counter + 1)
    })(acc, arrCopy, 0)
}

export default mainReduce