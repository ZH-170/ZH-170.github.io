import React, { useRef , useState } from 'react';
import ReactDOM from 'react-dom';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Experiences from './Experiences.js';
import Achievements from './Achievements.js';


import "./App.css";
import AboutMe from './AboutMe.js';
import Home from './Home.js';
// import MenuIcon from './image/748d92_menu.png';
import MenuIcon from './image/d3d9d4_menu.png';



export default function App() {

    const openPdf = () => {
        // Replace with your PDF file path or URL
        const pdfUrl = 'https://drive.google.com/file/d/141k8BWmk2lc8J9QVfzGvWmNzVJKfRTZ5/view?usp=sharing'; // Local file in public folder
        // https://drive.google.com/file/d/1KpzTb-DI3Pu2_cpav7AtFLU_00SWBiQf/view?usp=sharing
        // OR const pdfUrl = 'https://example.com/sample.pdf'; // Remote URL
    
        // Open PDF in a new tab
        window.open(pdfUrl, '_blank');
    };

    const HomeRef = useRef(null);
    const AboutMeRef = useRef(null);
    const SkillsRef = useRef(null);
    const ExperienceRef = useRef(null);
    const ContactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const [isNavBarOpen, setIsNavBarOpen] = useState(false);
    const handleNavBar = () => {
        setIsNavBarOpen(!isNavBarOpen);
    }

    return (
        <>


            <div className="app-container">

                <div className="NavBar" onClick={handleNavBar}>
                    {/* <FontAwesomeIcon icon={faBars} style={{color: "#74C0FC",}} /> */}
                    {/* <img className="fa-solid fa-bars" /> */}
                    <img className="NavBar-icon" src={MenuIcon} />
                </div>

                {isNavBarOpen && (
                    <Fade>
                        <div className="navigation-bar navbar-fade-out">
                            <div className="nav-btn" onClick={() => scrollToSection(HomeRef)}>Home</div>
                            <div className="nav-btn" onClick={() => scrollToSection(AboutMeRef)} >About</div>
                            <div className="nav-btn" onClick={() => scrollToSection(SkillsRef)}>Skills</div>
                            <div className="nav-btn" onClick={() => scrollToSection(ExperienceRef)} >Experience</div>
                            <div className="nav-btn" onClick={() => scrollToSection(ContactRef)}>Contact</div>
                            <div className="nav-btn" onClick={openPdf} >About</div>
                        </div>
                    </Fade>
                )}

                <div ref={HomeRef} className="Home app">
                    <Home />
                </div>

                <div ref={AboutMeRef} className="AboutMe app">
                    <h1 className="div-title">About Me</h1>
                    <AboutMe />
                </div>

                <div ref={SkillsRef} className="Skills app">
                    <h1 className="div-title">Skills</h1>
                    <Skills />
                </div>

                <div ref={ExperienceRef} className="Experience app">
                    <h1 className="div-title">Experiences</h1>
                    <Experiences />
                </div>

                
                <div className="Achievements app">
                    <h3>Achievements/Awards: </h3>
                    {/* <Achievements /> */}
                </div>

                <div>
                    <h3>Files (Resume & Personal Statement) :</h3>
                </div>

                <div ref={ContactRef} className="Contact app">
                    <h1 className="div-title">Contact Me</h1>
                    <Contact />
                </div>

                <div>
                    <h3>Send me email: </h3>
                </div>

                <Fade>
                    <h3>heheboi</h3>
                </Fade>
            </div>
        </>
    );
}
