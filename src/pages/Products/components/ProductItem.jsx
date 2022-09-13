import React from 'react'
import { Link } from 'react-router-dom'

function ProductItem() {
  return (
    <div className='w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mr-4 mb-4'>
      <Link to='/'>
        <img
          className='rounded-t-lg'
          src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17e1edd2-9500-4831-9ef5-67374f352a2e/dunk-high-retro-premium-emb-mens-shoes-vwrJnf.png'
          alt='product'
        />
      </Link>
      <div className='p-5'>
        <Link to='/'>
          <h5 className='text-md font-semibold tracking-tight text-gray-900 dark:text-white'>
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </Link>
        <div className='flex justify-between items-center mt-4'>
          <span className='font-bold text-gray-900 dark:text-white'>$599</span>
          <button className='text-white bg-black hover:bg-black/80 transition-colors focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
