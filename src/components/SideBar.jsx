import React from 'react';
import StateInfo from './StateInfo';
// import StatePreview from './StatePreview';

export default function SideBar({selectedState, hasFile}) {
    return (
        <div className='side-bar'>
            <h1 className='state-info-heading'>State Info.</h1>
            <StateInfo selectedState = {selectedState}/>
            {/* <StatePreview selectedState = {selectedState}/> */}
            <label htmlFor="fileInput" className={'new-file-button ' + (hasFile ? "" : "hidden")}>New File</label>
        </div>
    );
}