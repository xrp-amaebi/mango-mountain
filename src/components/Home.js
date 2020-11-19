import React from 'react';
import { Header } from './Header';


export const HomePage = (props) => {
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
                        <img src="img/tekken.png" alt="FIrewood" />
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
                <div className="mission-text">
                    <p>
                        <h3>We aim to keep things simple, with plenty more to explore </h3>
                        <p><a href="#">Try the Bracket generator for your Open tournaments</a></p>
                        <p><a href="#">Try our event-driven tournament API</a></p>
                    </p>  
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
            </footer>
        </div>
    );
};