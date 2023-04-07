import React, { useState } from "react";

function Dropdown(props) {

    const newMapping = [...props.Mapping];

    const [selectedValue, setSelectedValue] = useState();


    const handleChange = (event) => {
        newMapping[props.index] = event.target.value
        props.setNewMapping(newMapping)
    };

    console.log(props.id)
    return (
        <div >
            <select id={props.id} value={selectedValue} onChange={handleChange}>
                <option value="">Select a header</option>
                <option value="header1">Header 1</option>
                <option value="header2">Header 2</option>
                <option value="header3">Header 3</option>
            </select>

        </div>
    );
}

export default Dropdown;
