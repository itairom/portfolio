import { Suspense } from "react"
import ScrollToTop from "react-scroll-to-top"
import { Contact } from "./Contact"
import { Header } from "./Header"
import { Projects } from "./Projects"
import ScrollBarIndicator from "./ScrollBarIndicator/ScrollBarIndicator"
import { Skills } from "./Skills"
import { Top } from "./Top"

export const Home: React.FC = () => {

    return (
        <div className="main-container home-container">
            <Suspense fallback={<span className="loader"></span>} >
                <ScrollBarIndicator />

                <Header />
                <Top />
                <Projects />
                <Skills />
                <Contact />
                <ScrollToTop style={{ zIndex: 20 }} smooth color="$primaryClr" />
            </Suspense >
        </div>
    )
}