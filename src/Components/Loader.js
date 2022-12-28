import React from 'react';

const Loader = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        </div>
    );
};

export default Loader;