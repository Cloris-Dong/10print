/*
  Try to print out characters one after another with a delay in-b/w
*/
const RESET = '\x1b[0m'
const w = process.stdout.columns
const char =['a', 'b', 'c', 's', 'f', 'g', 'h']

let s = ""

function draw () {
  setTimeout(draw, 1000/30)
  let r = Math.floor(Math.random() * char.length)
  s = char[r]
  process.stdout.write(s)
}

draw()

// let s = ''
// for (let tot = 0; tot<10; tot++) {
//   for (let i = 0; i < w; i++) {
//     s = draw(s)
//   }
// console.log(s)
// }
