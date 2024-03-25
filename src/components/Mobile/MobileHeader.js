import React from 'react';
import logo from '../../assets/logo.svg';
import {header} from '../../store/styles';
import MobileSearch from './MobileSearch';
import MobileFilterButton from './MobileSortButton';


const MobileHeader = () => {
  return (
      <div className="fixed top-0 right-0 left-0 z-50">
        <div className="py-4 bg-[#ffcca7] shadow-[0px_8px_16px_-8px_#00000020] flex justify-center w-full">
          <div className="flex items-center gap-2">
            <img src={logo} alt="CookieStore" width="32"/>
            <div className={header.hr}></div>
            <MobileSearch/>
            <MobileFilterButton/>
          </div>
        </div>
      </div>
  );
}

export default MobileHeader;