var a = 10
a = 11
a++
console.log(a)

/**
 * var has global scope and
 * let is block-only scope
 */

let b =20
b++
console.log(b);

const c = 30
// c++
console.log(c)

/**
 * JSON Object
 */

const obj = {
     k1:'asd',
     k2:10,
     k3:false
    }

obj.k4 = 123

console.log(obj)
console.log(obj.k4)

delete obj.k1
console.log(obj.k1)

//Array Object
const arr = [1,2,3]
console.log(arr)

arr.push(5)
console.log(arr)


/**
 * scopes 
 */

 const mVar = 10

 function alpha(){
     const mVar = 11
     if(true){
         const mVar = 21

         if(true){
             const mVar = 33
             console.log(mVar) //33
         }
         console.log(mVar) //21
     }
     console.log(mVar) //11
 }

 alpha()