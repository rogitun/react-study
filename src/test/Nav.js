

function Nav(props){


    const navList = []

    for(let i=0;i<props.arr.length;i++){
        navList.push(

            <li key={props.arr[i].id}> 
            <a id={props.arr[i].id} href="/" onClick={event=>{
                event.preventDefault();
                props.onChangeMode(event.target.id);
            }}>{props.arr[i].title}</a>
            </li>
        )
    }

    return (
        <ol>
        {navList}
        </ol>
    )
}

export default Nav