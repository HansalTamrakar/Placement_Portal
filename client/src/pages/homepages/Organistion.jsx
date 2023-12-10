import React from 'react'

const Organistion = ({head,para}) => {
  return (
   
    <div className='border border-white bg-black h-96 w-96 rounded-md text-white p-8 text-justify  mb-16 mt-8 mr-16 ml-16'>
        <h1 className='text-2xl text-center mb-6'>{head}</h1>
        <p>{para}</p>
    </div>
   
  )
}

export default Organistion