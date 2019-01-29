'use strict'

import { expect } from 'chai'
import some from './some-recursive'

it('some should be a function', () => {
    expect(some).to.be.a('function')
})

it('some([], item => item) should return false', () => {
    expect(some([], item => item)).to.not.be.ok
})

it('some([1, 2], item => item) should return true', () => {
    expect(some([1, 2], item => item)).to.be.ok
})


it('some([1, 2], (item, index) => index % 2 === 0) should return true', () => {
    expect(some([1, 2], (item, index) => index % 2 === 0)).to.be.ok
})


it('some([1, 2], (item, index) => index % 2 === 0) should return true', () => {
    expect(some([1, 2], (item, index) => index % 2 === 0)).to.be.ok
})


it('some([1, 3, 5], (item, index) => item % 2 === 0) should return false', () => {
    expect(some([1, 3, 5], (item, index) => item % 2 === 0)).to.not.be.ok
})


it('some([1, 2, 3], item => item > 3) should return false', () => {
    expect(some([1, 2, 3], item => item > 3)).to.not.be.ok
})

it('some([1, 2, 3], item => item > 2) should return true', () => {
    expect(some([1, 2, 3], item => item > 2)).to.be.ok
})

it('some([0, 0, 8], (item, index) => item>index) should return true', () => {
    expect(some([0, 0, 8], (item, index) => item > index)).to.be.ok
})

it('some([0, 1, 2], (item, index) => item > index) should return false', () => {
    expect(some([0, 1, 2], (item, index) => item > index)).to.not.be.ok
})

it('some([1, 2, 3], (item, index, arr) => arr.length > 3) should return false', () => {
    expect(some([1, 2, 3], (item, index, arr) => arr.indexOf(2) > -1)).to.be.ok
})

it('some([0, 1, 2], (item, index, arr) => arr.length > 3) should return false', () => {
    expect(some([0, 1, 2], (item, index, arr) => arr.length > 3)).to.not.be.ok
})

it('some([0, 1, 2], (item, index, arr) => arr.length > 2) should return true', () => {
    expect(some([0, 1, 2], (item, index, arr) => arr.length > 2)).to.be.ok
})
