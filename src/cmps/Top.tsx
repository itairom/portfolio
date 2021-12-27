import { useEffect, useState } from "react"

export function Top() {

    useEffect(() => {

    }, [])



    return (
        <section className="top-container ">
            {/* <div className="top-circle"></div> */}
            <div className="title flex column">
                <h3>Hi, my name is </h3>
                <h1>Itai Rom</h1>
                {/* <h1>Hi</h1> */}
                {/* <h1>i'm Itai</h1> */}
                {/* <h1>Web Developer</h1> */}
                <p>I`m driven Frontend / Full-stack developer with hands on experience with
                    React, Vue, Angular, NodeJS, TypeScript, Redux, ES6, MongoDB, CSS and many more.
                </p>
            </div>

        </section>
    )
}