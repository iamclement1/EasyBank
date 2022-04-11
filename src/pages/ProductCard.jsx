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
                <div className='border border-green-300 w-1/5'>
                    <img className="" src={ OnlineBanking } alt="banking-icon"/>
                    <h2 className='pt-4 md:text-xl text-gray-600 pb-5'>
                        Online Banking
                    </h2>
                    <p className="text-gray-600 text-xs">
                        Our modern web and mobile applicatons allows you
                        to keep track of your finances wherever you are in the world.
                    </p>
                </div>
                <div className="border border-green-400 w-1/5">
                    <img src={IconBudgeting} alt="budgetting Icon" />
                    <h2 className='pt-4 md:text-xl text-gray-600 pb-5'>
                        Simple budgeting
                    </h2>
                    <p className="text-gray-600 text-xs">
                        See exaclty where your money goes each month. Receive
                        notifications when you're close to hitting your limits.
                    </p>
                </div>
                <div className='border border-green-400 w-1/5'>
                    <img src={IconOnboarding} alt="onboarding icon" />
                    <h2 className='pt-4 md:text-xl text-gray-600 pb-5'>
                        Fast Onboarding
                    </h2>
                    <p className="text-gray-600 text-xs">
                        We don't do branches. Open your account in minutes online
                        and start taking control of your finaces right away.
                    </p>
                </div>
                <div className='border border-green-400 w-1/5'>
                    <img src={ IconApi} alt="api icon" />
                    <h2 className='pt-4 md:text-xl text-gray-600 pb-5'>
                        Open API
                    </h2>
                    <p className="text-gray-600 text-xs">
                        Manage your savings, investments, pension, and much more
                        from one account. Tracking your money has never been easier.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ProductCard
