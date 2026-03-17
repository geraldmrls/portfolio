
import "./Skills.css"
import CodeIcon from "../../assets/code-icon.svg?react"
import ToolsIcon from "../../assets/tools-icon.svg?react"
import MethodIcon from "../../assets/method-icon.svg?react"

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
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">HTML/CSS</span>
                        <span className="skill-tag">Vite</span>
                        <span className="skill-tag">Axios</span>
                    </div>
                </div>

                {/* tools and workflow */}
                <div className="skill-card-tools">
                    <div className="skill-title-container">
                        <ToolsIcon className="tools-icon" />
                        <h3>Tools & Workflow</h3>
                    </div>
                    <div className="skill-tags-container">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                        <span className="skill-tag">Vercel</span>
                        <span className="skill-tag">VS code</span>
                        <span className="skill-tag">npm</span>
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