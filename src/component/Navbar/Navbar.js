import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
   
    const menuItems =
        <>
            <li><Link className='text-black' to='/'>Home</Link></li>
            <li><Link className='text-black' to='/about'>Items</Link></li>
            <li><Link className='text-black' to='/appointment'>Contact</Link></li>
            <li><Link className='text-black' to='/about'>About</Link></li>
        </>

    return (
        <div className="navbar flex justify-between font-poppins bg-[#FF8400]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu bg-[#FF8400] menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Hungry Delight</Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;