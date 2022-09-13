import React from 'react'
import Category from './components/Category'
import ProductItem from './components/ProductItem'

function Products() {
  return (
    <div className='products py-16'>
      <h3 className='font-bold uppercase text-center text-4xl mb-10'>
        Products
      </h3>
      <Category />
      <div className='flex items-center -mr-4 flex-wrap'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default Products
