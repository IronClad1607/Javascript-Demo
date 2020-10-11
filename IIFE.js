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

(function (l, p, r, s){
    l("3^4 = " + p(3,4))
    l("4^3 = " + p(4,3))
    l("root(2) = " + r(2))
    l("sin(10) = " + s(10)) 
})(console.log,Math.pow,Math.sqrt,Math.sin)
