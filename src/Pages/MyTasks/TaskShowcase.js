import React from 'react';
import { toast } from 'react-hot-toast';
import { BsCheckSquare } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';

const TaskShowcase = ({ task, refetch }) => {
    const { _id, taskTitle, taskDetails, taskImg, taskDate, status } = task;

    //Mark any Task as complete
    const handleCompleteTask = (id) => {
        fetch(`http://localhost:5000/updatetask/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'Completed'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Task Marked as Complete...')
                refetch()
            }
        })
    }
    //Delete any Task
    const handleDeleteTask = (id) => {
        fetch(`http://localhost:5000/deletetask/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.error('Uffs!! Task Deleted...')
                refetch()
            }
        })
    }
    return (
        <div className='bg-gray-100 rounded-md shadow-lg p-5 font-poppins'>
            <div className='flex justify-between border-b border-accent pb-3'>
                <div>
                    <h3 className='font-bigshoulder text-xl font-semibold text-primary'>{taskTitle}</h3>
                    <p>{taskDetails}</p>
                </div>
                <img src={taskImg} alt={taskTitle} className='w-32 h-16 rounded' />
            </div>
            {/* Showing Task date and time */}
            <div className='flex justify-between mt-2'>
                <p>Date: {taskDate.slice(0, 10)}</p>
                <p>Time: {taskDate.slice(11)}</p>
            </div>
            {/* Task Action buttons */}
            <div className='flex justify-between mt-3'>
                <button
                    onClick={() => handleCompleteTask(_id)}
                    className={`flex items-center gap-1 ${status === 'Completed' ? 'bg-secondary': 'bg-primary hover:bg-actionbtn'} text-white py-2 px-3 rounded duration-300 ease-in-out`} disabled={status === 'Completed'}>
                        {
                        status === 'Completed' ? 'Completed'
                        :<><BsCheckSquare></BsCheckSquare>
                        Complete</>
                        }
                </button>
                <button
                onClick={()=> handleDeleteTask(_id)}
                    className='flex items-center gap-1 bg-actionbtn text-white py-2 px-3 rounded duration-300 ease-in-out hover:bg-[#ed5745]'>
                    <MdDeleteForever></MdDeleteForever>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskShowcase;