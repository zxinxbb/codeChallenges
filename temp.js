const temp = (temperature,type)=>{
    if (type=="F"){
result = (temperature-32)/9*5
    }
    if (type==="C"){
        result = (temperature*1.8)+32
    }
console.log(result)
}
temp(60,"F")