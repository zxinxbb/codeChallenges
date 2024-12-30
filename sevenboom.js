//fuction that takes array of numbers and returns 'boom' if 7 is there. otherwise no booming here



const isNumSeven = (number) => number ==7

function Boom (numbers){
if (numbers.some(isNumSeven)==true){
    return ("Boom!")
}
else {
   return ("No booming here!")
}
}

//test
const numbers = [1,2,3,7]
const expected = "Boom!"

const result = Boom(numbers)

if (result === expected) {
    console.log('Test passed!')
} else {
    console.log(`Test failed. Expected ${expected}, but got ${result}.`)
        }