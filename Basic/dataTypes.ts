var fnum : number = 233.4
console.log(fnum)

var data = null
var dataUn = undefined
console.log(typeof(data))
console.log(typeof(dataUn))

console.log("----Symbol data types-----")

// var sym1 = Symbol();
// var sym2 = Symbol('Description');
// console.log(typeof(sym1))
// console.log(sym2)

console.log("-----Array-----")

var array: number [] = [1,2,3,4,3]

for (let index = 0; index < array.length; index++) {
    console.log(array[index])
    
}

console.log("----Tuple----")

var person : [String, number] = ["Anil Singh Negi", 23]
console.log(person)

console.log("----Object----")

var person_info : {
    name : string,
    age : number,
    phn_num : number,
    address : string
} = {
    name : "Anil Singh Neg",
    age : 23,
    phn_num : 234343234323,
    address: "XYZ street "
}

console.log(person_info)


console.log("---ANY data Type---")
var varAny : any = 1232





