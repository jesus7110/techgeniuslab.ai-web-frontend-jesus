import React from 'react';
import img1 from '../../assets/robo_tech3.png';
import Br from '../../files/Brochure.pdf'

const WhyChooseUs = () => {
  const openPdf = () => {
    // Replace 'path_to_your_pdf.pdf' with the actual path to your PDF file
    window.open(Br, '_blank');
  };
  return (
    <div className="relative overflow-hidden bg-white py-10 w-4/5 item-center mx-auto">
      <div className="pb-80 pt-6 sm:pb-40 sm:pt-12 lg:pb-48 lg:pt-10">
        <div className="relative max-w-6xl px-4 sm:static sm:px-6 lg:px-8 flex flex-wrap justify-between items-center">
          <div className="mb-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-100 bg-red-900 sm:text-4xl">Why Choose Us</h1>
            <p className="mt-1 text-10xm text-black">- Conduct interactive and engaging workshops focusing on IoT and Robotics.</p>
            <p className="mt-1 text-10xm text-black">- Provide offline workshops for schools with 80-100 students in a single session.</p>
            <p className="mt-1 text-10xm text-black">- Offer customized workshops tailored to individual school needs and preferences.</p>
            <p className="mt-1 text-10xm text-black">- Provide self-paced online courses that complement the workshops and offer in-depth learning.</p>
            <p className="mt-1 text-10xm text-black">- Offer ongoing support and guidance to students and educators.</p>
          </div>
          <div className="flex justify-end">
            <button className="bg-red-900 text-white px-16 py-5 rounded " onClick={openPdf}>Check out our Brochure</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
