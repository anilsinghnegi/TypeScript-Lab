// We will learn about Nested Object which means an object containing  another object

var customer :{
    full_name : string,
    email : string,
    phn_no : number,
    address :{
        street : string,
        locality : string,
        city : string,
        state : string
    }
}
customer = {
     full_name : " John Walker",
     email : "johnwalker@gmail.com",
     phn_no : 420420420,
     address : {
        street :"145 prince street",
        locality : "EH2 4BL",
        city : "Edinburgh",
        state : "Scotland"
     }
}

console.log(customer)

// what if some address is very short which have only street not locality, so according to this 

var cust :{
    full_name : string,
    email : string,
    phn_no : number,
    address :{} // no need to decalre keys
}={
     full_name : " John Cena",
     email : "johncena@gmail.com",
     phn_no : 420420420,
     address : {
        city :"West Newbury",
        state : "Massachusetts",
        country : "U.S."
        
     }
}
console.log(cust)


// i hope you understand, me khud sikh rha hu 🤣🤣🤣