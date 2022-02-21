// /*
//   Try to print out characters one after another with a delay in-b/w
// */
// const RESET = '\x1b[0m'
// const w = process.stdout.columns
// const char =['a', 'b', 'c', 's', 'f', 'g', 'h']
//
// let s = ""
//
// function draw () {
//   setTimeout(draw, 1000/30)
//   let r = Math.floor(Math.random() * char.length)
//   s = char[r]
//   process.stdout.write(s)
// }
//
// draw()

const RESET = '\x1b[0m'
const w = process.stdout.columns
const char =['★', '☆', '✰', '✧', '✦', '⋱', '⋰']
const eff = ['\x1b[5m', '\x1b[2m', '\x1b[7m']

let s = ""

function draw () {
  setTimeout(draw, 1000/80)
  s = '\x1b[0m'
  let r = Math.floor(Math.random() * char.length)
  let g = Math.floor(Math.random() * eff.length)
  s = '\x1b[0m\x1b[36m' + eff[g] + char[r]
  process.stdout.write(s)
}

  // for (let i = 0; i < w; i++) {
  //   let r = Math.floor(Math.random() * char.length)
  //   let g = Math.floor(Math.random() * eff.length)
  //   output += '\x1b[0m\x1b[36m' + eff[g] + char[r]
  // }
  // console.log(output)
// }

draw()
