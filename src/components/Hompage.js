import React, {useEffect, useState} from "react";
import Travels from "./Travels";

function Homepage()
{
    const [travels, setTravels] = useState([])
    useEffect(()=>{
        fetch("https://travelbriefing.org/Netherlands?format=json")
        .then((r)=>r.json())
        .then((data)=>{
            setTravels(data);
        })
    },[])
    return <ul>
        {travels.map(item=>{return <Travels key={item.id} result={item}/>})}
    </ul>
}

export default Homepage;