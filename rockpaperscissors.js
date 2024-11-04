//console.log(Math.floor(Math.random()*2))
const game = ["Rock","Paper","Scissors"]

let computerChoice = Math.floor(Math.random()*3)
let userChoice = "Scissors"

console.log(`You chose ${userChoice}`)

if (computerChoice==0){
    console.log("The Computer chose Rock")
}
else if (computerChoice==1){
    console.log("The Computer chose Paper")
}
else {
    console.log("The Computer chose Scissors")
}

if (userChoice==game[0]){
    userChoice = 0
}
else if (userChoice==game[1]){
    userChoice = 1
}
else{
    userChoice = 2
}



if (computerChoice == userChoice){
    console.log("You tie")
} 
else if (computerChoice==0 && userChoice==2){
        console.log("The computer chose Rock so has won")
    }
else if (userChoice == 0 && computerChoice == 2){
        console.log("You won")
    }
else if (computerChoice==1 && userChoice==1){
            console.log("The computer chose Paper so has won")
        }
else if (userChoice==1 && computerChoice==0){
            console.log("You won")
        }
else if (computerChoice==2 && userChoice==1){
            console.log("The computer chose Scissors so has won")
        }
else if (userChoice==2 && computerChoice==1){
            console.log("You won")
        }
    
