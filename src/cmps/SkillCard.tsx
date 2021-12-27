import React, { ReactElement, useEffect, useRef } from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

interface Props {
    skill:any
}

function SkillCard({skill}: Props): ReactElement {

    const ref = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver(ref, {})
    const isVisible = entry?.isIntersecting

    useEffect(() => {
        if (isVisible) ref.current?.classList.add('rotation')
    }, [isVisible])
    
    return (
        <div ref={ref} key={skill} className="skill-card">
        <p>{skill}</p>
        <img src={`/imgs/tech/${skill}.svg`} alt={skill} />
    </div>
    )
}

export default SkillCard
