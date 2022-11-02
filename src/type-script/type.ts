type RealPerson = {
    name : string;
    age? : number;
}

let a1 : RealPerson = {name: "hansel"}

if(a1.age && a1.age > 10){
    console.log(`${a1.name} is over 10`)
}else{
    console.log('good to go,' + a1.age)
}


const person : RealPerson = {name:'12314'}

person.age = 256
console.log(person)

function getName(name : string) : RealPerson {
    return {name, age:15}
}

const friend = getName("hansel")

console.log(friend)

const getName2 = (name : string) : RealPerson => {
    return {name, age:15151}
}