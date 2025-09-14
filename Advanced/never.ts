/*
The never type in TypeScript represents the values that can never occur. For example, the return type of a function that throws an error is never.
*/

function noDisplay() : never{
    while(true){
         console.log("No return")
    }
}

noDisplay()