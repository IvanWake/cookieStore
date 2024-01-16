import { useState } from "react";
import { header } from '../../store/styles.js';
import ProfileMenu from "./ProfileMenu";

const Profile = () => {

    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const setIsProfileVisibleHandler = () => setIsProfileVisible(prevState => !prevState);

    return (
        <div className={header.profile}>
            <div className={header.hr}></div>
            <img className={header.profileImage}
                src="https://avatars.githubusercontent.com/u/45458770?v=4"
                width="32" alt="profile" onClick={setIsProfileVisibleHandler} />
            {isProfileVisible && <ProfileMenu />}
        </div>
    );
}

export default Profile;