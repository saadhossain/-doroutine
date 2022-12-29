import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import TaskShowcase from './TaskShowcase';

const MyTasks = () => {
    const { user } = useContext(AuthContext)
    //Get all of my added task
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ['myTasks'],
        queryFn: async () => {
            const tasks = await fetch(`http://localhost:5000/mytasks?email=${user?.email}`)
            const data = await tasks.json()
            return data
        }
    })
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            <h1 className='text-6xl text-primary font-bigshoulder font-semibold'>All Added <span className='text-secondary'>Tasks</span></h1>
            <p className='text-2xl font-semibold font-poppins text-primary'>
                Track your tasks and take action...
            </p>
            <div className='flex justify-end'>
                <Link to='/completedtasks'>
                    <button className='doRoutineBtn'>Completed Tasks</button>
                </Link>
            </div>
            {/* All My Tasks */}
            <div className='grid lg:grid-cols-3 gap-5 mt-8'>
                {
                    myTasks.map(task => <TaskShowcase
                        key={task._id}
                        task={task}
                        refetch={refetch}
                    ></TaskShowcase>)
                }
            </div>
        </div>
    );
};

export default MyTasks;