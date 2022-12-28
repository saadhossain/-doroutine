import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex justify-center my-8'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-primary text-white font-poppins">
                <h1 className="my-3 text-4xl font-bold">Create an Account</h1>
                <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                        </div>
                        <div>
                            <label for="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-actionbtn text-white">Sign Up</button>
                        <p className="px-6 text-sm text-center flex gap-2">Don't have an account yet?
                            <Link to='/login' className='font-semibold text-actionbtn'>Login Now</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;