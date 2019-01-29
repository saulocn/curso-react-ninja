'use strict'

import { expect } from 'chai'
import filter from './filter'

it('filter should be a function', () => {
    expect(filter).to.be.a('function')
})

it('filter([1, 2, 3], item => item) should return [1, 2, 3]', () => {
    expect(filter([1, 2, 3], item => item)).to.be.deep.equal([1, 2, 3])
})

it('filter([0, 1, 2], item => item) should return [1, 2]', () => {
    expect(filter([0, 1, 2], item => item)).to.be.deep.equal([1, 2])
})

it('filter([0, 1, 2], item => !item) should return [0]', () => {
    expect(filter([0, 1, 2], item => !item)).to.be.deep.equal([0])
})
it('filter([0, 1, 2], item => !item) should return [0]', () => {
    expect(filter([0, 1, 2], item => !item)).to.be.deep.equal([0])
})

it('filter([1, 2, 3],(item)=>item<2) should return [1]', () => {
    expect(filter([1, 2, 3], item => item < 2)).to.be.deep.equal([1])
})
it('filter([1, 2],(item)=>item>1) should return [2]', () => {
    expect(filter([1, 2], item => item > 1)).to.be.deep.equal([2])
})

it('filter([3, 1, 2, 8],(item, index)=>item==index) should return [1,2]', () => {
    expect(filter([3, 1, 2, 8], (item, index) => item == index)).to.be.deep.equal([1, 2])
})

it('filter([1,2,3,5],(item, index)=>item=== index+1) should return [1,2, 3]', () => {
    expect(filter([1, 2, 3, 5], (item, index) => item === index + 1)).to.be.deep.equal([1, 2, 3])
})

it('filter([1,2,3, 2, 1, 5],(item, index, array)=> index === array.indexOf(item)) should return [1, 2, 3, 5]', 
() => {
    expect(filter([1, 2, 3, 2, 1, 5], (item, index, array) => index === array.indexOf(item))).to.be.deep.equal([1, 2, 3, 5])
})