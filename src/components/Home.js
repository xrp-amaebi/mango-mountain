import React from 'react';
import { Header } from './Header';
import { Welcome } from './Welcome';

export const HomePage = (props) => {
    return(
        <div>
            {/* {className = { 'content-container'} */}
            <div className={''}> 
                <Header />
                <div className="rift"></div>
                <div className={'services'}>
                    <div className="image">
                        <img src="img/lol.jpg" alt="FIrewood" />
                    </div>
                    <div className="image">
                        <img src="img/sfv.png" alt="FIrewood" />
                    </div>
                    <div className="image">
                        <img src="img/lol.jpg" alt="FIrewood" />
                    </div>
                    <div className="image">
                        <img src="img/sfv.png" alt="FIrewood" />
                    </div>
                </div>
                {/* <div className={'services image'}>
                    <caption>COACHELLA</caption>
                    <img src="img/carousel/1.jpg" alt="FIrewood"/>
                </div> */}
                {/* <div className={'services image'}>
                    <caption>WORLD CLASS COMMENTARY</caption>
                    <img src="img/carousel/5.jpg" alt="FIrewood"/>
                </div>
                <div className={'services image'}>
                    <caption>STREAMING SOLUTIONS</caption>
                    <img src="img/carousel/9.jpg" alt="FIrewood"/>
                </div>
                */}
            </div>
        </div>
    )
};