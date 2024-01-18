import React from "react";
import { profile } from "../../store/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faListUl,
    faMapLocationDot,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const ProfileMenu = (props) => {
    return (
        <div className={profile.profileWrapper}>
            <div className={profile.profileInfo}>
                <img className={profile.profileImage}
                    src="https://img.cookiestore.ru/Cookies/cookie.png"
                    width="32" alt="profile" />
                <div className={profile.email}>
                    <div className={profile.email}>{props.email}</div>
                </div>
            </div>
            <div className={profile.link}><FontAwesomeIcon icon={faListUl} className={profile.i} /> My orders</div>
            <div className={profile.link}><FontAwesomeIcon icon={faMapLocationDot} className={profile.i} /> My addresses</div>
            <div className={profile.link}><FontAwesomeIcon icon={faArrowRightFromBracket} className={profile.i} /> Log out</div>
        </div>
    );
}

export default ProfileMenu;