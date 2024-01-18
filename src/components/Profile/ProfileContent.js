import { useAuth } from '../../store/auth-store';
import AuthButtons from '../Auth/AuthButtons';
import Profile from './Profile';

const ProfileContent = () => {
    const isUserAuth = useAuth(state => state.isUserAuth);
    return (
        <>
            {
                isUserAuth ? <Profile /> : <AuthButtons />
            }

        </>
    );
}

export default ProfileContent;