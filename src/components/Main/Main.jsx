
import { projects } from "../../../projects.js"
import ArrowUpRight from "../../assets/arrow-up-right.svg?react"
import OpenLink from "../../assets/open-link.svg?react"
import GitHub from "../../assets/github-icon.svg?react"
import "./Main.css"


function Main() {

    function generateTech(project) {
        return (
            <>
                {project.technologies.map(tech => {
                    return (
                        <span className="techs" key={crypto.randomUUID()}>
                            {tech}
                        </span>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <main>
                <div className="section-label">
                    <span>Projects</span>
                </div>
                <div className="brief-description-container">
                    <h1>Featured Work</h1>
                    <p>A selection of projects I've worked on, from concept to deployment</p>
                </div>

                <div className="projects-grid">
                    {projects.map(project => {
                        return (
                            <div className="project-card" key={project.id}>
                                <div className="project-image-container">
                                    <img className="project-image" src={project.image} />
                                </div>

                                <div className="project-details">
                                    <div className="project-name-container">
                                        <h2>{project.title}</h2>
                                        <ArrowUpRight className="arrow-up-right-icon" />
                                    </div>
                                    <p className="project-description">{project.description}</p>
                                    <div className="techs-container">
                                        {generateTech(project)}
                                    </div>

                                    <div className="project-buttons-container">
                                        <a href={project.vercel} target="_blank">
                                            <button className="btn-live-demo">
                                                <OpenLink className="open-link-icon" />
                                                <span className="live-text">Live</span>
                                                <span>Demo</span>

                                            </button>
                                        </a>

                                        <a href={project.github_url} target="_blank">
                                            <button className="btn-git-link">
                                                <GitHub className="github-icon-code" />
                                                Code
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </main>
        </>
    )
}

export default Main