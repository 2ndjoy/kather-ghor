import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import Navbar from '../Components/Shared/Header/Navbar';
import { BsArrowDown } from 'react-icons/bs'
import { AuthContext } from '../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);

    const { data: userRole = [] } = useQuery({
        queryKey: ['userRole'],
        queryFn: async () => {
            const res = await fetch(`https://b612-used-products-resale-server-side-ten.vercel.app/user?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    console.log(userRole.role)

    return (
        <div>
            <Navbar></Navbar>
            <label htmlFor='dashboard-drawer' className="btn btn-ghost lg:hidden mt-4">
                Dashboard <BsArrowDown></BsArrowDown>

            </label>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            userRole.role === "buyer" &&
                            <li className='bg-white'><Link to='/dashboard/myorders'>My Orders</Link></li>

                        }

                        {
                            userRole.role === "seller" &&
                            <>
                                <li className='bg-white'><Link to='/dashboard/addproduct'>Add a product</Link></li>
                                <li className='bg-white'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='bg-white'><Link to='/dashboard/mybuyers'>My buyers</Link></li>
                            </>
                        }

                        {
                            userRole.role === "admin" && <>        <li className='bg-white'><Link to='/dashboard/allseller'>All sellers</Link></li>
                                <li className='bg-white'><Link to='/dashboard/allbuyers'>All buyers</Link></li>

                                <li className='bg-white'><Link to='/dashboard/reporteditems'>Reported items</Link></li>

                            </>
                        }</ul>

                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default DashBoardLayout;