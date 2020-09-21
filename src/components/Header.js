import React from 'react';
import { Link } from 'react-router-dom';
import Controller from './SelectForm';


export const Header = () => {
    return (
        <div className={'menu-wrap'}>
            <input type="checkbox" className="toggler"/>
            <div className="hamburger"><div></div></div>
            <div className="menu">
                <div>
                    <div className={'header'}>
                        <div className="header__content">
                            <Link className={'header__title'} to='/'>HOME</Link>
                            <Link className={'header__title'} to='/guides'>GUIDES</Link>
                            <Link className={'header__title'} to='/tierlist'>TIERLIST</Link>
                            <Link className={'header__title'} to='/about'>ABOUT</Link>
                        </div>
                        {/* <ul className={"header__content"}>
                            <li><Link className={'header__title'} to='/'>HOME</Link></li>
                            <li><Link className={'header__title'} to='/guides'>GUIDES</Link></li>
                            <li><Link className={'header__title'} to='/tierlist'>TIERLIST</Link></li>
                            <li><Link className={'header__title'} to='/about'>ABOUT</Link></li>  
                        </ul> */}
                    </div>
                </div>
            </div>
            {/* <header className={'header header__content'}>
                <Link className={'header__title'} to='/'>HOME</Link>
                <Link className={'header__title'} to='/guides'>GUIDES</Link>
                <Link className={'header__title'} to='/tierlist'>TIERLIST</Link>
                <Link className={'header__title'} to='/about'>ABOUT</Link>
            </header> */}
        </div>
    );  
};
