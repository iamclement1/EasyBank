import React from 'react'
import Button from '../components/Button'

function HeroPage() {
    return (
    <div>
        <div className="flex flex-col md:flex-row-reverse justify-between">
            <div className="">Image</div>
            <div className='border border-red-400 md:m-12 my-36 
                md:p-4 p-2 md:w-2/4 w-full text-center mx-auto'>
                    <h2 className="md:text-6xl text-3xl text-gray-700">
                        Next generation digital banking
                    </h2>
                    <p className="md:text-left mx-auto md:w-5/6 md:text-base
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
