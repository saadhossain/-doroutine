import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/DoRoutine-logo.png';
import { AuthContext } from '../Context/AuthProvider';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
    const { user } = useContext(AuthContext)
    const [expand, setExpand] = useState(false)
    return (
        <div className='bg-gray-50 border bottom-1 border-gray-100'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-2 flex justify-between items-center'>
                <Link to='/'>
                    <img src={logo} alt='DoRoutine Logo' className='h-10' />
                </Link>
                <div className='flex gap-2 items-center'>
                    <ul className={`lg:flex gap-5 font-semibold font-bigshoulder absolute lg:static text-primary ${expand ? 'top-14 right-0': 'top-[-200px] right-0'} bg-gray-50 w-full py-2 px-5 shadow-lg lg:shadow-none duration-500 ease-in-out` }>
                        <li>
                            <Link to='/addtask'>Add Task</Link>
                        </li>
                        <li>
                            <Link to='/mytask'>My Task</Link>
                        </li>
                        <li>
                            <Link to='/completedtasks'>Completed Task</Link>
                        </li>
                    </ul>
                    <div onClick={() => setExpand(!expand)} className='text-primary text-2xl lg:hidden'>
                        {
                            expand ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                        }
                    </div>
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