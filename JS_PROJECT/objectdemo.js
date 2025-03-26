var myobject = {
    name : "SV",
    gender : "Female",
    mobile : [9722968778, 9724978778, 9624968778],
    address : {
        city : 'Gondal',
        area : 'Nandanvan',
        pincode : 360311
    }
}
console.log(myobject)
console.log(myobject.name)
console.log(myobject['name'])
//add
myobject.email = "vachhanishrushti0@gmail.com"
console.log(myobject.email)
//update
//myobject.address = "Rajkot"
//delete
//delete myobject.mobile
console.log(myobject)

//for(foreach, forof, forin)
for (i in myobject){
    console.log(`Key is: ${i} Value is: ${myobject[i]}`)
}

console.log(myobject['mobile'][1])
console.log(myobject.address.area)