import React from 'react';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { Toast } from "toaster-js";

export const HomePage = (props) => (
    <div className={'page'}>
        {/* <Header /> */}
        <div className="mango">
            <div>
                <h4>MANGO | MOUNTAIN</h4>
                <div>EMPOWERING ESPORTS</div>
            </div>
        </div>
        <div className='mission'>
            <div className="mission-text">
                <div className="image">
                    <img src="/web/world.png" alt=""/>
                </div>
                <h4>JOIN OUR COMMUNITY</h4>
                <div>We aim to keep things simple for your team, with plenty more to explore</div>  
            </div>
            <div className="book">
                <a href="/create" className="book-link">{"{ Manage Brackets }"}</a>
            </div>
            <div className="community image">
                <img src="img/community.png" alt="community" />
            </div> 
            <div className="sign">
                <a href="#"><i className="material-icons">subdirectory_arrow_right</i> Sign Up</a>
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
                <div className="explore">
                    <h6>TOURNAMENT</h6>
                    <li>Guides</li>
                    <li>Brackets</li>
                    <li>Overview</li>
                    <li>Standings</li>
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
                    <img src="img/DreamHack.png" />
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

