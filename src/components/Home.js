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
                    <div className="services__container image">
                        <img src="img/carousel/4.jpg" alt="FIrewood" />
                        <div className="overlay">
                            <div className={'text'}>BRACKET GENERATOR</div>
                        </div>
                    </div>
                    <div className="services__container image">
                        <img src="img/carousel/3.jpg" alt="FIrewood" />
                        <div className="overlay">
                            <div className={'text'}>COACHELLA</div>
                        </div>
                    </div>
                    <div className="services__container image">
                        <img src="img/carousel/2.jpg" alt="FIrewood" />
                        <div className="overlay">
                            <div className={'text'}>COMMENTARY</div>
                        </div>
                    </div>
                    <div className="services__container image">
                        <img src="img/carousel/9.jpg" alt="FIrewood" />
                        <div className="overlay">
                            <div className={'text'}>STREAMING</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};