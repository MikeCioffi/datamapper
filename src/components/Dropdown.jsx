import React, { useState } from "react";

function Dropdown(props) {

    const newMapping = [...props.Mapping];

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        newMapping[props.index] = event.target.value;
        setSelectedValue(event.target.value);
        props.setNewMapping(newMapping);
    };

    const handleClear = () => {
        setSelectedValue("");
        newMapping[props.index] = "Please enter a new header";
        props.setNewMapping(newMapping);
    };



    return (
        <div className="relative">
            <select
                id={props.id}
                value={selectedValue}
                onChange={handleChange}
                className="block w-full py-2 pl-3 pr-10 mt-1 text-base leading-6 border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            >
                <option value="">Select a header</option>
                <option value="header1">Header 1</option>
                <option value="header2">Header 2</option>
                <option value="header3">Header 3</option>
            </select>
            {selectedValue && (
                <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                        onClick={handleClear}
                        className="w-4 h-4 cursor-pointer fill-current hover:text-gray-500 transition duration-300 ease-in-out"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.707 9.997l3.183-3.183a.75.75 0 111.06 1.06L11.768 11l3.182 3.183a.75.75 0 01-1.06 1.06L10.707 12.06l-3.182 3.182a.75.75 0 01-1.06-1.06L9.648 11 6.466 7.817a.75.75 0 111.06-1.06l3.182 3.24z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
