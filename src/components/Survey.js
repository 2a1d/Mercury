import React from "react";

function Survey({result, save, handleSave})
{
    function SaveStock()
    {
        handleSave(result.symbol, result.title, result.description, result.highlight);
    }

    return <div id={result.id} className="locationSurvey">
        <div className="panel panel-success">
            <h2 className="panel-heading">Stock: {result.symbol}</h2>
            <div className="panel-body">
                <p>Title: {result.title}</p>
                <p>Description: {result.description}</p>
                <p>Highlight: {result.highlight}</p>
                {save ? <button className="saveBtn" onClick={SaveStock}>Save Stock</button> : ""}
            </div>
        </div>
    </div>
}

export default Survey;