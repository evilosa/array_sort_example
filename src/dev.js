const sortString = require('./index')
const logger = require('./logger')
const separator = header => logger.warning(`\n-------------------------------- ${header} -------------------------------------\n`)

separator('START')

const runCase = (number = 1, source) => {
  separator(`CASE ${number}`)
  logger.info(`Source: ${source}`)
  const result = sortString(source)
  logger.info(`Result: ${result}`)
}

try {
  runCase(1, '103 123 4444 99 2000')
  runCase(2, '2000 10003 1234000 44444444 9999 11 11 22 123')
  runCase(3, '200$#as0 #$%@10003 12!3!f4qq000 4444rwr44asd44 9999 11 adf1d1fd 2asd2 1dsf23')
} catch (exception) {
  logger.error(exception.stack)
}

separator('END')