import PrimaryButton from '@/components/utils/buttons/PrimaryButton';
import React from 'react'

const CustomSpecContent = ({ contentData }) => {
  const content = contentData.content || {};
  const actions = contentData.actions || [];
  // console.log('CustomJobContent - received contentData:', contentData);
  function formatDate(dateString) {
    const dateObj = new Date(dateString);

    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <>
      <div className='relative gap-2 h-fit'>
        <div className="flex flex-col gap-2 h-full">
          <div className='w-full text-base md:text-base capitalize'>{content.title ? content.title : "Job Posting Title"}</div>
          <div className='w-full h-full gap-2 flex flex-col'>
            <div className="flex flex-col items-start justify-start gap-4 border border-cst-neutral-2 rounded-lg h-full p-2">
              {content.specifications ? content.specifications.map((specs, index) => (<div key={index} className="flex flex-col gap-4 justify-start">
                <h3 className='text-xl font-semibold'>{specs.subtitle ? specs.subtitle : "N/A"}</h3>
                <p className='text-base'>{specs.details ? specs.details : "N/A"}</p>
                <ul className='space-y-2'>
                  {specs.points ? specs.points.map((point, index) => (
                    <li key={index} className='list-disc list-inside text-base'>{point}</li>
                  )) : <li className='list-disc list-inside text-base'>N/A</li>}
                </ul>
              </div>)) : <div className="flex flex-col gap-4 pt-4 justify-start">
                <h3 className='text-xl'>N/A</h3>
                <p className='text-base'>N/A</p>
              </div>}
            </div>
          </div>
        </div>
      </div >
      {actions && <div className='sticky flex gap-2 z-10 bottom-0 mt-2 w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_10px_0_rgba(0,0,0,0.1)] p-2 rounded-lg'>
        {actions.map((action, index) => (
          <PrimaryButton key={index} className={`${action.primary ? 'bg-cst-neutral-5 hover:!bg-primary' : 'bg-primary hover:!bg-cst-neutral-3'} text-white rounded-xl py-4 px-6 w-full text-sm md:text-base hover:border-cst-neutral-2 border-1 border-transparent transition-all duration-300`} onClick={() => {
            if (action) {
              const fn = eval(action.onClick);
              fn();
            }
          }}>
            {action.label ? action.label : "Action"}
          </PrimaryButton>
        ))}
      </div>}
    </>
  )
}

export default CustomSpecContent