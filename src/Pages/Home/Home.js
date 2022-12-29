import React from 'react';
import { Link } from 'react-router-dom';
import './Common.css';
import heroBanner from '../../assests/hero-banner-2.jpg'

const Home = () => {
    return (
        <div className='w-10/12 lg:10/12 mx-auto lg:flex gap-5 justify-between my-5'>
            <div className='lg:mt-16 mt-5'>
                <h2 className='text-primary text-5xl lg:text-8xl font-bold font-bigshoulder'>Get Control</h2>
                <h3 className='text-secondary text-3xl lg:text-6xl font-bold font-poppins'>Over Your Tasks</h3>
                <p className='text-lg lg:my-5 font-poppins'>
                    Task Management App That Gives you control<br /> Over all of your Tasks.
                </p>
                <Link>
                    <button className='doRoutineBtn hover:ml-1'>Add Task</button>
                </Link>
            </div>
            <img src={heroBanner} alt='Hero Banner' className='rounded-xl mt-5 lg:mt-0'/>
        </div>
    );
};

export default Home;