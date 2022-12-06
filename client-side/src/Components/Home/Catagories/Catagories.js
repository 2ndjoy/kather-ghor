import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Catagories = () => {

    const [catagories, setCatagory] = useState([]);
    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-ten.vercel.app/category')
            .then(res => res.json())
            .then(data => setCatagory(data))

    }, [])


    console.log('catagory', catagories);
    return (
        <div className='my-5'>
            <div className='lg:flex mx-2 justify-center gap-4'>
                {
                    catagories.map(category => <div className="card w-96 my-5 bg-amber-900 shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">{category.name}</h2>
                            <p>Get all the {category.name} accorsories</p>
                            <div className="card-actions justify-end">
                                <Link className='text-white btn bg-amber-580 text-white' to={`/catagories/${category.categoryName}`}>Go</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Catagories;