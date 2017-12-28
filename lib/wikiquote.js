const cheerio = require('cheerio')

const client = require('./client')

/**
 * @param {string} query The search terms used to query page titles
 * @return {Promise}
 */
exports.searchByTitle = async (query) => {
  const results = await client.get({ query: `?srsearch=${query}&action=query&list=search&srwhat=nearmatch&format=json` })
  return results.query.search.map(r => {
    return {
      title: r.title,
      pageid: r.pageid,
      wordcount: r.wordcount
    }
  })
}

/**
 * @param {string} query The search terms used to query wikiquote
 * @return {Promise}
 */
exports.search = async (query) => {
  const results = await client.get({ query: `?format=json&action=query&list=search&continue=&srsearch=${query}` })
  return results.query.search.map(r => {
    return {
      title: r.title,
      pageid: r.pageid,
      wordcount: r.wordcount
    }
  })
}

/**
 * @param {string} query The search terms used to query people
 * @return {Promise}
 */
exports.searchPeople = async (query) => {
  const results = await client.get({ query: `?srsearch=${query}&action=query&list=search&srwhat=nearmatch&format=json` })
  return results.query.search.map(r => {
    return {
      title: r.title,
      pageid: r.pageid,
      wordcount: r.wordcount
    }
  })
}

/**
 * @param {string} pageTitle
 * @return {Promise}
 */
exports.getPageSections = async (pageTitle) => {
  const results = await client.get({ query: `?page=${pageTitle}&action=parse&prop=sections&format=json` })
  return results.parse
}

/**
 * @param {string} pageTitle
 * @param {integer} sectionIndex
 * @return {Promise}
 */
exports.getSectionContent = async (pageTitle, sectionIndex) => {
  const results = await client.get({ query: `?page=${pageTitle}&section=${sectionIndex}&action=parse&prop=text&format=json` })

  const $ = cheerio.load(results.parse.text['*'])

  const isQuoteSection = (i, el) => {
    const elClass = $(el).attr('class')

    return elClass
      ? (!elClass.match(/toc/))
      : true
  }

  return $('ul > li')
    .not('ul > li > ul > li')
    .filter(isQuoteSection)
    .map((i, el) => {
      const quoteSource = $(el).find('li').text()
      return {
        quote: $(el).text(),
        source: quoteSource ? (quoteSource === '' ? null : quoteSource) : null
      }
    })
    .get()
}

/**
 * @param {string} pageTitle
 * @return {Promise}
 */
exports.list = async (pageTitle) => {
  const sections = (await exports.getPageSections(pageTitle)).sections
  const quotes = await Promise.all(sections.map(s => exports.getSectionContent(pageTitle, s.index)))
  return [].concat(...quotes)
}

/**
 * @param {string} pageTitle
 * @return {Promise}
 */
exports.getRandomQuote = async (pageTitle) => {
  const quotes = await exports.list(pageTitle)
  return quotes[Math.floor(Math.random() * quotes.length)].quote
}
