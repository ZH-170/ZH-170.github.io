
import React, { useRef, useEffect, useState } from 'react';
import "./Experiences.css";

import LionDanceImg from './image/lion-dance-head.jpg';
import EROHSSImg from './image/EROHSS.jpg';
import SciCampImg from './image/SciCampImg.jpg';
import MOImg from './image/MO.jpg';

import liondance1 from './image/liondance/liondance1.jpg';
import liondance2 from './image/liondance/liondance2.jpg';
import liondance3 from './image/liondance/liondance3.jpg';
import liondance4 from './image/liondance/liondance4.jpg';
import liondance5 from './image/liondance/liondance5.jpg';

// import { faSearch } from '../node_modules/@fortawesome/free-solid-svg-icons/faSearch.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
// const openPopup = document.querySelectorAll()


export default function Experiences() {
    
    const [isPopup1Open, setIsPopup1Open] = useState(false);
    const [isPopup2Open, setIsPopup2Open] = useState(false);

    const [isPopup3Open, setIsPopup3Open] = useState(false);

    const [isPopup4Open, setIsPopup4Open] = useState(false);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleOpenPopup1 = () => {
        setIsPopup1Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup1 = () => {
        setIsPopup1Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    const handleOpenPopup2 = () => {
        setIsPopup2Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup2 = () => {
        setIsPopup2Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    const handleOpenPopup3 = () => {
        setIsPopup3Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup3 = () => {
        setIsPopup3Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    const handleOpenPopup4 = () => {
        setIsPopup4Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup4 = () => {
        setIsPopup4Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    const handle6anluckIg = () => {
        window.open("https://www.instagram.com/6anluck_/", "_blank");
    }

    const handleDongZong = () => {
        window.open("https://www.dongzong.my/en/home/", "_blank");
    }

    return (
        <>
            <div>
                <div className="big-container">

                    <div className="Experience">
                        <div className="Experience-container">

                                <div className="row1-col-left">
                                    <div className="label1-container inset-shadow" onClick={handleOpenPopup1}>
                                        <div className="label1"><h1>Lion Dance</h1></div>
                                    </div>
                                    <img src={LionDanceImg} />

                                </div>
                    
                                <div className="row1-col-right">
                                    <div className="label2-container inset-shadow" onClick={handleOpenPopup2}>
                                        <div className="label2"><h1>EROHSS Program</h1></div>
                                    </div>
                                    <img src={EROHSSImg} />
                                
                                </div>
                            
                        </div>

                        <div className="Experience-container">
                            <div className="row2-col-left">
                                <div className="label3-container inset-shadow" onClick={handleOpenPopup3}>
                                        <div className="label3"><h1>Olympiad Competitions</h1></div>
                                    </div>
                                <img src={MOImg} />
                            </div>
                            <div className="row2-col-right">
                                <div className="label4-container inset-shadow" onClick={handleOpenPopup4}>
                                        <div className="label4"><h1>MICSS SC</h1></div>
                                    </div>
                                <img src={SciCampImg} />
                            </div>
                        </div>
                    </div>

                    <div className="Experience-popup">

                        {isPopup1Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">Lion Dance</div>
                                    <button className="close-button" onClick={handleClosePopup1}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <p>The lion dance performance is a Chinese tradition in my country and is often seen during the Lunar New Year. At my high school, the lion dance troupe is an important annual tradition. Starting at the end of the previous year, students are recruited and undergo daily training in teams for three to four months. During the Lunar New Year, the troupe performs outside of school to raise funds, making it an iconic event for our school.</p>
                                    <p>In the year end of 2022, I have participated in this event, and that brings a lot of memorable experience to me. At the first time when I met my teammates, we were all strangers from different classes and different age, scarcely seen each other in school. However, after months of training together, we became as close as siblings, as close as brothers. We trained together, played together, ate together. They are the one that I love and I trust by the time. During the tough training, I gained persistence. Tough trainings will always make us to have the idea of giving up, but after taking a look at my teammates, seeing some of them that are younger than me still insisting, and that’s when the idea of giving up disappears, and all that left is the motivation and encouragement of my teammates.</p>
                                    <p>At the beginning of 2023, during the Lunar New Year, my team went outside the school, started our performance at all kinds of houses and restaurants and companies for 15 days, 5 to 8 performance a day. </p>


                                    
                                    <div className="popup-more-info" onClick={handle6anluckIg}>Instagram</div>


                                    <img src={liondance1} className="popup-img" />
                                    <img src={liondance2} className="popup-img" />
                                    <img src={liondance3} className="popup-img" />
                                    <img src={liondance4} className="popup-img" />
                                    <img src={liondance5} className="popup-img" />





                                </div>
                            </div>
                        )}

                        {isPopup2Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">EROHSS Program</div>
                                    <button className="close-button" onClick={handleClosePopup2}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <h1>Halo</h1>
                                    <p>This is a text.</p>
                                </div>
                            </div>
                        )}

                        {isPopup3Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">Olympiad Competitions</div>
                                    <button className="close-button" onClick={handleClosePopup3}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <h1>Halo</h1>
                                    <p>This is a text.</p>
                                </div>
                            </div>
                        )}

                        {isPopup4Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">MICSS Science Camp</div>
                                    <button className="close-button" onClick={handleClosePopup4}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <p>The MICSS Science Camp is an annual event organized by Dong Zong, involving most of the top Chinese independent schools in Malaysia. Each year, the camp has a main theme and corresponding subject(s), and each school can send up to six representatives who have demonstrated outstanding performance in those subjects. The representatives gather at the hosting school and spend five days and four nights participating in the camp. The event features knowledge-sharing sessions conducted by professors in the respective fields, as well as competitions where students can showcase their abilities. However, due to the pandemic, the camp was canceled for several years before finally resuming in 2023.</p>

                                    <div className="popup-more-info" onClick={handleDongZong}>DongZong</div>

                                </div>
                            </div>
                        )}


                    </div>
                    {isOverlayOpen && (<div id="overlay"></div>)}

                    

                    
                    
                </div>
            </div>


{/* 
            <div className="all-polaroid">
                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                    <p>MICSS Science Camp</p>
                    </div>
                </div>

                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                        <p>Lion Dance</p>
                    </div>
                </div>

            </div>

            <div className="all-polaroid">
                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                    <p>MICSS Science Camp</p>
                    </div>
                </div>

                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                        <p>Lion Dance</p>
                    </div>
                </div>

            </div> */}
        </>
    );
}