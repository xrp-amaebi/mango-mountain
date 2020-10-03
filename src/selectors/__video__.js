import React from 'react';
import { displayInputs } from './__movelist__';

export const Video = ({ url, INPUT_VALUE }) => {
    const isValid = false;

    if (isValid) { 
        return (        
            <div>
                <video src={url} controls width="420" height="315" ></video>
                <div className='list_input'>{displayInputs(inputs)}</div>
            </div>     
        );
    } else {
        return(
            <div>
                <iframe width="420" height="315"
                    src={url}>
                </iframe>
                <div className='list_input'>{displayInputs(INPUT_VALUE)}</div>
            </div>
            
        );
    }
};