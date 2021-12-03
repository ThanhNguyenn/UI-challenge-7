import React from 'react'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { BsFillArrowUpLeftSquareFill } from 'react-icons/bs'
import './Days_Styled.css'


export const Days = () => {
    const infos = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] 
    
    const info = [
        {
           itemName: "Monday",
           checked: false,  
        },
        {
            itemName: "Tuesday",
            checked: true,  
         },
         {
            itemName: "Wednesday",
            checked: false,  
         },
         {
            itemName: "Thursday",
            checked: true,  
         },
         {
            itemName: "Friday",
            checked: false,  
         },
         {
            itemName: "Saturday",
            checked: false,  
         },
         {
            itemName: "Sunday",
            checked: false,  
         },
     
    ]
    
    
    return (
        <div className="days--container">
            <form>
                <p className="days--text">Days</p>
                {info.map(item => <DropdownItem itemName={item.itemName} checked={item.checked}/>)}
                <button className="days--btn" type="reset">Remove all filters</button>
            </form>
        </div>
    )
}
