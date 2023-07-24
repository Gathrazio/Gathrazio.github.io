import Topic from './Topic'
import gradCap from '../assets/grad-cap.png'
import {DiJavascript1, DiCss3Full, DiHtml5, DiReact, DiGit, DiGithubBadge, DiMongodb } from 'react-icons/di'
import { IconContext } from "react-icons";
import { FaGraduationCap} from "react-icons/fa";
import { SiLatex } from "react-icons/si";

export default function Body ({sections}) {
    return (
        <div className="body-wrapper">
            <Topic>
                <h1 className="topic-title" ref={sections.about}>Who Am I?</h1>
                <p className="topic-paragraph">
                    My name is Noah and I am a Full Stack JS Web Developer. Though at my current stage it seems unlikely, I aspire to change the world.
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
                            I am fluent and up to date with the most recent iterations of Javascript, HTML, and CSS. I have also spent considerable time improving my skills with React, working with MongoDB/Mongoose, and effectively utilizing Git and Github to work on projects. I also have over four years of intense practice in the math typesetting software LaTeX.
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
            </Topic>
        </div>
    )
}