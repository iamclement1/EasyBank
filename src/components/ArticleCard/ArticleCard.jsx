import React from 'react'
import Currency from '../../assets/image-currency.jpg'
import Restaurant from '../../assets/image-restaurant.jpg'
import Plane from '../../assets/image-plane.jpg'
import Confetti from '../../assets/image-confetti.jpg'

function ArticleCard() {
  return (
    <div>
        <div className="md:flex block md:px-28 justify-between
            md:text-left text-center">

              {/* card 1 */}

            <div className="overflow-hidden rounded p-3 text-left md:w-2/6">
              <img src={ Currency } alt="" className=" mb-4" />
              <div className="px-6 py-4">
                <div className='text-sm mb-2'>
                  <p className='text-gray-400 pb-4'>
                    By Claire Robinson
                  </p>
                  <h2 className='text-xm text-gray-700'>
                    Receive Money in any currency with no fees
                  </h2>
                  <p className='pt-4 text-xs text-gray-500'>
                    The world is getting smaller and we're becoming 
                    more mobile. So why should you be forced to only
                    receive money in a single...
                  </p>
                </div>
              </div>
            </div>

            {/* card 2 */}
            <div className="overflow-hidden rounded p-3 text-left md:w-2/6">
              <img src={ Restaurant } alt="" className=" mb-4 h-50" />
              <div className="px-6 py-4">
                <div className='text-sm mb-2'>
                  <p className='text-gray-400 pb-4'>
                    By Wilson Hutton
                  </p>
                  <h2 className='text-xm text-gray-700'>
                    Treat yourself without worrying about money
                  </h2>
                  <p className='pt-4 text-xs text-gray-500'>
                    Our simple budgeting feature allows you to
                    seperate out your spending and set realistic limits
                    each months. That means you...
                  </p>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="overflow-hidden rounded p-3 text-left md:w-2/6">
              <img src={ Plane } alt="" className=" mb-4" />
              <div className="px-6 py-4">
                <div className='text-sm mb-2'>
                  <p className='text-gray-400 pb-4'>
                    By Wilson Hutton
                  </p>
                  <h2 className='text-xm text-gray-700'>
                    Take your Easybank card wherever you go
                  </h2>
                  <p className='pt-4 text-xs text-gray-500'>
                    We want you to enjoy your travels. This is Why
                    we don't charge any fees on purchases while you are
                    abroad. We'll even show you...
                  </p>
                </div>
              </div>
            </div>
            
            {/* card 4 */}
            <div className="overflow-hidden rounded p-3 text-left md:w-2/6">
              <img src={ Confetti } alt="" className=" mb-4" />
              <div className="px-6 py-4">
                <div className='text-sm mb-2'>
                  <p className='text-gray-400 pb-4'>
                    By Claire Robinson
                  </p>
                  <h2 className='text-xm text-gray-700'>
                    Our invite-only Beta accounts are now live!
                  </h2>
                  <p className='pt-4 text-xs text-gray-500'>
                    After a lot of hard work by the whole team, we're
                    excited to launch our closed beta. It's easy to request
                    an invite through the site...
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ArticleCard