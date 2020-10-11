//IIFE = Immediately Invoked Function Expression

(function (){
    var a =10
    var b = a/5

    console.log(a + b)
})()


//Scope operations for IIFE
if(true){
    (function (){
        var a = 10
    })()
}

// console.log(a)

//Minimize

function doMath(){
    console.log("3^4 = " + Math.pow(3,4))
    console.log("4^3 = " + Math.pow(4,3))
    console.log("root(2) = " + Math.sqrt(2))
    console.log("sin(10) = " + Math.sin(10)) 
}

doMath()