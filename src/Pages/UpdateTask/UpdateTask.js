import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import addTaskBanner from '../../assests/hero-banner-1.jpg';

const UpdateTask = () => {
    const singleTask = useLoaderData()[0]
    const { _id, taskTitle, taskDetails, taskDate, status } = singleTask
    //Functionality to Add a New Task
    const handleUpdateTask = (e) => {
        e.preventDefault()
        const form = e.target;
        //Get all input data
        const taskTitle = form.taskTitle.value;
        const taskDetails = form.taskDetails.value;
        const taskDate = form.taskDate.value;
        const taskData = {
            taskTitle,
            taskDetails,
            taskDate,
            status
        }
        //Update Task
        fetch(`https://doroutine.vercel.app/updatetask/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Updated Successfully...')
                }
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            <h1 className='text-4xl lg:text-6xl text-primary font-bigshoulder font-semibold'>Update <span className='text-secondary'>Task</span></h1>
            <p className='text-xl lg:text-2xl font-semibold font-poppins text-primary'>
                Do necessary edits on the task you added already...
            </p>
            <div className='lg:flex gap-10'>
                <img src={addTaskBanner} alt='add task banner' className='w-full lg:w-2/4 rounded-lg mt-5 lg:mt-0 hidden lg:block' />
                <div className='w-full lg:w-2/4'>
                    <form onSubmit={handleUpdateTask} className="space-y-12 mt-5 font-poppins ng-untouched ng-pristine ng-valid">
                        <div className="space-y-2">
                            <input type="text" name="taskTitle" defaultValue={taskTitle} className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                            <textarea name="taskDetails" rows="6" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" defaultValue={taskDetails}></textarea>
                            <div className='w-full lg:w-2/4'>
                                <label htmlFor="taskDate" className="block mb-2 text-lg">Select Date</label>
                                <input type="datetime-local" name="taskDate" id="taskDate" defaultValue={taskDate} className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white duration-300 ease-in-out hover:bg-secondary">Update Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;