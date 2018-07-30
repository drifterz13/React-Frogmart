import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Home.css'

const Home = () => {
  return (
    <Fragment>
      <div className='home'>
        <div>
          <Link to='product' className="btn btn-lg btn-outline-dark">Shopping Now</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Home