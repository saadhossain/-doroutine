import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { userRegister, updateUser } = useContext(AuthContext)

    const handleUserRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        const profileImage = form.profile.files[0]
        const formData = new FormData()
        formData.append('image', profileImage)
        const imgbbURL = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBBAPI}`
        fetch(imgbbURL, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                const profileImage = data.data.url;
                userRegister(email, password)
                    .then((result) => {
                        const user = result.user;
                        console.log(user);
                        updateUser(fullName, profileImage)
                            .then(() =>{})
                            .catch(err => console.error(err))
                        toast.success('Your Account Registration Successful...')
                        form.reset()
                    })
                    .catch(err => console.error(err))
            })
    }
    return (
        <div className='flex justify-center my-8'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-primary text-white font-poppins">
                <h1 className="my-3 text-4xl font-bold">Create an Account</h1>
                <form onSubmit={handleUserRegistration} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <div>
                            <label htmlFor="fullName" className="block mb-2 text-sm">Your Name</label>
                            <input type="text" name="fullName" id="fullName" placeholder="John Doe" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" name="password" id="password" placeholder="******" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                        </div>
                        <div>
                            <label htmlFor="profile" className="block mb-2 text-sm">Profile Picture</label>
                            <input type="file" name="profile" id="profile" className="w-full px-3 py-2 border rounded-md border-gray-white text-white" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-actionbtn text-white">Sign Up</button>
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