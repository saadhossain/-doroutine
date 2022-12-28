import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/DoRoutine-logo.png';

const Header = () => {
    return (
        <div className='bg-gray-50 border bottom-1 border-gray-100'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-2 flex justify-between items-center'>
                <img src={logo} alt='DoRoutine Logo' className='h-10' />
                <div className='flex gap-2 items-center'>
                    <ul className='flex gap-2 font-semibold'>
                        <li>
                            <Link>Add Task</Link>
                        </li>
                        <li>
                            <Link>My Task</Link>
                        </li>
                        <li>
                            <Link>Completed Task</Link>
                        </li>
                    </ul>
                    <Link to='/login'>
                        <button className='doRoutineBtn'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;