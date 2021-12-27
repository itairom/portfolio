import { useEffect } from "react"

export function Header() {

    useEffect(() => {

    }, [])



    return (
        <nav className="main-nav">
            <div className="left-nav">
                <h1>IR</h1>
            </div>
            <div className="right-nav">
                <a href="#about">About</a>
                <a href="#projects" >Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact" >Contact</a>
            </div>
        </nav>
    )
}