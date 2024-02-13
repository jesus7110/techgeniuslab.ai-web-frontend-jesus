import React from 'react';
import img1 from '../../assets/robo_tech2.png'  
const Mission = () => {
  return (
    <div className="relative overflow-hidden bg-white py-10">
    <div className="pb-80 pt-6 sm:pb-40 sm:pt-12 lg:pb-8 lg:pt-10">
      <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex flex-wrap justify-center">
      <div className="sm:max-w-lg mb-8 mt-32">
          <h1 className="text-12xl font-bold tracking-tight text-gray-100 bg-red-900 sm:text-6xl">Our Mission</h1>
          <p className="mt-2 text-10xm text-black ">To make STEM education accessible, engaging, and relevant to all students by providing hands-on workshops, self-paced online courses, and innovative learning tools.</p>
        </div>
        <div className="sm:max-w-lg mr-8 mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">  </h1>
          <p className="mt-4 text-xl text-gray-500"> </p>
           <img src={img1} alt="Girl" />
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default Mission;
