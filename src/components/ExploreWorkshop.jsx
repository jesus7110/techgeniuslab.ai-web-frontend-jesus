/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition, RadioGroup} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon  ,  FingerPrintIcon} from '@heroicons/react/24/outline'
import { StarIcon,CloudArrowUpIcon, LockClosedIcon, ServerIcon, CheckIcon  } from '@heroicons/react/20/solid'
import Navbar2 from './Navbar2'
import w11 from '../assets/w11.png'
import w12 from '../assets/w12.png'
import w13 from '../assets/w13.png'
import w14 from '../assets/w14.png'
import w15 from '../assets/w15.png'
import w16 from '../assets/w16.png'
import Workshop from './Workshop';
import Footer from './Footer';




const features = [
  {
    name: 'Hands on workshop',
    description1:'Robotics, Iot and Electricka',
    description1:'4 Hours of Training',
    icon: CheckIcon,
  },
  {
    name: 'Premium Live Classes',
    description1:'Robotics, Iot and Electricka',
    description1:'4 Hours of Training',
    icon: CheckIcon,
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ExploreWorkshop() {
  const [open, setOpen] = useState(false)
 
  return (
    <>
    <Navbar2/>
       <div className="relative overflow-hidden bg-gray-900">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Hands-on tech courses that make you future-ready
            </h1>
            <p className="mt-4 text-sm-4 text-white">
            Tech Genius Labs provides the best hands-on workshop & free online courses for kids (Age 8+) and engineering students. Start learning for free today!
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={w11}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={w12}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={w13}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                      
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={w14}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={w15}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Workshop/>


    <Footer/>
    </>
  )
}
