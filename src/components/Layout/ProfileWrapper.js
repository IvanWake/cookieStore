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
            <div className={profile.profileInfo}>
                <img className={profile.profileImage}
                    src="https://avatars.githubusercontent.com/u/45458770?v=4"
                    width="32" alt="profile" />
                <div className={profile.email}>
                    <div>Cookie Shop</div>
                    <div className={profile.email}>cookieShop@mail.ru</div>
                </div>
            </div>
            <div className={profile.link}><FontAwesomeIcon icon={faListUl} className={profile.i}/> My orders</div>
            <div className={profile.link}><FontAwesomeIcon icon={faMapLocationDot} className={profile.i}/> My addresses
            </div>
            <div className={profile.link}><FontAwesomeIcon icon={faGear} className={profile.i}/> Settings</div>
            <div className={profile.link}><FontAwesomeIcon icon={faArrowRightFromBracket} className={profile.i}/> Log out
            </div>
        </div>
    );
}

export default ProfileWrapper;