import { useEffect, useRef } from 'react'
import useScrollDirection, { usePageHeight } from './costumHooks';
import './ScrollBarIndicator.scss'


export default function ScrollBarIndicator() {
    const offsetHeight = document.querySelector('body').offsetHeight
    
    const scrolling = useScrollDirection();
    const pageHeight = usePageHeight()
    const fillRef = useRef(null)

    useEffect(() => {
        const onScrolling = () => {
            const scrollY = window.scrollY
            const windowOffset = ((scrollY) / (offsetHeight - pageHeight)) * 100
            if (fillRef) fillRef.current.style.width = `${windowOffset}vw`
        }
        onScrolling()
    }, [scrolling, pageHeight,offsetHeight])


    return (
        <div className='scroll-container' >
            <div ref={fillRef} className="fill-bar"></div>
        </div>
    )
}
