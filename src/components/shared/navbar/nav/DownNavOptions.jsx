import React, { Children } from 'react'

const DownNavOptions = ({ children }) => {
  return (
    <div className='flex items-center gap-2 bg-white py-2 px-4 rounded-xl shadow-sm cursor-pointer'>
      {children}
    </div>
  )
}

export default DownNavOptions