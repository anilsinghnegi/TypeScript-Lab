"use strict";
// Any and Unkwon Data Types
/*
Any -> which allow to hold value of any data types. if you not sure about data type in this case you prefer use **Any**
*/
Object.defineProperty(exports, "__esModule", { value: true });
var phn_no = 2343;
console.log(phn_no + " Type is " + typeof phn_no);
phn_no = "2343";
console.log(phn_no + " Type is " + typeof phn_no);
phn_no = [1, 23, 4, 34, 34];
console.log(phn_no + " Type is " + typeof phn_no);
// i hope you understand what exactle happen using any data type.
// another case -> when data comes from API
// suppose that api send data userId jo ki number bhi ho skti hai aur string bhi 
// hamare paas userId = "abc12" or userId = 121 or hamko iss data show karawana hai toh tab ham any ka use kar skte h
//# sourceMappingURL=anyUnkown.js.map