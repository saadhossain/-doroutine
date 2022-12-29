import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Context/AuthProvider';
import TaskShowcase from '../MyTasks/TaskShowcase';

const AllTasks = () => {
    const { user } = useContext(AuthContext)
    //Get all of my added task
    const { data: myTasks = [], refetch, isLoading } = useQuery({
        queryKey: ['myTasks', user?.email],
        queryFn: async () => {
            const tasks = await fetch(`https://doroutine.vercel.app/mytasks?email=${user?.email}`)
            const data = await tasks.json()
            return data
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            {
                myTasks.length ?
                    <>
                        <div className='lg:flex justify-between'>
                            <div>
                                <h1 className='text-3xl lg:text-4xl text-primary font-bigshoulder font-semibold'>All Added <span className='text-secondary'>Tasks</span></h1>
                            </div>
                            <Link to='/dashboard/taskscompleted'>
                                <button className='doRoutineBtn'>Completed Tasks</button>
                            </Link>
                        </div>
                        {/* All My Tasks */}
                        <div className='grid lg:grid-cols-2 gap-5 mt-2 lg:mt-5'>
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
                        <h1 className='text-3xl lg:text-4xl text-primary font-bigshoulder font-semibold'>You don't have <span className='text-secondary'>Any Tasks</span></h1>
                        <p className='text-xl lg:text-2xl font-semibold font-poppins text-primary mt-5'>
                            Once you add task, will appear here...
                        </p>
                    </div>
            }
        </div>
    );
};

export default AllTasks;