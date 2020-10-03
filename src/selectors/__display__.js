import React from 'react';
import { displayInputs } from './__movelist__';

export const Display = ({ INPUT_NAME, INPUT_VALUE}) => {
    return (
        <div>
            <div className='list_container' key={''}>
                <div className='list_name'>
                    {INPUT_NAME ? INPUT_NAME : 'N / A'}
                </div>
                <div className='list_input'>
                    <button className="lister__btn"
                    >{displayInputs(INPUT_VALUE ? INPUT_VALUE : 'N / A')}
                    </button>
                </div>
            </div>
        </div>
    );
};