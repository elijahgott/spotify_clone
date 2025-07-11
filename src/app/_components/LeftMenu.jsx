'use client'

import React from "react";
import {useState} from 'react';

function LeftMenu() {
    const [isButtonHover, setIsButtonHover] = useState(false);

    const handleMouseEnterButton = () => {
        setIsButtonHover(true);
    }

    const handleMouseLeaveButton = () => {
        setIsButtonHover(false);
    }

    const buttonHover = {
        backgroundColor: isButtonHover ? 'rgb(65, 65, 65)' : 'rgb(31, 31, 31)',
        marginRight: 0,
        marginLeft: "auto",
        marginTop: "-12px",
        display: "flex",
        padding: "12px",
        gap: "8px",
        borderRadius: "24px",
        border: "none",
        color: "rgb(175, 175, 175)",
    }

    return(
        <div style={{backgroundColor: "rgb(18, 18, 18)", width: "20%", height: "100dvh", paddingLeft: "16px", borderRadius: "8px", margin: "8px", marginRight: "4px"}}>
            <div style={{display: "flex", marginTop: "20px", marginRight: "8px"}}>
                <h1 style={{color: "white"}}>Your Library</h1>
                <button style={buttonHover} onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}>+
                    <p style={{color: "white", fontSize: "16px", fontWeight: "bold", textAlign: "right"}}>Create</p>
                </button>
            </div>
        </div>
    )
}

export default LeftMenu;