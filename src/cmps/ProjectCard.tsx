import { useEffect, useRef } from "react"
import { Project } from "../services/projectService";
import { ReactComponent as Url } from './../assets/svg/url.svg';
import { ReactComponent as Github } from './../assets/svg/github.svg';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface Props {
    project: Project
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = entry?.isIntersecting

    useEffect(() => {
        if (isVisible) ref.current?.classList.add('opacity')
    }, [isVisible])

    return (
        <section ref={ref} className="project-card">
            <div className="card-container">
                <h3>Featured Project</h3>
                <a target="_blank" rel="noreferrer" href={project.links.url}>
                    <p className="card-title">{project.title}</p>
                </a>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                    {project.techs.map(tech => {
                        return <li key={tech}>{tech}</li>
                    })}
                </ul>
                <div className="project-links">
                    <a target="_blank" rel="noreferrer" href={project.links.github}>
                        < Github />
                    </a>
                    <a target="_blank" rel="noreferrer" href={project.links.url}>
                        < Url />
                    </a>
                </div>
                <video src={`./videos/${project.title}_demo.mp4`} loop autoPlay playsInline muted  ></video>
            </div>
        </section>
    )
}