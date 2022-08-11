import React, {useState} from "react";
import Survey from "../Survey";

function Search()
{
    const [text,setText] = useState("");
    const [Survey,setSurvey] = useState([]);
    function HandleText(e)
    {
        setText(e.target.value);
    }

    function SearchLocation()
    {
        const apiKey = "Nk0VymVZ2OBdnr8Qw2J5l0yL86GM59BeYYtAHwvI";
        fetch("https://api.marketaux.com/v1/news/all?symbols="+text+"&filter_entities=true&language=en&api_token="+apiKey)
        .then((r)=>r.json())
        .then((data)=>{
            console.log(data);
            if (data.data != null)
            {
                const temporal = data.data.map(item=>{
                    return {
                        "id": item.idTravels,
                        "name": item.strLocation,
                        "time-zone": item.strTimeZone,
                        "language": item.strLanguage ,
                        "emergency-number": item.strNumber,
                        "currency": item.strCurrency
                    }
                });
                setSurvey(temporal);
            }
            else
            {
                console.log("Error, please contact admin.");
            }
        })
    }

    function SaveSurveyDB(foundSymbol, foundTitle, foundDescription, foundHighlight)
    {
        const temporal = {
            "symbol": foundSymbol,
            "title": foundTitle,
            "description": foundDescription,
            "highlight": foundHighlight
        };
        fetch(
            "http://localhost:4000/Travels",
            {
                method: "POST",
                body: JSON.stringify(temporal),
                headers: { "Content-Type": "application/json" }
            }
        )
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);
        })
    }

    return <div>
        <input type="text" onChange={(e)=>HandleText(e)} />
        <button onClick={SearchLocation}>Load News</button>
        <ul>
            {Survey.map(item=>{return <Survey key={item.id} result={item} save={true} handleSave={SaveSurveyDB} />})}
        </ul>
    </div>;
}

export default Search;