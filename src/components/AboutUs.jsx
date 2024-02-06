
import React from 'react';
import './AboutUs.css'; 
import Navbar2 from './Navbar2';
import Footer from './Footer';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import p1 from '../assets/salvin.jpeg'

const features = [
  {
    name: 'Educational Workshops',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Training On Demand',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Classroom Training',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]

const teamMembers = [
  {
    name: 'Ayan Hazra',
    title: 'Founder & AI-ML Specialist',
    imageSrc: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
  },
  {
    name: 'Salvin Rai',
    title: 'Founder & BDA Specialist',
    imageSrc: p1,
  },
  {
    name: 'Nirmiti Deshmukh',
    title: 'Founder &  in IOT',
    imageSrc: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
  },
 
];

const devMembers = [
  {
    name: 'Mayank',
    title: 'Android Developer',
    imageSrc: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
  },
  {
    name: 'Tranter Jaskulski',
    title: 'Founder & Specialist',
    imageSrc: 'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80',
  },
 
];

export default function AboutUs() {
  return (

    <>
    <Navbar2/>


    <div className="page-container bg-gray-50">
    <div className="flex flex-col">
   

      <div className="flex flex-col mt-8">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-gray-900 text-4xl font-bold mb-8">Meet the Team</h1>
              <p className="text-gray-700 text-lg-4xl font-light">
                Tech to Mentor, What you need, we have them all
              </p>
            </div>
          </div>

          <div className="flex flex-wrap  items-center justify-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="w-full md:w-6/12 lg:w-3/12 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={member.imageSrc}
                      alt={member.name}
                    />
                  </a>
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">{member.name}</h1>
                    <div className="text-gray-700 font-light mb-2">{member.title}</div>
                    <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
              
              
    
   

      <div className="flex flex-col mt-24">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h1 className="text-gray-900 text-4xl font-bold mb-8">Meet the Developer Team</h1>
              <p className="text-gray-700 text-lg-4xl font-light">
                Tech to Mentor, What you need, we have them all
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center">
            {devMembers.map((member) => (
              <div key={member.name} className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={member.imageSrc}
                      alt={member.name}
                    />
                  </a>
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">{member.name}</h1>
                    <div className="text-gray-700 font-light mb-2">{member.title}</div>
                    <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>
                      <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
    <Footer/>
  </>
  )
}

