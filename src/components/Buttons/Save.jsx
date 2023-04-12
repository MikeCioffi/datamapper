import { Fragment, useState } from 'react';

import SaveModal from "../Helpers/SaveModal";

function SaveButton({ oldHeaders, newHeaders }) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <Fragment>
            <SaveModal oldHeaders={oldHeaders} newHeaders={newHeaders} isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Fragment>
    );
}

export default SaveButton;
