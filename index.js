const axios = require('axios')
const cheerio = require('cheerio')

const config = {
  baseUri: 'https://en.wikiquote.org/w/api.php'
}

exports.getCategories = () => {
  return 1
}

exports.searchByTitle = text => {
  return axios.get(config.baseUri, {
    params: {
      action: 'query',
      list: 'search',
      srsearch: text,
      srwhat: 'nearmatch',
      format: 'json'
    }
  })
}

exports.searchPeople = text => {
  return axios.get(config.baseUri, {
    params: {
      action: 'query',
      list: 'search',
      srsearch: text,
      srwhat: 'nearmatch',
      format: 'json'
    }
  })
  .then(results => {
    const pages = results.data.query.search
    // just return the top page for now
    return pages[0]
  })
}

exports.getPagesForCategory = cmtitle => {

}

exports.getPageSections = pageId => {
  return axios.get(config.baseUri, {
    params: {
      action: 'parse',
      page: pageId,
      prop: 'sections',
      format: 'json'
    }
  })
  .then(results => {
    return results
  })
}

exports.getSectionContent = (pageId, sectionIndex) => {
  return axios.get(config.baseUri, {
    params: {
      action: 'parse',
      page: pageId,
      section: sectionIndex,
      prop: 'text',
      format: 'json'
    }
  })
  .then(results => {
    // console.log(results.data)
    return cheerio.load(results.data.parse.text['*'])
  })
  .then($ => {
    return $('ul > li').not('ul > li > ul > li').map((i, el) => {
      const quoteSource = $(el).find('li').text()
      return {
        quote: $(el).text(),
        source: quoteSource ? (quoteSource === '' ? null : quoteSource) : null
      }
    }).get()
  })
}

exports.list = pageId => exports.getSectionContent(pageId, 1)

exports.getRandomQuote = pageId => {
  return exports.list(pageId).then(results => {
    return results[Math.floor(Math.random() * results.length)].quote
  })
}
