import React, { useState } from 'react';
import { useCart } from '../../store/cart-store';
import { header } from '../../store/styles.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import ProfileContent from "../Profile/ProfileContent.js";
import CartBadge from './CartBadge.js';
import FilterButton from './SortButton.js';
import Search from './Search.js';
import logo from '../../assets/logo.svg';

const Header = (props) => {

    const setCartVisibility = useCart(state => state.changeVisibilty);
    const setIsCartVisible = useCart(state => state.isCartVisible);
    const setCartVisibilityHandler = () => setCartVisibility(!setIsCartVisible);

    return (
        <>
            <header className={header.header}>
                <div className={header.headerContainer}>
                    <div className={header.headerDiv}>
                        <img src={logo} alt="CookieStore" width="32" />
                        <div className={header.hr}></div>
                        <Search />
                        <FilterButton />
                    </div>

                    <div className={header.headerDiv}>
                        <button className={header.button} id="cart" onClick={setCartVisibilityHandler}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            <CartBadge />
                        </button>
                        <ProfileContent/>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;