
import EmailIcon from "../../assets/email-icon.svg?react"
import PhoneIcon from "../../assets/phone-icon.svg?react"
import LocationIcon from "../../assets/location-icon.svg?react"
import GitHubIcon from "../../assets/github-icon.svg?react"
import LinkedinIcon from "../../assets/linkedin-icon.svg?react"
import ThreadsIcon from "../../assets/threads-icon.svg?react"
import SendMessageIcon from "../../assets/send-message-icon.svg?react"



import "./Contact.css"

function Contact() {
    return (
        <>
            <div className="section-label section-label-contact">
                <span>Get in Contact</span>
            </div>
            <h1 className="contact-title">Let's Build Something <span className="amazing">Amazing</span></h1>
            <p className="contact-description">
                Have a project in mind? I'd love to hear about it. Let's create something great together
            </p>

            <div className="contact-container">
                <div className="contact-left-side">
                    <span className="get-in-touch-tag">Get in Touch</span>

                    {/* email */}
                    <div className="email-container">
                        <div className="email-left-side">
                            <EmailIcon className="email-icon email-icon-contact" />
                        </div>
                        <div className="email-right-side">
                            <p className="email-tag">Email</p>
                            <p>hgmoralesquino@gmail.com</p>
                        </div>
                    </div>

                    {/* phone */}
                    <div className="phone-container">
                        <div className="phone-left-side">
                            <PhoneIcon className="phone-icon" />
                        </div>
                        <div className="phone-right-side">
                            <p className="phone-tag">Phone</p>
                            <p>+1 (615) 4169-9498</p>
                        </div>
                    </div>

                    {/* location */}
                    <div className="location-container">
                        <div className="location-left-side">
                            <LocationIcon className="location-icon" />
                        </div>
                        <div className="location-right-side">
                            <p className="location-tag">Location</p>
                            <p>Guatemala, Guatemala city</p>
                        </div>
                    </div>

                    <p className="follow-me">FOLLOW ME</p>

                    <div className="follow-me-buttons-container">
                        <button className="btn-github-contact">
                            <GitHubIcon className="github-icon github-icon-contact" />
                        </button>

                        <button className="btn-linkedin-contact">
                            <LinkedinIcon className="linkedin-icon linkedin-icon-contact" />
                        </button>

                        <button className="btn-threads-contact">
                            <ThreadsIcon className="threads-icon-contact" />
                        </button>

                    </div>

                </div>

                <div className="contact-right-side">
                    <span className="start-a-project-tag">Start a Project</span>
                    <p className="contact-form-description">
                        Interested in working together? Send me a message and I'll reply back to you within 24 hours
                    </p>

                    <div className="inputs-container">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Your Email" />
                        <textarea placeholder="Tell me about your project..." rows={5}></textarea>
                        <button className="btn-send-message">
                            Send Message
                            <SendMessageIcon className="send-message-icon" />

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact