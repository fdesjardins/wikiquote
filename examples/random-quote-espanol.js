const wikiquote = require('../lib/wikiquote')

wikiquote
  .searchPeople('steve jobs')
  .then(pages => wikiquote.getRandomQuote(pages[0].title, { language: 'es' }))
  .then(quote => console.log(quote))

// «Ni siquiera la gente que quiere ir al cielo quiere morir para llegar ahí».[sin fuentes]
// Notas: discurso en un acto de graduación en Stanford (12 de junio de 2005).
