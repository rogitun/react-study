import { useState } from 'react'


function App(){


    let sample = [
        {id:1, name:"hansel"},
        {id:2, name:"hansel2"},
        {id:3, name:"hansel3"},
        {id:4, name:"hansel4"},
    ]
    const [number,setNumber] = useState(0);
    const [users, setUsers] = useState(sample);

    const [num,setNum] = useState(0);

    const add = () => {
        setNumber(number+1)
    }

    const download = () =>{
        const newOne = {id:num, name:"hansel"}
        users.push(newOne)
        setUsers([...users])
        setNum(num+1)
    }

    return (
        <div>
            <div>
                <h1>number : {number}</h1>
                <button onClick={add} value="Plus">Click</button>
            </div>

            <hr/>
            <div>
                <button onClick={download}>다운로드</button>
                {users.map((u) => (
                
                    <h1>{u.id}, {u.name}</h1>

                ))}
            </div>
        </div>
    )
}

export default App