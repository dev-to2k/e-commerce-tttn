import React from 'react'
import { Link } from 'react-router-dom'

import FallComing1 from '../../../../assets/images/fall-coming-1.png'
import FallComing2 from '../../../../assets/images/fall-coming-2.png'

function FallComing() {
  return (
    <section className='fall-coming flex items-stretch flex-wrap my-16'>
      <h3 className='text-center font-bold text-3xl uppercase mb-10 w-full'>
        Fall's Coming
      </h3>
      <Link to='/products' className='w-6/12 relative'>
        <img src={FallComing1} alt='fall-coming' />
        <div className='absolute left-4 transform bottom-4'>
          <h4 className='mb-4 text-xl'>
            Pushing Boundaries: <br />
            Air Max Bliss
          </h4>
          <button className='bg-black rounded-full px-6 py-2 text-white transition-colors hover:bg-black/70'>
            Shop
          </button>
        </div>
      </Link>
      <Link to='/products' className='w-6/12 relative'>
        <img src={FallComing2} alt='fall-coming' />
        <div className='absolute left-4 transform bottom-4'>
          <h4 className='mb-4 text-xl'>
            New Arrivals <br />
            For Fall
          </h4>
          <button className='bg-black rounded-full px-6 py-2 text-white transition-colors hover:bg-black/70'>
            Shop
          </button>
        </div>
      </Link>
    </section>
  )
}

export default FallComing
