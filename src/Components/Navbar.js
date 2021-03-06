import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../resources/logos/logo.png'

const Navbar = () => {
    const user = true
    const li = <>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li>{user ? <NavLink to="/dashboard">Dashboard</NavLink> : <NavLink to="/login">Login</NavLink>}</li>
    </>

    return (
        <div class="navbar bg-accent lg:px-12 ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 gap-4  bg-accent">
                        {li}
                    </ul>
                </div>
                <NavLink to="/" class="btn btn-ghost normal-case text-xl"><img src={logo} className="w-[150px] h-[47px]" alt="" /></NavLink>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 ">
                    {li}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;