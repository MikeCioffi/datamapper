import { Fragment, useState } from 'react';

import SaveModal from "../Helpers/SaveModal";

function SaveButton({ oldHeaders, newHeaders, setSavedMappings, savedMappings }) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Fragment>
            <SaveModal setSavedMappings={setSavedMappings} oldHeaders={oldHeaders} newHeaders={newHeaders} isOpen={isOpen} onClose={() => setIsOpen(false)} savedMappings={savedMappings} />
        </Fragment>
    );
}

export default SaveButton;
