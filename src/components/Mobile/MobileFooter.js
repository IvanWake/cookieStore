import {faCartShopping, faHouse} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {header} from '../../store/styles';
import CartBadge from '../Layout/CartBadge';
import MobileProfile from './MobileProfile';

const MobileFooter = () => {
  return (
      <div className="sticky bottom-0 py-4 bg-[#ffcca7] flex gap-4 justify-center justify-between px-4">
        <div className={header.button} id="cart">
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <div className={header.button} id="cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div>
          <MobileProfile />
        </div>
      </div>
  );
}

export default MobileFooter;