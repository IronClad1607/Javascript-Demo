var intervalID
var runCount = 0

function sayHello(){
    runCount++
    if(runCount>5){
        clearInterval(intervalID)
    }
    console.log("Hello !")
}

console.log("The waits starts ...")

// setTimeout(sayHello,2000)
// setTimeout(sayHello,2000)


intervalID =  setInterval(sayHello,1000)