import React, { useState } from 'react';

const AchievementImages = ({image, ind}) => {
    const [imgState, setImgState] = useState(false);

    const getImgPosition = (i) => {
        const a = i%2
        if (a===0) {
            const position = {
                top: `-20px`,
                right: `20px`,
                transform: 'rotate(45deg)'
            }
            return position
        } else {
            const position = {
                top: `20px`,
                right: `-10px`,
                transform: 'rotate(20deg)'
            }
            return position
        }
    }

    const imgShow = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setImgState(!imgState)
    }

    const pos = getImgPosition(ind);
    const classname = `achievement_img ${imgState ? 'active' : ''}`;
    const contname = `img_container ${imgState ? 'active' : ''}`;

    return (
        <div className={contname} onClick={(e) =>{ e.preventDefault(); e.stopPropagation()}}>
            <img 
                className={classname}
                src={image} 
                alt={`${ind}`}
                style={{
                    position: 'absolute',
                    height: '50px',
                    maxHeight: '100vh',
                    maxWidth: '100vw',
                    top: `${pos.top}`,
                    right: `${pos.right}`,
                    transform: `${pos.transform}`,
                    zIndex: `var(--z-tooltip)`
                }}
                onClick={imgShow}
            />
        </div>
    )
}

export default AchievementImages