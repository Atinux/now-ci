const Client = require('../services/github')

module.exports = class Query {
  constructor({ req, res, query, params }) {
    this.user = req.session.get('user')
    this.host = req.headers.host
    this._res = res
    this.client = Client(this.user.token)
    this.query = query
    this.params = params
    this.page = query.page || 1
  }
  setHeader (...args) {
    this._res.setHeader(...args)
  }
}