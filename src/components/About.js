import React from 'react';
import { Header } from './Header';


export const About = (props) => {
    return (
        <div>
            <Header />
            <div className="rift"></div>
            <div className={'content__write'}>
                <div className={"image"}>
                    <img src="/img/carousel/10.jpg" alt="Hype"/>
                </div>
                <div>
                    <p>
                        Hi My Name is Phederal... Im an Avid Gamer, Tech Enthusiast and Software Developer, I come from Lagos Nigeria.
                    </p>
                    <p> 
                        I make or moderate sports Commentary on Youtube where I talk about almost anthing relating to Electronic Sports and Fighting Gaming.
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
            <div className="footer">
                
            </div>
        </div>
    )
};