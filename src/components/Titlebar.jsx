import logo from '../assets/reworked-logo-no-background.png'

export default function Titlebar () {
    return (
        <div className="main-name-wrapper">
                <img src={logo} className="nav-logo"/>
                <h1 className="main-name">Noah Jensen</h1>
        </div>
    )
}