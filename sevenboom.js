//fuction that takes array of numbers and returns 'boom' if 7 is there. otherwise no booming here

const numbers = [1,2,3,7]

const isNumSeven = (number) => number ==7

if (numbers.some(isNumSeven)==true){
    console.log ("Boom!")
}
else {
    console.log ("No booming here!")
}