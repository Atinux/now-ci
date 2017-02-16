const Github = require('github')

module.exports = token => {
  const client = new Github({ promise: Promise })
  client.authenticate({ type: 'token', token })
  return client
}
