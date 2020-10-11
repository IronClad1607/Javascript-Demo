function count(){
    var initial = 1
    function plus(){
        console.log(++initial)
    }

    return plus
}

var c= count()

c()
c() 


function createCounter(initVal,deltaVal){
    return {
        up(){
            initVal += deltaVal
            console.log(initVal)
        },
        down(){
            initVal -= deltaVal
            console.log(initVal)
        }
    }
}

var a = createCounter(20,3)
a.up()
a.up()
a.down()