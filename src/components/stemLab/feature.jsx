import React from 'react';

const ComponentCard = ({ title, description }) => (
  <div className="p-8 space-y-3 border-2 border-indigo-800 rounded-xl shadow-2xl shadow-indigo-100">
    {/* {<span className="inline-block text-blue-500 dark:text-blue-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    </span>} */}

    <h1 className="text-2xl font-semibold text-gray-700 capitalize ">{title}</h1>

    <p className="text-gray-600">
      {description}
    </p>

  
  </div>
);

const FeatureSection = () => (
  <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-16">
    <div className="mx-auto max-w-7xl pt-10 pb-20 px-6 lg:px-8">
    <div className="max-w-6xl lg:max-6w-lg">
    <h2 className="text-base font-semibold leading-7 text-red-600">Objectives of STEM Lab</h2>
    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl ">The primary objective of establishing the STEM Lab is to provide a dynamic learning environment that facilitates hands-on experience and skill development in AI & IoT technology
 </h2>
          
        </div>
      <div className="mx-auto grid max-w-2xl pt-12 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
        
        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4 lg:pt-2">
          <ComponentCard
            title="Handpicked Course"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
          />
          <ComponentCard
            title="Lab Setup & Equipments"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
          />
          <ComponentCard
            title="Expert Sessions & Mentorship"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
          />
          <ComponentCard
            title="Student Learning Portal"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
          />
        </dl>
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
);

const App = () => (
  <>
    <FeatureSection />
  </>
);

export default App;
