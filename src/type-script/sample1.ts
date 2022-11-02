let a : string = "hansel";

function fun1(param1: string) : string {
    return param1
}

const fun2 = (param1 : string) : string => {
    return param1
}

console.log(`a = ${a} fun1 = ${fun1("shut up ")} , fun2 = ${fun2("hio?")}`)

let arr : number[] = []

arr.push(1,2,3,4,5)

for(let x in arr){
    console.log(`x = ${x}`)
}


let a2 : number = 1
let b : string = "abc";


let ccc : boolean[] = [true]

console.log(ccc)

type Person = {
    name : string;
    age: number
}


type Player = {
    readonly name : string;
    age? : number
}

const me : Player = {name : "hansel", age : 25}


// Tuple => 최소한의 길이와 특정 타입이 필요한 array

const player : [string, number, boolean] = ["hansel",25,true]

const arr1 : any[] = [1,2,3,4]
const arr2 : any = true

console.log(`sum ${arr1 + arr2}`)

let un : unknown;

un = 25;

let what : number = un as number 

function nothing(){
    console.log("NOTHING")
}

function nev() : never {
    throw new Error("");
    
}


