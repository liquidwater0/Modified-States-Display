import React from 'react';

export default function StateInfo({ selectedState }) {
    const { name, abbreviation, capital } = selectedState;

    return (
        <div className='info-container'>
            <div className='info-item'>
                <label className='info-label'>Name:</label>
                <span className='info-text'>{ name }</span>
            </div>
            <div className='info-item'>
                <label className='info-label'>Abbreviation:</label>
                <span className='info-text'>{ abbreviation }</span>
            </div>
            <div className='info-item'>
                <label className='info-label'>Capital:</label>
                <span className='info-text'>{ capital }</span>
            </div>
        </div>
    )
}