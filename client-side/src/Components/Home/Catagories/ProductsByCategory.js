import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdVerified } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Gallery from '../../Gallery/Gallery';
import BookingModaltwo from './BookingModaltwo';

const ProductsByCategory = () => {
    const { user } = useContext(AuthContext);

    const products = useLoaderData();


    const [productss, setProductss] = useState([]);
    const [productones, setProductones] = useState([]);
    const [productwoss, setProductwoss] = useState([]);

    const handleReport = (id) => {
        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/products/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    toast.success('Reported successfully')
                }
            })
    }

    const [productCategory] = products;
    // console.log('productCategory', productCategory);

    const handleToast = () => {
        toast.error('Please log in first')
    }


    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-ten.vercel.app/products/advertise')
            .then(res => res.json())
            .then(data => setProductss(data))

    }, [])



    // const prooo=products.find

    // console.log('products', products)
    // console.log('productss', productss)


    const results = productss.filter(product => product?.productCategory === productCategory?.productCategory);
    console.log('result', results);


    return (
        <div className='lg:grid md:grid justify-center gap-5 lg:grid-cols-3 md:grid-cols-2 p-16'>
            {results.length === 0 ? <p>No products available in this category</p> :
                results.map(result => <div className="card card-compact my-5 w-80 bg-base-100 shadow-xl">
                    <figure className='h-44'>
                        <Gallery
                            img={result.productImage}

                        ></Gallery> </figure>
                    <div className="card-body gap-0">
                        <h2 className="card-title">{result.productName} </h2>
                        <p><b>Location: { }</b></p>
                        <p><b>Selling Price: ${result.sellingPrice}</b></p>
                        <p><b>Original Price: ${result.originalPrice}</b></p>
                        <p><b>Product Condition: {result.productCondition}</b></p>

                        <p><b>Purchase Year: {result.purchaseYear}</b></p>
                        <div className='flex justify-start items-center gap-1'>
                            <MdVerified className='text-blue-600'></MdVerified><p><b>{result.sellerName}</b></p>
                        </div>

                        <div className="card-actions items-center justify-center">
                            <label htmlFor="booking-modal2" className='btn bg-amber-900 text-white'> Buy Now</label>
                            {user?.email ? <button onClick={() => handleReport(result._id)} className='btn bg-red-500 btn-xs text-white border-none'>Report</button> : <button onClick={handleToast} className='btn bg-red-500 btn-xs text-white border-none'>Report</button>}
                            <BookingModaltwo
                                product={result}
                            ></BookingModaltwo>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ProductsByCategory;