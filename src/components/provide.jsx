import React from 'react';

function FeaturesSection() {
  return (
    <section className="py-12 bg-gray-900 text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight text-gray-50 sm:text-4xl xl:text-5xl mb-6">We are just getting started!</h2>
          <p className="mb-4">We are creating a tool that helps you be more productive and efficient when building websites and webapps</p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path data */}
                </svg>
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Realtime Collaboration</h3>
                <p className="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path data */}
                </svg>
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Realtime Collaboration</h3>
                <p className="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
              <div className="p-9">
                <svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* SVG Path data */}
                </svg>
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Realtime Collaboration</h3>
                <p className="mt-6 text-base text-gray-600">Collaborate in realtime with other editors in a project. See what other editors are doing and edit even a simple text together</p>
              </div>
            </div>
          </div>
          {/* Repeat the above structure for other features */}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
