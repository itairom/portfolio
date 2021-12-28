import { useState } from "react";
import { useEffect } from "react"
import { ReactComponent as Logo } from './../assets/svg/itai-logo.svg';

export function Header() {

    let navListner: any = null
    const [isScrollingDown, setIsScrollingDown] = useState(false)
    useEffect(() => {
        // navListner = window.addEventListener('scroll', () => {
            // if (window.scrollY > 150 && window.scrollY !== 0) {
            //     console.log(window.scrollY);
            //     setIsScrolling(true)

            // }
            // else {
            // setIsScrolling(false)
            // }

        // })

            let oldValue = 0
            let newValue = 0
            window.addEventListener('scroll', (e) => {
                newValue = window.scrollY;
                if (oldValue < newValue &&newValue>150) {
                    setIsScrollingDown(true)
                } else if (oldValue > newValue) {
                    setIsScrollingDown(false)
                }
                oldValue = newValue;
            });

        return () => {
            window.removeEventListener('scroll', navListner)
        }
    }, [])



    return (
        <nav className={!isScrollingDown ? 'main-nav' : 'main-nav shadow'}>
            <div className="left-nav">
                <Logo />
            </div>
            <div className="right-nav">
                <a href="#about">About</a>
                <a href="#projects" >Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact" >Contact</a>
                <a className="resume" href="./Itai Rom CV.docx" download>Resume</a>

            </div>
        </nav>
    )
}