import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Catagories from './Catagories/Catagories';
import Products from './Products/Products';

const Home = () => {
    const first = process.env.REACT_APP_STRIPE_PK;
    console.log(first)
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-3xl text-amber-900 font-bold text-center mt-24 mb-5'>Find your Products</h2>
            <Products></Products>
            <h2 className='text-3xl text-amber-900 font-bold text-center mt-6'>Select a catagory</h2>
            <Catagories></Catagories>
            <h2 className='text-3xl text-amber-900 font-bold text-center mt-24'>About us</h2>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;