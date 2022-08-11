import React, {useEffect, useState} from "react";
import HeroSection from "../HeroSection.js";
import Cards from "../Cards.js";
import Survey from "../Survey.js";

function Homepage() {
    // const [stock, setStock] = useState([])
    // useEffect(()=>{
    //     // fetch("https://api.marketaux.com/v1/news/all?symbols="+text+"&filter_entities=true&language=en&api_token="+apiKey)
    //     fetch("http://localhost:4000/Stock")
    //     .then((r)=>r.json())
    //     .then((data)=>{
    //         console.log(data);

    //         setStock(data);
    //     })
    // },[])
    return <div className="Container">
        {/* <div className="Row">
            <ul>
                {stock.map(item=>{return <Survey key={item.id} result={item} save={false}/>})}
            </ul>
        </div> */}
        <HeroSection />
    </div>
}



export default Homepage;