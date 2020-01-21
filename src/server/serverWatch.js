const Max = require('max-api-or-not')
const StopWatch = require('syncwatch')

const serverWatch = new StopWatch(time => {
	Max.outlet(['time', time.ms])
})

module.exports = serverWatch