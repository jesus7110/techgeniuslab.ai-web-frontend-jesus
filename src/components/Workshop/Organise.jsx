import React from 'react'

const Organise = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-red-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24  lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#ffffff" />
              <stop offset={1} stopColor="#ffffff" />
            </radialGradient>
          </defs>
        </svg>
        <div className=" text-center lg:w-4/5  lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Interested in hosting a workshop tailored to your specific needs? 
           
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
          We're here to help! Fill out the form below to request a customized workshop in STEM, IoT, or AI. Whether you're a school, college, or organisation, our team will work with you to design a workshop that meets your objectives and exceeds your expectation.
          </p>

          
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a
              href="/requestworkshop"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2k focus-visible:outline-white"
            >
               Request a Discussion Call  🡲
               
            </a>
            
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Organise