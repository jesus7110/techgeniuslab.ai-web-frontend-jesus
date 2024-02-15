import React from 'react';
import img1 from '../../assets/robo_tech3.png';

const WhyChooseUs = () => {
  return (
    <div className="relative overflow-hidden bg-white py-10 w-4/5">
      <div className="pb-80 pt-6 sm:pb-40 sm:pt-12 lg:pb-48 lg:pt-10 sm:static flex justify-end items-center">
        <div className="max-w-4/5">
          <h1 className="text-8xl font-bold tracking-tight text-gray-100 bg-red-900 sm:text-4xl">Why Choose Us</h1>
          <div className="mt-4 text-10xm text-black">
            <ul>
              <li>Conduct interactive and engaging workshops focusing on IoT and Robotics.</li>
              <li>Provide offline workshops for schools with 80-100 students in a single session.</li>
              <li>Offer customized workshops tailored to individual school needs and preferences.</li>
              <li>Provide self-paced online courses that complement the workshops and offer in-depth learning.</li>
              <li>Offer ongoing support and guidance to students and educators.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
