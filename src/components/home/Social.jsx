import React from 'react'

const Social = () => {
  return (
    <div className="home_social">
        <div className="iconDiv" tooltip="LinkedIn" tabIndex="0">
          <a href="https://www.linkedin.com/in/ishaan-ishaan-3406b7171/" className="home_social-icon" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <div className="iconDiv" tooltip="GitHub" tabIndex="0">
          <a href="https://github.com/ishaancodes011" className="home_social-icon" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <div className="iconDiv" tooltip="Mail" tabIndex="0">
          <a href="mailto:f2016704p@alumni.bits-pilani.ac.in" className="home_social-icon" target="_blank" rel="noopener noreferrer">
              <i className="uil uil-envelope-alt"></i>
          </a>
        </div>
    </div>
  )
}

export default Social