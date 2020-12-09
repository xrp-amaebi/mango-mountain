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
                            <div><input type="text" placeholder="First name" /></div>
                            <div className='right'><input type="text" placeholder="Last name" /></div>
                        </div>
                        <div className='field-username'>
                            <div className="field-name">
                                <div><input type="text" placeholder="Username" /></div>
                                <div className='right'><input type="text" placeholder="@gmail" /></div>
                            </div>
                            <div className='username'>You can use letters, numbers and periods</div>
                        </div>
                        <div>
                            <a href="#" className="next-input">Try some brackets anonymously</a>
                        </div>
                        <div className='password'>
                            <div className="field-name">
                                <input type="password" placeholder="Password"/>
                                <input type="password" placeholder="Confirm"/>
                                <div className='icon'>
                                    <i className="material-icons">visibility</i>
                                </div>
                            </div> 
                            <div className="username">Use 8 or more characters with a mix of letters, numbers & symbol.</div>
                        </div>
                    </div>
                    <div className="accounts-redirect">
                        <div>
                            <a href="#" className="next-input" >Log in instead</a>
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
                <div>
                    <form action=""></form>
                </div>
                <div>
                    <span>Help</span>
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </div>
        </div>
    );
};