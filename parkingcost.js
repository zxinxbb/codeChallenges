//Parking charges exercise
const phrase = "The cost of parking will be:"

const costOfParking = (hour) => {
    if (hour<=5){
        console.log(`${phrase}`,300)
    }
    else if (hour>5 && hour<=10){
        console.log(`${phrase}`,350)
    }
    else if (hour>10 && hour<=15){
        console.log(`${phrase}`,500)
    }
    else if (hour>15 && hour<=20){
        console.log(`${phrase}`,700)
    }
    else if (hour>20 && hour <=24){
        console.log(`${phrase}`,400)
    }
    else {
        console.log("Please enter a number between 0 and 24")
    }
}
costOfParking (23)