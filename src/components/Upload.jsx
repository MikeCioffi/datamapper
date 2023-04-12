import { useState } from "react";
import * as React from "react";
import Papa from "papaparse";
import "../App.css";
import Dropdown from "./Dropdown";
import Results from "./Results";
import Export from './Buttons/Export';
import Save from './Buttons/Save';


function Upload() {
    const [parsedData, setParsedData] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [mappingData, setNewMapping] = useState([]);



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
                <div className="rounded-lg shadow-md">
                    <div className="flex  flex-col flex-wrap justify-between -mx-4">
                        {tableRows.map((rows, index) => (
                            <div className="flex p-4" key={index}>
                                <div className=" w-1/2 rounded-md shadow-md">
                                    <div


                                        className="p-2 bg-purple-500 text-white rounded-md cursor-pointer shadow-md"

                                    >
                                        {rows}
                                    </div>
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
                    <div className="flex justify-end m-4">
                        <Save oldHeaders={tableRows} newHeaders={mappingData} />

                        <Export rows={tableRows} mappingData={mappingData} parsedData={parsedData} />

                    </div>

                    <Results rows={tableRows} mappingData={mappingData} parsedData={parsedData} />
                </div>
            )}

        </div >
    );
}

export default Upload;
