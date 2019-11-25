export const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

export const floorPrecision = (x, precision) => x - (x<0 ? precision : 0 + (x % precision))