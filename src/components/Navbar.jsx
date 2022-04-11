import React, { useState, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Transition } from '@headlessui/react'
import Logo from '../assets/logo.svg'
import './Navbar.css'


function Navbar() {

    const [ showNav, setShowNav ] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav);
    }

    return (
    <div className="">
        <nav className='absolute w-full z-20'>
            <div className=''>
                <div className='flex justify-between bg-white
                text-gray-500 p-4'>
                    <div className='pt-3 md:pt-2 md:px-16'>
                        <img src= {Logo} alt="Brand_Logo" />
                    </div>
                    <div className='-mr-2 flex md:hidden bg-white'>
                        <button type="button" onClick={handleNav}
                            className="bg-green-400 inline-flex items-center
                            justify-center p-2 rounded hover:bg-green-500
                            focus:outline-none text-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false">
                            <span className='sr-only'>
                                Open main menu
                            </span>
                                {!showNav ? (
                                    <svg className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentcolor"
                                        aria-hidden="true">
                                        <path strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d= 'M4 6h16M4 12h16M4 18h16' />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentcolor"
                                        aria-hidden="true">
                                        <path strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d = "M4 6h16M4 12h16M4 18h16"  />
                                        </svg>
                                )}
                        </button>
                </div>
                    <div className='md:flex hidden
                    space-x-80 items-center bg-white'>
                        <div className='items-baseline space-x-6'>
                            <NavLink to='/' className="link link-underline 
                            link-underline-green">
                                Home
                            </NavLink>
                            <NavLink to='/' className="link link-underline 
                            link-underline-green">
                                About
                            </NavLink>
                            <NavLink to='/' className="link link-underline 
                            link-underline-green">
                                Contact
                            </NavLink>
                            <NavLink to='/' className="link link-underline 
                            link-underline-green">
                                Blog
                            </NavLink>
                            <NavLink to='/' className="link link-underline 
                            link-underline-green">
                                Career
                            </NavLink>
                        </div>
                        <div>
                            <button type='button'
                            className="bg-gradient-to-r 
                            from-green-400 to-cyan-600
                            p-2 rounded-full text-white px-5">
                                Mobile Info
                            </button>
                        </div> 
                    </div>
                </div>
                
            </div>
            <Transition show={showNav} as={Fragment}
            enter="transition ease-out duration-200 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">

                { (ref) => (
                    <div className="md:hidden bg-white" id="mobile-menu">
                        <div ref= {ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <div className="block text-center text-gray-600 ">
                            <NavLink to='/' className="block mb-4 link link-underline 
                            link-underline-green">
                                Home
                            </NavLink>
                            <NavLink to='/' className="block mb-4 link link-underline 
                            link-underline-green">
                                About
                            </NavLink>
                            <NavLink to='/' className="block mb-4 link link-underline 
                            link-underline-green">
                                Contact
                            </NavLink>
                            <NavLink to='/' className="block mb-4 link link-underline 
                            link-underline-green">
                                Blog
                            </NavLink>
                            <NavLink to='/' className="block mb-4 link link-underline 
                            link-underline-green">
                                Career
                            </NavLink>
                            </div>
                        </div>
                    </div>
                )}

            </Transition>
        </nav>
    </div>
)
}

export default Navbar