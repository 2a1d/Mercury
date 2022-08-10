import React, {useEffect, useState} from "react";
import Travels from "./Travels";
import HeroSection from "../HeroSection.js"

function Homepage() {
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
    return <div className="Container">
        <div className="Row">
            <ul>
                {travels.map(item=>{return <Travels key={item.id} result={item}/>})}
            </ul>
        </div>
        <HeroSection/>
    </div>
}



export default Homepage;