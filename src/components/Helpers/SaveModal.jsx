import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function SaveModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [mappingTitle, setMappingTitle] = useState("");





    const closeModal = () => {
        setIsOpen(false);
        setMappingTitle("");
    };



    const handleSubmit = () => {
        const mapping = [...props.savedMappings, {
            old: props.oldHeaders,
            new: props.newHeaders,
            title: mappingTitle,
        }];

        // Store the mapping data in local storage or a database here
        props.setSavedMappings(mapping)
        closeModal();
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 mr-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Save Mapping
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="flex items-center justify-center min-h-screen">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                        <div className="relative z-10 w-full max-w-md p-6 mx-auto bg-white rounded-md">
                            <Dialog.Title className="mb-4 text-lg font-medium text-gray-900">
                                Save Mapping
                            </Dialog.Title>

                            <div className="mt-4">
                                <label
                                    htmlFor="mapping-title"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mapping Title
                                </label>

                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="mapping-title"
                                        id="mapping-title"
                                        value={mappingTitle}
                                        onChange={(e) => setMappingTitle(e.target.value)}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 space-x-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleSubmit}
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default SaveModal;
