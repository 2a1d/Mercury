import React from "react";

function Survey({result, save, handleSave})
{
    function SaveSurvey()
    {
        handleSave(result.name, result.location, result.tips, result.mustSee);
    }

    return <div id={result.id} className="locationSurvey">
        <div className="panel panel-success">
            <p className="panel-heading">Name: {result.name}</p>
            <div className="panel-body">
                <h2>Location: {result.location}</h2>
                <p>Tips: {result.tips}</p>
                <p>Must see: {result.mustSee}</p>
                {save ? <button className="saveBtn" onClick={SaveSurvey}>Save Travel</button> : ""}
            </div>
        </div>
    </div>
}

export default Survey;