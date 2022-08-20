import React, { useEffect, useRef } from 'react';

export default function StatePreview({ selectedState }) {
    const stateContainer = useRef();

    useEffect(() => {
        stateContainer.current.innerHTML = selectedState.shape;
    }, [selectedState]);

    return (
        <div className="state-preview">
            <svg ref={stateContainer}></svg>
        </div>
    )
}