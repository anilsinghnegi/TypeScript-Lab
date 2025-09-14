"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declration of object -> userData with thier keys
var userData;
// assign the values on the object with their keys and values
userData = {
    name: "anil Singh Negi",
    emplyId: 123,
    email: "anilsinghengi@gmail.com",
    age: 23,
    address: "xyz, 123 Street, John Doe Mark",
};
console.log(userData);
//2nd method  of declartion and assign the value in the objects
var employee = {
    first_name: "Anil",
    middle_name: "Singh",
    last_name: "Negi",
    email: "anilsinghnegi222@gmail.com",
    phn_no: 8978787878,
};
console.log(employee);
// now what if some people doesnot have thier middle name or the last name, so what will do in that case.
// let see
var person = {
    first_name: "Anil",
    last_name: "Negi",
    email: "anilsinghnegi222@gmail.com",
    phn_no: 8978787878,
};
console.log(person);
// now i want to add my middle name, how will i add? let see ->
person.middle_name = "Singh";
console.log(person);
//now what will happen when person has address but address key in not available in the object.
//simple bhasa me kahu agar -> person ko address bhi add krna hai par object ke paas address ka koi key hi nhi toh kese. 
//chlo dekhte hai->
//hamare paas userDetail ka object hai 
var userDetail = {
    full_name: " Anil Singh Negi"
};
//i know you don't understand what would happen above.
// let describe 
// isme jyada kuchh samjhne wali baat hi nhi hai. bass itna jaaniye ki pehle ham key value define kar rhe thee jiske wajah se hum bass unhi keys ki value de rhe they.. ab hamare paas keys ka koi boundence nhi hai ab hum apni marji se keys aur unki value de skte hai. aaye aur niche btata hoon.
userDetail.phn_no = 89829343;
userDetail.email = "anilsinghnegi222@gmail.com";
userData.address;
console.log(userDetail);
//aap soch rhe honge ki mene address ki value kyu nhi di, dekhiye agar aapne data -types padhe hai toh aapko pta hoga ki jo key ki value hame String | Number | undefined de rkhi hai, inme se address ka jo type hai wo undefined iska mtlb hai ki userDetail me address naam key toh ahi par uski jo value hai wo undefined hai. 
