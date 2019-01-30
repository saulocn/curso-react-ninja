'use strict'

const map = (arr = [], fn = (item) => item) => {
    if(!Array.isArray(arr)) throw new TypeError('The first parameter must be an array')
    if(typeof fn !== 'function') throw new TypeError('The second parameter must be a function')
    return (function mapInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal
        return (arrInternal.length === 0) ? [] : [
            fn(head, counter, arr), 
            ...mapInternal(tail, counter + 1)
        ]
    })(arr, 0)
}



export default map