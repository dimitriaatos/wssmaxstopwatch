const clipboard = require('clipboardy')
const Max = require('max-api-or-not')
const {server} = require('./state')

const copyUrl = () => {
	clipboard.writeSync(server.url)
	Max.post(`${server.url} copied to clipboard`)
}

module.exports = copyUrl