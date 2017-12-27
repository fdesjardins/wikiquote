const wikiquote = require('../lib/wikiquote')

wikiquote.searchPeople('steve jobs')
  .then(pages => wikiquote.getRandomQuote(pages[0].title))
  .then(quote => console.log(quote))
