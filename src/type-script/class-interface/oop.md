<h1>OOP</h1>

TS에서는 객체지향 프로그래밍을 지원합니다.

```
class Plyaer{
    constructor(
        private firstname : string,
        private lastName : string
    ) {}
}

const hansel = new Plyaer("Hanseul", "Hwang")
```

Player 객체의 생성자에는 firstname, lastname을 받고 있습니다.\
생성자에 필드만 입력해주면 해당 생성자는 파라미터로 그 필드들을 받아 객체를 생성하게 됩니다.

접근 제한자로는 public, private 등 전부 가능합니다.

> 추상 클래스

```
abstract class User{
    constructor(
        private firstname : string,
        protected lastName : string
    ) {}

    abstract getLastname():string

    getName(){
        return this.firstname
    }
}

class Member extends User{
    getLastname(): string {
        return this.lastName
    }
}

const me = new Member("hansel","hwang");

console.log(me.getName());
```

위 코드에서는 추상 클래스 User를 상속받은 Member 클래스는 기존 필드를 상속받으면서 getLastname 메서드를 오버라이드 해줬습니다.\
getLastName에서 lastname을 return하기 위해 상속 받은 클래스가 접근 가능한 protected 접근 제한자로 변경해줬습니다.

<h2>Recap</h2>

```
type Words = {
    [key:string] : string
}
```

타입스크립트는 위와 같이 이상한 타입을 제공합니다.\
위 타입은 string 타입의 key - value 쌍으로 이루어져 있습니다.

위 타입을 가지는 객체는 아래와 같이 초기화 및 값이 할당될 수 있습니다.

```
const a : Words = {
    "name" : "Hansel"
}

//여러 값이 들어갈 수 있습니다.
const a : Words = {
    "name" : "Hansel",
    "city" : "uijeongbu-si",
    "zipCode" : '11764'
}

//중간에 값을 추가할 수 있습니다.
a["height"] === undefined ? a["height"] = 200 : a["height"] = 0 
```

<h2>Interface</h2>

선택형 타입

```
type Color = "RED" | "BLUE" | "YELLOW"
```

타입스크립트의 타입은 단순 데이터의 타입만 지정할 뿐 아니라 어떠한 형태의 데이터가 들어오는지도 지정할 수 있습니다.

> 인터페이스

타입스크립트에는 interface가 존재합니다.

```
interface Baisc {
    name : string
    age : number
}
```

위와 같이 인터페이스를 생성하여 타입과 비슷한 용도로 사용할 수 있습니다.

```
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
```

타입과 인터페이스는 겉보기에 아무런 차이가 없습니다,\
선언을 할때 '='가 들어가는지 들어가지 않는지 등의 차이는 명확히 보입니다.

하지만 이전의 Color 예와 같이 type은 조금 더 다양하게 사용할 수 있습니다.\
그에 반해 인터페이스는 객체의 형태를 잡아주는 용도로 사용됩니다.

```
interface User2 {
    name : string
}

interface Player extends User2 {

}
```

인터페이스는 상속하여 확장할 수 있습니다.

> Implements 

인터페이스를 자바의 인터페이스처럼 사용할 수 있습니다.

```
interface Phone{
    comp : string
    number : string
    battery : string
    powerOff():void
    powerOn():void
    makeCall(receiver : string) : boolean
    takeCall(callingFrom : string) : boolean   
}

//인터페이스로부터 상속받은 필드와 메서드는 모두 구현해야합니다.
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


//파라미터 타입으로 인터페이스를 지정해 추상화가 가능합니다.
const fun2 = (param : Phone) => {
    console.log(param.battery)
}
```






