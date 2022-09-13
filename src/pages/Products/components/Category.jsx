import React from 'react'

function Category() {
  return (
    <div className='filter space-x-4 mb-10'>
      <button className='py-2 px-6 bg-black text-white border border-black transition-colors '>
        Men
      </button>
      <button className='py-2 px-6 border transition-colors hover:bg-gray-50'>
        Women
      </button>
      <button className='py-2 px-6 border transition-colors hover:bg-gray-50'>
        Jacket
      </button>
      <button className='py-2 px-6 border transition-colors hover:bg-gray-50'>
        T-Shirt
      </button>
      <button className='py-2 px-6 border transition-colors hover:bg-gray-50'>
        Pant
      </button>
      <button className='py-2 px-6 border transition-colors hover:bg-gray-50'>
        Shoe
      </button>
    </div>
  )
}

export default Category
