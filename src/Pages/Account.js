import React from 'react'
import FavMovies from '../components/FavMovies/FavMovies'

const Account = () => {
  return (
    <>
<div className='w-full text-white'>
<img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/caf2a678-b423-45a0-b7e0-003ea136882d/TR-tr-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className='bg-black/600 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
</div>
<FavMovies />
    </>
  )
}

export default Account