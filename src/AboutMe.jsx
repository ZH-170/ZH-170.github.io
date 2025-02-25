// import React from 'react';
import React, { useRef, useEffect, useState } from 'react';
import "./AboutMe.css";
import SelfImg from './image/Y-19353-2-edited.jpg';



export default function AboutMe() {

    const educationBackground = [
        {schoolName: "SJK(C) Hin Hua", educationLevel: "Primary Education", firstYear: "standard 1", lastYear: "standard 6", startAge: "7", endAge: "12", url:"https://sjkchinhuaklang.wordpress.com/"},
        {schoolName: "Hin Hua High School", educationLevel: "Junior Secondary Education", firstYear: "Junior 1", lastYear: "Junior 3", startAge: "13", endAge: "15", url: "https://hinhua.edu.my/cn/index.html"},
        {schoolName: "Hin Hua High School", educationLevel: "Senior Secondary Education", firstYear: "Senior 1", lastYear: "Senior 3", startAge: "16", endAge: "18", url: "https://hinhua.edu.my/cn/index.html"}
    ]

    const [activeIndex, setActiveIndex] = useState(2);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const clickSecondaryEducationEng = () => {
        // window.open("https://hinhua.edu.my");
        window.open("https://hinhua.edu.my/eng/home.html", "_blank");
    }
    const clickSecondaryEducationChn = () => {
        // window.open("https://hinhua.edu.my");
        window.open("https://hinhua.edu.my/cn/index.html", "_blank");
    }

    const clickPrimaryEducation = () => {
        window.open("https://sjkchinhuaklang.wordpress.com/", "_blank");
    }

    return (
        <section id="aboutMe">
            <div className='AboutMe-container'>
                <div className='selfIntro'>
                        <div className="selfIntroInfo">
                            <div className='selfIntroText'>
                                <h1 className="selfIntroInfo-title">Who Am I?</h1>
                                    
                                <div className="selfIntroInfo-text-container">
                                    <p>
                                    High-achieving student at Hin Hua High
                        School with a strong passion for Life
                        Science and Computer Science.
                        A highly diligent and organized individual,
                        actively engaged in competitive
                        programming, with advanced skills in C++,
                        as well as in other science competitions.
                        Eager to delve deeper in both of the field
                        of computer science and biochemistry.
                                    </p>
                                </div>
                            </div>

                            <h1 className="selfIntroInfo-title">Education</h1>
                            <div className="education-container">
                                <div className="primary-education">
                                    
                                    <p>Primary Education: 2013~2018</p>
                                    <h1>SJK(C) Hin Hua</h1>
                                    <a onClick={clickPrimaryEducation}>This website doesn't have an English version.</a>
                                </div>
                                <div className="secondary-education">
                                    <p>Secondary Education: 2019~2024</p>
                                    <h1>Hin Hua High School</h1>
                                    <a onClick={clickSecondaryEducationEng}>English  /  </a>
                                    <a onClick={clickSecondaryEducationChn}>    Chinese</a>
                                </div>
                                
                            </div>
                        </div>
                        <img className='selfIntroImg' src={SelfImg} />
                </div>
                
                <div className="Education">


                    {/* <div className="timeline-container">

                        <div className="text-block">
                            <h1>Education Timeline</h1>
                            <p>
                                This is a horizontal timeline showing my educational journey. Click an item to highlight it!
                            </p>
                        </div>

                        <div className="timeline-wrapper">
                            <ol className="timeline">
                                {educationBackground.map((item, index) => (
                                    <li
                                    key={index}
                                    className={index === activeIndex ? 'active' : ''}
                                    onClick={() => handleClick(index)}
                                    >
                                        <span>{item.educationLevel}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>


                    </div> */}

                    
                    {/* <ol>
                        <li><span>SJK(C) Hin Hua</span></li>
                        <li><span>Hin Hua High School</span></li>
                        <li class="active"><span>Wrath of the Lich King</span></li>
                    </ol> */}
                </div>
            </div>


        </section>
    );
}


