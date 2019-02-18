import React from "react";

/*
    getRndChartVal = (min=10, max = 10000) => (
        Math.floor(Math.random() * max) + min
     )
*/
const statusValues = [
    { value: "STOP", colorCode: "#f44336" },
    { value: "BREAK", colorCode: "#ffc107" },
    { value: "OK", colorCode: "#4caf50" },
];

const getRndStatus = () => {
    const pick = Math.floor(Math.random() * statusValues.length) + 0;
    const status = statusValues[pick];
    return status;

}

export default props => {
    const status = getRndStatus();
    return(
    <div className="card" style={{ backgroundColor: status.colorCode}}>
        <div className="status-source">{props.dataSource}</div>
        <div  className="status-value">{status.value}</div>
        <style jsx="true">{`
            .status-source {
                font-size: 0.7em;
            }
            .status-value {
                font-size: 1.6em;
                margin: 0.6em;
            }
            .card {
                height: 150px;
                width: 150px;
                padding: 1em;
                align-items: center;
                vertical-align: middle;
                text-align: center;
                border-radius: 5px;
                border-width: 1px;
                border-color: #000;
                box-shadow: 2px 1px 20px #1c1b1b;
                border-style: solid;
                margin:auto;
                color: #282c34;
                font-weight: bold;
                text-align: center;
            }
        `}</style>
    </div>
)}