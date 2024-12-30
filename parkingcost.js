//Parking charges exercise


function costOfParking  (hour)  {
    const phrase = "The cost of parking will be:"
    if (hour<=5){
        return (`${phrase}`,300)
    }
    else if (hour>5 && hour<=10){
        return(`${phrase}`,350)
    }
    else if (hour>10 && hour<=15){
        return(`${phrase}`,500)
    }
    else if (hour>15 && hour<=20){
        return(`${phrase}`,700)
    }
    else if (hour>20 && hour <=24){
        return(`${phrase}`,400)
    }
    else {
        return("Please enter a number between 0 and 24")
    }
}

const hour = 23
const expected =  400
const result = costOfParking (23)
console.log(result)

if (result === expected) {
    console.log('Test passed!')
} else {
    console.log(`Test failed. Expected ${expected}, but got ${result}.`)
        }