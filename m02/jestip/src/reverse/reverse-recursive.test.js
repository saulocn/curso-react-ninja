'use strict'

import { expect } from 'chai'
import reverse from './reverse-recursive'

it('reverse should be a function', () => {
    expect(reverse).to.be.a('function')
})

it('reverse([1]) should return [1]', () => {
    expect(reverse([1])).to.be.deep.equal([1])
})

it('reverse([1, 2, 3]) should return [3, 2, 1]', () => {
    expect(reverse([1, 2, 3])).to.be.deep.equal([3, 2, 1])
})
it('reverse(["saulocn", "teste1"]) should return ["teste1", "saulocn"]', () => {
    expect(reverse(["saulocn", "teste1"])).to.be.deep.equal(["teste1", "saulocn"])
})