import React from "react";

const LandingButton = ({ text, href }) => {
    return (
        <>
        <style jsx> {`
            #landingbutton {
                background: none;
                border: none;
                color: white;
                font-family: 'Exo';
                font-size: 2vh;
            }

        `}
        </style>
        <button id="landingbutton" style={{ cursor: 'pointer' }}>
            <a href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
                {text}
            </a>
        </button>
        </>
    );
};
export default LandingButton;