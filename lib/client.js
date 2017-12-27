const superagent = require('superagent')

const config = {
  baseUri: 'https://en.wikiquote.org/w/api.php'
}

exports.get = async (options) => {
  const response = await superagent.get(`${config.baseUri}${options.query}`)
  return response.body
}
