'use strict'

const pagination = ({ total, activePage }) => {
  return Array.apply(null, { length: total}).map((_, i)=> i + 1)
}

export default pagination
