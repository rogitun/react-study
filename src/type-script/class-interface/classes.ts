class Plyaer{
    constructor(
        private firstname : string,
        private lastName : string
    ) {}
}

const hansel = new Plyaer("Hanseul", "Hwang")

console.log(hansel);


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