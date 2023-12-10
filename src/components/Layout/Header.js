import React, { Fragment } from 'react';
import logo from '../../assets/logo.svg';
const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="header">
                    <div>
                        <img src={logo} alt="CookieStore" width="32" />
                            <div className="hr"></div>
                            <div className="search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="Search..."/>
                            </div>
                            <button className="orange-btn"><i className="fa-solid fa-sliders"></i> Filter</button>
                    </div>

                    <div>
                        <button className="orange-btn" id="cart"><i className="fa-solid fa-cart-shopping"></i> Cart
                        </button>
                        <div className="profile">
                            <div className="hr"></div>
                            <img className="profile-image" src="https://avatars.githubusercontent.com/u/45458770?v=4"
                                 height="32" alt="Хуй"/>
                            <div className="profile-wrapper">
                                <div className="profile-info">
                                    <img className="profile-image"
                                         src="https://avatars.githubusercontent.com/u/45458770?v=4"
                                         height="32" alt="хуй"/>
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