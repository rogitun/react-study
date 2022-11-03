type Words = {
    [key:string] : string
}

class Word {
    constructor(
        public word : string,
        public meaning : string
    ){}
}


class Dictionary{
    private words : Words
    constructor(){
        this.words = {}
    }

    add(word: Word){
        if(this.words[word.word]===undefined){
            this.words[word.word] = word.meaning;
        }
    }

    getMeaning(word : string) : void{
        if(this.words[word] === undefined){
            console.log(`${word} is not added yet`)
        }else{
            console.log(`the meaning of ${word} is ${this.words[word]}`)
        }
    }
}


const dict = new Dictionary()

dict.add(new Word("Computer","Machine run by CPU"))
dict.add(new Word("Samsung","a company owned by Lee's"))

dict.getMeaning("Samsung")
dict.getMeaning("Computer")




