import * as React from 'react';
import Papa from 'papaparse';

function Export({ mappingData, parsedData }) {
    const exportCSV = () => {
        const headers = mappingData;
        const csvData = parsedData.map((row) => {
            const newRow = {};
            for (let i = 0; i < mappingData.length; i++) {
                newRow[headers[i]] = row[i];
            }
            return newRow;
        });
        const csv = Papa.unparse(csvData, { headers: true });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', 'export.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md mr-4" onClick={exportCSV}>
            Export
        </button>
    );
}

export default Export;
