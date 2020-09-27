import React from 'react';
import { Header } from './Header';
import { Welcome } from './Welcome';

export const HomePage = (props) => {
    return(
        <div>
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
            <div className='mission'>
                <div>
                    <h2 className='state'>We want to Provide the Right Tools for YOU and <br/> your COMMUNITY</h2>
                </div>
                <div className='content__write'>
                    <div>
                        <p>
                            We aim to keep things simple, with plenty more to explore.
                        </p>
                        <p>Try our bracket generator, and customizations for your Open tournament.</p>
                    </div>
                </div>
                <div>
                    <a href="#" className='sign'>Sign Up</a>
                </div>
            </div>
            <footer className="footer-home">
                <div className='logo'>
                    <div>
                        <div className="bold">MANGO</div>
                        <div className='thin'>MOUNTAIN</div>     
                    </div>
                    <div className='copyright'>
                        <p>&copy; 2020 Firewood Esports Nigeria.</p>
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
            </footer>
        </div>
    )
};