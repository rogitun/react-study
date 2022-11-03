

type Color = "RED" | "BLUE" | "YELLOW";

interface Basic1 {
  name: string;
  age: number;
}

type Basic2 = {
  name: string;
  age: number;
};

const one: Basic1 = { name: "hansel", age: 25 };

const two: Basic2 = { name: "hansel2", age: 26 };



interface User2 {
    name : string
}

interface Player extends User2 {

}

const hihi : Player = {
    name : "hansel"
}

interface Phone{
    comp : string
    number : string
    battery : string
    powerOff():void
    powerOn():void
    makeCall(receiver : string) : boolean
    takeCall(callingFrom : string) : boolean   
}

class myPhone implements Phone {
    constructor(
        public comp : string,
        public number : string,
        public battery : string
    ){}
    powerOff(): void {
        console.log("Phone Shutting down")
    }
    powerOn(): void {
        console.log("Hello!")
    }
    makeCall(receiver: string): boolean {
        console.log("calling...to",receiver)
        return true;
    }
    takeCall(callingFrom: string): boolean {
        if(callingFrom === 'blacked'){
            console.log("call blocked")
            return false;
        }
        console.log("you've get a call")
        return true;
    }
}

const phone : myPhone = new myPhone("samsung","010-123-1234","4200mah")


const fun2 = (param : Phone) => {
    console.log(param.battery)
}

fun2(phone)

