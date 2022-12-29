import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BsGoogle } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { userLogin, googleLogin } = useContext(AuthContext)
    //Redirect User to dashboard after Login
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/addtask'
    //User Login using email and password
    const handleUserLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then((result) => {
                toast.success('You have logged in Successfully...')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    //User login using google account
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                toast.success('Google Login successfull...')
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='flex justify-center my-8'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-primary text-white font-poppins">
                <h1 className="my-3 text-4xl font-bold">Login Your Account</h1>
                <form onSubmit={handleUserLogin} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-actionbtn text-white">Sign in</button>
                        <p className="px-6 text-sm text-center flex gap-2">Don't have an account yet?
                            <Link to='/register' className='font-semibold text-actionbtn'>Register Now</Link>
                        </p>
                    </div>
                </form>
                <div className='flex justify-center bg-gray-800 my-5 py-2 rounded duration-300 ease-in-out hover:bg-actionbtn'>
                    <button
                        onClick={handleGoogleLogin}
                        className='flex items-center gap-1'><BsGoogle></BsGoogle> Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;