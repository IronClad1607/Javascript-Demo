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

console.log(a)