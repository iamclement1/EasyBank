import React from 'react'
import Button from '../components/Button'
import Image from '../assets/image-mockups.png'

function HeroPage() {
    return (
    <div className=''>
        <div className="flex flex-col md:flex-row-reverse justify-between 
        bg-gray-50">
            <div className="">
                <div className=''>
                    <img src={ Image } alt="Brand-Image"
                        className="" style={{
                            width: '70%',
                            position: 'relative',
                            top: '0',
                            left: '30%',
                            bottom: '30%',
                        }}/>
                </div>
            </div>
            <div className='border border-red-400 p-2 
            md:w-4/6 w-full text-center mx-auto md:py-40'>
                    <h2 className="md:text-6xl text-3xl text-gray-700">
                        Next generation digital banking
                    </h2>
                    <p className="md:text-left mx-auto md:w-3/4 md:text-base
                    text-xs pt-4 text-gray-500">
                        Take your financial life online.
                        Your Easybank account will be one-stop shop for
                        spending, saving, budgeting, investing, and much more.
                    </p>

                    <Button/>
            </div>
        </div>
    </div>
  )
}

export default HeroPage
