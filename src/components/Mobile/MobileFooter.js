import {
  faCartShopping,
  faHouse,
  faListUl, faMapLocationDot,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {profile} from '../../store/styles';


const MobileFooter = () => {
  return (
      <div className="fixed bottom-0 right-0 left-0">
        <div className="py-4 bg-[#ffcca7] flex gap-4 justify-center items-center justify-between px-4 w-full">
          <div className="text-white active:scale-90" id="cart">
            <FontAwesomeIcon icon={faHouse} size="xl"/>
          </div>
          <div className="text-white active:scale-90" id="cart">
            <FontAwesomeIcon icon={faCartShopping} size="xl"/>
          </div>
          <div className="text-white active:scale-90" id="cart">
            <FontAwesomeIcon icon={faMapLocationDot} size="xl"/>
          </div>
          <div className="text-white active:scale-90" id="cart">
            <FontAwesomeIcon icon={faListUl} size="xl"/>
          </div>
          <div className="text-white active:scale-90" id="cart">
            <FontAwesomeIcon icon={faUser} size="xl"/>
          </div>
        </div>
      </div>
  );
}

export default MobileFooter;