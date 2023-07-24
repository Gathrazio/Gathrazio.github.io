import logo from '../assets/reworked-logo-no-background.png'

export default function NavColumn ({scrollToPart, sections}) {
    return (
        <div className="nav-column-wrapper">
            <div className="main-name-wrapper">
                <img src={logo} className="nav-logo"/>
                <h1 className="main-name">Noah Jensen</h1>
            </div>
            <div className="button-wrapper">
                <button className="nav-button" onClick={() => scrollToPart(sections.about)}>Who Am I?</button>
                <button className="nav-button" onClick={() => scrollToPart(sections.skillsAndEducation)}>Skills & Education</button>
                <button className="nav-button" onClick={() => scrollToPart(sections.projects)}>Projects</button>
            </div>
            
        </div>
    )
}