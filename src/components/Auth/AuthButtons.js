import { auth } from '../../store/styles';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';

const AuthButtons = () => {
    return (
        <div className={auth.buttonsWrapper}>
            <LogInButton />
            <SignUpButton />
        </div>
    );
}

export default AuthButtons;