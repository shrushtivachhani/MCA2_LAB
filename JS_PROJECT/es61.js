var a = 10
var b =  20
var c = a+b

console.log("A value is:" + a + "B value is:" + b + "Sum is: " + c)

//backlit
console.log(`A value is: ${a} B value is: ${b} Sum is: ${a+b}`)

//let vs var
var e = 10
console.log(e)
if(true){
    var e = 99
    console.log(e)
}
console.log(e)

// let e = 10
// console.log(e)
// if(true){
//     let e = 99
//     console.log(e)
// }
// console.log(e)