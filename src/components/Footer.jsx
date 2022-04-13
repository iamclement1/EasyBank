import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Facebook from '../assets/icon-facebook.svg'
import Instagram from '../assets/icon-instagram.svg'
import Youtube from '../assets/icon-youtube.svg'
import Pinterest from '../assets/icon-pinterest.svg'
import Twitter from '../assets/icon-twitter.svg'

function Footer() {
    return (
    <div className="pt-10">
        <footer className='bg-[#3e436a] pt-7 pb-10'>
            <div className='md:flex block justify-between md:px-28'>
                <div className='md:flex block justify-between w-3/6'>
                    <div className='md:space-y-12'>
                        <img src={ Logo } alt="Brand Logo" />
                        <div className='flex space-x-3'>
                            <Link to='/' className=''>
                                <img src={Facebook} alt="Facebook Icon" />
                            </Link>
                            <Link to='/'>
                                <img src={ Youtube} alt="Youtue Icon" />
                            </Link>
                            <Link to='/'>
                                <img src={ Twitter} alt="Twitter Icon" />
                            </Link>
                            <Link to='/'>
                                <img src={ Pinterest } alt="Pinterest Icon" />
                            </Link>
                            <Link to='/'>
                                <img src={ Instagram } alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className='block space-y-3 text-white
                    '>
                        <Link to='/' className='block hover:text-green-400'>
                            About Us
                        </Link>
                        <Link to='/' className='block hover:text-green-400'>
                            Contact
                        </Link>
                        <Link to='/' className='block hover:text-green-400'>
                            Blog
                        </Link>
                    </div>
                    <div className='block space-y-3 text-white
                    '>
                        <Link to='/' className='block hover:text-green-400'>
                            Careers
                        </Link>
                        <Link to='/' className='block hover:text-green-400'>
                            Support
                        </Link>
                        <Link to='/' className='block hover:text-green-400'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div>Footer</div>
            </div>
        </footer>
    </div>
)
}

export default Footer