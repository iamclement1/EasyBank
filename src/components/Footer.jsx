import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import Facebook from '../assets/icon-facebook.svg'

function Footer() {
    return (
    <div className="pt-10">
        <footer className='bg-[#3e436a] pt-7'>
            <div className='md:flex block justify-between md:px-28'>
                <div className='md:flex block justify-between w-3/6'>
                    <div className='md:space-y-12'>
                        <img src={ Logo } alt="Brand Logo" />
                        <div>
                            <Link to='/'>
                                <img src={Facebook} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div>Link</div>
                    <div>Link</div>
                </div>
                <div>Footer</div>
            </div>
        </footer>
    </div>
)
}

export default Footer