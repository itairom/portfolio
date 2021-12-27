import React, { useEffect, useState } from "react"
import { Project } from "../services/projectService";

interface Props {
    project: Project
}

interface TabState{
    front:boolean,
    back:boolean
}

export const ProjectCard: React.FC<Props> = ({ project }) => {

    const [isShown,setIsshown]=useState<TabState>({
        front:true,
        back:false
    })

    useEffect(() => {
        
    }, [])


    const handleIsShown = (ev:React.FormEvent<HTMLInputElement>) => {
        
    }

    return (
        <section className="projects-card">
            <div className="card-tabs">
                {/* <p onClick={()=>{setIsshown)}}>{isShown.back}</p> */}
            </div>
        </section>
    )
}