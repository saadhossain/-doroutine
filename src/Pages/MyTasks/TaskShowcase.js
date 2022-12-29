import React from 'react';
import {BsCheckSquare} from 'react-icons/bs'
import {MdDeleteForever} from 'react-icons/md'

const TaskShowcase = ({ task, refetch }) => {
    const { taskTitle, taskDetails, taskImg, taskDate} = task;
    return (
        <div className='bg-gray-100 rounded-md shadow-lg p-5 font-poppins'>
            <div className='flex justify-between border-b border-accent pb-3'>
                <div>
                    <h3 className='font-bigshoulder text-xl font-semibold text-primary'>{taskTitle}</h3>
                    <p>{taskDetails}</p>
                </div>
                <img src={taskImg} alt={taskTitle} className='w-32 h-16 rounded'/>
            </div>
            {/* Showing Task date and time */}
            <div className='flex justify-between mt-2'>
                <p>Date: {taskDate.slice(0, 10)}</p>
                <p>Time: {taskDate.slice(11)}</p>
            </div>
            {/* Task Action buttons */}
            <div className='flex justify-between mt-3'>
                <button className='flex items-center gap-1 bg-primary text-white py-2 px-3 rounded hover:bg-actionbtn duration-300 ease-in-out'><BsCheckSquare></BsCheckSquare>Complete</button>
                <button className='flex items-center gap-1 bg-actionbtn text-white py-2 px-3 rounded'><MdDeleteForever></MdDeleteForever>Delete</button>
            </div>
        </div>
    );
};

export default TaskShowcase;