// Given that a day is represented by a number and Monday is represented as the number 1. 

// Print out when the day is a weekday. 
// On a Tuesday I go to the gym. Display this. 
// On a Thursday I go to the gym. Display this. 
// On a Sunday I do gardening. Display this. 

let day = 0

if (day > 0 && day <=5){
    console.log("This is a weekday")
    if (day==2 || day == 4){
        console.log("I go to the gym.")
    }
}
    else if (day == 7){
        console.log("I do gardening.")
    }
