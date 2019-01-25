const green = '\x1b[32m'
const yellow = '\x1b[33m'
const red = '\x1b[31m'

module.exports = {
  info: message => console.log(green, message),
  warning: message => console.log(yellow, message),
  error: message => console.log(red, message)
}