import React, {useState} from 'react'
import { Types } from '../Types/Types'
import { Settings } from '../Settings/Settings'
import { Days } from '../Days/Days'

export const Page = () => {


    return (
        <div className="page--container">
            <Types />
            <Settings />
            <Days />
        </div>
    )
}
