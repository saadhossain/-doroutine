import React from 'react';
import addTaskBanner from '../../assests/hero-banner-1.jpg';

const AddTask = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            <h1 className='text-6xl text-primary font-bigshoulder font-semibold'>Add a <span className='text-secondary'>Task</span></h1>
            <p className='text-2xl font-semibold font-poppins text-primary'>
                Keep your Tasks Organized...
            </p>
            <div className='flex gap-10'>
                <div className='w-2/4'>
                    <form className="space-y-12 mt-10 font-poppins">
                        <div className="space-y-2">
                            <input type="email" name="email" placeholder="Task Title" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                            <textarea name="taskDetails" rows="3" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" placeholder='Task Description'></textarea>
                            <div className='flex items-center gap-3'>
                                <div className='w-2/4'>
                                    <label htmlFor="taskFile" className="block mb-2 text-lg">Task Image</label>
                                    <input type="file" name="taskFile" id="taskFile" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
                                </div>
                                <div className='w-2/4'>
                                    <label htmlFor="taskDate" className="block mb-2 text-lg">Select Date</label>
                                    <input type="date" name="taskDate" id="taskDate" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent"/>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-primary text-white duration-300 ease-in-out hover:bg-secondary">Add Task</button>
                        </div>
                    </form>
                </div>
                <img src={addTaskBanner} alt='add task banner' className='w-2/4 rounded-lg' />
            </div>
        </div>
    );
};

export default AddTask;