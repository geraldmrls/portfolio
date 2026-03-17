
import RightArrow from "../../assets/right-arrow.svg?react"
import GitHubIcon from "../../assets/github-icon.svg?react"
import EmailIcon from "../../assets/email-icon.svg?react"
import LinkedinIcon from "../../assets/linkedin-icon.svg?react"

import userProfile from "../../assets/user-profile.jpg"
import "./Hero.css"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-left-side">
                <span className="availability">Available to start</span>
                <h1 className="hero-title">Hi, I'm <p className="developer-name">Gerald M.</p></h1>

                <h5 className="profession">
                    Web developer
                </h5>
                <p className="about">
                    I build exceptional digital experiences that live at the intersection of design and code. Specializing in React, animations, and creating products people love to use.
                </p>

                <div className="btn-actions-container">
                    <button className="btn-view-projects">View Projects <RightArrow className="right-arrow-svg" /></button>
                    <button className="get-in-touch">Get in Touch</button>
                </div>

                <div className="contact-buttons-container">
                    <button className="btn-github">
                        <GitHubIcon className="github-icon" />
                    </button>
                    <button className="btn-linkedin">
                        <LinkedinIcon className="linkedin-icon" />
                    </button>
                    <button className="btn-email">
                        <EmailIcon className="email-icon" />
                    </button>
                </div>
            </div>

            <div className="right-side">
                <img className="user-profile" src={userProfile} />
                <span className="years-experience">

                </span>
            </div>
        </section>
    )
}

export default Hero