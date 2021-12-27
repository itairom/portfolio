import  { ReactElement } from 'react'
import { ReactComponent as Github } from './../assets/svg/github.svg';
import { ReactComponent as Linkedin } from './../assets/svg/linkedin.svg';
import { ReactComponent as Gmail } from './../assets/svg/gmail.svg';


export function Contact(): ReactElement {



    return (
        <div id="contact" className='contact-container'>
            <div className="links-container">
                <a target="_blank" href="https://github.com/itairom">
                    <Github className='github' />
                </a>
                <a target="_blank" href="mailto:iitaiirom@gmail.com">
                    <Gmail />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/itairom/">
                    <Linkedin />
                </a>
            </div>
        </div>
    )
}

