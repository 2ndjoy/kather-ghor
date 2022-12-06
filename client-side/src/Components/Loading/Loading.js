import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-full mt-12'>
            <div class="lds-circle" >
                <div></div>
            </div>
        </div>

    );
};

export default Loading;