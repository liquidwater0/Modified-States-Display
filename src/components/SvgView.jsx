import React, { useRef } from 'react';
import FileInput from './FileInput';

export default function SvgView({ hasFile, setHasFile }) {
    const svgContainer = useRef();

    function insertSVG(svg) {
        setHasFile(true);
        svgContainer.current.innerHTML = "";
        svgContainer.current.insertAdjacentHTML("afterbegin", svg);
    }

    return (
        <div className='svg-view'>
            <FileInput insertSVG={insertSVG} hasFile={hasFile}/>
            <div ref={svgContainer}></div>
        </div>
    )
}