
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition, RadioGroup} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon  ,  FingerPrintIcon} from '@heroicons/react/24/outline'
import { StarIcon,CloudArrowUpIcon, LockClosedIcon, ServerIcon  } from '@heroicons/react/20/solid'
import Navbar2 from './Navbar2'
import w11 from '../assets/w11.png'
import w12 from '../assets/w12.png'
import w13 from '../assets/w13.png'
import w14 from '../assets/w14.png'
import w15 from '../assets/w15.png'
import c1 from '../assets/4.png'
import fc1 from '../assets/fc1.png'
import fc2 from '../assets/fc2.png'

import mc1 from '../assets/mc1.png'
import mc2 from '../assets/mc2.png'
import mc3 from '../assets/mc3.png'
import mc4 from '../assets/mc4.png'

import Footer from './Footer';

import C1 from '../assets/c1.png'
import { CheckIcon,AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'
import wc1 from '../assets/wc1.png'
import wc2 from '../assets/wc2.png'
import wc3 from '../assets/wc3.png'
import wc4 from '../assets/wc4.png'
import banner from '../assets/appbanner.png'
import playButton from '../assets/play_button.png'


const popularWorkshop = [
  {
    id: 1,
    title: "IoT Whiz Kids",
    description: "Making Magic with Connected Things",
    imageSrc: fc2
  },
  
  {
    id: 2,
    title: "Master Mechanics",
    description: "Building the Robots of Tomorrow",
    imageSrc: mc2
  },
  {
    id: 3,
    title: "IoT Brainiacs",
    description: "Designing Smart Solutions for Real Problems",
    imageSrc: mc1
  },
];


const foundationWorkshop = [
  {
    id: 1,
    title: "Robo Explorers ",
    description: "Building intelligent Bots and Buddies  ",
    imageSrc: fc1
  },
  {
    id: 2,
    title: "IoT Whiz Kids",
    description: "Making Magic with Connected Things",
    imageSrc: fc2
  },
 
];

const advanceWorkshop = [
  {
    id: 1,
    title: "IoT Brainiacs",
    description: "Designing Smart Solutions for Real Problems",
    imageSrc: mc1
  },
  {
    id: 2,
    title: "Master Mechanics",
    description: "Building the Robots of Tomorrow",
    imageSrc: mc2
  },
  {
    id: 3,
    title: "IoT Architects",
    description: "Connecting the World with Intelligence and Innovation",
    imageSrc: mc3
  },
  {
    id: 4,
    title: "Challenge Accepted",
    description: "Robotics Quests and Friendly Competitions",
    imageSrc: mc4
  },
 
];
const posts = [
  {
    id: 1,
    title: 'Hand On Workshop',
    description:
      'Delve into the exciting world of robotics with our introductory workshop. Participants will learn the fundamentals of building and programming robots, fostering creativity and problem-solving skills.',
    imageBg: C1,
    category: { title: 'Beginners', href: '#' },

      b1: 'Basic Robot Construction',
      b2: 'Introduction to Programming with Scratch',
      b3: 'Team Challenges and Fun Activities',
      b4: 'Q&A Session with Experienced Instructors',
  button:'Request Workshop',
  href: '/requestworkshop',
  icon: CheckIcon,
  },

  {
      id: 2,
      title: 'Premium Live Classes',
      description:
        'Delve into the exciting world of robotics with our introductory workshop. Participants will learn the fundamentals of building and programming robots, fostering creativity and problem-solving skills.',
      imageBg: C1,
      category: { title: 'Beginners', href: '#' },
     
        b1: 'Basic Robot Construction',
        b2: 'Introduction to Programming with Scratch',
        b3: 'Team Challenges and Fun Activities',
        b4: 'Q&A Session with Experienced Instructors',
    
    button:'Join Premium',
    href: '/requestworkshop',
    icon: CheckIcon,
    },

]


const workshops = [
  {
    id: 1,
    name: 'Begin with Arduino',
    imageSrc: wc1,
    imageAlt: "Workshop image 1",
    tag: 'Beginner',
    class: '6th - 8th'
  
  },
  {
    id: 2,
    name: 'Begin with Arduino',
    imageSrc: wc2,
    imageAlt: "Workshop image 1",
    tag: 'Beginner',
    class: '6th - 8th'
  
  },
  {
    id: 3,
    name: 'Begin with Arduino',
    imageSrc: wc3,
    imageAlt: "Workshop image 1",
    tag: 'Beginner',
    class: '6th - 8th'
  
  },
  {
    id: 4,
    name: 'Begin with Arduino',
    imageSrc: wc4,
    imageAlt: "Workshop image 1",
    tag: 'Beginner',
    class: '6th - 8th'
  
  },
  // More workshops...
]



const includedFeatures = [
  'Exclusive Discounts for School Partners',
  'Dedicated Support for Workshop Planning and Execution',
  'Priority Scheduling for Workshops and Events',
  'Recognition as a TechStudioLabs Partner School',
]
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


function ServiceCard({ title, description, imageSrc }) {
  return (

    <a href="#" className="shadow-2xl relative">
      <div className="h-full relative shadow-2xl shadow-gray-600 overflow-hidden group">
        <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-gray-900 transition-all ease-in-out duration-500">
          <div className="w-full h-full p-5 relative">
            <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
            <h2 className="text-2xl font-bold text-white mb-1 pb-2">{title}</h2>
            <p className="text-lg font-light text-white">{description}</p>
            </div>
          </div>
        </div>
        <img src={imageSrc} className="w-full z-0 h-full object-fill example" />
      </div>
    </a>

  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ExploreWorkshop() {
  const [open, setOpen] = useState(false)
 
  return (
    <>
    <Navbar2/>
       <div className="relative overflow-hidden bg-gray-900">
      <div className="pb-80 pt-16 sm:pb-40  sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl py-10 ">
            Hands-on tech courses that make you future-ready
            </h1>
            <p className="mt-4 text-sm-4 text-white">
            Tech Studio Labs provides the best hands-on workshop & free online courses for kids (Age 8+) and engineering students. Start learning for free today!
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
    
  {/*  <div className="bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">Join Us for an Educational Adventure!</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our workshops and register now to secure your spot. Choose a workshop that aligns with your interests and dive into the world of STEM education.
            </p>
        </div>
            {  <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">Build Cool Projects, And prepare for your Future! </h3>
            }
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="px-5 group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    
                      <span className="absolute inset-0" />
                      {post.title}
                    
                  </h3>
                  
                  <ul role="list" className="mt-8 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b1}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b2}
                  </li>

                  <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b3}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b4}
                  </li>

                </ul>

                </div>
                <div className="px-5 relative mt-8 flex items-center gap-x-4">
                <a href={post.href} className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {post.button}
            </a>
                </div>
              </article>
            ))}
          </div>            
        </div>
      </div>/* 
            */}
{/*
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-gray-200'>
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              Customised Workshops for you 
            </h3>
        </div>       
      </div>
    
            */}

   {/*   <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 border-t border-gray-200">
             <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">Build Cool Projects, And prepare for your Future! </h3>
           
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="px-5 group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    
                      <span className="absolute inset-0" />
                      {post.title}
                    
                  </h3>
                  
                  <ul role="list" className="mt-8 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b1}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b2}
                  </li>

                  <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b3}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b4}
                  </li>

                </ul>

                </div>
                <div className="px-5 relative mt-8 flex items-center gap-x-4">
                <a href="#" className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {post.button}
            </a>
                </div>
              </article>
            ))}
          </div>            
        </div>

    
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-gray-200'>
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              Customised Workshops for you 
            </h3>
        </div>       
      </div>
  */}

   { /*  <div id='checkcourses' className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-t border-gray-200">
      <h2 className="text-base font-semibold leading-7 text-red-600">Designed for early learners</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Popular Workshops</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={workshop.imageSrc}
                  alt={workshop.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {workshop.name}
                    
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Class: {workshop.class}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{workshop.tag}</p>
              </div>
            </div>
          ))}
        </div>
          </div>*/ }

     {/*<div id='premiumcourses' className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-t border-gray-200">
      <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
             Premium Courses 
      </h3>
       
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={workshop.imageSrc}
                  alt={workshop.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {workshop.name}
                    
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{workshop.age}</p>
                </div>
                <p className="text-sm font-medium text-gray-900"> 
                {workshop.tag}
               </p>
              </div>
            </div>
          ))}
        </div>
      </div>
          */}

<div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 border-t border-gray-200">
<section className="py-12 bg-white sm:py-16 lg:py-10 z-40 relative">
      <div className="container mx-auto">
      <h2 className="text-base font-semibold leading-7 text-red-600">Creators Feedback</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl pb-10">Popular Workshops</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {popularWorkshop.map((card) => (
          <ServiceCard key={card.id} title={card.title} description={card.description} imageSrc={card.imageSrc} />
        ))}
        </div>
      </div>
    </section>
</div>



<div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 border-gray-200">
<section className="py-12 sm:py-16 lg:py-10 z-40 relative">
      <div className="container mx-auto">
      <h2 className="text-base font-semibold leading-7 text-red-600">Designed for Novice learners</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl pb-10">Foundation Workshops</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {foundationWorkshop.map((card) => (
          <ServiceCard key={card.id} title={card.title} description={card.description} imageSrc={card.imageSrc} />
        ))}
        </div>
      </div>
    </section>
</div>


<div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 border-gray-200">
<section className="py-12 sm:py-16 lg:py-10 z-40 relative">
      <div className="container mx-auto">
      <h2 className="text-base font-semibold leading-7 text-red-600">Designed for intensive exploration</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl pb-10">Master Workshops</h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        {advanceWorkshop.map((card) => (
          <ServiceCard key={card.id} title={card.title} description={card.description} imageSrc={card.imageSrc} />
        ))}
        </div>
      </div>
    </section>
</div>

 

      {/* <div id='checkcourses' className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-t border-gray-200">
      <div className="mx-auto mb-20 max-w-5xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Unlock Exclusive Learning Opportunities</h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          We believe in the power of continuous learning!
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
          As a special launching offer, every student who attends any of our offline workshops will receive a complimentary 3-month Prime Membership. This membership grants you access to a wealth of learning resources, including:
          
          <div className="grid grid-cols-1  sm:mt-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <ul role="list" className="text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
              <li className="flex gap-x-3 font-semibold">
                <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                Live and Recorded Classes.
              </li>
                
                <li className="flex gap-x-3 font-semibold">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  Project Building Workshops
                  </li>

              </ul>

              <ul role="list" className="text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
              <li className="flex gap-x-3 font-semibold">
                <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                Community Forums</li>
                
                <li className="flex gap-x-3 font-semibold">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  Additional Learning Materials
                  </li>

              </ul>
        </div>
          </p>  
        </div>

        
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={banner}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl lg:mx-0">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-5xl">Our Mobile App is Launching Soon</h2>
          <p className="mt-6 text-md-4 leading-8 text-gray-100">
          Access learning on the go with our new mobile application. Stay tuned for an enhanced and seamless learning experience right at your fingertips.
          </p>

          <img
        src={playButton} className='w-32 h-32'
        alt=""
        
      />
        </div>
      </div>
    </div>
     
    
       
      </div> */}

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


    <Footer/>
    </>
  )
}
