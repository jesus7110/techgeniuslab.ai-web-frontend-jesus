import React from 'react';
import img1 from '../../assets/robo_tech.png' 
const AboutUsSection = () => {
  return (
    <div className="relative overflow-hidden bg-white py-10">
    <div className="pb-80 pt-16 sm:pb-12 sm:pt-24 lg:pb-2 lg:pt-40">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex flex-wrap justify-center">
        <div className="sm:max-w-lg mr-8 mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">  </h1>
          <p className="mt-4 text-xl text-gray-500"> </p>
           <img src={img1} alt="Girl" />
        </div>
        <div className="sm:max-w-lg mb-8 mt-32">
          <h1 className="text-12xl font-bold tracking-tight text-gray-900 sm:text-6xl">Tech Studio Labs</h1>
          <p className="mt-2 text-xl text-gray-100 bg-red-900">A blend of traditional teaching and modern method</p>
          <p className="mt-2 text-10xm text-black ">TechStudioLabs is a passionate team of STEM educators and mentors dedicated to igniting a love for technology and innovation in young minds.</p>
          <p className="mt-2 text-10xm text-gray-900 ">We believe that every child deserves access to high-quality, engaging STEM learning experiences that will prepare them for the challenges and opportunities of the future.</p>

        </div>
      </div>
    </div>
  </div>
  );
};

export default AboutUsSection;
