import React from 'react'
import Img from '@/assets/Food-Mock.png'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <h1>Images will be displayed here</h1>
        <Image src={Img} alt="Design Image" width="300" />
    </div>
  )
}

export default page