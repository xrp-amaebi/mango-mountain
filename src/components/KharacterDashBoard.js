import React from 'react';
import { Link } from 'react-router-dom';

export const PassPort = ({ bioText, link, img }) => {
    const onDragStart = (e) => {
        e.dataTransfer.setData('text', e.target.id);
    };
    return ( 
        <div className={'link'}>
            <Link to={`/${link}`}>
                <div className={'passport__group'}> 
                    <img 
                        src={img} 
                        alt={bioText} 
                        id={link}
                        draggable={'true'}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => e.preventDefault()}
                        onDragStart={onDragStart}
                    />
                </div>
            </Link>
        </div>
    );
};