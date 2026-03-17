
import "./Skills.css"
import CodeIcon from "../../assets/code-icon.svg?react"
import ToolsIcon from "../../assets/tools-icon.svg?react"
import MethodIcon from "../../assets/method-icon.svg?react"

// techs
import ReactIcon from "../../assets/react-icon.svg?react"
import JSicon from "../../assets/js-icon.svg?react"
import HTMLicon from "../../assets/html-icon.svg?react"
import CSSicon from "../..//assets/css-icon.svg?react"
import ViteIcon from "../../assets/vite-icon.svg?react"
import AxiosIcon from "../../assets/axios-icon.svg?react"

// toos
import GitIcon from "../../assets/git-icon.svg?react"
import GitHubIcon from "../../assets/github-icon.svg?react"
import VercelIcon from "../../assets/vercel-icon.svg?react"
import VSCode from "../../assets/vscode-icon.svg?react"
import NPMIcon from "../../assets/npm-icon.svg?react"

function Skills() {
    return (
        <>
            <h1 className="skills-expertise-title">Skills & Expertise</h1>
            <p className="skills-description">A comprehensive toolkit for building exceptional digital experiences</p>

            <div className="skills-grid">
                {/* front end */}
                <div className="skill-card-frontend">
                    <div className="skill-title-container">
                        <CodeIcon className="code-icon" />
                        <h3>Frontend Development</h3>
                    </div>
                    <div className="skill-tags-container">
                        <ReactIcon className="react-icon" />
                        <JSicon className="js-icon" />
                        <HTMLicon className="html-icon" />
                        <CSSicon className="css-icon" />
                        <ViteIcon className="vite-icon" />
                        <AxiosIcon className="axios-icon" />


                    </div>
                </div>

                {/* tools and workflow */}
                <div className="skill-card-tools">
                    <div className="skill-title-container">
                        <ToolsIcon className="tools-icon" />
                        <h3>Tools & Workflow</h3>
                    </div>
                    <div className="skill-tags-container">
                        <GitIcon className="git-icon" />
                        <GitHubIcon className="github-icon-skill" />
                        <VercelIcon className="vercel-icon" />
                        <VSCode className="vscode-icon" />
                        <NPMIcon className="npm-icon" />



                    </div>

                </div>

                {/* concepts and techniques */}
                <div className="skill-card-concepts-techniques">
                    <div className="skill-title-container">
                        <MethodIcon className="method-icon" />
                        <h3>Concepts & Techniques
                        </h3>
                    </div>
                    <div className="skill-tags-container">
                        <span className="skill-tag">REST APIs</span>
                        <span className="skill-tag">Responsive Desing</span>
                        <span className="skill-tag">Component Architecture</span>
                        <span className="skill-tag">State Management</span>
                        <span className="skill-tag">Local Storage</span>
                        <span className="skill-tag">Debouncing</span>
                        <span className="skill-tag">CSS Animation</span>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Skills