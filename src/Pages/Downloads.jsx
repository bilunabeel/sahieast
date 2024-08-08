import React from 'react'

const Downloads = () => {

  const docs = [{name:"Brochure",file:"BROCHURE FESTIVAL OF HOPE.pdf"},{name:"Day 01",file:"Day 01.pdf"},{name:"Day 02",file:"Day 02.pdf"},{name:"Day 03",file:"Day 03.pdf"},]
  return (
    <section className="mt-16 padding-y padding-x max-container">
      <h1 className=" mb-8 text-left font-mono text-4xl text-theme_black">
        Downloads
      </h1>
      <div className="font-poppins font-medium text-center flex gap-10 max-md:flex-col ">
        
        {docs.map((doc)=>(
          <div className='flex flex-col gap-6 border border-theme_black p-6'>
          <h1>{doc.name}</h1>
          <a href={doc.file} download><button className='p-2 w-full bg-theme_yellow hover:bg-theme_gold'>Download</button></a>
      </div>
        ))}
        
      </div>
      
    </section>
  )
}

export default Downloads