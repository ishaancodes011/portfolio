import React from 'react';
import "./skills.css";
import { SkillsData } from '../../data/Skills';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical Level</span>

        {/* <div className="skills_container container grid">
            <Development />
            <DS />
        </div> */}

        <div className="skills_container container grid">
          {SkillsData.map(({skill, yoe, level, desc}, index) => {
            return (
                <div className="skills_item" key={index}>
                  <div className="skills_title">
                    <div className="skills_name_">
                      <h3 className="skills_name">{skill}</h3>
                      <h4 className="skills_yoe">{yoe} {yoe === 1? "year" : (yoe === '' ? "-" : "years")}</h4>
                    </div>
                    <span className="skills_number">{level}<span>{level === '' ? '-': '%'}</span></span>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage" style={{width: `${level}%`}}></span>
                  </div>
                  <p className="skills_description">{desc}</p>
                </div>  
              )
          })}
        </div>
    </section>
  )
}

export default Skills