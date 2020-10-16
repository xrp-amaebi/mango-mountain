import React from 'react';
import { Header } from './Header';
import { Welcome } from './Welcome';
import { Video } from '../selectors/__video__';
import { Tournament } from './TournamentPage';

export const HomePage = (props) => {
    const drop = { 
        url: ['/video/1.mp4'],
        inputs: '11'
    }

    const liu = {
        url: ['/video/2.mp4'],
        inputs: 'f44,bf4ffg,113,u4,ubf1,ubf1,ubf1,f213,fbf4,t'
    }
    const mon = {
        url: [`https://www.youtube.com/embed/LyXWh-oL9vk?playlist=LyXWh-oL9vk&loop=1`],
        inputs: 'f43,34,db1a,12,bf4'
    }

    return(
        <div className={'services-container'}>
            <div> 
                <div className="rift"></div>
                <Header />
                <div className={'services'}>
                    <div className="services__container image">
                        <img src="img/sfv.png" alt="FIrewood" />
                        <div className="overlay">
                            <div className={'text'}>BRACKET GENERATOR</div>
                        </div>
                    </div>
                    <div className="services__container image">
                        <img src="img/carousel/1.jpg" alt="FIrewood" />
                        <div className="overlay">
                            <div className={'text'}>COACHELLA</div>
                        </div>
                    </div>
                    <div className="services__container image">288
                        <img src="img/ns4.png" alt="FIrewood" />
                        <div className="overlay">
                            <div className={'text'}>STREAMING AND COMMENTARY</div>
                        </div>
                    </div>
                    <div className="services__container image">
                        <img src="img/mk.png" alt="FIrewood"/>
                        <div className="overlay">
                            <div className={'text'}>PRACTICE VIDEOS</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mission'>
                <div>
                    <h2 className='state'>We have the Right Tools for YOU and <br/> your COMMUNITY</h2>
                </div>
                <div>
                    <div>
                        <p>
                            We aim to keep things simple, with plenty more to explore.
                        </p>
                        <p>Try the Bracket generator for your Open tournaments with our event-driven, tournament API.</p>   
                    </div>
                </div>
                <div className="sign">
                    <a href="#">Sign Up</a>
                </div>
            </div>
            <footer className="footer-home">
                <div className="explore">
                    <div>
                        <div className="bold">MANGO</div>
                        <div className='thin'>MOUNTAIN</div>
                        {/* <div className="image logo"><img src="/img/mango.png" alt="database" /></div>      */}
                    </div>
                    <div className='copyright'>
                        <p>Copyright &copy; 2020 Firewood Inc.<br/> All rights reserved.</p>
                    </div>
                </div>
                <div className="explore">
                    <div>EXPLORE</div> 
                    <li>Tournament Generator</li>
                    <li>Commentary</li>
                    <li>Live Streaming</li>
                    <li>Coaching</li>
                </div>  
                <div className="explore">
                    <div>RESOURCES</div> 
                    <li>Knowledge Base</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Content</li>
                </div> 
                <div className="explore">
                    <div>CONTACT</div> 
                    <li>Advertise</li>
                    <li>Blog</li>
                    <li>Social Media</li>
                    <li>Telepone</li>
                </div>
                {/* <Tournament /> */}
                {/* <div className="footer">
                    <Kontroller />
                </div>   */}
            </footer>
        </div>
    )
};