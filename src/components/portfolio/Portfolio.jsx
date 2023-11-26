import React from 'react';
import './portfolio.css';
import Works from './Works';

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section_title">Portfolio</h2>
        <span className="section_subtitle">Most Recent Works</span>

        <Works />
    </section>
  )
}

export default Portfolio