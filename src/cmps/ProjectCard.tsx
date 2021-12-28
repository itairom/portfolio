import { useEffect, useRef } from "react"
import { Project } from "../services/projectService";
import { ReactComponent as Url } from './../assets/svg/url.svg';
import { ReactComponent as Github } from './../assets/svg/github.svg';
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface Props {
    project: Project
}

// interface TabState {
//     front: boolean,
//     back: boolean
// }

export const ProjectCard: React.FC<Props> = ({ project }) => {

    // const [isShown, setIsshown] = useState<TabState>({
    //     front: true,
    //     back: false
    // })

    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = entry?.isIntersecting

    useEffect(() => {
        if (isVisible) {
            console.log(entry);
            ref.current?.classList.add('opacity')
        }
    }, [isVisible])



    return (
        <section ref={ref} className="project-card">
            <div className="card-container">

                <h3>Featured Project</h3>

                <a target="_blank" href={project.links.url}>
                    <p className="card-title">{project.title}</p>
                </a>
                <div className="project-description">
                    <p>{project.description}</p>
                </div>
                <ul className="project-tech-list">
                    {project.techs.map(tech => {
                        return <li>{tech}</li>
                    })}
                </ul>
                <div className="project-links">
                    <a target="_blank" href={project.links.github}>
                        < Github />
                    </a>
                    <a target="_blank" href={project.links.url}>
                        < Url />
                    </a>
                </div>
                {/* <img src={`imgs/projects/${project.title}_desktop.png`} alt="project image" /> */}
                <video src={`./videos/${project.title}_demo.mp4`} loop autoPlay playsInline muted  ></video>
            </div>
        </section>
    )
}