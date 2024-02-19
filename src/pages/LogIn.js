import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, dbFirestore} from '../firebase';
import { useAuth } from '../store/auth-store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import {doc, getDoc} from "firebase/firestore";
import {useCart} from "../store/cart-store";

const LogIn = () => {
    const [passIsVisible, setPassIsVisible] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(faEye);
    const [logInError, setLogInError] = useState('');
    const isUserAuth = useAuth(state => state.isUserAuth);
    const { setCartProductsAuthUser } = useCart();

    const setUser = useAuth(state => state.setUserData);
    const setIsUserAuth = useAuth(state => state.setIsUserAuth);
    const { push } = useHistory();

    useEffect(() => {
        isUserAuth && push("/home");
    }, [isUserAuth]);

    const getUserCart = async (uId) => {
        try {
            const docRef = doc(dbFirestore, 'carts', uId);
            const docSnap = await getDoc(docRef);
            if (docSnap.data().cart) {
                setCartProductsAuthUser(docSnap.data().cart);
            }
        } catch (error) {}
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onBlur',
    })

    const onLogin = async (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then(({ user }) => {
                setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                });
                setIsUserAuth(true);
                getUserCart(user.uid)
                reset();
                push('/home');
            }).catch(() => { setLogInError('Incorrect email or password') })
    }

    const onSubmitHandler = (data) => {
        if (isValid) {
            onLogin(data.loginEmail, data.loginPass);
        }
    }

    const onHideHandler = () => {
        setPassIsVisible(prevState => !prevState);
        setEyeIcon(passIsVisible ? faEye : faEyeSlash)
    }

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{height: 'auto', opacity: 1}}
                style={{overflow: 'hidden'}}
                transition={{duration: .5}}
            >
                <div
                    className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">

                    {/* Login component */}
                    <div className="flex shadow-md">
                        {/* Login form */}
                        <div
                            className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[32rem]">
                            <div className="w-72">
                                {/* Heading */}
                                <h1 className="text-xl font-semibold">Welcome
                                    back</h1>
                                <small className="text-gray-400">Welcome back!
                                    Please enter your details</small>

                                {/* Form */}
                                <form className="mt-4"
                                      onSubmit={handleSubmit(onSubmitHandler)}>
                                    <div className="mb-3">
                                        <div className="flex justify-between">
                                            <label
                                                className="mb-2 block text-sm font-semibold"
                                                htmlFor="lEmail">Email</label>
                                            {
                                                errors.loginEmail &&
                                                <p className="text-[#ff5a5a] text-[.8rem] text-right">{errors.loginEmail.message}</p>
                                            }
                                        </div>

                                        <input
                                            id="lEmail"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="block w-full rounded-md border border-gray-300 focus:border-[#ff9f5a] focus:outline-none focus:ring-1 focus:ring-[#ff9f5a] py-1 px-1.5 text-gray-500"
                                            {...register('loginEmail', {
                                                required: 'Fill the field',
                                                validate: (value) => /\S+@\S+\.\S+/.test(
                                                    value),
                                            })}
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <div className="flex justify-between">
                                            <label
                                                className="mb-2 block text-sm font-semibold"
                                                htmlFor="lPass">Password</label>
                                            {
                                                errors.loginPass &&
                                                <p className="text-[#ff5a5a] text-[.8rem] text-right">{errors.loginPass.message ||
                                                    logInError}</p>
                                            }
                                        </div>
                                        <div
                                            className="flex items-center relative rounded-[0.6rem] bg-white">
                                            <input
                                                id="lPass"
                                                type={passIsVisible
                                                    ? 'text'
                                                    : 'password'}
                                                placeholder="Enter your password"
                                                className="block w-full rounded-md border border-gray-300 focus:border-[#ff9f5a] focus:outline-none focus:ring-1 focus:ring-[#ff9f5a] py-1 px-1.5 text-gray-500"
                                                {...register('loginPass', {
                                                    required: 'Fill the field',
                                                    minLength: {
                                                        value: 8,
                                                        message: 'The minimum length is 8 characters',
                                                    },
                                                })}
                                            />
                                            <button type="button"
                                                    className="absolute top-[5px] right-2"
                                                    onClick={onHideHandler}>
                                                <FontAwesomeIcon
                                                    icon={eyeIcon}/>
                                            </button>
                                        </div>
                                    </div>

                                    <div
                                        className="mb-3 flex flex-wrap content-center">
                                        <input id="remember" type="checkbox"
                                               className="mr-1 checked:bg-[#ff9f5a]"/>
                                        <label htmlFor="remember"
                                               className="mr-auto text-xs font-semibold">Remember
                                            me</label>
                                        <button
                                            className="text-xs font-semibold text-[#ff9f5a]">Forgot
                                            password?
                                        </button>
                                    </div>

                                    <div className="mb-3">
                                        <button
                                            className="mb-1.5 block w-full text-center text-white bg-[#ff9f5a] hover:bg-[#ff9f5a80] transition ease-in duration-150 active:scale-95 px-2 py-1.5 rounded-md disabled:bg-[#ff9f5a80] disabled:cursor-not-allowed disabled:active:scale-100"
                                            disabled={errors.loginEmail ||
                                                errors.loginPass}>Log In
                                        </button>
                                    </div>
                                </form>

                                {/* Footer */}
                                <div className="text-center relative">
                                    <span
                                        className="text-xs text-gray-400 font-semibold">Don't have account? </span>
                                    <Link to="/signup">
                                        <button
                                            type="button"
                                            className="text-xs font-semibold text-[#ff9f5a] underline"
                                        >
                                            Sign Up
                                        </button>
                                    </Link>
                                    {
                                        logInError &&
                                        <p className="text-[#ff5a5a] text-[.8rem] absolute top-[30px] left-1/2 transform -translate-x-1/2">{logInError}</p>
                                    }
                                </div>
                                <div className="space-x-4">
                                    <Link to="/home"><FontAwesomeIcon icon={faArrowLeft} /> Home</Link>
                                </div>
                            </div>
                        </div>

                        {/* Login banner */}
                        <div
                            className="flex flex-wrap content-center justify-center overflow-hidden rounded-r-md w-[24rem] h-[32rem]">
                            <img
                                className="w-full bg-center bg-no-repeat bg-cover rounded-r-md -scale-x-100"
                                src="https://img.cookiestore.ru/cat.jpg"
                                alt="img"/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default LogIn;