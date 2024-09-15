import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <p>Hello {params.name}</p>
    </div>
  )
}

export default page