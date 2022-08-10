import React, {useEffect, useState} from "react";
import Travels from "./Travels";

function Homepage() {
    return <div>
        Homepage
    </div>;

    function getData()
    {
        const [travels, setTravels] = useState([])
        useEffect(()=>{
            // fetch("https://travelbriefing.org/Netherlands?format=json")
            fetch("http://localhost:4000/Travels")
            .then((r)=>r.json())
            .then((data)=>{
                console.log(data);

                setTravels(data);
            })
        },[])
        return <ul>
            {travels.map(item=>{return <Travels key={item.id} result={item}/>})}
        </ul>
    }
}


export default Homepage;