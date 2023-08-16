
export default function NavColumn ({scrollToPart, sections}) {
    return (
        <div className="nav-column-wrapper">
            <div className="button-wrapper">
                <button className="nav-button" onClick={() => scrollToPart(sections.about)}>Who Am I?</button>
                <button className="nav-button" onClick={() => scrollToPart(sections.skillsAndEducation)}>Skills & Education</button>
                <button className="nav-button" onClick={() => scrollToPart(sections.projects)}>Projects</button>
            </div>
            
        </div>
    )
}