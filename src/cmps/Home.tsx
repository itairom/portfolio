import { useEffect, useState } from "react"
import { Conditional } from "./Conditional"
import { Header } from "./Header"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Top } from "./Top"

export function Home() {

    useEffect(() => {

    }, [])



    return (
        <div className="main-container home-container">
            {/* <Header />
            <Top />
            <Projects />
            <Skills /> */}
            < Conditional />
        </div>
    )
}