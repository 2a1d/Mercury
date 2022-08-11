import React, {useState} from "react";
import Survey from "../Survey";

function Search()
{
    const [text,setText] = useState("");
    const [stock,setStock] = useState([]);
    function HandleText(e)
    {
        setText(e.target.value);
    }

    function SearchStock()
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
                        "id": item.idStock,
                        "symbol": item.strSymbol,
                        "title": item.strTitle,
                        "description": item.strDescription,
                        "highlight": item.strHighlight
                    }
                });
                setStock(temporal);
            }
            else
            {
                console.log("Error, please contact admin.");
            }
        })
    }

    function SaveStockDB(foundSymbol, foundTitle, foundDescription, foundHighlight)
    {
        const temporal = {
            "symbol": foundSymbol,
            "title": foundTitle,
            "description": foundDescription,
            "highlight": foundHighlight
        };
        fetch(
            "http://localhost:4000/Stock",
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
        <button onClick={SearchStock}>Load News</button>
        <ul>
            {stock.map(item=>{return <Survey key={item.id} result={item} save={true} handleSave={SaveStockDB} />})}
        </ul>
    </div>;
}

export default Search;