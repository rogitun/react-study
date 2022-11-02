const add = (a :number,b :number) => {
    return a+b
}

type Add = (a : number, b : number) => number;

const add2 : Add = (a,b) => a + b;

//#########################

type Fun = {
    (a : number, b : number) : number
    (a : number, b: number, c: number) : number
}

const fun3 : Fun = (a,b,c?:number) => {
    if(c) return a + b + c
    return a+b;
}

const res : number = fun3(1,2,3);
console.log(`res = ${res}`)

//########################

type SuperPrint = {
    <T>(arr: T[]) : void
}

const superFunction : SuperPrint = (arr) => {
    console.log(arr)
}

superFunction([1,2,3,4])
superFunction([true,2,false,4])
superFunction([1,2,3,"21323"])


type DoubleSuper = <T,R>(param : T[], param2 : R) => string

const doubleFunction : DoubleSuper = (arr , result) => {
  return `${result} is ${arr}`;
}

const result = doubleFunction([1,2,3,4], "array");

// console.log(result);



