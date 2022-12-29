import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Context/AuthProvider';
import CompletedShowcase from '../CompletedTasks/CompletedShowcase';

const TaskCompleted = () => {
    //Get loggedIn user from the state
    const { user } = useContext(AuthContext)
    //Get All Completed Task from Database
    const { data: completedTasks = [], refetch, isLoading } = useQuery({
        queryKey: ['completedTasks', user?.email],
        queryFn: async () => {
            const completed = await fetch(`https://doroutine.vercel.app/completedtasks?email=${user?.email}
            `)
            const completedTasks = await completed.json()
            return completedTasks
        }
    })
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            {
                completedTasks.length ?
                    <>
                        <div className='lg:flex justify-between'>
                            <div>
                                <h1 className='text-3xl lg:text-4xl text-primary font-bigshoulder font-semibold'>My Completed <span className='text-secondary'>Tasks</span></h1>
                            </div>
                            <Link to='/dashboard'>
                                <button className='doRoutineBtn'>Incomplete Tasks</button>
                            </Link>
                        </div>
                        {/* All Completed Tasks */}
                        <div className='grid lg:grid-cols-2 gap-5 mt-2 lg:mt-5'>
                            {
                                completedTasks.map(task => <CompletedShowcase
                                    key={task._id}
                                    task={task}
                                    refetch={refetch}
                                ></CompletedShowcase>)
                            }
                        </div>
                    </>
                    :
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-3xl lg:text-4xl text-primary font-bigshoulder font-semibold'>You Don't Have <span className='text-secondary'>Completed Tasks</span></h1>
                            <p className='text-xl lg:text-2xl font-semibold font-poppins text-primary mt-5'>
                                Once you completed any task, will appear here...
                            </p>
                        </div>
                        <Link to='/dashboard'>
                            <button className='doRoutineBtn'>Incomplete Tasks</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default TaskCompleted;