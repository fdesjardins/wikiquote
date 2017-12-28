const wikiquote = require('../lib/wikiquote')

const display = x => console.log(JSON.stringify(x, null, 2))

wikiquote.list('Adam Smith').then(display)
// [
//   {
//     "quote": "How selfish soever man may be supposed, there are evidently some principles in his nature, which interest him in the fortune of others, and render their happiness necessary to him, though he derives nothing from it except the pleasure of seeing it.\n\nSection I, Chap. I.\n\n",
//     "source": "Section I, Chap. I."
//   },
//   {
//     "quote": "Every faculty in one man is the measure by which he judges of the like faculty in another. I judge of your sight by my sight, of your ear by my ear, of your reason by my reason, of your resentment by my resentment, of your love by my love. I neither have, nor can have, any other way of judging about them.\n\nSection I, Chap. III.\n\n",
//     "source": "Section I, Chap. III."
//   },
//   ...
// ]
