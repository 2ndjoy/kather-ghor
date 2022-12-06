import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-ten.vercel.app/user/seller');
            const data = await res.json();
            return data;
        }
    })
    console.log(allSellers);


    const handleVerify = (id) => {
        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/users/seller/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Verified successfully')
                    refetch();
                }
            })
    }


    const handleMakeAdmin = (id) => {
        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/users/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Verified successfully')
                    refetch();
                }
            })
        console.log('admin', id);
    }



    const handleDelete = (id) => {
        console.log(id);

        fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/user/${id}`, {
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


    return (
        <div className='py-12 my-5'>
            <p className='text-2xl text-center my-4'>All sellers</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allSellers.map(allSeller =>
                                <tr>

                                    <td>{allSeller.name} </td>
                                    <td>{allSeller.email} </td>
                                    <th>
                                        {allSeller.verify ? <p>Verified</p> : <button onClick={() => handleVerify(allSeller._id)} className="btn bg-green-500 text-white border-none btn-xs">Verify</button>}
                                    </th>

                                    <th>
                                        <button onClick={() => handleDelete(allSeller._id)} className='btn btn-xs btn-secondary '>Delete</button>
                                    </th>
                                    <th>
                                        <button onClick={() => handleMakeAdmin(allSeller._id)} className='btn btn-xs btn-success '>Make admin</button>
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

export default AllSellers;