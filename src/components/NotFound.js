import React from 'react';


export const NotFound = (props) => (
    <div className={'crux frame-box'}>
         <div className={'video'}>
            {
                <video width="320" height="240" controls autoplay src={'img/video.mp4'} />
            }
         </div>
        <div>
            <h4>4 0 4</h4>
            {'Content Page Not Found'}
        </div>
    </div>
);