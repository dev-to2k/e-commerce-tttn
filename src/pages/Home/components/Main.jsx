import React, { Fragment } from 'react'

import Introduce from './Introduce/Introduce'
import FallComing from './FallComing/FallComing'
import Popular from './Popular/Popular'
import Membership from './Membership/Membership'
import NewArrival from './NewArrival/NewArrival'
import Footer from './Footer/Footer'

function Main() {
  return (
    <Fragment>
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
