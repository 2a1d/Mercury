import React from "react";

function Survey({result, save, handleSave})
{
    function SaveStock()
    {
        handleSave(result.name, result.symbol, result.title, result.description, result.highlight, result.image_url);
    }

    return <div id={result.id} className="locationSurvey">
        <div className="panel panel-success">
            <h2 className="panel-heading">{result.title}</h2>
            <div className="panel-body">
                {/* <p>Stock: {result.symbol}</p> */}
                <p>{result.description}</p>
                {/* <p>Highlight: {result.highlight}</p> */}
                {/* <img src={result.image_url}/> */}
                {/* {save ? <button className="saveBtn" onClick={SaveStock}>Save Stock</button> : ""} */}
            </div>
        </div>
    </div>
}

export default Survey;