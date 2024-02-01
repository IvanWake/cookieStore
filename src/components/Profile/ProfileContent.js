import { useAuth } from '../../store/auth-store';
import { AnimatePresence } from 'framer-motion';
import AuthButtons from '../Auth/AuthButtons';
import Preloader from '../Layout/Preloader';
import Profile from './Profile';

const ProfileContent = () => {
    const isUserAuth = useAuth(state => state.isUserAuth);
    const isUserLoading = useAuth(state => state.isUserLoading);

    return (
        <>
            {
                isUserLoading ?
                    isUserAuth ?
                        <AnimatePresence>
                            <Profile />
                        </AnimatePresence> :
                        <AnimatePresence>
                            <AuthButtons/>
                        </AnimatePresence> :
                    <AnimatePresence>
                        <Preloader width={'32px'} />
                    </AnimatePresence>

            }
        </>
    );
}

export default ProfileContent;