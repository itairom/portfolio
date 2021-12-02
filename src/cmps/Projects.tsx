import { useEffect, useState } from "react"
// import Transition from '../assets/svg/transition.svg';
import { ReactComponent as Transition } from './../assets/svg/transition.svg';

export function Projects() {

    useEffect(() => {

    }, [])



    return (
        <section className="projects-container">
            {/* <img src={Transition} /> */}
            <Transition className="transition" />


        </section>
    )
}