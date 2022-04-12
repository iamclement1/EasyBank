import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

function Product() {
    return (
    <div className="bg-gray-100 pb-12">
        <div className='md:px-24 md:py-16  md:text-left text-center w-full'>
            <h2 className='text-gray-700 md:text-3xl text-3xl md:pt-6
            pt-14 pb-3 p-4'>
                Why choose Easybank?
            </h2>
            <p className='text-gray-500 w-2/2 md:text-xm 
            text-sm mx-auto p-4'>
                We leverage Open Banking to turn your bank account into
                your financial hub. <br />
                <span>Control your finances like never before.</span>
            </p>
        </div>

        <section className=''>
            <div>
                <ProductCard />
            </div>
        </section>
    </div>
)
}

export default Product
