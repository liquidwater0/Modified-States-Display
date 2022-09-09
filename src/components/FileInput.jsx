import React from 'react';
import { Add } from '@mui/icons-material';

export default function FileInput({ insertSVG, hasFile }) {
    async function addFile({ target }) {
        try {
            const file = target.files[0];
            
            if (file.type !== "image/svg+xml") {
                console.log("Invalid File.");
                return;
            }

            insertSVG(await file.text());
        } catch (error) {
            return;
        }
    }

    return (
        <div className={hasFile ? "hidden" : ""}>
            <label htmlFor='fileInput' className='custom-file-input' title='Add a file.'>
                <Add/>
            </label>
            <input type="file" className='real-file-input' id='fileInput' onInput={addFile}/>
        </div>
    )
}