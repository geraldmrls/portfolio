
import "./Header.css"

function Header(){
    return (
        <header>
            <div className="header-left-side">
                <span className="gm">GM</span>
            </div>

            <div className="header-right-side">
                <span className="home">Home</span>
                <span className="work">Work</span>
                <span className="skills">Skills</span>
                <span className="contact">Contact</span>
                <button className="btn-hire-me">Hire Me</button>
            </div>
        </header>
    )
}

export default Header