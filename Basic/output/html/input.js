"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getinfo() {
    console.log("Person Info");
    const nameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
    const addressInput = document.getElementById("age");
    const name = nameInput.value;
    const email = emailInput.value;
    const age = Number(ageInput.value);
    const address = addressInput.value;
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(address);
}
getinfo();
//# sourceMappingURL=input.js.map