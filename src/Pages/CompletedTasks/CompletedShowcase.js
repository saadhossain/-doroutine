import React from 'react';
import { toast } from 'react-hot-toast';
import { MdDeleteForever } from 'react-icons/md';

const CompletedShowcase = ({ task, refetch }) => {
    const { _id, taskTitle, taskDetails, taskImg, taskDate } = task;
    //Delete any Task
    const handleDeleteTask = (id) => {
        fetch(`https://doroutine.vercel.app/deletetask/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.error('Uffs!! Task Deleted...')
                    refetch()
                }
            })
    }
    return (
        <div className='bg-gray-100 rounded-md shadow-lg p-5 font-poppins'>
            <div className='border-b border-accent pb-3'>
                <h3 className='font-bigshoulder text-xl font-semibold text-primary'>{taskTitle}</h3>
                <img src={taskImg} alt={taskTitle} className='w-full h-32 rounded my-5' />
                <p>{taskDetails}</p>
            </div>
            {/* Showing Task date and time */}
            <div className='flex justify-between mt-2'>
                <p>Date: {taskDate.slice(0, 10)}</p>
                <p>Time: {taskDate.slice(11)}</p>
            </div>
            {/* Task Action buttons */}
            <button
                onClick={() => handleDeleteTask(_id)}
                className='flex items-center gap-1 bg-actionbtn text-white py-2 px-3 rounded duration-300 ease-in-out hover:bg-[#ed5745]'>
                <MdDeleteForever></MdDeleteForever>
                Delete
            </button>
        </div>
    );
};

export default CompletedShowcase;