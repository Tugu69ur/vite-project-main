import React from 'react'
import Banner from './Banner'
import Men_l from "./men_l"
import Women_l from "./women_l"
import Kid_l from "./kid_l"
import Explore from "./explore"
import Social from "./social"
import Product from "./product"

const home = () => {
  return (
    <>
    <Banner />
    <Men_l />
    <Women_l />
    <Kid_l/>
    <Explore/>
    <Product/>
    <Social/>
    </>
  )
}
export default home