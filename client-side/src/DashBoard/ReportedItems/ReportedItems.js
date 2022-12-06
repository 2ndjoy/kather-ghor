import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItems = () => {

    const { data: reported = [] } = useQuery({
        queryKey: ['reported'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-ten.vercel.app/products/reported');
            const data = await res.json();
            return data;
        }
    })

    console.log(reported);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Product Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reported.map(report =>
                            <tr>
                                <th>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={report.productImage} />
                                        </div>
                                    </div>
                                </th>
                                <td>
                                    {report.productName}
                                </td>

                            </tr>)
                    }

                </tbody>


            </table>
        </div>

    );
};

export default ReportedItems;