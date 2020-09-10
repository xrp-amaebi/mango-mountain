import React from 'react';
import { Link } from 'react-router-dom';
import SelectForm from './SelectForm';


export const Header = () => {
    return (
        <div className={'content-container'}>
            <header className={'header header__content'}>
                <div className={'profile'}></div>
                <Link className={'header__title'} to='/'>HOME</Link>
                <Link className={'header__title'} to='/guides'>GUIDES</Link>
                <Link className={'header__title'} to='/tierlist'>TIERLIST</Link>
                <Link className={'header__title'} to='/about'>ABOUT</Link>
                <SelectForm />
            </header>
        </div>
    );  
};
