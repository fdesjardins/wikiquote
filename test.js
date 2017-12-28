/* global describe, it */

const assert = require('chai').assert
const wikiquote = require('./')

describe('wikiquote', () => {
  it('should run tests', () => {
    return assert(1 !== 2 && wikiquote !== undefined)
  })

  it('should search for people', () => {
    return wikiquote.searchPeople('steve jobs')
      .then(pages => {
        assert(pages[0].title === 'Steve Jobs')
      })
  })

  it('should get a random quote', () => {
    return wikiquote.getRandomQuote('Steve Jobs')
      .then(quote => {
        assert(quote.length > 0)
      })
  })

  it('should search by title', () => {
    return wikiquote.searchByTitle('Steve Jobs')
      .then(page => {
        assert(page[0].title === 'Steve Jobs')
      })
  })

  it('should get page sections', () => {
    return wikiquote.getPageSections('Steve Jobs')
      .then(sections => {
        assert(sections.title === 'Steve Jobs')
        assert(sections.sections.length > 0)
      })
  })

  it('should search wikiquote', () => {
    return wikiquote.search('Classical economics')
      .then(results => {
        assert(results[0].title === 'Classical economics')
      })
  })

  it('should list quotes given a page title', () => {
    return wikiquote.list('Adam Smith')
      .then(results => {
        assert(results.length > 0)
      })
  })
})
