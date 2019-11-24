const calcs = Object.entries({
  h: [1000 * 60 * 60, 24],
  m: [1000 * 60, 60],
  s: [1000, 60],
  d: [100, 10],
  c: [10, 10],
}).reduce((accum, [name, [divider, modulo]]) => {
  accum[name] = {divider, modulo}
  return accum
}, {})

const formatDigits = (pTime, pFormat) => {
  const numDigits = pFormat.length
  const {divider, modulo} = calcs[pFormat.charAt(0)]
  return ('0000' + Math.floor((pTime / divider) % modulo)).slice(-numDigits)
}

const formatTime = (time, format) => (
  (time < 0 ? '-' : '') + Object.keys(calcs).reduce((accum, key) => (
    accum.replace(
      new RegExp(`${key}+`, 'g'),
      // new RegExp(`(^|[^\\\\])${key}+`, 'g'),
      (...args) => {
        return formatDigits(Math.abs(time), args[0])
      }
    )
  ), format)
  
)

export default formatTime

// console.log(formatTime(7740000, 'hh:mm:ss:d0'))