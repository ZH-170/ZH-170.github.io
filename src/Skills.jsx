import React, { useRef, useEffect, useState } from 'react';
import "./Skills.css";

import DrawingImg from './image/canvas.png';
import CodingImg from './image/data.png';
import MusicImg from './image/music.png';

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function Skills() {

    

    const learnedSkills = [
        {name: "C++", level: "500"},
        {name: "JS", level: "60"},
        {name: "React-JSX", level: "50"},
        {name: "HTML", level: "30"},
        {name: "CSS", level: "30"},
    ];

    const skills = learnedSkills.map((skill) => {
        const backgroundColor = getRandomColor();
        const className = "bar-expand " + skill.name.toLowerCase();
        const width = `${skill.level}px`;

        return (
            <li key={skill.name}>
                <span style={{ width, backgroundColor }} className={className}></span>
                <em>{skill.name}</em>
            </li>
        );
    });


    
    const [isPopupCodingOpen, setIsPopupCodingOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handlePopupCoding = () => {
        setIsPopupCodingOpen(!isPopupCodingOpen); // Open first popup
        setIsOverlayOpen(!isOverlayOpen);
        // setIsOverlayOpen(true); // Open second popup
    };

    return (
        <section id="skills">
            <div className="skills-container">


                <div className="skill-column skill-music">
                    <h1>Music</h1>
                    <div className="skill-img2">
                        <img src={MusicImg} />
                    </div>
                </div>

                <div className="skill-column skill-coding">
                    <h1>Coding</h1>
                    <div className="skill-img" onClick={handlePopupCoding}>
                        <img src={CodingImg} />
                    </div>
                </div>

                {isPopupCodingOpen && (
                    
                    <div className="skill-coding-popup-container">
                        <div className="skill-popup-header">
                            <h1>Coding</h1>
                            <button className="close-button" onClick={handlePopupCoding}>&times;</button>
                        </div>
                        
                        <div className="skill-text-container">
                            
                            <h1 className="skill-text-title">Little story</h1>
                            <div className="skill-text">
                                <p>In my high school, there are selective courses for students. Once I entered my senior level (16–18 years old), I selected the Programming Language Selective Course, and this was where my coding journey began. The language taught in the course was C++, with a focus on competitive programming.</p>
                                <p>The course was quite difficult for me at the beginning, as it was completely new to me. I even struggled with variables and syntax, not understanding why so many of them were necessary. However, after spending some time on it, it became easier and easier. Slowly, I realized that the teaching pace was too slow for me, so I started self-learning new algorithms and problem-solving techniques by searching the web. I also became addicted to solving problems.</p>
                                <p>Solving a difficult problem is not easy. After coming up with an idea, I need to code it and try submitting the solution. But the thing is, I usually do not succeed on my first or second attempt. I have to consider edge cases, exceptions, and sometimes even rethink my entire approach. This process can be frustrating, but if I don’t give up, I feel incredibly proud when I finally see the green "ACCEPT" button, knowing that all the hard work was truly worth it.</p>
                                <p>Through this journey, I learned that persistence and a passion for problem-solving can turn any challenge into an opportunity for growth, and this mindset continues to drive me forward in both coding and life.</p>
                            </div>

                            <h1 className="skill-text-title">Skills</h1>
                            <div className="skill-type">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="programmingLanguageIcons" />
                                
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="programmingLanguageIcons" />
                        
                            </div></div>
                    </div>
                )}




                <div className="skill-column skill-drawing">
                    <h1>Drawing</h1>
                    <div className="skill-img2">
                        <img src={DrawingImg} />
                    </div>
                </div>

                {isOverlayOpen && (<div id="overlay"></div>)}
            </div>



        </section>
    );
}