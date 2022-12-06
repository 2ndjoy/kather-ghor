import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ productt, setProductt }) => {
    const { productImage, email } = productt;
    const { user } = useContext(AuthContext);

    const sellerEmail = email;

    const handleBOoking = (event) => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.userName.value;
        const email = form.email.value;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const meetingLocation = form.meetingLocation.value;
        const userPhone = form.userPhone.value;

        const booking = {
            buyerName, email, productName, productPrice, meetingLocation, userPhone, productImage, sellerEmail
        }

        console.log(booking);

        fetch('https://b612-used-products-resale-server-side-ten.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    toast.success(`Added to the database successfully`);
                    // navigate('/dashbord/managedoctors');
                }
            })

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Name</h3>
                    <form onSubmit={handleBOoking} className='grid grid-cols-1 gap-3 mt-10'>

                        <input name="userName" type="text" placeholder="Your Name" defaultValue={user?.displayName} readOnly className="input w-full input-bordered" />

                        <input name="email" type="email" placeholder="Email Address" defaultValue={user?.email} readOnly className="input w-full input-bordered" />

                        <input name="productName" type="text" placeholder="Product Name" defaultValue={productt.productName} readOnly className="input w-full input-bordered" />

                        <input name="productPrice" type="text" placeholder="Price" defaultValue={productt.sellingPrice} readOnly className="input w-full input-bordered" />

                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" />

                        <input name="userPhone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        {user?.email ? <input className='btn btn-accent w-full' type="submit" value="Submit" /> : <Link className='btn btn-accent' to="/login">Please log in to book a order</Link>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;