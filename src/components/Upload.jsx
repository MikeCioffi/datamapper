import { useState } from "react";
import * as React from "react";
import Papa from "papaparse";
import "../App.css";
import Dropdown from "./Dropdown";
import Results from "./Results";
import Draggable from "react-draggable";
import Export from './Export';


function Upload() {
    const [parsedData, setParsedData] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [mappingData, setNewMapping] = useState([]);
    const [values, setValues] = useState([]);
    const nodeRef = React.useRef(null);

    const DraggableBox = ({ id, rows, index }) => {
        return (
            <Draggable>
                <div
                    ref={nodeRef}
                    id={id}
                    className=" bg-purple-500 text-white rounded-md cursor-pointer shadow-md"
                    key={index}
                >
                    {rows}
                </div>
            </Draggable>
        );
    };

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];

                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                setParsedData(valuesArray);
                setTableRows(rowsArray[0]);
            },
        });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">

            <div className="flex flex-col justify-center align-middle rounded-lg shadow-md p-6 mb-6 text-center">
                <label htmlFor="file-upload" className="relative cursor-pointer">
                    <span className=" rounded-md shadow-sm py-2 px-3 border border-gray-300">
                        Upload a file
                    </span>
                    <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept=".csv"
                        onChange={changeHandler}
                        className="sr-only"
                    />
                </label>

            </div>
            {tableRows.length > 0 && (
                <div className="rounded-lg shadow-md w-full">
                    <div className="flex flex-wrap justify-between -mx-4">
                        {tableRows.map((rows, index) => (
                            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4" key={index}>
                                <div className=" rounded-md shadow-md">
                                    <DraggableBox id={String(index)} rows={rows} index={index} />
                                </div>
                                <div className="">
                                    <Dropdown
                                        id={String(mappingData.findIndex((obj) => obj === rows))}
                                        Mapping={mappingData}
                                        setNewMapping={setNewMapping}
                                        index={index}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <Export rows={tableRows} mappingData={mappingData} parsedData={parsedData} />

                    </div>
                    <Results rows={tableRows} mappingData={mappingData} parsedData={parsedData} />
                </div>
            )}

        </div >
    );
}

export default Upload;
