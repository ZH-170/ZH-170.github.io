import React from 'react';
import './Achievements.css';

import UEC2024 from './image/UEC2024.jpg';
import NSSPC2024 from './image/NSSPC2024.jpg';
import TOP102024 from './image/TOP102024.jpg';
import wolfImg from './image/wolf.jpg';
import blankImg from './image/blank.png';

export default function Achievements(){
    const examsList = [
        {examName: "UPSR", year: "2018", result: "", cert: ""},
        {examName: "Junior UEC", year: "2021", result: "", cert: ""},
        {examName: "Senior UEC", year: "2024", result: "", cert: ""}
    ];



    // const awardList = [
    //     CP = [
    //         {competitionName: "NSSPC", year: "2024", level: "National", award: "Gold Medal"},
    //         {competitionName: "MCO", year: "2024", level: "", award: "Bronze Medal"}
    //     ],
    //     MO = [
    //         {competitionName: "IMONST", year: "2024", level: "", award: ""},
    //         {competitionName: "", year: "", level: "", award: ""}
    //     ],
    //     others = [
    //         {competitionName: "", year: "", level: "", award: ""}
    //     ]
    // ];
//
// {name: "Science Stream Top 10 Academic Achievement", result: "#5", img: TOP102024}
    const achievementList = [
        {
            year: "2018",
            academic: [],
            exam: [
                {name: "UPSR", result: "8A", img: wolfImg, level: 'Natonal'},
            ],
            competitions: []
        },
        {
            year: "2019",
            academic: [],
            exam: [],
            competitions: []
        },
        {
            year: "2020",
            academic: [],
            exam: [],
            competitions: []
        },
        {
            year: "2021",
            academic: [],
            exam: [],
            competitions: []
        },
        {
            year: "2022",
            academic: [
                {name: "Super Reader Award", result: "Fifth Prize", img: wolfImg, level: 'Intra-school'},
                
            ],
            exam: [],
            competitions: [
                {name: "OMK", result: "Group Champion", img: wolfImg, level: 'National'},
                {name: "Chen Jing Run Math Competition", result: "High Distinction", img: wolfImg, level: 'National'},
                {name: "Australian Mathematics Competition", result: "Credit", img: wolfImg, level: 'International'},

            ]
        },
        {
            year: "2023",
            academic: [
                {name: "Academic Achievement (by Class)", result: "#1", img: wolfImg, level: 'Intra-School'},
                
            ],
            exam: [],
            competitions: [
                {name: "Chen Jing Run Math Competition", result: "High Distinction", img: wolfImg, level: 'National'},
                {name: "Malaysian Computing Challenge (MCC)", result: "Gold", img: wolfImg, level: 'National'},
                {name: "Hin Hua High School Coding Contest", result: "Champion", img: wolfImg, level: 'Intra-School'},
                {name: "Hua Lo-geng Secondary School Mathematics Competition", result: "Individual Outstanding, Group Champion", img: wolfImg, level: 'City'},
                {name: "Chinese Choir Singing Competition", result: "Gold with Honours", img: wolfImg, level: 'Intra-school'},
                {name: "Inter-Class Volleyball Tournament", result: "3rd Runner-up", img: wolfImg, level: 'Intra-school'},

            ]
        },
        {
            year: "2024",
            academic: [
                {name: "S3 Science Stream Top 10 Academic Achievement", result: "#5", img: TOP102024, level: 'Intra-School'},
                {name: "Extra-Curricular Activities Evaluation (Chinese Orchestra)", result: "Excellence Prize", img: wolfImg, level: 'Intra-school'},

            ],
            exam: [
                {name: "Unified Examination Certificate (UEC)", result: "7A1, 2A2", img: UEC2024, level: 'National'}
            ],
            competitions: [
                {name: "National Secondary School Programming Contest (NSSPC)", result: "2nd Runner-up", img: NSSPC2024, level: 'National'},
                {name: "Malaysian National Chemistry Quiz", result: "Merit", img: wolfImg, level: 'National'},
                {name: "Project-based Inquiry Challenge", result: "Outstanding Research Paper Award", img: wolfImg, level: 'Intra-School'},
                {name: "UTAR National Mathematics Competition", result: "Group 1st Runner-up", img: wolfImg, level: 'National'},
                {name: "Malasian Computing Olympiad (MCO)", result: "Bronze", img: wolfImg, level: 'National'},
                {name: "Asia-Pacific Informatics Olympiad (APIO)", result: "Participant", img: wolfImg, level: 'International'},
                {name: "Science and Mathematics Contest", result: "Seventh Prize", img: wolfImg, level: 'Intra-School'},
                {name: "Benedict Goh Malaysia Schools Mathematics Championship 2024", result: "Gold", img: wolfImg, level: 'National'},
                {name: "XMUM Cup Physics Competition For Secondary Schools", result: "Commendation", img: wolfImg, level: 'National'},
                {name: "Hua Lo-geng Secondary School Mathematics Competition", result: "Individual Merit, Group 1st Runner-up", img: wolfImg, level: 'City'},
                {name: "Malaysian Computing Challenge (MCC)", result: "Gold", img: wolfImg, level: 'National'},
                {name: "APU Meta Maths League 2024", result: "Champion", img: wolfImg, level: 'National'},

            ]
        },
        {
            year: "2025",
            academic: [
                {name: "Science Stream Top 10 Academic Achievement", result: "#5", img: TOP102024}
            ],
            exam: [
                {name: "Unified Examination Certificate (UEC)", result: "7A1, 2A2", img: UEC2024}
            ],
            competitions: [
                {name: "National Secondary School Programming Contest (NSSPC)", result: "2nd Runner-up", img: NSSPC2024}
            ]
        }
    ];

    const achievementListItems = achievementList.map(x => (
        <>
            <div className={x.year % 2 === 0 ? 'Achievements-timeline-container left-container' : 'Achievements-timeline-container right-container'}>
                
                <img src={blankImg} className="small-icon"/>                    
                <div className="Achievements-timeline-container-textbox">
                    <h2>{x.year}</h2>
                    { x.academic.length > 0 && <AchievementRowItems row={x.academic} type='academic' /> }
                    { x.exam.length > 0 && <AchievementRowItems row={x.exam} type='exam' /> }
                    { x.competitions.length > 0 && <AchievementRowItems row={x.competitions} type='competitions' /> }



                    {/* { x.academic.length > 0 && <achievementRowItems row={x.academic} type='academic' /> }
                    { x.exam.length > 0 && <achievementRowItems row={x.exam} type='exam' /> }
                    { x.competitions.length > 0 && <achievementRowItems row={x.competitions} type='competitions' /> } */}


                    <span className={x.year % 2 === 0 ? "left-container-arrow" : "right-container-arrow"}></span>

                </div>
            </div>
        </>
    ));

    return (
        <>
        <section id="awards">
            <div className="Achievements-timeline">

                {achievementListItems}

            </div>






            <h3>A lot of awards...</h3>

            <div className="all-achievements">
                <div className="block">
                    <div className="achievements">
                        <img src={UEC2024} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>
                
                <div className="block">
                    <div className="achievements">
                        <img src={UEC2024} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="achievements">
                        <img src={UEC2024} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

//* can use this.setState => make the state of the cert be preview / clicked

// row= [
//     {name: "Science Stream Top 10 Academic Achievement", result: "#5", img: {TOP102024}}
// ],

function AchievementRowItems(prop) {
    const type = prop.type;
    const row = prop.row;


    const rowFunction = row.map(x => {
        
        return (
            <>
                <div className="achievement-block">
                    <div className="achievement">
                        <img className="certs" src={x.img}/>
                        <div className="achievements-container">
                            <p>{x.name}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    });

    return(
        <>
            <small>{type}</small>
            <div className="all-achievement-blocks">

            {rowFunction}

                

            </div>
        </>
    );
}