import React, {useState} from 'react'
import { Dropdown } from 'react-bootstrap'
import { BsFlag } from "react-icons/bs";
import { RiMoonClearLine } from "react-icons/ri";
import Switch from 'react-switch'
import './Settings_Styled.css'
import { BiArrowBack } from "react-icons/bi";



export const Settings = () => {
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const handleChange = (e) => {
        setToggleSwitch(e);
    }
    return (
        <div className="settings--container">
           <header>
               <h3><BiArrowBack />Settings</h3>
           </header>
            <Switch checked={toggleSwitch} 
            onChange={handleChange}
            height={16}
            width={48}
            handleDiameter={27}
            onHandleColor="#f876b4"
            offHandleColor="#f876b4"
            uncheckedIcon=""
            checkedIcon=""
            offColor="#FFFFFF"
            onColor="#f876b4"
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            />
            <Dropdown>
                <Dropdown.Toggle className="settings--toggle-background settings--toggle-color-black"><RiMoonClearLine size='22px'/> Toggle theme</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>Dark</Dropdown.Item>
                    <Dropdown.Item>Light</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        <br />
            <Dropdown>
                <Dropdown.Toggle className="settings--toggle-background settings--toggle-color-black"><BsFlag size="22px" />Choose language</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>English</Dropdown.Item>
                    <Dropdown.Item>Spanish</Dropdown.Item>
                    <Dropdown.Item>French</Dropdown.Item>
                    <Dropdown.Item>Chinese</Dropdown.Item>
                    <Dropdown.Item>Vietnamese</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
