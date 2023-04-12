import React, { useState } from 'react';

export default function MappingSelect({ mappings, onSelect }) {


    const [selectedMapping, setSelectedMapping] = useState(null);

    const handleSelect = (event) => {
        const selectedValue = event.target.value;
        const selectedMapping = mappings.find((mapping) => mapping.title === selectedValue);
        setSelectedMapping(selectedMapping);
        onSelect(selectedMapping);
    };

    return (
        <div>
            <label htmlFor="mapping-select">Select a mapping:</label>
            <select id="mapping-select" onChange={handleSelect}>
                <option value="">-- Select a mapping --</option>
                {mappings.map((mapping) => (
                    <option key={mapping.title} value={mapping.title}>
                        {mapping.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
