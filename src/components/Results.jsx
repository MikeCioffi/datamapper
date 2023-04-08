import React, { useEffect, useState } from "react";

function Results(props) {
    const [placeHolderMapping, setPlaceHolderMapping] = useState([]);

    // Create a new array with the same length as mappingData
    useEffect(() => {
        const newPlaceHolderMapping = new Array(props.rows.length).fill("Please enter a new header");

        // Iterate through mappingData and update the corresponding entry in newPlaceHolderMapping
        props.mappingData.forEach((header, index) => {
            if (header !== undefined) {
                newPlaceHolderMapping[index] = header;
            }
        });

        // Update state with the new array
        setPlaceHolderMapping(newPlaceHolderMapping);
    }, [props.mappingData, props.rows.length]);

    console.log("parsed data in results");
    console.log(props.parsedData);

    return (
        <div className="flex justify-center flex-col">
            <div className="flex justify-between">
                <div className="w-2/12 bold text-purple-600 flex justify-center">OLD</div>
                <div className="flex w-10/12">
                    {props.rows.map((data, index) => {
                        return (
                            <div className="p-4 bg-purple-600 m-4 rounded-lg w-1/3" key={index}>
                                {data}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between">
                <div className="w-2/12">NEW</div>
                <div className="flex w-10/12">
                    {placeHolderMapping.map((data, index) => {
                        return (
                            <div className="p-4 bg-blue-500 m-4 rounded-lg w-1/3" key={index}>
                                {data}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-between">
                <div className="w-2/12">DATA</div>
                <div className="flex w-10/12 flex-col">
                    {props.parsedData.map((data, index) => {
                        return (
                            <div className="flex w-full justify-between" key={index}>
                                {data.map((row_data, idx) => {
                                    console.log(row_data);
                                    return (
                                        <div
                                            className="p-4 bg-purple-500 m-4 text-blue rounded-lg w-1/3"
                                            key={idx}
                                        >
                                            {row_data}
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
