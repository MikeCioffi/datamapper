import { useState } from "react";
import * as React from 'react';


import Papa from "papaparse";
import '../App.css'

import Dropdown from "./Dropdown";
import Results from "./Results";
// import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';

import Draggable from "react-draggable";


function Upload() {

    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    // State to store the mapping values
    const [mappingData, setNewMapping] = useState([])

    //State to store the values
    const [values, setValues] = useState([]);



    const nodeRef = React.useRef(null);

    const DraggableBox = ({ id, rows, index }) => {
        return (
            <Draggable  >
                <div ref={nodeRef} id={id} className="p-5 bg-purple rounded-md  cursor-pointer" key={index}>{rows}</div>
            </Draggable>
        );
    };

    const changeHandler = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];

                // Iterating data to get column name and their values
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                // Parsed Data Response in array format
                setParsedData(valuesArray);

                // Filtered Column Names
                setTableRows(rowsArray[0]);

                console.log(valuesArray)

            },
        });
    };

    console.log(parsedData)

    return (
        <div>


            {/* File Uploader */}
            <input
                type="file"
                name="file"
                onChange={changeHandler}
                accept=".csv"
                style={{ display: "block", margin: "10px auto" }}
            />
            <br />
            <br />

            <div className="flex m-5  p-5 flex-col">
                {tableRows.map((rows, index) => {


                    // uses react-draggable to allow the component to be moved. 
                    return <div className="flex w-full justify-around">


                        <DraggableBox id={String(index)} rows={rows} index={index} key={index} />
                        <div >
                            <Dropdown id={String(mappingData.findIndex(obj => obj === rows))} Mapping={mappingData} setNewMapping={setNewMapping} index={index} />
                        </div>


                    </div>
                    // <Xarrow start={String(index)} end={String(mappingData.findIndex(obj => obj === rows))} key={"arrow" + { index }} />



                    // String(mappingData.findIndex(obj => obj === rows))

                })}
            </div >
            {tableRows.length > 0 ? <div>
                <button onClick={() => <></>}>Save</button>

                <Results rows={tableRows} mappingData={mappingData} parsedData={parsedData} />
            </div>


                : <></>}







        </div >
    );
}

export default Upload;