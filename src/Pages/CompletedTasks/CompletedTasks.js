import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import CompletedShowcase from './CompletedShowcase';

const CompletedTasks = () => {
    //Get loggedIn user from the state
    const { user } = useContext(AuthContext)
    //Get All Completed Task from Database
    const { data: completedTasks = [], refetch } = useQuery({
        queryKey: ['completedTasks', user?.email],
        queryFn: async () => {
            const completed = await fetch(`http://localhost:5000/completedtasks?email=${user?.email}
            `)
            const completedTasks = await completed.json()
            return completedTasks
        }
    })
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto my-5'>
            {
                completedTasks.length ?
                    <>
                        <div className='flex justify-between'>
                            <div>
                                <h1 className='text-6xl text-primary font-bigshoulder font-semibold'>My Completed <span className='text-secondary'>Tasks</span></h1>
                                <p className='text-2xl font-semibold font-poppins text-primary mt-5'>
                                    Track which tasks you have already completede...
                                </p>
                            </div>
                            <Link to='/mytask'>
                                <button className='doRoutineBtn'>Incomplete Tasks</button>
                            </Link>
                        </div>
                        {/* All Completed Tasks */}
                        <div className='grid lg:grid-cols-3 gap-5 mt-8'>
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
                            <h1 className='text-6xl text-primary font-bigshoulder font-semibold'>You Don't Have <span className='text-secondary'>Completed Tasks</span></h1>
                            <p className='text-2xl font-semibold font-poppins text-primary mt-5'>
                                Once you completed any task, will appear here...
                            </p>
                        </div>
                        <Link to='/mytask'>
                            <button className='doRoutineBtn'>Incomplete Tasks</button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default CompletedTasks;