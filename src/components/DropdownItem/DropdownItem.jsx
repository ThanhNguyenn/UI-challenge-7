import React from 'react'
import '../Types/Types_Styled.css'
export const DropdownItem = ({itemName,checked}) => {
    return (
        <>
            <div className="types--container-item">
                <input className="types--checkbox" type="checkbox" checked={checked}/><span className="types--checkmark"></span>
                <span className="types--text">{itemName}</span>
            </div>
        </>
    )
}

