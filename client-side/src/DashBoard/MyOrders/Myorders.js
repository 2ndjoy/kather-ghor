import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

import { AuthContext } from '../../Context/AuthProvider';

const Myorders = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders = [] } = useQuery({
        queryKey: ['myOrders'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/booking?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    console.log('myOrders', myOrders);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        myOrders.map(myOrder => <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myOrder.productImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{myOrder.productName}</div>
                                        <div className="text-sm opacity-50">{myOrder.meetingLocation}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {myOrder.productPrice}
                            </td>

                            <th>
                                <button className="btn btn-secondary btn-xs">Delete</button>
                            </th>
                        </tr>)
                    }


                </tbody>



            </table>
        </div>
    );
};

export default Myorders;