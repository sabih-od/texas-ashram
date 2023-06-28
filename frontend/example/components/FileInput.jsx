import React, {useId} from 'react';

function FileInput({title, onFileChange}) {
    const id = useId()
    return (
        <>
            <label className="block mb-2 mt-4 text-sm text-gray-700 dark:text-gray-400" htmlFor={id}>{title}</label>
            <input
                onChange={onFileChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id={id} type="file"/>

        </>
    );
}

export default FileInput;