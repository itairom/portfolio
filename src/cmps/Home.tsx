import { Suspense } from "react"
import ScrollToTop from "react-scroll-to-top"
import {Contact} from "./Contact"
import { Header } from "./Header"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Top } from "./Top"


export const Home: React.FC = () => {



    return (
        <div className="main-container home-container">
            <Suspense fallback={<span className="loader"></span>} >
                <Header />
                <Top />
                <Projects />
                <Skills />
                <Contact />
                <ScrollToTop style={{zIndex:20}} smooth color="$primaryClr" />

            </Suspense >
        </div>
    )
}