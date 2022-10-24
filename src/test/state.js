import Header from "./Header";
import {useState} from 'react'
import Nav from "./Nav";
import Read from "./Read";

function Article(props){
    return(
        <article>Your current region is {props.group.title} - {props.group.city}</article>
    )
}

function State(){

    const arr = [
        {id:0 , title : "Korea", city : "Seoul"}
        ,{id : 1, title : "USA",city :"NewYork"}
        ,{id:2, title: "France", city: "Paris"}
      ]
    
    let content = null;
    let title, city = null;
    const [userSet, setUsetSet] = useState(0);


    title = arr[userSet].title;
    city = arr[userSet].city;

    content = <Article group={arr[userSet]}></Article>


    return(
        <div>
            <Header title="Title" onChangeMode={()=>{
                alert("HI?");
            }}/>
            <Nav arr = {arr} onChangeMode={(id)=>{
                setUsetSet(id);
            }}></Nav>
            {content}

            <Read title = {title} city= {city}></Read>
        </div>
    )
}

export default State