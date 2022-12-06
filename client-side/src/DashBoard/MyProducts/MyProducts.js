import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: myProductss = [], refetch } = useQuery({
        queryKey: ['myProductss'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/products?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    })
    // const handleDelete = (id) => {
    //     console.log(id)
    // }


    const handleAdvertise = (id) => {
        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/advertise/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    toast.success('Advertised successfully')
                }
            })
        console.log(id);
    }




    const handleSold = (id) => {
        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/sold/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    toast.success('Thanks for using Kather Ghor')
                }
            })
        console.log(id);
    }



    const handleDelete = (id) => {
        console.log(id);

        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/products/${id}`, {
            method: 'DELETE'
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success(`Deleted Successfully`);
                    refetch();
                }
            })



    }

    console.log(myProductss);

    return (
        <div className='py-12 my-5'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        {myProductss.length === 0 ? <p className='mx-24 p-24 font-bold'>You have not advertise any product</p> : <tr>
                            <th>

                            </th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>}
                    </thead>
                    <tbody>

                        {
                            myProductss.map(myProduct =>
                                <tr>
                                    <th>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={myProduct.productImage} alt="" />

                                            </div>
                                        </div>
                                    </th>
                                    <td>
                                        {myProduct.productName}
                                    </td>
                                    <td>
                                        {myProduct.sellingPrice}
                                    </td>
                                    <td>
                                        <button onClick={() => handleAdvertise(myProduct._id)} className="btn btn-success btn-xs">Advertise</button>
                                    </td>
                                    <th>
                                        <button onClick={() => handleSold(myProduct._id)} className="btn btn-secondary btn-xs">Sold</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleDelete(myProduct._id)} className="btn btn-secondary btn-xs">Delete</button>

                                    </th>

                                </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyProducts;