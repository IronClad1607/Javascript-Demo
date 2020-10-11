function sayHello(){
    console.log("Hello !")
}

console.log("The waits starts ...")

setTimeout(sayHello,2000)
setTimeout(sayHello,2000)


setInterval(sayHello,1000)