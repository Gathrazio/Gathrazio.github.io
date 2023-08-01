import Topic from './Topic'
import gradCap from '../assets/grad-cap.png'
import {DiJavascript1, DiCss3Full, DiHtml5, DiReact, DiGit, DiGithubBadge, DiMongodb } from 'react-icons/di'
import { IconContext } from "react-icons";
import { FaGraduationCap} from "react-icons/fa";
import { SiLatex } from "react-icons/si";
import ProjectBlurb from './ProjectBlurb'

export default function Body ({sections}) {
    return (
        <div className="body-wrapper">
            <Topic>
                <h1 className="topic-title" ref={sections.about}>Who Am I?</h1>
                <p className="topic-paragraph">
                    I am a Full Stack JS Web Developer. I aspire to change the world. Delve into my <a href="https://github.com/Gathrazio" target="_blank">Github profile</a>.
                </p>
            </Topic>
            <Topic>
                <h1 className="topic-title" ref={sections.skillsAndEducation}>Skills & Education</h1>
                <ul className="topic-ul">
                    <li>
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                            <div className="icon-block top">
                                <DiHtml5 />
                                <DiCss3Full />
                                <DiJavascript1 />
                                <DiReact />
                            </div>
                            <div className="icon-block">
                                <DiMongodb />
                                <SiLatex />
                                <DiGit />
                                <DiGithubBadge />
                            </div>
                        </IconContext.Provider>
                        <p className="topic-paragraph">
                            I am fluent with the most recent iterations of Javascript, HTML, and CSS. I have also spent considerable time improving my skills with React, working with MongoDB/Mongoose, and effectively utilizing Git and Github to work on projects. I also have over four years of intense practice in the math typesetting software LaTeX.
                        </p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                        <div className="icon-block grad">
                            <FaGraduationCap />
                        </div>
                        </IconContext.Provider>
                        <p className="topic-paragraph">
                            I graduated from USU with a Bachelors of Science degree in Mathematics with the Summa Cum Laude disctinction in 2022. I am also close to completing the skills portion of V School's Full Stack JS Web Development program.
                        </p>
                    </li>
                </ul>

            </Topic>
            <Topic>
                <h1 className="topic-title" ref={sections.projects}>Projects</h1>
                <ProjectBlurb extraClass="" intro="Live MERN stack shopping application:" projectName="The Icecream Zone" codeRef="https://github.com/Gathrazio/level-5-full-stack-app"/>
                <ProjectBlurb extraClass="" intro="Live MERN stack application with token user authentication:" projectName="Issue Forum" codeRef="https://github.com/Gathrazio/issue-forum" live="https://issue-forum.onrender.com"/>
                <ProjectBlurb extraClass="" intro="Live CSS Zen Garden mimic using native HTML, CSS, and Javascript:" projectName="My Zen Garden" codeRef="https://github.com/Gathrazio/vs-assignments/tree/master/level-two/css-zen-garden" live="https://my-css-zen-garden.onrender.com/"/>
                <ProjectBlurb extraClass="" intro="Pure Javascript RPG:" projectName="" codeRef="https://github.com/Gathrazio/vs-assignments/tree/master/level-one/colossal-adventure-rpg"/>
                <ProjectBlurb extraClass="last-project" intro="Caesar Cipher Encryptor/Decryptor Utility:" projectName="" codeRef="https://github.com/Gathrazio/vs-assignments/tree/master/level-three/caesar-cipher"/>
            </Topic>
        </div>
    )
}