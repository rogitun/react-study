

function MyAge(){

    let arr = [10,20,30];

    const abced = [2,4,6];

    const a2d2 = abced.map((number)=>{
        return number + 1;
    })

    return(

        <div>
            {
            arr.map((number)=> (
                <h1>{number*2}</h1>
            ))
            }

            <ul>
                {a2d2.map((n)=>(<li>{n}</li>))}
            </ul>
        </div>
    )
}

export default MyAge;