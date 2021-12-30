import SkillCard from "./SkillCard"

export interface Skills {
    high: string[],
    medium: string[],
}
export function Skills() {

    const skills2: Skills = {
        high: [
            'javascript',
            'react',
            'redux',
            'css3',
            'sass',
            'html5',
            'express',
            'VSCode'
        ]
        , medium: [
            'angular',
            'typescript',
            'mongodb',
            'react native',
            'firebase',
            'vue',
            'rxjs',
            'graphQl',
        ],
    }

    return (
        <section id="skills" className="skills-container">
            <h1 className="section-title">- Skills</h1>
            <h3>Technologies i use regularly</h3>
            <div className="skills-cards">
                {skills2.high.map((skill) => {
                    return (
                        <SkillCard skill={skill} />
                    )
                })}
            </div>
            <h3>Technologies i learning on</h3>
            <div className="skills-cards">
                {skills2.medium.map((skill) => {
                    return (
                        <SkillCard skill={skill} />
                    )
                })}
            </div>
        </section >
    )
}