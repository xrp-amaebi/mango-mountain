import React from 'react';
import { Link } from 'react-router-dom';
import Controller from './SelectForm';


export const Header = () => {
    return (
    <div className="header">
        <div className={'menu-wrap'}>
            <input type="checkbox" className="toggler" />
            <div className="hamburger"><div></div></div>
            <div className="menu">
                <div>
                    <div className={'header'}>
                        <div className="header__content">
                            <Link className={'header__title'} to='/'>HOME</Link>
                            <Link className={'header__title'} to='/guides'>GUIDES</Link>
                            <Link className={'header__title'} to='/tierlist'>TIERLIST</Link>
                            <Link className={'header__title'} to='/about'>ABOUT</Link>
                            <Link className={'header__title'} to='/terminator'>KHARACTER</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );  
};
