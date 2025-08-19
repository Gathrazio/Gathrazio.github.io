import Topic from './Topic';
import {DiJavascript1, DiCss3Full, DiHtml5, DiReact, DiGit, DiGithubBadge, DiMongodb, DiPython} from 'react-icons/di';
import { IconContext } from "react-icons";
import { FaGraduationCap } from "react-icons/fa";
import { SiLatex, SiFlask } from "react-icons/si";
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandDjango } from 'react-icons/tb'
import ProjectBlurb from './ProjectBlurb'

export default function Body ({sections}) {
    return (
        <div className="body-wrapper">
            <Topic>
                <h1 className="topic-title" ref={sections.about}>Who Am I?</h1>
                <p className="topic-paragraph">
                    I am a database-focused software engineer with professional, corporate experience building production-grade reporting software and MERN stack web applications. I have a rigorous background in pure mathematics and extensive math tutoring experience. I aspire to change the world. Please delve into my <a href="https://github.com/Gathrazio" target="_blank">Github profile</a>, my <a href="https://www.linkedin.com/in/noahnsjensen/" target="_blank">LinkedIn profile</a>, my <a href="https://docs.google.com/document/d/1OjUa585yqAKQq54bBOnD0xLCILb_dAjdFVEI7R0w4SM/edit?usp=sharing" target="_blank">resume</a>, or contact me via email at <a href="mailto: nnsjdev@gmail.com">nnsjdev@gmail.com</a>. I am eager to tackle data or software challenges in whatever form to systematically dismantle problems and provide world-class services.
                </p>
            </Topic>
            <hr />
            <Topic>
                <h1 className="topic-title" ref={sections.skillsAndEducation}>Skills & Education</h1>
                <ul className="topic-ul">
                    <li>
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                            <div className="icon-block top">
                                <DiHtml5 />
                                <DiCss3Full />
                                <DiJavascript1 />
                            </div>
                            <div className="icon-block center">
                                <DiReact />
                                <DiMongodb />
                                <FaNodeJs /> 
                            </div>
                            <div className="icon-block center">
                                <DiPython />
                                <TbBrandDjango/>
                                <SiFlask /> 
                            </div>
                            <div className="icon-block bottom">
                                <SiTailwindcss />
                                <DiGit />
                                <DiGithubBadge />
                            </div>
                        </IconContext.Provider>
                        <p className="topic-paragraph">
                            I am most recently fluent with Python, T-SQL, & Microsoft SQL Server software. I have also spent considerable time improving my skills with React.js, working with various backend technologies (like MongoDB, GridFS, Node.js, Express.js, JWT authentication, O-Auth 2.0, and Python frameworks like Django & Flask). I have effectively utilized Git and Github to work on personal and production projects. I also have over four years of intense practice in the math typesetting software LaTeX, and have a deep understanding of upper division collegiate mathematics. Really everything from statistics, linear algebra, calculus, number theory, discrete mathematics, and topology. My work in school focused on braids and knots -- essentially combinatorial topology. I spent considerable time building educational materials for calculus, statistics, and discrete math courses.
                        </p>
                    </li>
                    <li>
                        <IconContext.Provider value={{ className: 'react-icons' }}>
                        <div className="icon-block grad">
                            <FaGraduationCap />
                        </div>
                        </IconContext.Provider>
                        <p className="topic-paragraph">
                            I graduated from USU with a Bachelors of Science degree in Mathematics with the Summa Cum Laude disctinction in May of 2022 (<a href="https://drive.google.com/drive/folders/1NnAjKZPGiPNixASZUuMd4Qp4QUIwAW7m?usp=sharing" target="_blank">view some of my work as a student and educator</a>). The deductive reasoning skills, problem solving methods, quantitative writing skills, and perseverance I gained from this degree has been incredibly important for my personal growth. I want to someday do something fantastical -- to push humanity's knowledge forward in some capacity. In particular, I desire to break through and solve the problem of artificial general intelligence (<a href="https://en.wikipedia.org/wiki/Artificial_general_intelligence" target="_blank">AGI</a>). For that purpose as well my degree stands as support.
                        </p>
                        <p className="topic-paragraph">
                            Additionally, I graduated from <a href="https://drive.google.com/file/d/1TkmbmHhJXIyvH8rRr2UeIe7KhD14d1nz/view" target="_blank">V School's Full MERN Stack JS Web Development program</a> in August of 2023 (<a href="https://app.digit.ink/en/view-credential/85a60e1e-d806-43f8-b925-e5bb14e0a601?di_ref=a2li" target="_blank">see proof here</a>). To deepen my knowledge of web development and pursue a passion for machine learning, I obtained a 12-month professional certification in backend development from IBM (<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/TAAYZZJS2XGP" target="_blank">see proof here</a>) in September of 2023 and completed <a href="https://www.andrewng.org/" target="_blank">Andrew Ng</a>'s Machine Learning course specialization at the same time (<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/KDZY5TYAGPPT">see proof here</a>).
                        </p>
                    </li>
                </ul>
            </Topic>
            <hr />
            <Topic>
                <h1 className="topic-title" ref={sections.projects}>Projects</h1>
                <p className="topic-paragraph">
                            The live projects may take approximately 60 seconds to spin up due to the hosting service's limitations. I built these projects during my 1000+ hour V School education and during the IBM 12-month backend development professional certificate. All of these projects (sans the Djirection site) were brainstormed, designed, implemented, debugged, and deployed by me alone (i.e., no templates or UI libraries). I learned many invaluable lessons about React component tree structure, the benefits and demerits of using React context, the appropriate usage patterns of React State, and intelligent utilizations of useEffect and other React hooks having to do with interacting with data and controlling page views.
                </p>
                <div className="project-blurbs-wrapper">
                    <ProjectBlurb
                        extraClass=""
                        intro="Live MERN stack, JWT token authenticated social media & messaging service application:"
                        projectName="Circulate"
                        firstButtonLink="https://circulate.onrender.com"
                        secondButtonLink="https://github.com/Gathrazio/circulate"
                        secondButtonText="View Code"
                        description="This MERN stack mobile-first web application is a social media messaging service which allows people to make friends and communicate with each other privately without the need for a phone number. In building this single-page application, I displayed a working knowledge of HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, JWT user authentication, Axios, and RESTful backend API design, development, and implementation."
                        bullet1="Constructed a significantly complex backend API following RESTful standards."
                        bullet2="Incorporated several layers of confidential information security using JSON Web Tokens and both the Bcrypt and Cryptr libraries to effectively hash passwords and encrypt messages.
                        Utilized both synchronous and asynchronous programming to perform the necessary data-transfer tasks."
                        bullet3="Created an accessible, dynamic, and responsive front-end by eloquently managing React state and useEffect instances with repeated asynchronous API calls (a web socket workaround), among other advanced React techniques, and ensuring that all data being viewed on the screen is validated securely first through the database and is up to date."
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="Live MERN stack, JWT token authenticated shopping application:"
                        projectName="The Icecream Zone"
                        firstButtonLink="https://icecream-zone.onrender.com"
                        secondButtonLink="https://github.com/Gathrazio/level-5-full-stack-app"
                        secondButtonText="View Code"
                        thirdButtonText="View API Docs"
                        thirdButtonLink="https://github.com/Gathrazio/icecream-shop/blob/master/shop-api-documentation.md"
                        description="This MERN stack mobile-first web application is an e-commerce shopping service for a fake icecream business which allows potential customers to view products, add desired products in whatever quantity they want to their cart, checkout their cart, and view their past orders. In building this single-page application, I again displayed a working knowledge of the same software technologies used in Circulate."
                        bullet1="Constructed a RESTful backend and also generated extremely thorough documentation so the API can potentially be of use to others and easily improved upon."
                        bullet2="Gained experience in generating test data in the form of food items and in decoding the standardized UTC date format into a particular user's local time."
                        bullet3="Created an advanced rendering scheme from scratch to conditionally render components and organized React state to work well with it."
                        bullet4="Used several media queries and intelligent HTML structuring to re-design the user interface so that the site looks beautiful both on desktop and mobile devices."
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="Live MERN stack, JWT token authenticated issue forum application:"
                        projectName="Issue Forum"
                        firstButtonLink="https://issue-forum.onrender.com"
                        secondButtonText="View Code"
                        secondButtonLink="https://github.com/Gathrazio/issue-forum"
                        description="This MERN stack mobile-first web application is a forum where people can login, view public issues rated by popularity, comment on those issues, and post their own. In building this single-page application, I displayed a working knowledge of HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, JWT user authentication, Axios, and RESTful backend API design and implementation."
                        bullet1="Designed and implemented a universal issue rating system in tandem with MongoDB so that the most popular issues will be viewable by any user in the public issue page."
                        bullet2="Successfully orchestrated integral data operations between several MongoDB collections."
                        bullet3="Implemented user issue posts and comments on said issues."
                    />
                    
                    <ProjectBlurb
                        extraClass=""
                        intro="Djirection Band Site using Django, Flask, and microservices hosted on RedHat OpenShift and IBM Cloud:"
                        secondButtonText="View Code"
                        secondButtonLink="https://github.com/Gathrazio/Djirection-Band-Site"
                        description="This Django web application, as my capstone for the IBM Professional Certificate, is the main website for a fake band that allows users to log in, view pictures taken at concerts, and RSVP for concerts in the future. It includes the use of two Flask-based microservices which serve the relevant concert pictures and songs. I built and utilized unit tests to ensure proper function of the various services. This project was at one point hosted locally along with the two microservices being hosted by IBM Cloud Engine and RedHat OpenShift, but due to cost that is no longer the case. In building this application, I displayed a working knowledge of HTML, CSS, JavaScript, MongoDB, SQL, Python, Django, Flask, and RESTful API design."
                        bullet1="Constructed a RESTful Python API using both Django and Flask, and implemented the usage of both MongoDB and SQL."
                        bullet2="Deployed microservices to cloud providers and utilized containerization via Docker and Kubernetes, among other services."
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="Songs microservice using Flask:"
                        secondButtonText="View Code"
                        secondButtonLink="https://github.com/Gathrazio/Back-End-Development-Songs"
                        description="This microservice was hosted on RedHat OpenShift and utilized Flask's simple server architecture to perform CRUD operations on song data hosted in a MongoDB instance, also running on OpenShift."
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="Pictures microservice using Flask:"
                        secondButtonText="View Code"
                        secondButtonLink="https://github.com/Gathrazio/Back-End-Development-Pictures"
                        description="This microservice was hosted on IBM Cloud and also utilized Flask's simple server architecture to perform CRUD operations on picture data hosted locally inside the server."    
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="Live CSS Zen Garden mimic using native HTML, CSS, and Javascript:"
                        projectName="My Zen Garden"
                        secondButtonLink="https://github.com/Gathrazio/vs-assignments/tree/master/level-two/css-zen-garden"
                        secondButtonText="View Code"
                        thirdButtonText="View Original"
                        thirdButtonLink="https://www.csszengarden.com/"
                        firstButtonLink="https://my-css-zen-garden.onrender.com/"
                        description="This is a fully fleshed out mobile-first static site made with just vanilla HTML, CSS, and Javascript. It attempts to mimic the original CSS Zen Garden. This site primarily showcases my mastery over CSS and my ability to mimic website designs from scratch."
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="Caesar Cipher Encryptor/Decryptor Utility in Node.js:"
                        secondButtonLink="https://github.com/Gathrazio/vs-assignments/tree/master/level-three/caesar-cipher"
                        secondButtonText="View Code"
                        description="This JavaScript file is a shift cipher utility. One can ask it to decode a shift cipher assuming you know by how many letters a coded message is shifted, and one can ask it to also encode a message by shifting it some number of letters. This was a fun excursion into cryptography and its application using JS -- in particular, I gained experience in consecutively using array and string methods as well as using the ReadlineSync library."
                        
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="Pure Javascript RPG in Node.js:" 
                        secondButtonLink="https://github.com/Gathrazio/vs-assignments/tree/master/level-one/colossal-adventure-rpg"
                        secondButtonText="View Code"
                        description="When this JavaScript file is run in node, it takes the user on a whimsical journey in the command line full of brutal fights against monsters and the joys of collecting rare items. At approximately 1000 lines of code, this fully extracted application utilizes tensors to hold data about spawn rates, hero stat growth, item drop rates, and damage calculations. Also includes JavaScript recursion so that you can restart/play again however many times it is desired without having to run the file again. Uses ES6 JavaScript as much as possible while still keeping things understandable -- though this game is considerably complex regardless. There is an achievement for collecting every unique item -- do YOU have the courage to obtain it?"
                    />
                    <ProjectBlurb
                        extraClass=""
                        intro="RPSLS: Extended rock-paper-scissors with React.js and TailwindCSS"
                        projectName="RPSLS"
                        firstButtonLink="https://rpsls-9kr3.onrender.com/"
                        secondButtonLink="https://github.com/Gathrazio/rock-paper-scissors-lizard-spock"
                        secondButtonText="View Code"
                        description="This is a small mobile-friendly frontend site using React.js with Vite and TailwindCSS where one can play an extended version of rock-paper-scissors, called rock-paper-scissors-lizard-Spock, courtesy of Sam Kass & The Big Bang Theory."
                        bullet1="The hands/moves and their relationships of this game describes a tournament (a complete oriented graph) on 5 vertices, and has 10 directed edges corresponding to the 10 rules of the game, as elucidated by Sheldon Cooper. Each hand has a score of 2, meaning each hand beats exactly two other hands. As each hand has the maximum score, each hand is a champion of this graph -- this essentially means the game is fair."
                        bullet2="If you visit the site and play RPSLS many times against the house (which chooses its hand completely randomly), your win percentage will approach 40%. To see why this is the case, we can think of the game as a Bernoulli process or Bernoulli random variable -- a trial in which one either wins (produces a 1) or fails to win (produces a 0). Suppose you chose some hand out of the five -- it doesn't matter which. Since each hand has a score of 2, you will win if the house chooses 2 out of the 5 hands. So the probability of winning is 2/5, or 40%. In the case of Bernoulli random variables, the expected value is exactly this probability of success: 2/5. And it just so happens that the law of large numbers says that the average of the instances of a random variable, as the number of trials goes to infinity, will be close to and approach the expected value. Hence the first sentence of this paragraph makes sense."
                        bullet3="Gained experience working with the TailwindCSS framework in a React.js setting."
                    />
                    <ProjectBlurb 
                        extraClass="last-project"
                        intro="This portfolio site!"
                        secondButtonLink="https://noahnjensen.dev"
                        secondButtonText="Reload portfolio in new page"
                        thirdButtonLink="https://github.com/Gathrazio/Gathrazio.github.io"
                        thirdButtonText="View Code"
                        description="I developed this portfolio site with the help of React.js and Vite. Feel free to peruse what makes this page run and how things are setup!"
                    />
                    
                </div>
            </Topic>
        </div>
    )
}