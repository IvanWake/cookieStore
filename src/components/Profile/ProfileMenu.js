import React from "react";
import { profile } from "../../store/styles";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import { useAuth } from "../../store/auth-store";
import {
    faListUl,
    faMapLocationDot,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

const ProfileMenu = (props) => {
    const setIsUserAuth = useAuth(state => state.setIsUserAuth);


    const handleLogOut = () => {
        setIsUserAuth(false);
        signOut(auth);
    }
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
            <div className={profile.link} onClick={handleLogOut}><FontAwesomeIcon icon={faArrowRightFromBracket} className={profile.i} /> Log out</div>
        </div>
    );
}

export default ProfileMenu;