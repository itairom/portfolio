import { ReactElement } from 'react'
import { ReactComponent as Github } from './../assets/svg/github.svg';
import { ReactComponent as Linkedin } from './../assets/svg/linkedin.svg';
import { ReactComponent as Gmail } from './../assets/svg/gmail.svg';
import { ReactComponent as Phone } from './../assets/svg/phone.svg';

export function Contact(): ReactElement {

    return (
        <div id="contact" className='contact-container'>
            <h1 className="section-title">- Contact Me</h1>
            <p>I`m looking for my next challenge as Junior frontend / Full-stack Developer.</p>
            <p>Feel free to contact me!</p>

            <div className="links-container">
                <a target="_blank" href="https://github.com/itairom" rel="noreferrer">
                    <Github className='github' />
                </a>
                <a target="_blank" href="mailto:iitaiirom@gmail.com" rel="noreferrer">
                    <Gmail />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/itairom/" rel="noreferrer">
                    <Linkedin />
                </a>
                <a target="_blank" href="tel:+972548171590" rel="noreferrer">
                    <Phone className='phone' />
                </a>
            </div>
        </div>
    )
}

