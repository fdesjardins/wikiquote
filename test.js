/* global describe, it */

const assert = require('chai').assert
const wikiquote = require('./')

describe('wikiquote', () => {
  it('should run tests', () => {
    return assert(1 !== 2 && wikiquote !== undefined)
  })
})
