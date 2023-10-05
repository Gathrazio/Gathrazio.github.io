
export default function ProjectBlurb (props) {

    return (
        <div className={`blurb-wrapper ${props.extraClass}`}>
            <span className="intro">
                {props.intro.includes("CSS Zen Garden") ?
                <>
                Live <a href="http://www.csszengarden.com/" target="_blank">CSS Zen Garden</a> mimic using native HTML, CSS, and Javascript:
                </>
                :
                props.intro
                }
            </span>
            <div className="blurb-buttons-wrapper">
                {props.projectName && <button onClick={() => window.open(`${props.firstButtonLink}`,'_blank')} className="project-button">{props.projectName}</button>}
                <button className="project-button" onClick={() => window.open(`${props.secondButtonLink}`,'_blank')}>{props.secondButtonText}</button>
                {props.thirdButtonText && <button className="project-button" onClick={() => window.open(`${props.thirdButtonLink}`, '_blank')}>{props.thirdButtonText}</button>}
            </div>
            <div className="blurb-description">
                {props.description}
            </div>
            <ul>
                {props.bullet1 && <li className="description-bullet">{props.bullet1}</li>}
                {props.bullet2 && <li className="description-bullet">{props.bullet2}</li>}
                {props.bullet3 && <li className="description-bullet">{props.bullet3}</li>}
                {props.bullet4 && <li className="description-bullet">{props.bullet4}</li>}
            </ul>
        </div>
    )

}