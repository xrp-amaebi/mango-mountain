import React from 'react';
import { Header } from './Header';
import { Welcome } from './Welcome';

export const HomePage = (props) => {
    return(
        <div>
            {/* {className = { 'content-container'} */}
            <div className={'content-container'}> 
                <Header />
                <div className="rift"></div>
                
                <div className={'services'}>
                    <caption>COACHELLA</caption>
                    <img src="img/carousel/1.jpg" alt="FIrewood" width="700" height="450" />
                </div>

                <div className={'services'}>
                    <caption>WORLD CLASS COMMENTARY</caption>
                    <img src="img/carousel/5.jpg" alt="FIrewood" width="700" height="450" />
                </div>
                <div className={'services'}>
                    <caption>STREAMING SOLUTIONS</caption>
                    <img src="img/carousel/9.jpg" alt="FIrewood" width="700" height="450" />
                </div>
                <div className={'services'}>
                    <caption>TOURNAMENT</caption>
                    <img src="img/carousel/4.jpg" alt="FIrewood" width="700" height="450" />
                </div>
            </div>
        </div>
    )
};