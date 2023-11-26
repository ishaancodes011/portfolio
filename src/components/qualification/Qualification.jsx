import React, { useState, useEffect } from 'react';
import "./qualification.css";
import { Education, Experience, Internships } from '../../data/Qualifications';
import QualificationCard from './QualificationCard';


const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [qual, setQual] = useState([])

    useEffect(() => {
        if (toggleState === 1){
            setQual(Education)
        } else if (toggleState === 2) {
            setQual(Experience)
        } else {
            setQual(Internships)
        }
    }, [toggleState])

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section_title">Qualifications</h2>
        <span className="section_subtitle">My Professional Journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? 
                        "qualification_button qualification_active button--flex" :
                        "qualification_button button--flex"}
                    onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i>
                    Education
                </div>
                <div className={toggleState === 2 ? 
                        "qualification_button qualification_active button--flex" :
                        "qualification_button button--flex"}
                    onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>
                    Experience
                </div>
                <div className={toggleState === 3 ? 
                        "qualification_button qualification_active button--flex" :
                        "qualification_button button--flex"}
                    onClick={() => toggleTab(3)}>
                    <i className="uil uil-backpack qualification_icon"></i>
                    Internships
                </div>
            </div>

            <div className="qualification_sections">
                <div className={toggleState === 1 ? 
                    "qualification_content qualification_content-active" :
                    "qualification_content"}>
                    {qual.map((item) => {
                        return <QualificationCard item={item} key={item.id}/>
                    })}
                </div>
                <div className={toggleState === 2 ? 
                    "qualification_content qualification_content-active" :
                    "qualification_content"}>
                    {qual.map((item) => {
                        return <QualificationCard item={item} key={item.id}/>
                    })}
                </div>
                <div className={toggleState === 3 ? 
                    "qualification_content qualification_content-active" :
                    "qualification_content"}>
                    {qual.map((item) => {
                        return <QualificationCard item={item} key={item.id}/>
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification