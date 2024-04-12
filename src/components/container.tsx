import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='px-8 py-4 w-full'>
{
    children
}

    </div>
  )
}

export default Container