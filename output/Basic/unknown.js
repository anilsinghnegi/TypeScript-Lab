"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Unknwo Data Types");
/*
Unknown Data type -> It is similiar to any, but it's safe beacause it force type checking before performing opertation on the value.
*/
var num = " Anil ";
num = 23;
num = [12, 232, 4343, 3432, 34];
num = "Anil";
if (typeof num == "string") {
    console.log(num.toUpperCase());
}
