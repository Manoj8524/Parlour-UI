import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Image_Icon/Group 33092.png'

const Navbar = () => {
    return (
        <div className="mid-container">
            <div class="navbar px-0 lg:py-4">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabIndex="0" class="btn btn-ghost lg:hidden pr-1 pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className='lg:w-32 md:w-28 sm:w-24 w-20' src={logo} alt="" />
                </div>
                <div className='navbar-end'>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            <li className='mr-2 px-0'><Link to='/'>Home</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>Our Portfolio</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>Our Team</Link></li>
                            <li className='mr-2 px-0'><Link to='/'>Contact Us</Link></li>
                        </ul>

                    </div>
                    <div class="">
                        <Link to='/' ><button className='btn btn-primary lg:px-5 btn-sm'>Login</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;