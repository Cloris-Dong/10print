/*
  Try to print out characters one after another with a delay in-b/w
*/
// const RESET = '\x1b[0m'
// const w = process.stdout.columns
// const char =['★', '☆', '✰', '✧', '✦', '⋱', '⋰']
// const eff = ['\x1b[5m', '\x1b[2m', '\x1b[7m']
//
// function draw () {
//   setTimeout(draw, 1000/12)
//   let output = '\x1b[0m'
//   for (let i = 0; i < w; i++) {
//     let r = Math.floor(Math.random() * char.length)
//     let g = Math.floor(Math.random() * eff.length)
//     output += '\x1b[0m\x1b[36m' + eff[g] + char[r]
//   }
//   console.log(output)
// }

// draw()

const RESET = '\x1b[0m'
const w = process.stdout.columns
const char =['★', '☆', '✰', '✧', '✦', '⋱', '⋰']
const eff = ['\x1b[5m', '\x1b[2m', '\x1b[7m']

let output = ""
function draw () {
  let output = '\x1b[0m'
  for (let i = 0; i < w; i++) {
    let r = Math.floor(Math.random() * char.length)
    let g = Math.floor(Math.random() * eff.length)
    output = '\x1b[0m\x1b[36m' + eff[g] + char[r]
  }
process.stdout.write(output)
}

draw()

// let s = ''
// for (let tot = 0; tot<10; tot++) {
//   for (let i = 0; i < w; i++) {
//     s = draw(s)
//   }
// console.log(s)
// }
