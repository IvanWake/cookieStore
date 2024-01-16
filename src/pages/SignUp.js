import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [passIsVisible, setPassIsVisible] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(faEye);

    const submitHandler = (e) => {
        e.preventDefault();
    }

    const onHideHandler = () => {
        setPassIsVisible(prevState => !prevState);
        setEyeIcon(passIsVisible ? faEye : faEyeSlash)
    }

    return (
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">

            {/* Login component */}
            <div className="flex shadow-md">
                {/* SignUp banner */}
                <div className="flex flex-wrap content-center justify-center overflow-hidden rounded-r-md w-[24rem] h-[32rem]">
                    <img className="w-full bg-center bg-no-repeat bg-cover rounded-r-md" src="https://img.cookiestore.ru/cat.jpg" alt='img'/>
                </div>
                {/* Login form */}
                <div className="flex flex-wrap content-center justify-center rounded-l-md bg-white w-[24rem] h-[32rem]">
                    <div className="w-72">
                        {/* Heading */}
                        <h1 className="text-xl font-semibold">Welcome back</h1>
                        <small className="text-gray-400">Welcome back! Please enter your details</small>

                        {/* Form */}
                        <form className="mt-4" onSubmit={submitHandler}>
                            <div className="mb-3">
                                <label className="mb-2 block text-xs font-semibold">Email</label>
                                <input type="email" placeholder="Enter your email" className="block w-full rounded-md border border-gray-300 focus:border-[#ff9f5a] focus:outline-none focus:ring-1 focus:ring-[#ff9f5a] py-1 px-1.5 text-gray-500" />
                            </div>

                            <div className="mb-3">
                                <label className="mb-2 block text-xs font-semibold">Password</label>
                                <input type={passIsVisible ? "text" : "password"} placeholder="Enter your password" className="block w-full rounded-md border border-gray-300 focus:border-[#ff9f5a] focus:outline-none focus:ring-1 focus:ring-[#ff9f5a] py-1 px-1.5 text-gray-500" />
                                <button onClick={onHideHandler}><FontAwesomeIcon icon={eyeIcon} /></button>
                            </div>

                            <div className="mb-3 flex flex-wrap content-center">
                                <input id="remember" type="checkbox" className="mr-1 checked:bg-[#ff9f5a]" /> <label for="remember" className="mr-auto text-xs font-semibold">I agree privacy policy</label>
                                <button className="text-xs font-semibold text-[#ff9f5a]">Forgot password?</button>
                            </div>

                            <div className="mb-3">
                                <button className="mb-1.5 block w-full text-center text-white bg-[#ff9f5a] hover:bg-[#ff9f5a80] transition ease-in duration-150 active:scale-95 px-2 py-1.5 rounded-md">Sign Up</button>
                            </div>
                        </form>

                        {/* Footer */}
                        <div className="text-center">
                            <span className="text-xs text-gray-400 font-semibold">Already have account? </span>
                            <Link to="/login">
                                <button type='button' className="text-xs font-semibold text-[#ff9f5a] underline">Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SignUp;