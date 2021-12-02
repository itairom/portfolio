import { useEffect, useState } from "react"

export function Skills() {

    const skills: string[] = [
        'angular',
        'css3',
        'express',
        'html5',
        'javascript',
        'mongodb',
        'react',
        'redux',
        'rxjs',
        'sass',
        'typescript'
    ]

    useEffect(() => {

    }, [])


    return (
        <section className="skills-container">
            <h1>Skills</h1>

            <div className="skills-cards">

                {skills.map(skill => {
                    return (
                        <div className="skill-card">
                            <p>{skill}</p>
                            <img src={`/imgs/tech/${skill}.svg`} alt={skill} />
                        </div>
                    )
                })}
            </div>


        </section >
    )
}