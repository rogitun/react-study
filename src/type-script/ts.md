<h1>Ts 기본 </h1>

> 강한 타입 언어 vs 약한 타입 언어

강한 타입 언어 

- 일반적으로 컴파일시 타입 규칙을 엄격하게 체크함.
- 형변환시 명시적으로 타입을 지정하지 않으면 변환할 수 없다.

약한 타입

- 강한 타입과 반대로 규칙에 대해 검사하지 않거나 느슨한 검사를 진행
- 컴파일 또는 실행 과정에서 타입이 묵시적으로 변환될 수 있다.

> 타입스크립트의 장점

1. 강한 타입 언어로써 자바스크립트의 약점을 커버할 수 있다.

타입스크립트에서는 형변환이 자유롭지 못하기 때문에 변수에 들어갈 값을 예측할 수 있다.\
타입을 명시적으로 선언하여 코드 가독성이 향상된다.\
컴파일 단계에서 오류를 잡아낼 수 있다.

```
let myName : string = "abc"
myname = 123 => X
```

2. 브라우저에서 ECMA의 차세대 스펙을 별도 설정 없이 미리 사용할 수 있다.

JS는 브라우저마다 표준화된 ECMA 스펙 적용이 안되는 경우가 존재한다.

3. interface, Generic과 같은 문법으로 객체지향 프로그래밍을 지원한다.

- class
- private, protected, public,
- interface
- extends
- abstract

> 타입스크립트의 단점

1. 컴파일이 완료된 것만으로는 모든 타입 오류를 잡을 수 없다.
2. 결국 슈퍼셋 언어이므로 모든 결과는 JS로 변환된다. (종속적이다)
3. tsconfig.json이나 라이브러리 사용시 타입 정의 파일이 따로 필요하여 초기 설정이 복잡하다.

> 타입스크립트 설치

```
npm install -g typescript
```

> typeScript 변수 타입

- number
- string
- boolean
- Symbol
- Array or []
- object
- bigint (ES 2020 Target부터)

> 변수 선언 방법

const a : number = 3;

const b: string = "hi?"

const c : Symbol = Symbol("someKey");

const e : Array<number> = [1,2];

const f : object = {};

const x; => any 타입

> Any , unKnown

### Any

let a : any = 3;

a = 'string'

a = true

a = {}

전부 가능하다.

컴파일 오류는 발생하지 않지만, 값의 프로퍼티나 내장 함수를 사용할 때 런타인 오류가 발생할 수 있다.

let string : any = "hello"

string = undefined;

string.replace('hello','hi') => X

Typescript의 주된 이점이 사라지기 때문에 최대한 사용을 자제하는게 좋다.

### Unknown

any 처럼 모든 타입을 받을 수 있지만\
다른 값에 대입하거나 연산 또는 내부 함수를 호출하려 할 때 오류가 발생한다.

const string : unknown = 'String'

const another : string = string => type unknown Error

const another : string = string as string => O

직접 사용할 때 오류를 발생시켜 any보단 안전하다.

> 함수에서 타입 사용

함수에서는 파라미터와 반환값에 모두 타입을 지정할 수 있다.

```
function function1(param1 : string, p2 : string) : string {
    return "Hello"
}

const func = (param:string) : string => {
    return param
}
```

매개변수로 함수 전달 가능
```
const func = (function2 : (param:number)=> string, p2 : number): string => {
    return function2(p2);
}
```

> 자바스크립트의 내부 추론 불가능


```
const obj : object = {};
obj.a = 3; -> 불가능
```

위와 같이 내부 추론이 불가능하기 때문에 직접 타입이나 인터페이스를 만들어야 한다.

```
type Card ={
    name : string;
    phone : string;
    ...
}
```

> union type

```
type twoType = string | number;

let customVal : twoType = 3;
customVal = 'Hi';
```

> interface

객체지향과 같이 class의 뼈대를 위해 사용하거나, 값이 특정 형태를 갖도록 제약할 수 있다.

```
interface Computer {
    start : ()=> void;
    memory : number;
    gpu : string
}

class Samsung implements Computer{
    start(){
        ...
    }
    memory = 16;
    gpu = 'nvidia'
}
```

### 값을 제한하는 인터페이스

```
interface Cellphone {
    isPhone : boolean;
    number : string;
}

const myPhone : Cellphone = {
    isPhone : true,
    number : '000-000-0000'
}
```

> 확장

### 인터페이스 상속

```
interface A {
    ...
}

interface B extends A {
    ...
}
```

### type 확장

```
type Animal = {
    ....
}

type Bear = Animal & {
    ...
}
```

<h1>TypeScript</h1>

> readOnly Property 설정

```
type Player = {
    readonly name : string;
    age? : number
}

const me : Player = {name : "hansel", age : 25}

me.name = "asd" => X


const numbers : readonly number[] = [1,23,4,5]

numbers.push(5) => X
```

> Tuple

```
const player : [string, number, boolean] = ["hansel",25,true]
```

TypeScript에서는 tuple이 존재합니다. 특정 타입으로 지정된 배열을 생성할 수 있습니다.\
각 위치에 맞는 값들이 순서에 맞게 와야합니다.

API의 특성에 따라 특정한 타입의 순서에 맞는 값을 받아오는 경우에 유용합니다.

접근은 일반 배열과 같은 방식으로 접근 가능합니다.
```
player[0] = "person"
```


> 기존 js 타입

```
let ud : undefined = undefined;
let nl : null = null;
```

기존 자바스크립트에 존재하는 undefined등의 타입도 타입으로 지정할 수 있습니다.

> void type

```
function nothing(){
    console.log("NOTHING")
}
```

타입스크립트에서는 기본적으로 함수에도 반환 타입이 필요합니다.\
하지만 위 함수처럼 단순히 출력문만 존재하는 경우 반환 타입이 애매합니다.

타입스크립트에서는 자바와 같이 void 타입을 지원합니다.

> never type

never는 함수가 절대 무언가 반환하지 않는 경우 사용됩니다.

<h1> Functions </h1>

```
const add = (a :number,b :number) => {
    return a+b
}
```
이 함수의 파라미터에서 타입을 지우고 싶다면 어떻게 해야할까요

```
type Add = (a : number, b : number) => number;

const add2 : Add = (a,b) => a + b;
```

타입스크립트에서는 이처럼 함수 자체에 타입을 지정해 파라미터와 반환 타입을 미리 지정해줄 수 있습니다.

> 다형성 

```
type Fun = {
    (a : number, b : number) : number
    (a : number, b: number, c: number) : number
}

const fun3 : Fun = (a,b,c?:number) => {
    if(c) return a + b + c
    return a+b;
```

파라미터가 다른 경우 옵션이 되는 파라미터에는 타입을 지정해주어야 합니다.

> 제네릭

타입스크립트에서는 제네릭을 사용할 수 있습니다.

```
type SuperPrint = {
    <T>(arr: T[]) : void
}

superFunction([1,2,3,4])
superFunction([true,2,false,4])
superFunction([1,2,3,"21323"])
```

위 타입은 함수의 파라미터로써 number 배열을 받을 수 있고, 혹은 string, boolean, object 등 어떤 타입으로도 받을 수 있게 됩니다.

