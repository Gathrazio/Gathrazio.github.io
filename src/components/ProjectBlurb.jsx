
export default function ProjectBlurb (props) {

    return (
        <div className={`blurb-wrapper ${props.extraClass}`}>
            <span class="intro">
                {props.intro.includes("CSS Zen Garden") ?
                <>
                Live <a href="http://www.csszengarden.com/" target="_blank">CSS Zen Garden</a> mimic using native HTML, CSS, and Javascript:
                </>
                :
                props.intro
                }
            </span>
            <div className="blurb-buttons-wrapper">
                {props.projectName && <button onClick={() => window.open(`${props.live}`,'_blank')} className="project-button">{props.projectName}</button>}
                <button className="project-button" onClick={() => window.open(`${props.codeRef}`,'_blank')}>View Code</button>
                {props.apiDocs && <button className="project-button" onClick={() => window.open(`${props.apiDocs}`, '_blank')}>View API Docs</button>}
            </div>
        </div>
    )

}