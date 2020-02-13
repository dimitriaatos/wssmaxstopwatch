const Max = require('max-api-or-not')
const StopWatch = require('@dimitriaatos/syncwatch')
const {init} = require('./state')

const serverWatch = new StopWatch(time => {
	Max.outlet(['time', time.ms])
})

serverWatch.update(init)

module.exports = serverWatch