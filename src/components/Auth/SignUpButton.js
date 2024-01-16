import { auth } from '../../store/styles';
import { Link } from 'react-router-dom';

const SignUpButton = () => {
    return (
        <Link to={'/signup'}>
            <button className={auth.signUp}>Sign Up</button>
        </Link>
    );
}

export default SignUpButton;