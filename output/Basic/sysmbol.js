"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("----Symbol data types-----");
var sym1 = Symbol();
var sym2 = Symbol('Description');
console.log(typeof (sym1));
var Did = Symbol('id');
var obj = {
    [Did]: 100,
    naam: "Anil"
};
console.log(obj[Did]);
