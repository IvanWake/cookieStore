import { auth } from '../../store/styles';
import { motion } from 'framer-motion';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';

const AuthButtons = () => {
    return (
        <motion.div
            initial={{height: 75, opacity: 0}}
            animate={{height: 'auto', opacity: 1}}
            style={{overflow: 'hidden'}}
            transition={{ duration: .5 }}
            className={auth.buttonsWrapper}>
            <LogInButton />
            <SignUpButton />
        </motion.div>
    );
}

export default AuthButtons;