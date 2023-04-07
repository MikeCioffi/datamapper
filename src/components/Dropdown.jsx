import React, { useState } from "react";

function Dropdown() {
    const [selectedValue, setSelectedValue] = useState();

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <select value={selectedValue} onChange={handleChange}>
                <option value="">Select a header</option>
                <option value="header1">Header 1</option>
                <option value="header2">Header 2</option>
                <option value="header3">Header 3</option>
            </select>

        </div>
    );
}

export default Dropdown;
