import React, { useEffect, useState } from "react";

function Results(props) {
    const [placeHolderMapping, setPlaceHolderMapping] = useState([]);

    // Create a new array with the same length as mappingData
    useEffect(() => {
        const newPlaceHolderMapping = new Array(props.rows.length).fill(
            "Please enter a new header"
        );

        // Iterate through mappingData and update the corresponding entry in newPlaceHolderMapping
        props.mappingData.forEach((header, index) => {
            if (header !== undefined) {
                newPlaceHolderMapping[index] = header;
            }
        });

        // Update state with the new array
        setPlaceHolderMapping(newPlaceHolderMapping);
    }, [props.mappingData, props.rows.length]);

    return (
        <div className="flex flex-col">
            <div className="flex mb-1">
                <div className="w-1/12 font-bold text-center text-purple-400">OLD</div>
                <div className="w-11/12 flex justify-between">
                    {props.rows.map((data, index) => {
                        return (
                            <div className="w-4/12 break-words flex-wrap p-2 m-1 bg-purple-400 rounded-sm" key={index}>
                                <span className="break-words">{data}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex mb-1">
                <div className="w-1/12 text-blue-300 flex justify-center align-middle font-bold text-center">NEW</div>
                <div className="w-11/12 flex justify-between">
                    {placeHolderMapping.map((data, index) => {
                        return (
                            <div className="w-4/12 break-words flex-wrap p-2 m-1 bg-blue-300 rounded-sm" key={index}>
                                <span className="break-words">{data}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between">
                <div className="w-1/12 font-bold text-center">DATA</div>
                <div className="w-11/12 flex flex-col">
                    {props.parsedData.map((data, index) => {
                        return (
                            <div className="flex justify-between" key={index}>
                                {data.map((row_data, idx) => {
                                    return (
                                        <div className="w-4/12 p-2 m-1 bg-blue-50 text-blue-800 rounded-sm   " key={idx}>
                                            <span className="break-words">{row_data}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Results;
