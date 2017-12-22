const superagent = require('superagent')
const cheerio = require('cheerio')

const config = {
  baseUri: 'https://en.wikiquote.org/w/api.php'
}

exports.searchByTitle = async (text) => {
  const res = await superagent.get(`${config.baseUri}?srsearch=${text}&action=query&list=search&srwhat=nearmatch&format=json`)
  return res.body.query.search
}

exports.searchPeople = async (text) => {
  const res = await superagent.get(`${config.baseUri}?srsearch=${text}&action=query&list=search&srwhat=nearmatch&format=json`)
  return res.body.query.search[0]
}

exports.getPageSections = async (pageId) => {
  const res = await superagent.get(`${config.baseUri}?page=${pageId}&action=parse&prop=sections&format=json`)
  return res.body.parse
}

exports.getSectionContent = async (pageId, sectionIndex) => {
  const res = await superagent.get(`${config.baseUri}?page=${pageId}&section=${sectionIndex}&action=parse&prop=text&format=json`)

  const $ = cheerio.load(res.body.parse.text['*'])

  return $('ul > li').not('ul > li > ul > li').map((i, el) => {
    const quoteSource = $(el).find('li').text()
    return {
      quote: $(el).text(),
      source: quoteSource ? (quoteSource === '' ? null : quoteSource) : null
    }
  }).get()
}

exports.list = pageId => exports.getSectionContent(pageId, 1)

exports.getRandomQuote = pageId => {
  return exports.list(pageId).then(results => {
    return results[Math.floor(Math.random() * results.length)].quote
  })
}
