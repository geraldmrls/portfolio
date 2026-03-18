import { motion } from "framer-motion"

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
        <section id="contact">

            <div className="section-label-contact">
                <span>Get in Contact</span>
            </div>

            <motion.h1 className="contact-title"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
            >Let's Build Something <span className="amazing">Amazing</span></motion.h1>
            <p className="contact-description">
                Have a project in mind? I'd love to hear about it. Let's create something great together
            </p>

            <div className="contact-container">
                <div className="contact-left-side">
                    <span className="get-in-touch-tag">Get in Touch</span>

                    {/* email */}
                    <motion.div className="email-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}>
                        <div className="email-left-side">
                            <EmailIcon className="email-icon email-icon-contact" />
                        </div>
                        <div className="email-right-side">
                            <p className="email-tag">Email</p>
                            <p>hgmoralesquino@gmail.com</p>
                        </div>
                    </motion.div>

                    {/* phone */}
                    <motion.div className="phone-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}>
                        <div className="phone-left-side">
                            <PhoneIcon className="phone-icon" />
                        </div>
                        <div className="phone-right-side">
                            <p className="phone-tag">Phone</p>
                            <p>+1 (615) 4169-9498</p>
                        </div>
                    </motion.div>

                    {/* location */}
                    <motion.div className="location-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}>
                        <div className="location-left-side">
                            <LocationIcon className="location-icon" />
                        </div>
                        <div className="location-right-side">
                            <p className="location-tag">Location</p>
                            <p>Guatemala, Guatemala city</p>
                        </div>
                    </motion.div>

                    <p className="follow-me">FOLLOW ME</p>

                    <div className="follow-me-buttons-container">

                        <a href="https://github.com/geraldmrls" target="_blank">
                            <motion.button className="btn-github-contact"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}>
                                <GitHubIcon className="github-icon github-icon-contact" />
                            </motion.button>
                        </a>

                        <a href="https://www.linkedin.com/in/gerald-morales-807283218/" target="_blank">
                            <motion.button className="btn-linkedin-contact"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}>
                                <LinkedinIcon className="linkedin-icon linkedin-icon-contact" />
                            </motion.button>
                        </a>

                        <a href="https://www.threads.com/@geraldmrls" target="_blank">
                            <motion.button className="btn-threads-contact"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}>
                                <ThreadsIcon className="threads-icon-contact" />
                            </motion.button>
                        </a>

                    </div>

                </div>

                <motion.div className="contact-right-side"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}>
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
                </motion.div>
            </div>
        </section>
    )
}

export default Contact