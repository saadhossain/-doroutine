import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/DoRoutine-logo.png';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='bg-gray-50 border bottom-1 border-gray-100'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-2 flex justify-between items-center'>
                <Link to='/'>
                    <img src={logo} alt='DoRoutine Logo' className='h-10' />
                </Link>
                <div className='flex gap-2 items-center'>
                    <ul className='flex gap-2 font-semibold'>
                        <li>
                            <Link to='/addtask'>Add Task</Link>
                        </li>
                        <li>
                            <Link>My Task</Link>
                        </li>
                        <li>
                            <Link>Completed Task</Link>
                        </li>
                    </ul>
                    {
                        user
                            ? <Link to='/dashboard'>
                                <img src={user?.photoURL} alt={user?.displayName} className='w-10 h-10 rounded-full' />
                            </Link>
                            : <Link to='/login'>
                                <button className='doRoutineBtn'>Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;