import React from 'react'
import OnlineBanking from '../assets/icon-online.svg'
import IconOnboarding from '../assets/icon-onboarding.svg'
import IconApi from '../assets/icon-api.svg'
import IconBudgeting from '../assets/icon-budgeting.svg'

function ProductCard() {

    return (
    <div>
        <section>
            <div className="product-card md:flex block md:px-24 justify-between
            md:text-left text-center">
                <div className='border border-green-300'>
                    <img src={ OnlineBanking } alt="banking icon" 
                    classname=""/>
                    <h2 className='pt-4 md:text-2xl text-gray-600'>Online Banking</h2>
                </div>
                <div className="card2">card2</div>
                <div>Card4</div>
                <div>Card4</div>
            </div>
        </section>
    </div>
  )
}

export default ProductCard
