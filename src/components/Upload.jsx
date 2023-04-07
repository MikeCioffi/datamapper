import { useState } from "react";
import Papa from "papaparse";
import '../App.css'

function Upload() {
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
            {/* Table */}
            <table className="flex">
                <thead>
                    <tr className="flex m-5  p-5 flex-col">
                        {tableRows.map((rows, index) => {
                            return <th className="p-5 bg-purple rounded-md m-5" key={index}>{rows}</th>;
                        })}
                    </tr>
                </thead>

            </table>
        </div>
    );
}

export default Upload;