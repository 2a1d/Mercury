import React from "react";

function Survey({result, save, handleSave})
{
    function SaveSurvey()
    {
        handleSave(result.symbol, result.title, result.description, result.highlight);
    }

    return <div id={result.id} className="locationSurvey">
        <div className="panel panel-success">
            <h1 className="panel-heading">Stock: {result.symbol}</h1>
            <div className="panel-body">
                <h2>Title: {result.title}</h2>
                <p>Description: {result.description}</p>
                <p>Highlight {result.highlight}</p>
                {save ? <button className="saveBtn" onClick={SaveSurvey}>Save Stock</button> : ""}
            </div>
        </div>
    </div>
}

export default Survey;