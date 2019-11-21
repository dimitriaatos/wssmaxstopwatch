const Max = require('max-api')
const state = require('./state')
const {broadcast} = require('./ws')
const copyUrl = require('./copyUrl')

module.exports = () => {
  Max.addHandler('play', (toggle) => {
  
    if (state.play != toggle) {
      state.play = !!toggle
      let timestamp = new Date().getTime()
      if (state.play) {
        if (state.start != undefined && state.stop != undefined) {
          timestamp = timestamp - (state.stop - state.start)
        }
        state.start = timestamp
      } else {
        state.stop = timestamp
      }
      broadcast(JSON.stringify({
        start: state.start,
        play: state.play,
        message: 'playPause',
      }))
    }
  })
  
  Max.addHandler(Max.MESSAGE_TYPES.BANG, () => {
  
    state.start = new Date().getTime()
    state.stop = undefined
  
    broadcast(JSON.stringify({
      start: state.start,
      message: 'reset',
    }))
  })
  
  Max.addHandler('copy', () => {
    copyUrl()
  })
  
  Max.addHandler('url', () => {
    Max.outlet(['url', state.url])
  })
}