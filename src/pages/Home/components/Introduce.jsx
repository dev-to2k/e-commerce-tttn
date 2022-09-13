import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import Banner1 from '../../../assets/images/banner-1.png'
import Banner2 from '../../../assets/images/banner-2.png'

function Introduce() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const bannerList = [{ image: Banner1 }, { image: Banner2 }]

  return (
    <Fragment>
      <section className='introducing my-16'>
        <h3 className='text-center font-bold text-3xl uppercase mb-10'>
          Introducing
        </h3>
        <Slider {...settings} className='w-11/12 mx-auto'>
          {bannerList.map((banner, index) => (
            <div key={index} className='h-96'>
              <img
                src={banner.image}
                className='rounded-lg object-cover w-full h-full'
                alt='banner'
              />
            </div>
          ))}
        </Slider>
      </section>
      <section className='text-center my-16'>
        <h1 className='text-3xl font-bold uppercase'>
          Serena Williams Design <br /> Crew Collection
        </h1>
        <p className='mt-4 mb-6'>
          Inspired by Serena's royal reign, the Serena Williams Design Crew 1.5
          <br />
          Collection features bold botanical prints and intricate patterns on
          <br />
          sportswear staples and your favorite sneaker silhouettes.
        </p>
        <Link
          to='/products'
          className='bg-black rounded-full px-6 py-2 text-white transition-colors hover:bg-black/70'
        >
          Shop
        </Link>
      </section>
    </Fragment>
  )
}

export default Introduce
