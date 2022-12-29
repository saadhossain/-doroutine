import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const { logOut, user, darkMode } = useContext(AuthContext)
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
                <div className={`flex flex-col justify-between h-[60vh] ${darkMode ? 'bg-gray-100' : 'bg-gray-800'} p-10 rounded-lg sticky top-5 font-poppins`}>
                    <div>
                        <div className='flex gap-2 items-center border-b-2 border-gray-300 pb-1'>
                            <img src={user?.photoURL} alt={user?.displayName} className='w-10 h-10 rounded-full' />
                            <div>
                                <h2 className='text-xl font-semibold font-bigshoulder'>{user?.displayName}</h2>
                                <h4>{user?.email}</h4>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <Link to='/dashboard'>
                                <button className='bg-secondary mb-5 p-2 rounded text-white font-poppins w-full text-left duration-500 ease-in-out hover:bg-primary'>All Tasks</button>
                            </Link>
                            <Link to='/dashboard/taskscompleted'>
                                <button className='bg-secondary mb-5 p-2 rounded text-white font-poppins w-full text-left duration-500 ease-in-out hover:bg-primary'>Completed Tasks</button>
                            </Link>
                        </div>
                    </div>
                    <button onClick={handleLogOut} className='bg-secondary py-2 text-white rounded duration-500 ease-in-out hover:bg-actionbtn'>Signout</button>
                </div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;