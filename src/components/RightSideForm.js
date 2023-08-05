'use client'
import React from 'react'
import { GiIsland } from 'react-icons/gi'
import { CiCalendarDate } from 'react-icons/ci'
import { MdOutlineHomeWork } from 'react-icons/md'
import { PiGitDiffFill } from 'react-icons/pi'
import { RxDimensions } from 'react-icons/rx'
import { SiVirustotal } from 'react-icons/si'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { BiBed } from 'react-icons/bi'

const RightSideForm = () => {
    const data = [
        {
            logo: <GiIsland />,
            key: "Land Area",
            value: "11 Acres"
        },
        {
            logo: <CiCalendarDate />,
            key: "Possession Date",
            value: "June 30,2027"
        },
        {
            logo: <MdOutlineHomeWork />,
            key: "Typology",
            value: "Residential"
        },
        {
            logo: <PiGitDiffFill />,
            key: "Residential Type",
            value: "Apartments"
        },
        {
            logo: <RxDimensions />,
            key: "Dimensions",
            value: "675 - 1,760 Sqft"
        },
        {
            logo: <SiVirustotal />,
            key: "Total Units",
            value: "940"
        },
        {
            logo: <HiOutlineCurrencyRupee />,
            key: "Starting Price",
            value: "55,00,000"
        },
        {
            logo: <BiBed />,
            key: "Unit Typology",
            value: "1.5, 2, 3 & 3.5 BHK"
        },
    ]
    const first = () => {
        const one = data.map((i) => {
            return (
                <div key={i} style={{ backgroundColor: "hsla(190, 72%, 50%, 0.1)", margin: "10px", textAlign: "center" }}>
                    <div className="firstsub">
                        <span>{i.logo}</span>
                        <span>{i.key}</span>
                    </div>
                    <>{i.value}</>
                    <style>
                        {`
                     .firstsub{
                        display: flex;
                        justify-content: space-evenly;
                        padding: 10px 15px;
                        text-align: center; 
                        font-size: 1.5rem;
                    }
                    svg{
                        font-size: 2rem;
                    }
                    `}
                    </style>
                </div>
            )
        })
        return one
    }
    return (
        <div>
            <h3>Project overview</h3>
            <div className="firstdiv">
                {first()}
            </div>


            <style jsx>
                {`
        .firstdiv{
            display: grid;
            grid-template-columns: 6fr 6fr;
        },
        
        `}
            </style>
        </div>
    )
}



export default RightSideForm;