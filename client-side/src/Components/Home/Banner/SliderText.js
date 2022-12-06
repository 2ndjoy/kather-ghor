import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import './Banner.css'

const SliderText = () => {
    return (
        <div>
            <div className="absolute flex justify-end transform -translate-y-3/4 lg:left-60 md:left-60 left-32 top-2/4">
                <h1 className='lg:text-4xl text-xl font-bold text-white'>
                    Purchase Furniture <br />
                    with a reasonable
                    <br /> budget
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 lg:left-60 md:left-60 left-32 top-3/4 gap-3">
                <Link to='/services'> <button className='btn btn-accent btn-primary'>Discover More</button></Link>
            </div>
        </div>

    );
};

export default SliderText;