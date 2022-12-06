import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import KatherGhor from '../../../assets/KatherGhor.png';
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handlelogout = () => {
        logOut();
    }




    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-amber-900'><Link to='/about'>About</Link></li>
                        <li className='text-amber-900'><Link to='/blogs'>Blogs</Link></li>
                        <li className='text-amber-900'><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={KatherGhor} className='h-3/4' alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='text-amber-900'><Link to='/about'>About</Link></li>

                    <li className='text-amber-900'><Link to='/blogs'>Blogs</Link></li>
                    <li className='text-amber-900'><Link to="/dashboard">Dashboard</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="" src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/dashboard' className="justify-between">
                                Go to Dashboard
                            </Link>
                        </li>
                        <li className="mt-2"><button className="btn btn-sm btn-outline" onClick={handlelogout}>Logout</button></li>
                    </ul>
                </div> : <button className="btn btn-sm btn-outline" ><Link to='/login'>Log in</Link></button>}
            </div>

        </div >

    );
};

export default Navbar;