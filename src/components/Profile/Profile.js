import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
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
            <motion.img
                initial={{height: 0, opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                style={{overflow: 'hidden'}}
                transition={{ duration: .5 }}
                className={header.profileImage}
                src="https://img.cookiestore.ru/Cookies/cookie.png"
                width="32" alt="profile"
                onClick={setIsProfileVisibleHandler}
            />
            {
                isProfileVisible &&
                <AnimatePresence><ProfileMenu email={user.email}/></AnimatePresence>
            }
          </div>
    );
}

export default Profile;