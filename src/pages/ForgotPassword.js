import { sendPasswordResetEmail } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
  const { push } = useHistory();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onBlur',
  })

  const resetPasswordHandler = async (data) => {
    sendPasswordResetEmail(auth, data.resetEmail).then((res) => {
      alert("Check your Email =)");
      reset();
      push('/login');
    });
  }

  const onSubmitHandler = (data) => {
    if (isValid) {
      resetPasswordHandler(data);
    }
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
                  <h1 className="text-xl font-semibold">Reset Password</h1>
                  <small className="text-gray-400"></small>

                  {/* Form */}
                  <form className="mt-4" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="mb-3">
                      <div className="flex justify-between">
                        <label
                            className="mb-2 block text-sm font-semibold"
                            htmlFor="lEmail">Email</label>
                        {
                            errors.resetEmail &&
                            <p className="text-[#ff5a5a] text-[.8rem] text-right">{errors.resetEmail.message}</p>
                        }
                      </div>

                      <input
                          id="lEmail"
                          type="email"
                          placeholder="Enter your email"
                          className="block w-full rounded-md border border-gray-300 focus:border-[#ff9f5a] focus:outline-none focus:ring-1 focus:ring-[#ff9f5a] py-1 px-1.5 text-gray-500"
                          {...register('resetEmail', {
                            required: 'Fill the field',
                            validate: (value) => /\S+@\S+\.\S+/.test(
                                value),
                          })}
                      />
                    </div>

                      <div className="mb-3">
                        <button
                            className="mb-1.5 block w-full text-center text-white bg-[#ff9f5a] hover:bg-[#ff9f5a80] transition ease-in duration-150 active:scale-95 px-2 py-1.5 rounded-md disabled:bg-[#ff9f5a80] disabled:cursor-not-allowed disabled:active:scale-100"
                            disabled={errors.resetEmail}
                        >
                          Reset Password
                        </button>
                      </div>
                  </form>

                  <div className="space-x-4">
                    <Link to="/home"><FontAwesomeIcon icon={faArrowLeft}/> Home</Link>
                  </div>
                </div>
              </div>

              <div
                  className="flex flex-wrap content-center justify-center overflow-hidden rounded-r-md w-[24rem] h-[32rem] bg-white">
                <img
                    className="w-full bg-center bg-no-repeat bg-cover rounded-r-md "
                    src="https://i.pinimg.com/564x/d9/e2/bf/d9e2bf871d78d35e922110e18ebeac1f.jpg"
                    alt="img"/>
              </div>
            </div>
          </div>
        </motion.div>
      </>
);
}

export default ForgotPassword;