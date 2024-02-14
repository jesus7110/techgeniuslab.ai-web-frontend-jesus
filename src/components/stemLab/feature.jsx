import React from 'react';

const ComponentCard = ({ title, description }) => (
  <div className="p-8 space-y-3 border-2 border-indigo-800 rounded-xl shadow-2xl shadow-indigo-100">
    <h1 className="text-xl font-semibold text-gray-700 capitalize">{title}</h1>
    <p className="text-gray-600 text-justify px-1.5">{description}</p>
  </div>
);

const FeatureSection = () => (
  <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-16">
    <div className="mx-auto max-w-7xl pt-10 pb-20 px-2 lg:px-2 w-4/5">
      <div className="max-w-6xl lg:max-w-6w-lg">
        <h2 className="text-base font-semibold leading-7 text-red-600">Objectives of STEM Lab</h2>
        <h2 className="text-xl font-bold  tracking-tight text-gray-900 sm:text-3xl">The primary objective of establishing the STEM Lab is to provide a dynamic learning environment that facilitates hands-on experience and skill development in AI & IoT technology</h2>
      </div>
      <div className="mx-auto grid max-w-2xl pt-12 grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <ComponentCard
          title="Handpicked Course"
          description="Explore our carefully curated STEM courses, designed to pique students' attention, develop critical thinking, and provide them with necessary skills for the future. Our evaluation parameters enable teachers to steer their students' progress.."
        />
        <ComponentCard
          title="Lab Setup & Equipments"
          description="Enhance your educational landscape with our comprehensive STEM Lab Setup service. Our commitment consists of six months of focused teacher development, workshops, and interesting competitions and post lab setup support."
        />
        <ComponentCard
          title="Expert Sessions & Mentorship"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        />
        <ComponentCard
          title="Student Learning Portal"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
        />
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
