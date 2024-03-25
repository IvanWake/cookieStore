import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../store/auth-store';
import { header } from '../../store/styles.js';
import MobileProfileMenu from "./MobileProfileMenu";

const MobileProfile = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const { userData } = useAuth(state => state.userData);
  const setIsProfileVisibleHandler = () => setIsProfileVisible(prevState => !prevState);

  return (
      <div className={header.profile}>
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
      </div>
  );
}

export default MobileProfile;