const Max = require('max-api')
const {constants} = require('./state')
const StopWatch = require('syncwatch')

const serverWatch = new StopWatch(time => {
  Max.outlet(['time', time.ms])
})

module.exports = serverWatch