import React from "react";

const ProjectCard = ({image, title}) => {
    return (
        <>
        <style jsx> {`
            .projectCard {
                display: flex;

                width: 15%;
                padding: 15px;
                height: 110px;
                border-radius: 5px;
                background: white;
                color: black;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
            }
            .projectCard:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                cursor: pointer;
            }

            .project-image {
                flex: 0 0 20px; /* Adjust the width as needed */
                border-right: 2px solid blue; /* Separator as per your drawing */
                display: flex;
                padding-right: 15px;
                align-items: flex-start; /* Center the image vertically */
                justify-content: center; /* Center the image horizontally */
            }
            .content {
                flex-grow: 1;
                display: flex;
                flex-direction: column; /* Stack children vertically */
            }

            .title {
                color: black;
                font-family: 'Exo';
                font-size: 100%;
                font-weight: bold;
                border-bottom: 2px solid blue; /* Separator as per your drawing */
                padding-bottom: 10px; /* Add padding as needed */
            }

            .description {
                display: flex;
                justify-content: flex-start;
                flex-grow: 1; /* Fill the remaining space */
                padding-top: 10px; /* Add padding as needed */
            }
        `}
        </style>
        
        <div className="projectCard">
            <div className="project-image">
                <img src={image} style={{width: "35px"}} alt="img"></img>
            </div>  
            <div className="content">
                <div className="title">
                {title}
                </div>
                <div className="description">
                    <p>Description text goes here...</p>
                </div>
            </div>
        </div> 

        </>
    );
};
export default ProjectCard;