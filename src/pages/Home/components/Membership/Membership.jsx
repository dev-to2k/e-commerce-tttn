import React from 'react'
import { Link } from 'react-router-dom'

import MembershipBanner from '../../../../assets/images/membership.png'
import Membership1 from '../../../../assets/images/membership-1.png'
import Membership2 from '../../../../assets/images/membership-2.png'
import Membership3 from '../../../../assets/images/membership-3.png'

function Membership() {
  const membershipList = [
    {
      image: Membership1,
      tag: 'Member Shop',
      title: 'Shop Member-exclusive styles.',
    },
    {
      image: Membership2,
      tag: 'Shipping As It Should Be',
      title: 'Free standard shipping on all orders.',
    },
    {
      image: Membership3,
      tag: 'Nike By You',
      title: 'Customize your so-you shoe.',
    },
  ]

  return (
    <section className='membership my-16'>
      <h3 className='text-center font-bold text-3xl uppercase mb-10'>
        Nike Membership
      </h3>
      <Link
        to='/products'
        className='block p-10 mb-16'
        style={{
          backgroundImage: `url(${MembershipBanner})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='content text-white'>
          <h3 className='font-bold text-5xl uppercase'>
            Become A <br /> Member
          </h3>
          <p className='my-6'>
            Sign up for free. Join the community. Never pay for shipping.
          </p>
          <button className='bg-white rounded-full px-6 py-2 text-black'>
            Join Us
          </button>
        </div>
      </Link>
      <div className='flex -mr-4'>
        {membershipList.map((membership, index) => (
          <Link to='/products' className='member mr-4' key={index}>
            <img src={membership.image} alt='membership' />
            <p className='text-gray-600'>{membership.tag}</p>
            <p className='text-xl'>{membership.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Membership
