const clipboard = require('clipboardy')
const Max = require('max-api')
const state = require('./state')

const copyUrl = () => {
	clipboard.writeSync(state.url)
	Max.post(`${state.url} copied to clipboard`)
}

module.exports = copyUrl