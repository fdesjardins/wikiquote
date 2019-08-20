const superagent = require('superagent')

const config = {
  baseUri: 'https://en.wikiquote.org/w/api.php'
}

exports.get = async options => {
  let requestUri = config.baseUri
  if (options.language !== undefined) {
    requestUri = requestUri.replace('en', options.language)
  }
  const response = await superagent.get(`${requestUri}${options.query}`)
  return response.body
}
