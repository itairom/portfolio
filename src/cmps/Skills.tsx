import SkillCard from "./SkillCard"

export interface Skills {
    high: string[],
    medium: string[],
    low: string[],
}
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

    const skills2: Skills = {
        high: [
            'css3',
            'react',
            'redux',
            'html5',
            'javascript',
            'sass',
        ]
        , medium: [
            'angular',
            'typescript',
            'mongodb',
            'vue'
        ],
        low: [

            'rxjs',
            'express',
        ]

    }



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