const wikiquote = require('../lib/wikiquote')

wikiquote.searchPeople('steve jobs')
  .then(pages => wikiquote.getRandomQuote(pages[0].title))
  .then(quote => console.log(quote))

// You always have to keep pushing to innovate. Dylan could have
// sung protest songs forever and probably made a lot of money,
// but he didn’t. He had to move on, and when he did, by going
// electric in 1965, he alienated a lot of people. His 1966 Europe
// tour was his greatest…. The Beatles were the same way. They kept
// evolving, moving, refining their art. That’s what I’ve always
// tried to do — keep moving. Otherwise, as Dylan says, if you are
// not busy being born, you’re busy dying.
//
// As quoted in Steve Jobs (2011) by Walter Isaacson, p. 570
