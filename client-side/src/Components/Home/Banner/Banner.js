import React from 'react';
import img1 from './img1.avif';
import img2 from './img2.avif';
import img3 from './img3.avif';
import './Banner.css';
import SliderText from './SliderText';

const Banner = () => {
    return (
        <div className='my-11 lg:p-5'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='carousel-img'>
                        <img src={img1} className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-accent btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-accent btn-circle">❯</a>
                    </div>
                    <SliderText></SliderText>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='carousel-img'>
                        <img src={img2} className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-accent btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-accent btn-circle">❯</a>
                    </div>
                    <SliderText></SliderText>

                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className='carousel-img'>
                        <img src={img3} className="w-full rounded-xl" />
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-accent btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-accent btn-circle">❯</a>
                    </div>
                    <SliderText></SliderText>

                </div>
            </div>
        </div>
    );
};

export default Banner;