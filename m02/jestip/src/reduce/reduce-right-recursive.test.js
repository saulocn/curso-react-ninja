'use strict'

import { expect } from 'chai'
import reduceRight from './reduce-right-recursive'

it('reduceRight should be a function', () => {
    expect(reduceRight).to.be.a('function')
})

it('reduceRight([1, 2, 3], (acc, item) => acc + item) should be a 6', () => {
    const before = reduceRight([1, 2, 3], (acc, item) => acc + item)
    const after = 6
    expect(before).to.be.deep.equal(after)
})


it('reduceRight(["CN", "lo", "u", "Sa"], (acc, item) => acc + item, "") should return SauloCN', () => {
    const before = reduceRight(["CN", "lo", "u", "Sa"], (acc, item) => acc + item, '') 
    const after = 'SauloCN'
    expect(before).to.be.deep.equal(after)
})
