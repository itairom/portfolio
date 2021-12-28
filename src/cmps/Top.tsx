import { useEffect, useState } from "react"

export function Top() {

    useEffect(() => {

    }, [])


    return (
        <section id="about" className="top-container ">
            {/* <div className="top-circle"></div> */}
            <div className="title flex column">
                <h3>Hi, my name is </h3>
                <h1>Itai Rom</h1>
                <ul>
                    <li>Driven Frontend / Full-stack developer</li>
                    <li>Graduate of full stack bootcamp at <a target="_blank" href="./Bootcamp CertificIte.pdf">Coding Academy</a></li>
                    <li>Come with a hands-on approach</li>
                    <li>Coding on daily basis</li>
                    <li>Team-oriented personality</li>
                </ul>
            </div>
            <div className="img-wrapper">
                <img src="./imgs/profile.jpg" alt="profile pic" />
            </div>

        </section>
    )
}