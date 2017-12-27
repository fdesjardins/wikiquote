const wikiquote = require('../lib/wikiquote')

const display = x => console.log(JSON.stringify(x, null, 2))

wikiquote.search('adam smith').then(display)
// [
//   {
//     "title": "Adam Smith",
//     "pageid": 3233,
//     "wordcount": 12141
//   },
//   ...
// ]

wikiquote.searchByTitle('classical economics').then(display)
// [
//   {
//     "title": "Classical economics",
//     "pageid": 180728,
//     "wordcount": 1163
//   }
// ]

wikiquote.searchPeople('mark twain').then(display)
// [
//   {
//     "title": "Mark Twain",
//     "pageid": 106,
//     "wordcount": 21831
//   },
//   ...
// ]
