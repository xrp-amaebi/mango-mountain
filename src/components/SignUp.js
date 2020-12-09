import React from 'react';
import { connect } from 'react-redux';


export const SignUp = (props) => {
    return( 
        <div className="signup_page">
            <div className='signup__container'>
                <div>
                    <div id="logo" className='thin'>MANGO | MOUNTAIN</div>
                    <h1><span class="create-account-text">Create your User Account</span></h1>
                    <div className="field-container">
                        <div className="field-name">
                            <input type="text" placeholder="First name" />
                            <div id='lastname'></div><input type="text" placeholder="Last name" />
                        </div>
                       
                        <div className="field-name">
                            <input type="text" placeholder="Tag - Username" />
                            <div id="email"><input type="text" placeholder="@gmail" /></div>
                        </div>
                        <div className='username'>You can use letters, numbers and periods</div>
                        
                        <div>
                            <a href="#" className="next-input">Try some brackets anonymously</a>
                        </div>
                        <div className='password'>
                            <div className="field-name">
                                <input type="password" placeholder="Password" />
                                <div id='confirm'><input type="password" placeholder="Confirm" /></div>
                                {/* <div className='icon'>
                                    <i className="material-icons">visibility</i>
                                </div> */}
                            </div> 
                            <div className="username">Use 8 or more characters with a mix of letters, numbers & symbol.</div>
                        </div>
                    </div>
                    <div className="accounts-redirect">
                        <div>
                            <a href="#" className="next-input">Log in instead</a>
                        </div>
                        <div>
                            <a href="#" className="next-field">Next</a>
                        </div>
                    </div>
                </div>
                <div className="account-name">
                    <div>
                        <figure className='figure'>
                            <img src="img/account.svg" alt="accounts" width="244" height="244"/>
                            <figcaption>
                                One Account to manage all your Brackets.
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
            <div className='language'>
                <div className='privacy'>
                    <div>
                        <form action="submit">
                            <select className='language-form'>
                                <option value="default">English (United States)</option>
                                <option value="german">German</option>
                                <option value="french">French</option>
                                <option value="french">Korean</option>
                            </select>
                        </form>
                    </div>
                    <div id="privacy">
                        <span><a href="#">Help</a></span>
                        <span><a href="#">Privacy</a></span>
                        <span><a href="#">Terms</a></span>
                    </div>
                </div>
            </div>   
        </div>
    );
};