import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import addTaskBanner from '../../assests/hero-banner-1.jpg';
import { AuthContext } from '../../Context/AuthProvider';

const AddTask = () => {
    //Get LoggedIn user from the state
    const {user} = useContext(AuthContext)
    //Functionality to Add a New Task
    const handleAddTask = (e) => {
        e.preventDefault()
        const form = e.target;
        //Get all input data
        const taskTitle = form.taskTitle.value;
        const taskDetails = form.taskDetails.value;
        const taskFile = form.taskFile.files[0]
        const taskDate = form.taskDate.value;
        //Process File Before upload
        const formData = new FormData()
        formData.append('image', taskFile);
        const imgbbURL = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBBAPI}`
        fetch(imgbbURL, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            const taskImg = data.data.url;
            //Task Data
            const taskData = {
                taskTitle,
                taskDetails,
                taskImg,
                taskDate,
                addedBy: user?.displayName,
                authorEmail: user?.email,
                addedOn: new Date()
            }
            fetch('http://localhost:5000/tasks', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(taskData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    toast.success('New Task Added Successfully...')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
        })
    }
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            <h1 className='text-6xl text-primary font-bigshoulder font-semibold'>Add a <span className='text-secondary'>Task</span></h1>
            <p className='text-2xl font-semibold font-poppins text-primary'>
                Keep your Tasks Organized...
            </p>
            <div className='flex gap-10'>
                <div className='w-2/4'>
                    <form onSubmit={handleAddTask} className="space-y-12 mt-10 font-poppins ng-untouched ng-pristine ng-valid">
                        <div className="space-y-2">
                            <input type="text" name="taskTitle" placeholder="Task Title" className="w-full px-3 py-2 border rounded-md border-gray-700 text-accent" />
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