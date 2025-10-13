import React from 'react'

const CustomJobContent = () => {
  return (
    <>
      <div className='relative gap-2 h-full'>
        <div className="flex flex-col gap-2 h-full">
          <div className='w-full text-2xl font-semibold md:text-3xl capitalize'>Job Posting Title</div>
          <div className='w-full h-full gap-2 flex flex-col'>
            <div className="flex flex-row justify-between items-start gap-2 w-full">
              <div className='w-full text-sm text-cst-neutral-2 text-left'>Posted on: hello</div>
              <div className='w-full text-sm text-cst-neutral-2 text-center'>Location: hello</div>
              <div className='w-full text-sm text-cst-neutral-2 text-right'>Apply By: hello</div>
            </div>
            <div className="border border-cst-neutral-2 rounded-lg h-full"></div>
          </div>
        </div>
      </div>
      <div className='sticky z-10 bottom-0 w-full bg-white shadow-t-md p-2 rounded-lg'>crowdfunding</div>
    </>
  )
}

export default CustomJobContent