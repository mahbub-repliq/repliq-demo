import React from 'react'

function PageTitle({children}) {
  return (
    <div className='text-center text-xl md:text-2xl lg:text-3xl text-neutral font-semibold mb-4 md:mb-8 lg:mb-12'>{children}</div>
  )
}

export default PageTitle