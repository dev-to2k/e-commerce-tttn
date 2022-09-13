import React, { Fragment } from 'react'

import Navbar from './Navbar'
import Introduce from './Introduce'
import FallComing from './FallComing'
import Popular from './Popular'
import Membership from './Membership'
import NewArrival from './NewArrival'
import Footer from './Footer'

function Main() {
  return (
    <Fragment>
      <Navbar />
      <Introduce />
      <FallComing />
      <Popular />
      <NewArrival />
      <Membership />
      <Footer />
    </Fragment>
  )
}

export default Main
