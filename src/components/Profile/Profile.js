import { useState } from "react";
import { useAuth } from '../../store/auth-store';
import { header } from '../../store/styles.js';
import ProfileMenu from "./ProfileMenu";

const Profile = () => {
    const user = useAuth(state => state.userData);
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const setIsProfileVisibleHandler = () => setIsProfileVisible(prevState => !prevState);

    return (
        <div className={header.profile}>
            <div className={header.hr}></div>
            <img className={header.profileImage}
                src="https://img.cookiestore.ru/Cookies/cookie.png"
                width="32" alt="profile" onClick={setIsProfileVisibleHandler} />
            {
              isProfileVisible &&
                <ProfileMenu
                    email={user.email}
                    uid={user.id}
                />
            }
        </div>
    );
}

export default Profile;