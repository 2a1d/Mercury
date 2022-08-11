import React from "react";
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
        fetch("https://travelbriefing.org/"+text+"?format=json")
        .then((r)=>r.json())
        .then((data)=>{
            if (data.Travels != null)
            {
                const temporal = data.Travels.map(item=>{
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

    function SaveSurveyDB(foundName, foundTimeZone, foundLanguage, foundNumber, foundCurrency)
    {
        const temporal = {
            "name": foundName,
            "time-zone": foundTimeZone,
            "language": foundLanguage,
            "emergency number": foundNumber,
            "currency": foundCurrency
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
        <button onClick={SearchLocation}>Load Location</button>
        <ul>
            {Survey.map(item=>{return <Survey key={item.id} result={item} save={true} handleSave={SaveSurveyDB} />})}
        </ul>
    </div>;
}

export default Search;