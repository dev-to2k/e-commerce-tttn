import React from 'react'
import { Link } from 'react-router-dom'

import NewArrival1 from '../../../assets/images/new-arrival-1.png'
import NewArrival2 from '../../../assets/images/new-arrival-2.png'
import NewArrival3 from '../../../assets/images/new-arrival-3.png'

function NewArrival() {
  const newArrivalList = [
    {
      image: NewArrival1,
      title: "Men's Fleece",
    },
    {
      image: NewArrival2,
      title: "Kid's Fleece",
    },
    {
      image: NewArrival3,
      title: "Women's Fleece",
    },
  ]
  return (
    <section className='new-arrival my-16'>
      <h3 className='text-center font-bold text-3xl uppercase mb-10'>
        New Arrivals
      </h3>
      <div className='flex items-stretch -mr-4'>
        {newArrivalList.map((newArrival, index) => (
          <Link to='/products' className='item mr-4' key={index}>
            <img src={newArrival.image} alt='new-arrival' />
            <p className='text-xl mt-4'>{newArrival.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default NewArrival
