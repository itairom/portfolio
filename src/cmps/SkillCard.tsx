import { ReactElement, useEffect, useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

interface Props {
    skill: any
}

function SkillCard({ skill }: Props): ReactElement {

    const skillRef = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(skillRef, {}) //you can pass custom object with root, threshold, rootMargin 
    const isVisible: boolean | undefined = entry?.isIntersecting // boolean that indecate if the element is appear in viewport

    useEffect(() => {
        if (isVisible) skillRef.current?.classList.add('skill-animation')
    }, [isVisible])

    return (
        <div ref={skillRef} key={skill} className="skill-card">
            <p>{skill}</p>
            <img src={`/imgs/tech/${skill}.svg`} alt={skill} />
        </div>
    )
}

export default SkillCard
