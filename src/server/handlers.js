const Max = require('max-api')
const listen = require('./server')
const state = require('./state')
const clipboard = require('clipboardy')

module.exports = (serverWatch) => {

	const toggle = (toggle) => {
		(!!serverWatch.playing !== !!toggle) &&
			serverWatch.toggle(!!toggle)
		Max.setDict('stopWatch', serverWatch.output())
	}

	Max.addHandler('play', toggle)
	Max.addHandler(Max.MESSAGE_TYPES.NUMBER, toggle)
  
	Max.addHandler(Max.MESSAGE_TYPES.BANG, () => {
		serverWatch.reset()
		Max.setDict('stopWatch', serverWatch.output())
	})

	Max.addHandler('set', (ms) => {
		serverWatch.reset(ms)
		Max.setDict('stopWatch', serverWatch.output())
	})

	Max.addHandler('format', (format) => {
		serverWatch.format = format
		Max.setDict('stopWatch', serverWatch.output())
	})
  
	Max.addHandler('copy', () => {
		clipboard.writeSync(state.url)
	})
  
	Max.addHandler('url', () => {
		Max.outlet(['url', state.url])
	})

	Max.addHandler('port', (port) => {
		listen(port)
	})

}