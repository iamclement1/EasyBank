import React from 'react'
import ArticleCard from '../components/ArticleCard/ArticleCard'

function Article() {
  return (
    <div className='relative bg-gray-50 '>
        <div className='md:px-24 md:py-16  md:text-left text-center w-full'>
            <h1 className='text-gray-700 md:text-3xl text-3xl md:pt-6
            pt-14 pb-3 p-4'>
                Latest Articles
            </h1>
        </div>

        <section>
            <div>
                <ArticleCard/>
            </div>
        </section>

        
    </div>
  )
}

export default Article