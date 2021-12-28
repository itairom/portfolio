import SkillCard from "./SkillCard"

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
        'typescript',
        'vue'

    ]


    return (
        <section id="skills" className="skills-container">
            <h1 className="section-title">- Skills</h1>
            <div className="skills-cards">
                {skills.map((skill) => {
                    return (
                        <SkillCard skill={skill} />
                    )
                })}
            </div>


        </section >
    )
}