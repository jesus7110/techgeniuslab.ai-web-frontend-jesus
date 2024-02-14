import React from 'react';
import img1 from '../../assets/robo_tech3.png';

const JoinUs = () => {
  return (
    <div className="pb-16 pt-6 sm:pb-24 sm:pt-12 lg:pb-32 lg:pt-10 w-full sm:w-4/5 mx-auto">
      <div className="relative px-4 sm:static sm:px-6 lg:px-8 flex flex-wrap justify-center items-start">
        <div className="w-full sm:w-5/6 lg:w-full">
          <div className="mb-8 mt-12 sm:mt-12">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-gray-900 underline decoration-red-900   rounded-md">Are you excited to join our dynamic team</h1>
          </div>
          
          <p className="mt-1 text-lg sm:text-xl lg:text-lg text-black">At TechStudioLabs, we believe in building a collaborative and dynamic team where every member plays a vital role in achieving our goals. If you're passionate, driven, and eager to make a difference, we want to hear from you!</p>

          <div className="mb-8 mt-12">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl underline decoration-red-900 font-bold tracking-tight text-gray-900">How to Apply</h1>
          </div>
          
          <p className="mt-1 text-lg sm:text-xl lg:text-lg text-black">Ready to take the next step in your career? Explore our current job openings and apply today! Alternatively, if you don't see a position that matches your skills and experience, feel free to reach out to us with your resume and cover letter outlining why you'd be a great fit for our team.

Join us in shaping the future of TechStudiosLabs and making a difference in the world!</p>

              
        </div>

              <a
                href="/career"
                className="inline-block rounded-md mt-20 border border-transparent bg-red-800 px-8 py-3 text-center font-medium text-white hover:bg-slate-900"
              >
                Explore Career Page
              </a>
              <a
                href="/apply"
                className="inline-block rounded-md border ml-8 mt-20 border-transparent bg-red-800 px-8 py-3 text-center font-medium text-white hover:bg-slate-900"
              >
                Apply with Resume
              </a>
      </div>
    </div>
  );
};

export default JoinUs;
