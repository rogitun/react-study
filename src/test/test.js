const a = [1,2,3];

const b = [...a];

const a2 = a.concat(4);
const b2 = b.push(4);

console.log("A = > " + a);
console.log(a2);
console.log(b2); //push로 넣은 값만 들어감.

console.log("걸러내기")

const a3  = [1,2,3];
const a4 = a3.filter((number) => { //filter는 boolean을 return 한다.
    return number != 1;}) //1이 아닌 애들만 filter해서 가져온다.

console.log(a3);
console.log(a4);



console.log("========= 잘라내기 ======== ")

const arr = [1,2,5,6];
const arr2 = arr.slice(0,2);

console.log(arr2);

const arr3 = [...arr.slice(0,2),3,4,...arr.slice(2)];

console.log(arr3);

console.log("");
console.log("=======map==========")

//map은 filter랑 다르게 순회 ㄴ

const mapArr = [1,2,3,4,5];

console.log("forEach")
mapArr.forEach((number) => console.log(number));

//forEach는 리턴이 없다. 따라서 복사하기 어렵다.
//const a = ??.forEach(...) 등ㅇ ㅣ불가
console.log("map");
mapArr.map((number)=>{
    console.log(number);
})
//map은 리턴 타입이 any, 어느 타입로든 리턴이 가능.

const map2 = mapArr.map((n)=> n);
//...mapArr이랑 같음
//이렇게 쓸거면 스프레드랑 뭐가 다름?
//=> 값 하나 하나를 가공할 수 있음.

console.log(map2);


console.log(`\n가공하기`)

const multipleMap = mapArr.map((number)=> number * number);

console.log(multipleMap);


console.log(
    "###############"
)

const arr123 = [1,2,3];

const b123 = arr123.map((number)=>{
    return number * 2;
})

console.log(b123);