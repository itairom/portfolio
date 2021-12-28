import { projects, Project } from "../services/projectService";
import { ProjectCard } from "./ProjectCard";


export const Projects: React.FC = () => {


    return (
        <section id="projects" className="projects-container">
            <h1 className="section-title">- Things I`ve Built</h1>
                {projects.map((project: Project) => {
                    return (<ProjectCard key={project.title+'_key'}  project={project} />)
                })}
        </section>
    )
}