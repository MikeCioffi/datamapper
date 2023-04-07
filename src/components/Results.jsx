import React, { useState } from "react";

function Results(props) {

    return <div className="flex justify-center">
        <div className="m-4" >
            <h2>OLD</h2>
            {props.rows.map((rows, index) => {
                return < div key={index} >
                    {rows}
                </div >
            })
            }
        </div>
        <div className="m-4" >
            <h2>NEW</h2>
            {props.rows.map((rows, index) => {
                return < div key={index} >

                    {props.mappingData[index]}
                </div >
            })
            }
        </div>
    </div>
}
export default Results;
