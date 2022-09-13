import React from 'react'
import { Link } from 'react-router-dom'

import JustReleased1 from '../../../../assets/images/just-released-1.png'
import JustReleased2 from '../../../../assets/images/just-released-2.png'

function JustReleased() {
  return (
    <section className='just-released my-16'>
      <h3 className='text-center font-bold text-3xl uppercase mb-10'>
        Just Released
      </h3>
      <div className='flex items-stretch -mr-4'>
        <Link to='/products' className='w-6/12 relative mr-4'>
          <img
            src={JustReleased1}
            className='object-cover'
            alt='just-released'
          />
          <div className='absolute left-4 transform bottom-4'>
            <h4 className='mb-4 text-white text-xl'>
              Nike React Pegasus Trail 4
            </h4>
            <button className='bg-white rounded-full px-6 py-2 text-black transition-colors hover:bg-black hover:text-white'>
              Shop
            </button>
          </div>
        </Link>
        <Link to='/products' className='w-6/12 relative mr-4'>
          <img
            src={JustReleased2}
            className='object-cover'
            alt='just-released'
          />
          <div className='absolute left-4 transform bottom-4'>
            <h4 className='mb-4 text-white text-xl'>Kyrie Infinity</h4>
            <button className='bg-white rounded-full px-6 py-2 text-black transition-colors hover:bg-black hover:text-white'>
              Shop
            </button>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default JustReleased