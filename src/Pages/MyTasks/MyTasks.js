import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import TaskShowcase from './TaskShowcase';

const MyTasks = () => {
    const { user } = useContext(AuthContext)
    //Get all of my added task
    const { data: myTasks = [], refetch } = useQuery({
        queryKey: ['myTasks', user?.email],
        queryFn: async () => {
            const tasks = await fetch(`http://localhost:5000/mytasks?email=${user?.email}`)
            const data = await tasks.json()
            return data
        }
    })
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            {
                myTasks.length ?
                    <>
                        <div className='lg:flex justify-between'>
                            <div>
                                <h1 className='text-4xl lg:text-6xl text-primary font-bigshoulder font-semibold'>All Added <span className='text-secondary'>Tasks</span></h1>
                                <p className='text-xl lg:text-2xl font-semibold font-poppins text-primary lg:mt-5'>
                                    Track your tasks and take action...
                                </p>
                            </div>
                            <Link to='/completedtasks'>
                                <button className='doRoutineBtn'>Completed Tasks</button>
                            </Link>
                        </div>
                        {/* All My Tasks */}
                        <div className='grid lg:grid-cols-3 gap-5 mt-3 lg:mt-8'>
                            {
                                myTasks.map(task => <TaskShowcase
                                    key={task._id}
                                    task={task}
                                    refetch={refetch}
                                ></TaskShowcase>)
                            }
                        </div>
                    </>
                    :
                    <div>
                        <h1 className='text-6xl text-primary font-bigshoulder font-semibold'>You don't have <span className='text-secondary'>Any Tasks</span></h1>
                        <p className='text-2xl font-semibold font-poppins text-primary mt-5'>
                            Once you add task, will appear here...
                        </p>
                    </div>
            }
        </div>
    );
};

export default MyTasks;