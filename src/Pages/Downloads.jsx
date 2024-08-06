import React from 'react'

const Downloads = () => {
  return (
    <section className="mt-16 padding-y padding-x max-container">
      <h1 className=" mb-8 text-left font-mono text-4xl text-theme_black">
        Downloads
      </h1>
      <div className="font-poppins font-medium text-center flex gap-10 max-md:flex-col ">
        <div className='flex flex-col gap-6 border border-theme_black p-6'>
            <h1>Brochure</h1>
            <a href="not-verified.pdf" download><button className='p-2 w-full bg-theme_yellow hover:bg-theme_gold'>Download</button></a>
        </div>
        <div className='flex flex-col gap-6 border border-theme_black p-6'>
            <h1>Schedule Day 01</h1>
            <a href="not-verified.pdf" download><button className='p-2 w-full bg-theme_yellow hover:bg-theme_gold'>Download</button></a>
            
        </div>
        <div className='flex flex-col gap-6 border border-theme_black p-6'>
            <h1>Schedule Day 02</h1>
            <a href="not-verified.pdf" download><button className='p-2 w-full bg-theme_yellow hover:bg-theme_gold'>Download</button></a>
            
        </div>
      </div>
      
    </section>
  )
}

export default Downloads