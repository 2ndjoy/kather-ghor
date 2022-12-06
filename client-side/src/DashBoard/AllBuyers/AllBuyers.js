import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-ten.vercel.app/user/buyer');
            const data = await res.json();
            return data;
        }
    })

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

    console.log(allBuyers);

    return (
        <div className='py-12 my-5'>
            <p className='text-2xl text-center my-4'>All buyers</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Job</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allBuyers.map(allBuyer =>
                                <tr>

                                    <td>{allBuyer.name} </td>
                                    <td>{allBuyer.email} </td>
                                    <th>
                                        <button onClick={() => handleDelete(allBuyer._id)} className="btn btn-secondary btn-xs">Delete</button>
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

export default AllBuyers;