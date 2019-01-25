const guardNumber = number => number.replace(/\D/g, '')

const calculateNumberWeight = sourceNumber => {
  if (!sourceNumber || typeof(sourceNumber) !== 'string')
    throw new TypeError(`Calculate number weight: Wrong number ${sourceNumber} was provided`)
  
  return guardNumber(sourceNumber).split('').map(Number).reduce((a, b) => a + b, 0);
}

const sortingFunction = (a, b) => {
  const weightA = calculateNumberWeight(a)
  const weightB = calculateNumberWeight(b)

  return weightA > weightB ? 1 : weightA < weightB ? -1 : a > b ? 1 : a < b ? -1 : 0
}

const sortData = source => {
  if (!source)
    throw new Error('Empty source string was provided!')
  
  if (typeof(source) !== 'string')
    throw new TypeError(`Wrong source string ${JSON.stringify(source)} was provided!`)

  return source.split(' ').map(number => guardNumber(number)).sort(sortingFunction).join(' ')
}

module.exports = sortData
module.exports.guardNumber = guardNumber
module.exports.calculateNumberWeight = calculateNumberWeight
module.exports.sortingFunction = sortingFunction