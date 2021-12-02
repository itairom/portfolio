import { useEffect, useState } from "react"

export function Header() {

    useEffect(() => {

    }, [])



    return (
        <nav className="main-nav">
            <div className="right-nav">
                <a>LOGO</a>
            </div>
            <div className="left-nav">
                <a>Projects</a>
                <a>Skills</a>
                <a>Arcticles</a>
                <a>About</a>
            </div>
        </nav>
    )
}