'use strict'

const filter = (arr = [], fn = () => true) => {
    return (function internalFilter(arrInternal, counter) {
        const [head, ...tail] = arrInternal
        return (arrInternal.length === 0) ? [] :
            (fn(head, counter, arr) ?
                [head] : []).concat(...internalFilter(tail, counter+1))
    })(arr, 0)
}

export default filter