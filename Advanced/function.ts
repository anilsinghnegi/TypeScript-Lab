function fruit(): string {
    return "Apple"
}
console.log(fruit())

function displaty () : Number {
    return 23;
}

console.log(displaty())

function complex(): Number | String | Boolean{
    let type = 123
    let data = 213;
    let name = "ANil "
    let bool = true

    if(typeof type=='string'){
        return data
    }else if(typeof type=='number'){
        return name;
    }else{
        return bool;
    }
}

console.log(complex())


function add (a : number, b : string ) : number | string {
    return a+b;
}
console.log(add(56,"4"))

/*
Function Parameter Types
*/