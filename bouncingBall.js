const timesMumSeesBallBounce = (height, bounce, window) => {
    let occurance = 0
if (bounce > 0 && bounce < 1){
while (height>window){
    height = height * bounce
    occurance +=2
}}
if (occurance > 0){
    occurance = occurance - 1
    console.log (occurance)
}
else {
    console.log(-1)
}
}

timesMumSeesBallBounce(15,0.66,1.5)