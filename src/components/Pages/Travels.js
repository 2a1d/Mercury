import React from "react";

function Travels({result, save, handleSave})
{
    function SaveTravel()
    {
        handleSave(result.name, result.location, result.tips, result.mustSee);
    }

    return <div id={result.id} className="locationTravel">
        <div className="panel panel-success">
            <p className="panel-heading">Name: {result.name}</p>
            <div className="panel-body">
                <h2>Location: {result.location}</h2>
                <p>Tips: {result.tips}</p>
                <p>Must see: {result.mustSee}</p>
                {save ? <button className="saveBtn" onClick={SaveTravel}>Save Travel</button> : ""}
            </div>
        </div>
    </div>
}

export default Travels;