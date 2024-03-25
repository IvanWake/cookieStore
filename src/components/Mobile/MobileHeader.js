import React from 'react';
import logo from '../../assets/logo.svg';
import {header} from '../../store/styles';
import MobileSearch from './MobileSearch';
import MobileFilterButton from './MobileSortButton';


const MobileHeader = () => {
  return (
      <div className="py-4 bg-[#ffcca7] shadow-[0px_8px_16px_-8px_#00000020] flex justify-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="CookieStore" width="32"/>
          <div className={header.hr}></div>
          <MobileSearch />
          <MobileFilterButton />
        </div>
      </div>
  );
}

export default MobileHeader;