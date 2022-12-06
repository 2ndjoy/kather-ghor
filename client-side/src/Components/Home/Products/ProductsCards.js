import React, { useContext } from 'react';
import BookingModal from './BookingModal';
import { MdVerified } from 'react-icons/md';
import Gallery from '../../Gallery/Gallery';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';



const ProductsCards = ({ product, setProductt, refetch }) => {
    const { user } = useContext(AuthContext);
    const { _id, productImage, sellerName, productName, purchaseYear, productCondition, description, originalPrice, sellerLocation, sellingPrice, report } = product;
    console.log(product);


    const handleReport = (id) => {
        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/products/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    toast.success('Reported successfully')
                    refetch();
                }
            })
    }
    const handleToast = () => {
        toast.error('Please log in first')
    }

    return (

        <div className="card card-compact my-5 w-80 bg-base-100 shadow-xl">
            <figure className='h-44'>
                <Gallery
                    img={productImage}

                ></Gallery> </figure>
            <div className="card-body gap-0">
                <h2 className="card-title">{productName} </h2>
                <p><b>Location: {sellerLocation}</b></p>
                <p><b>Selling Price: ${sellingPrice}</b></p>
                <p><b>Original Price: ${originalPrice}</b></p>
                <p><b>Product Condition: {productCondition}</b></p>
                <p><b>Purchase Year: {purchaseYear}</b></p>
                <div className='flex justify-start items-center gap-1'>
                    <MdVerified className='text-blue-600'></MdVerified><p><b>{sellerName}</b></p>
                </div>

                <div className="card-actions items-center justify-center">
                    <label onClick={setProductt(product)} htmlFor="booking-modal" className='btn bg-amber-900 text-white'> Buy Now</label>
                    {user?.email ? <button onClick={() => handleReport(_id)} className='btn bg-red-500 btn-xs text-white border-none'>Report</button> : <button onClick={handleToast} className='btn bg-red-500 btn-xs text-white border-none'>Report</button>}
                </div>
            </div>
        </div>
    );
};

export default ProductsCards;