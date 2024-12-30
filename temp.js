function temperatureConverter (temperature,type){
    let result;
    if (type=="F"){
 result = (temperature-32)/9*5

    }
    if (type==="C"){
        result = (temperature*1.8)+32

    }
   return (result)


}

//test

const number = 68
const type = "F"

const expected = 20
temperatureConverter(68,"F")
let newResult = temperatureConverter(68,"F")
console.log(newResult)
if (newResult === expected) {
    console.log('Test passed!')
} else {
    console.log(`Test failed. Expected ${expected}, but got ${newResult}.`)
        }