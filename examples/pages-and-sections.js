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

wikiquote.getPageSections('Adam Smith').then(display)
// {
//   "title": "Adam Smith",
//   "pageid": 3233,
//   "sections": [
//     {
//       "toclevel": 1,
//       "level": "2",
//       "line": "Quotes",
//       "number": "1",
//       "index": "1",
//       "fromtitle": "Adam_Smith",
//       "byteoffset": 387,
//       "anchor": "Quotes"
//     },
//     {
//       "toclevel": 2,
//       "level": "3",
//       "line": "<i>The Theory of Moral Sentiments</i> (1759)",
//       "number": "1.1",
//       "index": "2",
//       "fromtitle": "Adam_Smith",
//       "byteoffset": 400,
//       "anchor": "The_Theory_of_Moral_Sentiments_(1759)"
//     },
//     ...
//   ]
// }

wikiquote.getSectionContent('Adam Smith', 4).then(display)
// [
//   {
//     "quote": "The man who barely abstains from violating either the person, or the estate, or the reputation of his neighbours, has surely very little positive merit. He fulfils, however, all the rules of what is peculiarly called justice, and does every thing which his equals can with propriety force him to do, or which they can punish him for not doing. We may often fulfil all the rules of justice by sitting still and doing nothing.\n\nSection II, Chap. I.\n\n",
//     "source": "Section II, Chap. I."
//   },
//   {
//     "quote": "Every man is, no doubt, by nature, first and principally recommended to his own care; and as he is fitter to take care of himself than of any other person, it is fit and right that it should be so.\n\nSection II, Chap. II.\n\n",
//     "source": "Section II, Chap. II."
//   },
//   ...
// ]
