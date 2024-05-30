import React from 'react'

const SectionTitle = props => {
    const { title } = props;
    return (
    <div className="title-container">
        <div className="title">{title}</div>
    </div>
    )
}

export default SectionTitle