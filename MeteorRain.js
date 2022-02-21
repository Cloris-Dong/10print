/*
  Meteor Rain
*/

/*
colors
------------------------------------
FgYellow ='\x1b[33m'
BgBlue = '\x1b[44m'
*/

const RESET = '\x1b[0m'
const w = process.stdout.columns
const char =['★', '☆', '✰', '✧', '✦', '⋱', '⋰']
const eff = ['\x1b[5m', '\x1b[2m', '\x1b[7m']

function draw () {
  setTimeout(draw, 1000/12)
  let output = '\x1b[0m'
  for (let i = 0; i < w; i++) {
    let r = Math.floor(Math.random() * char.length)
    let g = Math.floor(Math.random() * eff.length)
    output += '\x1b[0m\x1b[36m' + eff[g] + char[r]
  }
  console.log(output)
}

draw()
