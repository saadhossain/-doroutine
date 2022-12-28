import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { logOut, user } = useContext(AuthContext)
    //User Log out functionality
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error('You have logged out...')
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <Header></Header>
            <div className='flex gap-5 w-11/12 lg:w-10/12 mx-auto my-5'>
                <div className='flex flex-col justify-between h-[60vh] bg-gray-100 p-5 rounded-lg sticky top-5 font-poppins'>
                    <div>
                        <div className='flex gap-2 items-center border-b-2 border-gray-300 pb-1'>
                            <img src={user?.photoURL} alt={user?.displayName} className='w-10 h-10 rounded-full' />
                            <div>
                                <h2 className='text-xl font-semibold font-bigshoulder'>{user?.displayName}</h2>
                                <h4>{user?.email}</h4>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleLogOut} className='doRoutineBtn'>Signout</button>
                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;