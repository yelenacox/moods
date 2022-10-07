const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
let grumpyHours = []
let happyHours = []

for (mood of hours){
    if (mood < 7){
        grumpyHours.push(mood)
    } else {
        happyHours.push(mood)
    }
}

console.log(`I was grumpy on ${grumpyHours.length} days. 
I was happy on ${happyHours.length} days.`)

