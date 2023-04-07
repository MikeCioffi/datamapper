import { useState } from "react";
import Papa from "papaparse";
import '../App.css'
import Draggable from 'react-draggable';
import Dropdown from "./Dropdown";
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';




function Upload() {

    const boxStyle = { border: 'grey solid 2px', borderRadius: '10px', padding: '5px' };

    const DraggableBox = ({ id, rows, index }) => {
        const updateXarrow = useXarrow();
        return (
            <Draggable onDrag={updateXarrow} onStop={updateXarrow} >
                <div id={id} className="p-5 bg-purple rounded-md  cursor-pointer" key={index}>{rows}</div>
            </Draggable>
        );
    };


    const [newMapping, setNewMapping] = useState([])

    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    //State to store the values
    const [values, setValues] = useState([]);

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
                setParsedData(results.data);

                // Filtered Column Names
                setTableRows(rowsArray[0]);

            },
        });
    };




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

                    console.log(rows)
                    // uses react-draggable to allow the component to be moved. 
                    return <Xwrapper >
                        <div className="flex">

                            <div className='mr-12' id={String(index)}>
                                <Dropdown />
                            </div>
                            <DraggableBox id={rows} rows={rows} index={index} />


                        </div>
                        <Xarrow end={rows} start={String(index)} />

                    </Xwrapper>



                })}
            </div >
            <div className="flex m-5  p-5 flex-col">
                {tableRows.map((rows, index) => {
                    // uses react-draggable to allow the component to be moved. 
                    return <div>
                    </div>
                })}
            </div>

        </div >
    );
}

export default Upload;