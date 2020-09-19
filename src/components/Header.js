import React from 'react';
import { Link } from 'react-router-dom';
import Controller from './SelectForm';


export const Header = () => {
    return (
        <div className={'content-container'}>
            <header className={'header header__content'}>
                <Link className={'header__title'} to='/'>HOME</Link>
                <Link className={'header__title'} to='/guides'>GUIDES</Link>
                <Link className={'header__title'} to='/tierlist'>TIERLIST</Link>
                <Link className={'header__title'} to='/about'>ABOUT</Link>
            </header>
        </div>
    );  
};
