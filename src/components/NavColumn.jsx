import logo from '../assets/reworked-logo-no-background.png'

export default function NavColumn () {
    return (
        <div className="nav-column-wrapper">
            <div className="main-name-wrapper">
                <img src={logo} className="nav-logo"/>
                <h1 className="main-name">Noah Jensen</h1>
            </div>
            <div className="button-wrapper">
                <button className="nav-button">Who Am I?</button>
                <button className="nav-button">Skills & Education</button>
                <button className="nav-button">Projects</button>
                <button className="nav-button">Experience</button>
            </div>
            
        </div>
    )
}