import React, { useState } from 'react';
import kitchen1 from '../../../assets/kitchen1.avif';
import Gallery from '../../Gallery/Gallery';
import BookingModal from './BookingModal';
import { MdVerified } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import ProductsCards from './ProductsCards';
import Catagories from '../Catagories/Catagories';


const Products = () => {
    const [productt, setProductt] = useState(null);
    const { data: productss = [], refetch } = useQuery({
        queryKey: ['productss'],
        queryFn: async () => {
            const res = await fetch('https://b612-used-products-resale-server-side-ten.vercel.app/products/advertise');
            const data = await res.json();
            return data;
        }
    })
    console.log(productss);

    return (
        <div className='lg:grid md:grid justify-center gap-5 lg:grid-cols-3 md:grid-cols-2 ml-4 px-3'>
            {
                productss.map(product =>
                    <ProductsCards
                        key={product._id}
                        product={product}
                        setProductt={setProductt}
                        refetch={refetch}
                    ></ProductsCards>
                )

            }{
                productt &&
                <BookingModal
                    productt={productt}
                    setProductt={setProductt}
                ></BookingModal>

            }
        </div>
    );
};

export default Products;