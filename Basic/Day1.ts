var num : number = 10;
var num1 : number = 20;
var num2 = "30"

var total:number = num + num1 + Number(num2); //type inference
// console.log(total)


var octal_number : number = 0o0001
var hexa : number = 0x000001
var binary = 0b0101010;


var item : number = 100;
var item2 = "20"
// var item2convert = Number(item2)

// console.log(item+item2convert)
// console.log(item+Number(item2))
// console.log(item+ +item2)

//type inference

// var number1 = 1
// number = "anil"  throw error

var number1 : number | string = 10;
number1 = "Hwllo"

console.log(number1)