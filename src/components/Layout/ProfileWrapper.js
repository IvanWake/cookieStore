import React from "react";
import { profile } from "../../store/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faListUl,
    faMapLocationDot,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const ProfileWrapper = () => {
    return (
        <div className={profile.profileWrapper}>
            <div className="profile-info">
                <img className="profile-image"
                     src="https://avatars.githubusercontent.com/u/45458770?v=4"
                     width="32" alt="profile" />
                <div className="info">
                    <div className="name">Cookie Shop</div>
                    <div className="email">cookieShop@mail.ru</div>
                </div>
            </div>
            <div className="link"><FontAwesomeIcon icon={faListUl} /> My orders</div>
            <div className="link"><FontAwesomeIcon icon={faMapLocationDot} /> My addresses
            </div>
            <div className="link"><FontAwesomeIcon icon={faGear} /> Settings</div>
            <div className="link"><FontAwesomeIcon icon={faArrowRightFromBracket} /> Log out
            </div>
        </div>
    );
}

export default ProfileWrapper;