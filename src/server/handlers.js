const Max = require('max-api')
const {state, constants, server} = require('./state')
const {broadcast} = require('./ws')
const copyUrl = require('./copyUrl')

module.exports = () => {

  Max.addHandler('play', (toggle) => {
    if (state.play != toggle) {
      state.play = !!toggle
      const now = new Date().getTime()
      if (state.play) {
        state.start = now - (state.stop - state.start)
        state.stop = undefined
      } else {
        state.stop = now
      }
      broadcast({
        ...state,
        message: 'playPause',
      })
    }
  })
  
  Max.addHandler(Max.MESSAGE_TYPES.BANG, () => {
    state.start = state.stop = new Date().getTime()
  
    broadcast({
      ...state,
      message: 'reset',
    })
  })

  let prevMs

  Max.addHandler('set', (ms) => {
    ms = ms >= constants.max ? constants.max :
      ms <= -constants.max ? -constants.max :
      Math.round(ms)

    if (prevMs != ms) {
      const now = new Date().getTime()
      state.start = now - ms
      state.stop = now
        
      broadcast({
        ...state,
        message: 'reset',
      })
    }
    prevMs = ms
  })

  Max.addHandler('format', (format) => {
    state.format = format
    broadcast({
      ...state,
      message: 'reset',
    })
  })
  
  Max.addHandler('copy', () => {
    copyUrl()
  })
  
  Max.addHandler('url', () => {
    Max.outlet(['url', server.url])
  })


}