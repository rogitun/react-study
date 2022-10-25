import Header from "./Header";
import {useState} from 'react'
import Nav from "./Nav";
import Read from "./Read";

function Article(props){
    return(
        <article>Your current region is {props.group.title} - {props.group.city}</article>
    )
}

function Create(props){
    return (
      <article>
        <h2>Create</h2>
        <form onSubmit={event=>{
            event.preventDefault();
            const country = event.target.country.value;
            const city = event.target.city.value;
            props.onCreate(country,city);
        }}>
           <p> <input type="text" name="country" placeholder="country"></input></p>
           <p><textarea name="city" placeholder="city, street, zipcode, etc..."></textarea></p> 
           <p><input type="submit" value="send"></input></p>
        </form>
      </article>
    );
}

function Update(props){
    const [country,setCountry] = useState(props.country);
    const [city,setCity] = useState(props.city);


    return (
        <article>
          <h2>Update</h2>
          <form onSubmit={event=>{
              event.preventDefault();
              const country = event.target.country.value;
              const city = event.target.city.value;
              props.onUpdate(country,city);
          }}>
             <p> <input type="text" name="country" placeholder="country" value={country} onChange={event=>{
                setCountry(event.target.value);
             }}></input></p>
             <p><textarea name="city" placeholder="city, street, zipcode, etc..." value={city} onChange={event=>{
                setCity(event.target.value);
             }}></textarea></p> 
             <p><input type="submit" value="send"></input></p>
          </form>
        </article>
      );
}

function State(){
  const [arr, setArr] = useState([
    { id: 0, title: "Korea", city: "Seoul" },
    { id: 1, title: "USA", city: "NewYork" },
    { id: 2, title: "France", city: "Paris" },
  ]);
  const [userSet, setUsetSet] = useState(0);
  const [mode, setMode] = useState("READ");

  let updateControl = (
    <>
        <li>
        <a
          href={`/update${userSet}`}
          onClick={(event) => {
            event.preventDefault();
            setMode("UPDATE");
          }}
        >
          update
        </a>
        </li>
        <li>
          <input
            type="button"
            value="DELETE"
            onClick={() => {
              const newArr = arr.filter((m) => m.id != userSet);
              setArr(newArr);
              setUsetSet(0);
              setMode("READ");
            }}
          ></input>
        </li>
    </>
  );
  let content = null;
  let title,
    city = null;


  title = arr[userSet].title;
  city = arr[userSet].city;

  if(mode==="CREATE"){
    content = <Create onCreate={(country,city)=>{
        const newArr = { id: arr.length, title: country, city: city };
        const tempArr = [...arr];
        tempArr.push(newArr);
        setArr(tempArr);
        setMode("READ")
        setUsetSet(arr.length);
    }}/>
  }else if(mode==="READ"){
    content = <Article group={arr[userSet]}></Article>;
  }else{
    content = <Update country={arr[userSet].title} city={arr[userSet].city} onUpdate={(country,city)=>{
        arr[userSet].title = country;
        arr[userSet].city = city;
        setMode("READ");
    }}></Update>
  }



  return (
    <div>
      <Header
        title="Title"
        onChangeMode={() => {
          alert("HI?");
        }}
      />
      <Nav
        arr={arr}
        onChangeMode={(id) => {
          setUsetSet(id);
        }}
      ></Nav>
      {content}
      <Read title={title} city={city}></Read>

      <hr></hr>
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            create
          </a>
        </li>
        {updateControl}
      </ul>
      <hr></hr>
    </div>
  );
}

export default State