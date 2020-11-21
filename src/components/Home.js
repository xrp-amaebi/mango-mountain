import React from 'react';
import { Header } from './Header';


export const HomePage = (props) => (
    <div className={'page'}>
        <Header />
        <div className="mango">
                <div>
                    <h2>MANGO MOUNTAIN</h2>
                    <p>Empowering the Esports Community</p>
                </div>
                <div >
                    <a href="/create">Book an Event</a>
                </div>
            </div>
        {/* <div className={'services'}>
                <div className="services__container image">
                    <img src="img/sfv.png" alt="FIrewood" />
                    <div className="overlay">
                        <div className={'text'}>STREET FIGHTER V</div>
                    </div><br/>
                </div>
                <div class="card">
                    <p>21 July 2021 - 24th July 2021</p>
                    <p>Double Eliminaton Brackets</p>
                    <p>Silver Bird Galleria, Ikoyi Lagos.</p>
                    <p>Offline</p>
                </div>
                <div className="services__container image">
                    <img src="img/tekken.png" alt="FIrewood" />
                    <div className="overlay">
                        <div className={'text'}>TEKKEN 7</div>
                    </div>
                </div>
                <div class="card">
                    <p>21 July 2021 - 24th July 2021</p>
                    <p>Double Eliminaton Brackets</p>
                    <p>Silver Bird Galleria, Ikoyi Lagos.</p>
                    <p>Offline</p>
                </div>
                <div className="services__container image">
                    <img src="img/ns4.png" alt="FIrewood" />
                    <div className="overlay">
                        <div className={'text'}>NARUTO NINJA STORM 4</div>
                    </div>
                </div>
                <div class="card">
                    <p>21 July 2021 - 24th July 2021</p>
                    <p>Double Eliminaton Brackets</p>
                    <p>Silver Bird Galleria, Ikoyi Lagos.</p>
                    <p>Offline</p>
                </div>
                <div className="services__container image">
                    <img src="img/mk.png" alt="FIrewood"/>
                    <div className="overlay">
                        <div className={'text'}>UM11K</div>
                    </div>
                </div>
                <div class="card">
                    <p>21 July 2021 - 24th July 2021</p>
                    <p>Double Eliminaton Brackets</p>
                    <p>Silver Bird Galleria, Ikoyi Lagos.</p>
                    <p>Offline</p>
                </div>
            </div> */}
        <div className='mission'>
            <div>
                <h2>JOIN OUR COMMUNITY</h2>
                <div className="mission-text">
                    <h3>We aim to keep things simple for your team, with plenty more to explore </h3>
                </div>  
            </div>
            <div className="community image">
                <img src="img/community.png" alt="community" />
            </div> 
            <div className="try">
                <a href="/create">Manage Brackets</a>
                <a href="/create">Open Tournaments</a> 
            </div>
            <div className="sign">
                <a href="#">Sign Up</a>
            </div>
        </div>
        <div className="drop">
                <div className="explore">
                    <div>
                        <div className="bold">  MANGO</div>
                        <div className='thin'>MOUNTAIN</div>
                        {/* <div className="image logo"><img src="/img/mango.png" alt="database" /></div>      */}
                    </div>
                    <div className='copyright'>
                        <p>Copyright &copy; 2020 Firewood Inc.<br/> All rights reserved.</p>
                    </div>
                </div>
                <div className="explore">
                    <h5>EXPLORE</h5> 
                    <li>Tournament Generator</li>
                    <li>Commentary</li>
                    <li>Live Streaming</li>
                    <li>Coaching</li>
                </div>  
                <div className="explore">
                    <h5>RESOURCES</h5> 
                    <li>Knowledge Base</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Content</li>
                </div> 
                <div className="explore">
                    <h5>CONTACT</h5> 
                    <li>Advertise</li>
                    <li>Blog</li>
                    <li>Social Media</li>
                    <li>Telepone</li>
                </div>
            </div>
            <div className="logo">
                <div className="image">
                    <img src="img/mango.png" />
                </div>
                <div className="image">
                    <img src="img/dreamhack.png" />
                </div>
                <div className="image">
                    <img src="img/kumite.png" />
                </div>
                <div className="image">
                    <img src="img/evo.png" />
                </div>
            </div>
        </div>
);

