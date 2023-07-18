import ProjectItem from './components/ProjectItem';
import projects from './util/projects';
import './Projects.css';

const Projects = props => {
    return (
        <section ref={props.innerRef} className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <h5 className="projects-subtitle">
                The quality of work you can expect when you choose to partner with Apex Builders
            </h5>
            <div className="projects-container">
                {projects.map((project, index) =>
                    <ProjectItem key={index} project={project} />
                )}
            </div>
        </section>
    );
};

export default Projects;