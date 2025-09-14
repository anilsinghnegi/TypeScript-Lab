"use strict";
// We will learn about Nested Object which means an object containing  another object
Object.defineProperty(exports, "__esModule", { value: true });
var customer;
customer = {
    full_name: " John Walker",
    email: "johnwalker@gmail.com",
    phn_no: 420420420,
    address: {
        street: "145 prince street",
        locality: "EH2 4BL",
        city: "Edinburgh",
        state: "Scotland"
    }
};
console.log(customer);
// what if some address is very short which have only street not locality, so according to this 
var cust = {
    full_name: " John Cena",
    email: "johncena@gmail.com",
    phn_no: 420420420,
    address: {
        city: "West Newbury",
        state: "Massachusetts",
        country: "U.S."
    }
};
console.log(cust);
// i hope you understand, me khud sikh rha hu 🤣🤣🤣
