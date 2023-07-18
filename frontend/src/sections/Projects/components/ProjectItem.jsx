import React, {useState, useEffect} from 'react';
import './ProjectItem.css';

const ProjectItem = props => {
    const [screenSize, setScreenSize] = useState();

    const changeLayoutHandler = () => {
        if (window.innerWidth < 812) {
            setScreenSize("small");
        } else {
            setScreenSize("large");
        }
    };

    useEffect(() => {
        changeLayoutHandler();
    }, []);

    window.addEventListener("resize", changeLayoutHandler, true);

    return (
        <div className={`project-item-container ${props.project.id % 2 === 0 && 'project-item-container-right'}`}>
            {props.project.id % 2 === 1 &&
                <div className="project-item-description-wrapper">
                    <p className="project-item-description">
                        {props.project.description}
                    </p>
                </div>
            }
            {props.project.id % 2 === 0 && screenSize === 'small' &&
                <div className="project-item-description-wrapper">
                    <p className="project-item-description">
                        {props.project.description}
                    </p>
                </div>
            }
            <img className="project-item-image"
                src={props.project.image}
                alt={props.project.description}
            />
            {props.project.id % 2 === 0 && screenSize === 'large' &&
                <div className="project-item-description-wrapper">
                    <p className="project-item-description project-item-description-right">
                        {props.project.description}
                    </p>
                </div>
            }
        </div>
    );
};

export default ProjectItem;