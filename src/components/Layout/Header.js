import React, { Fragment, useState } from 'react';
import { useCart } from '../../store/cart-store';
import ProfileWrapper from "./ProfileWrapper";
import { header } from '../../store/styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.svg';

const Header = (props) => {
    const [isProfileVisible, setIsProfileVisible] = useState(false);

    const setIsProfileVisibleHandler = () => setIsProfileVisible(prevState => !prevState);

    const setCartVisibility = useCart(state => state.changeVisibilty);
    const setIsCartVisible = useCart(state => state.isCartVisible);
    const setCartVisibilityHandler = () => setCartVisibility(!setIsCartVisible);

    return (
        <Fragment>
            <header className={header.header}>
                <div className={header.headerContainer}>
                    <div className={header.headerDiv}>
                        <img src={logo} alt="CookieStore" width="32"/>
                        <div className={header.hr}></div>
                        <div className={header.search}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={header.searchI}/>
                            <input type="text" placeholder="Search..." className={header.searchInput}/>
                        </div>
                        <button className={header.button}><FontAwesomeIcon icon={faSliders}/> Filter</button>
                    </div>

                    <div className={header.headerDiv}>
                        <button className={header.button} id="cart" onClick={setCartVisibilityHandler}><FontAwesomeIcon icon={faCartShopping}/> Cart</button>
                        <div className={header.profile}>
                            <div className={header.hr}></div>
                            <img className={header.profileImage}
                                 src="https://avatars.githubusercontent.com/u/45458770?v=4"
                                 width="32" alt="profile" onClick={setIsProfileVisibleHandler}/>
                            {isProfileVisible && <ProfileWrapper/>}
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;