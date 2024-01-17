import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [passIsVisible, setPassIsVisible] = useState(false);
    const [eyeIcon, setEyeIcon] = useState(faEye);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm({
        mode: 'onBlur',
    })

    const onSubmitHandler = (e) => {
        if (isValid) {
            reset();
        }
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
                <div className="flex flex-wrap content-center justify-center overflow-hidden rounded-l-md w-[24rem] h-[32rem]">
                    <img className="w-full bg-center bg-no-repeat bg-cover rounded-l-md" src="https://img.cookiestore.ru/cat.jpg" alt='img' />
                </div>
                {/* Login form */}
                <div className="flex flex-wrap content-center justify-center rounded-r-md bg-white w-[24rem] h-[32rem]">
                    <div className="w-72">
                        {/* Heading */}
                        <h1 className="text-xl font-semibold">Join Us</h1>
                        <small className="text-gray-400">Register! Please enter your details</small>

                        {/* Form */}
                        <form className="mt-4" onSubmit={handleSubmit(onSubmitHandler)}>
                            <div className="mb-3">
                                <label className="mb-2 block text-sm font-semibold" htmlFor='sEmail'>Email</label>
                                <input
                                id='sEmail'
                                type="email"
                                placeholder="Enter your email"
                                className="block w-full rounded-md border border-gray-300 focus:border-[#ff9f5a] focus:outline-none focus:ring-1 focus:ring-[#ff9f5a] py-1 px-1.5 text-gray-500"
                                {...register('signUpEmail', {
                                    required: 'Fill the field',
                                    validate: (value) => /\S+@\S+\.\S+/.test(value),
                                })}
                                />
                                {
                                    errors.signUpEmail &&
                                    <p className='text-[#c01400] text-[.8rem]'>{errors.signUpEmail.message}</p>
                                }
                            </div>

                            <div className="mb-3">
                                <label className="mb-2 block text-sm font-semibold" htmlFor='sPass'>Password</label>
                                <div className='flex items-center relative rounded-[0.6rem] bg-white'>
                                    <input
                                        id='sPass'
                                        type={passIsVisible ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="block w-full rounded-md border border-gray-300 focus:border-[#ff9f5a] focus:outline-none focus:ring-1 focus:ring-[#ff9f5a] py-1 px-1.5 text-gray-500"
                                        {...register('signUpPass', {
                                            required: 'Fill the field',
                                            minLength: {
                                                value: 8,
                                                message: "Password must be more then 8 characters",
                                            }
                                        })}
                                    />
                                    <button className="absolute top-[5px] right-2" onClick={onHideHandler}><FontAwesomeIcon icon={eyeIcon} /></button>
                                </div>
                                {
                                    errors.signUpPass &&
                                    <p className='text-[#c01400] text-[.8rem]'>{errors.signUpPass.message}</p>
                                }
                            </div>



                            <div className="mb-3 flex flex-wrap content-center">
                                <input id="remember" type="checkbox" className="mr-1 checked:bg-[#ff9f5a]" /> <label htmlFor="remember" className="mr-auto text-xs font-semibold">I agree privacy policy</label>
                                <button className="text-xs font-semibold text-[#ff9f5a]">Forgot password?</button>
                            </div>

                            <div className="mb-3">
                                <button className="mb-1.5 block w-full text-center text-white bg-[#ff9f5a] hover:bg-[#ff9f5a80] transition ease-in duration-150 active:scale-95 px-2 py-1.5 rounded-md disabled:bg-[#ff9f5a80] disabled:cursor-not-allowed disabled:active:scale-100" disabled={errors.signUpEmail || errors.signUpPass}>Sign Up</button>
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