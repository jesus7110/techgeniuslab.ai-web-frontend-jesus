
import { Fragment, useState } from 'react'
// import Navbar2 from '../Navbar'
import w11 from '../../assets/w11.png'
import w12 from '../../assets/w12.png'
import w13 from '../../assets/w13.png'
import w14 from '../../assets/w14.png'
import w15 from '../../assets/w15.png'
import InfoForm from './InfoForm'
export default function ExploreWorkshop() {
    const [open, setOpen] = useState(false)
   
return (
    <>
    
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-10">
      <div className="mx-auto max-w-7xl pt-10 pb-5 px-1 lg:px-1">
        <div className="mx-auto grid max-w-2xl pt-10 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Equip your School and with  <span className="underline decoration-red-500">Robotics</span> & <span className="underline decoration-red-500">IoT labs</span></h2>
            <p className="mt-4 text-lg leading-8 text-gray-900">
            Setting up a STEM lab is not just about the equipment- it's about investing in your students' future
            </p>
        
          </div>
         
          <InfoForm/>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ffffff] to-[#ffffff] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
    </>
)}