
const a6 = {id:1, name:"hansel"}
const info = {phone:"010-1234",city:"uij"}
const b6 = {...a6,name:"Choi",...info};

console.log(b6)

const users = [
    {id:1,name:"a"},
    {id:2,name:'c'},
    {id:3,name:"d"}

]

const newUser = {
    id:2, name:"Hansel"
}

const newUserSet = users.map(u => u.id === newUser.id ? {...u,...newUser} : u)

console.log(newUserSet)