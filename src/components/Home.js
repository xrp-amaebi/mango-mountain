import React from 'react';
import { Header } from './Header';
import { Welcome } from './Welcome';

export const HomePage = (props) => {
    return (
        <div>
            <Header />
            {   
                <div className={'content-container'}> 
                    <div className={'services'}>
                        <h1>COACHELLA</h1>
                        <img src="img/carousel/1.jpg" alt="FIrewood" width="700" height="450" />
                        <p>Lorem Ipsum dolor sit alum</p>
                    </div>
                    <div className={'services'}>
                        <h1>WORLD CLASS COMMENTARY</h1>
                        <img src="img/carousel/5.jpg" alt="FIrewood" width="700" height="450" />
                        <p>Lorem Ipsum dolor sit alum</p>
                    </div>
                    <div className={'services'}>
                        <h1>STREAMING SOLUTIONS</h1>
                        <img src="img/carousel/9.jpg" alt="FIrewood" width="700" height="450" />
                        <p>Lorem Ipsum dolor sit alum</p>
                    </div>
                    <div className={'services'}>
                        <h1>TOURNAMENT</h1>
                        <img src="img/carousel/4.jpg" alt="FIrewood" width="700" height="450" />
                        <p>Lorem Ipsum dolor sit alum</p>
                    </div>
                    <div className={'vision content__write'}> 
                        <h2>VISION</h2>
                        <div>
                            <p>Our Primary aim is to encapsulate all major Electonic Sport activities under the Umbrella of a gaming community.</p>
                            <p>We hope on making a platform where growth and community thrives</p>
                        </div>
                    </div>
                    <footer className={'footer'}>
                        <code>There is no Knowledge that is not Power...</code>
                    </footer>
                </div>
            }
        </div>
    )
};