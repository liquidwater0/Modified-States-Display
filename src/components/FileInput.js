import React from 'react';

export default function FileInput({ insertSVG, hasFile }) {
    async function addFile({ target }) {
        try {
            const file = target.files[0];
            if (file.type !== "image/svg+xml") return;
            insertSVG(await file.text());
        } catch (error) {
            return;
        }
    }

    return (
        <div className={hasFile ? "hidden" : ""}>
            <label htmlFor='fileInput' className='custom-file-input' title='Add a file.'>
                <i className='material-icons'>add</i>
            </label>
            <input type="file" className='real-file-input' id='fileInput' onInput={addFile}/>
        </div>
    )
}