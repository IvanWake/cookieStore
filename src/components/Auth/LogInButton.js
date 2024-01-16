import { auth } from '../../store/styles';
import { Link } from 'react-router-dom';

const LogInButton = () => {
    return (
        <Link to={'/login'}>
            <button className={auth.logIn}>Log In</button>
        </Link>
    );
}

export default LogInButton;