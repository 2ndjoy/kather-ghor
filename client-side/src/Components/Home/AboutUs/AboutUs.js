import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import furnimg from './furnimg.avif';
import furnimg2 from './furnimg2.avif';

const AboutUs = () => {
    return (
        <div className="hero mt-11 mb-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img alt='' src={furnimg} className="w-4/5 h-full rounded-full border-8 border-amber-900 shadow-2xl" />
                    <img alt='' src={furnimg2} className="absolute w-3/5 right-5 border-8 border-amber-900 top-1/2 rounded-full shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h1 className="text-5xl my-5 text-amber-800 font-bold">Wellcome  <br />  to Kather Ghor</h1>
                    <p className="py-6 text-amber-900">Here you can find good used Furnitures
                        <br /> <br />
                        Here are a lots of seller and buyer who wants to sell or buy good products.
                        <br />
                        We make sure that your products get a good price. Also a you can get your products with a reasonable budget
                    </p>
                    <Link to='/about'>
                        <PrimaryButton
                            classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
                        >Get More Info</PrimaryButton>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;