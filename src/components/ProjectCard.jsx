import React from "react";

const ProjectCard = ({text}) => {
    return (
        <>
        <style jsx> {`
            .projectCard {
                width: 17%;
                padding: 20px;
                height: 150px;
                border-radius: 15px;
                background: white;
                color: black;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
            }
            .projectCard:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                cursor: pointer;
            }
        `}
        </style>
        
        <div className="projectCard">
            bruh
        </div>

        </>
    );
};
export default ProjectCard;