const clipboard = require('clipboardy')
const Max = require('max-api')
const {server} = require('./state')

const copyUrl = () => {
	clipboard.writeSync(server.getURL())
	Max.post(`${server.getURL()} copied to clipboard`)
}

module.exports = copyUrl