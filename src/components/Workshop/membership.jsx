import React from 'react';
import { CheckIcon,AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'
const includedFeatures = [
    'Exclusive Discounts for School Partners',
    'Dedicated Support for Workshop Planning and Execution',
    'Priority Scheduling for Workshops and Events',
    'Recognition as a TechStudioLabs Partner School',
  ]

function Member() {

return (
  <>
<div className="bg-white py-2 sm:py-1 mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-3xl sm:text-center sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bring STEM Education to Your School!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Unlock a world of possibilities for your students through our tailored STEM workshops. Collaborate with TechStudioLabs to bring innovative learning experiences to your classrooms.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-red-700">Perks of Partnering with TechStudioLabs</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white">Ready to Transform Your School's Learning Experience !!</span>
                </p>
                <a
                  href="/requestworkshop"
                  className="mt-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-center text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Request Workshop
                </a>
                <p className="mt-6 text-sm leading-5 text-gray-50">
               For more info Call us at +918669584949
                </p>
                <p className="mt-6 text-sm leading-5 text-gray-50">
               Or email at contact@techstudiolabs.in
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </>
)}

export default Member;