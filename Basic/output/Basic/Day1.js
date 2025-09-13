"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = 10;
var num1 = 20;
var num2 = "30";
var total = num + num1 + Number(num2); //type inference
// console.log(total)
var octal_number = 0o0001;
var hexa = 0x000001;
var binary = 0b0101010;
var item = 100;
var item2 = "20";
// var item2convert = Number(item2)
// console.log(item+item2convert)
// console.log(item+Number(item2))
// console.log(item+ +item2)
//type inference
// var number1 = 1
// number = "anil"  throw error
var number1 = 10;
number1 = "Hwllo";
console.log(number1);
//# sourceMappingURL=Day1.js.map