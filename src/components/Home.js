import React from 'react';
import { Header } from './Header';
import { Link } from 'react-router-dom';

export const HomePage = (props) => (
    <div className={'page'}>
        <Header />
        <div className="mango">
                <div>
                    <h2>MANGO MOUNTAIN</h2>
                    <p>Empowering the Esports Community</p>
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
            <div className="mission-text">
                <div className="image">
                    <img src="/web/world.png" alt=""/>
                </div>
                <h4>JOIN OUR COMMUNITY</h4>
                <div>We aim to keep things simple for your team, with plenty more to explore</div>  
            </div>
            <div className="book">
                <Link to="/create" className="book-link"><i className="material-icons">date_range</i></Link>
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
                    <h6>EXPLORE</h6>
                    <li><a href="/scorpion">UM11K</a></li> 
                    <li><a href="/create">Tekken</a></li>
                    <li>Street Fighter V</li>
                    <li>Call Of Duty Mobile</li>
                </div>  
                <div className="explore">
                    <h6>RESOURCES</h6> 
                    <li>Coaching</li>
                    <li>Commentary</li>
                    <li>Privacy</li>
                    <li>Content</li>
                </div> 
                <div className="explore">
                    <h6>CONTACT</h6>
                    <li>Advertise</li>
                    <li>Blog</li>
                    <li>Social Media</li>
                    <li>Telepone</li>
                </div>
            </div>
            <div className="footer-mountain">
                <div>
                    <div className='thin'>MANGO | MOUNTAIN</div>
                </div>
                <div className='copyright'>
                    <div>Copyright &copy; 2020 Firewood Inc.</div>
                    <div>All rights reserved.</div>
                </div>
            </div>
            <div className="logo">
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

