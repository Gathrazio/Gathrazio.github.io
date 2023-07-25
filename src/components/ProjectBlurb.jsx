
export default function ProjectBlurb (props) {

    return (
        <div className={`blurb-wrapper ${props.extraClass}`}>
            <span>
                {props.intro.includes("CSS Zen Garden") ?
                <>
                Live <a href="http://www.csszengarden.com/" target="_blank">CSS Zen Garden</a> mimic using native HTML, CSS, and Javascript:
                </>
                :
                props.intro
                }
            </span>
            <div className="blurb-buttons-wrapper">
                {props.projectName && <button className="project-button">{props.projectName}</button>}
                <button className="project-button" onClick={() => window.open(`${props.codeRef}`,'_blank')}>View Code</button>
            </div>
        </div>
    )

}