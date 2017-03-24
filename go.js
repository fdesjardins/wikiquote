const w = require('./')

// w.searchPeople('John Adams').then(results => {
//   console.log(JSON.stringify(results, null, 2))
// })
//
// w.getPageSections('Scott Adams').then(results => {
//   console.log(JSON.stringify(results.data, null, 2))
// })

// w.list('Douglas Adams').then(results => {
//   // console.log(JSON.stringify(results, null, 2))
//   console.log(results)
// })

w.getRandomQuote('Noam Chomsky').then(q => console.log(q))
