import React from 'react';
import { Link } from 'react-router-dom';

const BannerItem = ({ slide }) => {
    const { sliderImg, id, prev, next } = slide;
    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>

                <img src={sliderImg} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 lg:right-32 right-20 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle btn-primary mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-primary mr-5">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-3/4 right-60 top-1/4">
                <h1 className='lg:text-4xl text-xl font-bold text-white'>
                    Available<br />
                    plenty of<br />
                    scholarship
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 lg:left-96 left-60 top-1/2">
                <p className='lg:text-3xl text-white'>
                    There are many kind of scholarship available, <br /> and I provide information and guide you on your journey
                </p>
            </div>
            {/* <div className="absolute flex justify-start transform -translate-y-1/2 right-60 top-3/4 gap-3">
                <Link to='/services'> <button className='btn btn-primary'>Discover More</button></Link>
                <button className="btn btn-outline btn-primary">Learn More</button>
            </div> */}
        </div>

    );
};

export default BannerItem;