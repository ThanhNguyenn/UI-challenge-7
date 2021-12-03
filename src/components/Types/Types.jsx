import React, {useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import './Types_Styled.css'


export const Types = () => {
    const info = [
        {
            itemName: "Product Discovery", 
            checked: true,
        },
        {
            itemName: "Software", 
            checked: false,
        },
        {
            itemName: "Service Management", 
            checked: false,
        },
        {
            itemName: "Business", 
            checked: false,
        }
    ]

    const DropdownItem = ({itemName, checked}) => {
        return (
            <>
                <Dropdown.Item className="types--container-item">
                    <input className="types--checkbox" type="checkbox" checked={checked}/><span className="types--checkmark"></span>
                    <span className="types--text">{itemName}</span>
                </Dropdown.Item>
            </>
        )
    }


    return (
        <div className="types--container">

            <Dropdown autoClose="outside">
                <Dropdown.Toggle  className="types--toggle" variant="outline-dark" id="dropdown-autoclose-outside">All Types</Dropdown.Toggle>
                <Dropdown.Menu className="types--dropdown-container">
                    {info.map(item => <DropdownItem itemName={item.itemName} checked={item.checked}/> )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
