import { useAuth } from '../../store/auth-store';
import AuthButtons from '../Auth/AuthButtons';
import Preloader from '../Layout/Preloader';
import Profile from './Profile';

const ProfileContent = () => {
    const isUserAuth = useAuth(state => state.isUserAuth);
    const isUserLoading = useAuth(state => state.isUserLoading);

    return (
        <>
            {
                isUserLoading ? isUserAuth ? <Profile /> : <AuthButtons /> : <Preloader />
            }
        </>
    );
}

export default ProfileContent;