import React from 'react'

function Logo({ width = "100%" }) {
  return (
    <>
      <img src="./unicorn.png" className='w-20' />
      <h1 className='text-md font-semibold'>MegaBlog</h1>
    </>
  )
}

export default Logo