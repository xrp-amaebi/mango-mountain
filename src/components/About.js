import React from 'react';
import { Header } from './Header';

export const About = (props) => {
    return (
        <div>
            <Header />
            <div className="rift"></div>
            <div className={'content-container content__write'}>
                {/* <span><video src="/video/EA.mp4"  width="400" height="400" autoPlay controls></video></span> */}
                <div>
                    <img src="/img/carousel/10.jpg" alt="Hype" />
                </div>
                
                <div>
                    <p>
                        Hi My Name is Phederal... Im an Avid Gamer, Tech Enthusiast and Software Developer, I come from Lagos Nigeria.
                    </p>
                    <p> 
                        I make or moderate sports Commentary on Youtube where I talk about almost anthing relating to Electronic Sports and Fighting Gaming.
                    </p>
                    <p>
                        I love what I do and most days I do it very well, So well sometimes I get invited to Tech Events and Tournaments... its all on Youtube.
                    </p>
                    <p>
                        This pet project  is one of many on my wishlist where I take random ideas and data from my favourite games and develop them as web applications.
                    </p>
                    <p>
                        The purpose of this project is to provide educational high level content so the viewer can learn new strategies.
                    </p>
                    <p>
                        Creative value is added by carefully selecting the right moments and pairing it with the right type of editing so the  viewing experience is convenient, easy to understand and thoroughly entertaining. 
                    </p>
                    <p>
                        No one likes filler content.
                    </p>
                </div>
            </div>
        </div>
    )
};