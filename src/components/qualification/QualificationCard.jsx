import React, { useState } from 'react'

const QualificationCard = ({item}) => {

    const [show, setShow] = useState(false);

    const handleShow = (state) => {
        setShow(!show);
    }

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
    }

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    }
  
  if (item.id % 2 === 1) {
      return (
        <div className="qualification_data">
            <div className='qualification_card' onClick={() => handleShow()}>
                <h3 className="qualification_title">{item.title}</h3>
                <span className="qualification_subtitle">{item.subtitle}</span>
                <div className="qualification_calendar">
                    <i className="uill uil-calendar-alt"></i>
                    {item.years}
                </div>
            </div>
            <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
            </div>
            {show && <div className="qualification_description_wrapper" onClick={() => handleShow()}>
                <div className="qualification_description" 
                onClick={(e) => e.stopPropagation()} 
                onMouseEnter={disableScroll} 
                onMouseLeave={enableScroll}>
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                    {Object.entries(item.desc).map((description, index) => (
                        <>
                            <h4 key={index}>{description[0]}</h4>
                            <ul>
                                {description[1].map((desc2, index) => (
                                    <li>{desc2}</li>
                                ))}
                            </ul>
                        </>
                    ))}
                    <div className="close" style={{cursor: "pointer"}} onClick={() => handleShow()}>close</div>
                </div>
            </div>}
        </div>
      )
  } else {
    return (
        <div className="qualification_data">
            <div></div>
            <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
            </div>
            <div className='qualification_card' onClick={() => handleShow()}>
                <h3 className="qualification_title">{item.title}</h3>
                <span className="qualification_subtitle">{item.subtitle}</span>
                <div className="qualification_calendar">
                    <i className="uill uil-calendar-alt"></i>
                    {item.years}
                </div>
            </div>
            {show && <div className="qualification_description_wrapper" onClick={() => handleShow()}>
                <div className="qualification_description" 
                onClick={(e) => e.stopPropagation()} 
                onMouseEnter={disableScroll} 
                onMouseLeave={enableScroll}>
                    <h2>{item.title}</h2>
                    <h3>{item.subtitle}</h3>
                    {Object.entries(item.desc).map((description, index) => (
                        <>
                            <h4 key={index}>{description[0]}</h4>
                            <ul>
                                {description[1].map((desc2, index) => (
                                    <li>{desc2}</li>
                                ))}
                            </ul>
                        </>
                    ))}
                    <div className="close" style={{cursor: "pointer"}} onClick={() => handleShow()}>close</div>
                </div>
            </div>}
        </div>
    )
  }
}

export default QualificationCard