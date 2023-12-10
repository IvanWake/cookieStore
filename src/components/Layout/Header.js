import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMagnifyingGlass, 
    faSliders,
    faCartShopping
 } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.svg';
import { header } from '../../store/styles.js';

const Header = () => {
    return (
        <Fragment>
            <header className={header.header}>
                <div className={header.headerContainer}>
                    <div className={header.headerDiv}>
                        <img src={logo} alt="CookieStore" width="32" />
                        <div className={header.hr}></div>
                        <div className={header.search}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={header.searchI} />
                            <input type="text" placeholder="Search..." className={header.searchInput} />
                        </div>
                        <button className={header.button}><FontAwesomeIcon icon={faSliders}/> Filter</button>
                    </div>

                    <div className={header.headerDiv}>
                        <button className={header.button} id="cart"><FontAwesomeIcon icon={faCartShopping}/> Cart</button>
                        <div className={header.profile}>
                            <div className={header.hr}></div>
                            <img className={header.profileImage} src="https://avatars.githubusercontent.com/u/45458770?v=4"
                                width="32" alt="profile" />
                            <div className={header.profileWrapper}>
                                <div className="profile-info">
                                    <img className="profile-image"
                                        src="https://avatars.githubusercontent.com/u/45458770?v=4"
                                        width="32" alt="profile" />
                                    <div className="info">
                                        <div className="name">Cookie Shop</div>
                                        <div className="email">cookieShop@mail.ru</div>
                                    </div>
                                </div>
                                <div className="link"><i className="fa-solid fa-list-ul"></i> My orders</div>
                                <div className="link"><i className="fa-solid fa-map-location-dot"></i> My addresses
                                </div>
                                <div className="link"><i className="fa-solid fa-gear"></i> Settings</div>
                                <div className="link"><i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;