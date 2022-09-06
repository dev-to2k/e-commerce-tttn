import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import Popular1 from '../../../assets/images/popular-1.png'
import Popular2 from '../../../assets/images/popular-2.png'
import Popular3 from '../../../assets/images/popular-3.png'
import Popular4 from '../../../assets/images/popular-4.png'
import Popular5 from '../../../assets/images/popular-5.png'
import Popular6 from '../../../assets/images/popular-6.png'
import Popular7 from '../../../assets/images/popular-7.png'

function Popular() {
  const settingsMultiple = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const popularList = [
    {
      image: Popular1,
      title: 'Fall Coming',
      price: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      oldPrice: 2,
    },
    {
      image: Popular2,
      title: 'Fall Coming',
      price: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      oldPrice: 2,
    },
    {
      image: Popular3,
      title: 'Fall Coming',
      price: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      oldPrice: 2,
    },
    {
      image: Popular4,
      title: 'Fall Coming',
      price: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      oldPrice: 2,
    },
    {
      image: Popular5,
      title: 'Fall Coming',
      price: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      oldPrice: 2,
    },
    {
      image: Popular6,
      title: 'Fall Coming',
      price: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      oldPrice: 2,
    },
    {
      image: Popular7,
      title: 'Fall Coming',
      price: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      oldPrice: 2,
    },
  ]
  return (
    <section className='popular-right-now my-16'>
      <h3 className='text-center font-bold text-3xl uppercase mb-10'>
        Popular Right Now
      </h3>
      <Slider {...settingsMultiple} className='w-11/12 mx-auto'>
        {popularList.map((popular, index) => (
          <Link key={index} to='/products' className={`card-${index} p-2`}>
            <img src={popular.image} alt={popular.title} />
            <div className='item-bottom py-4'>
              <div className='flex items-center justify-between mb-3 pr-4'>
                <span>{popular.title}</span>
                <div className='price'>
                  {popular.oldPrice > popular.price && (
                    <span className='line-through mr-2'>
                      ${popular.oldPrice}
                    </span>
                  )}
                  <span>${popular.price}</span>
                </div>
              </div>
              <p className='text-zinc-500 text-sm'>{popular.description}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  )
}

export default Popular
