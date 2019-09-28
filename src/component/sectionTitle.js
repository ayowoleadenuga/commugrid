import React from 'react'
import '../header/header.css';

function SectionTitle({Sectiontitle}) {
    return (
        <div className = "container">
            <h3 className="text-center py-5 p_header">{Sectiontitle}</h3>
    </div>
    )
}

export default SectionTitle
