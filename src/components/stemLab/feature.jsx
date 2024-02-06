import React from 'react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
      <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">{icon}</span>
      <p className="text-xl font-medium text-slate-700 mt-3">{title}</p>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10" style={{backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')"}}>
      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
        <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
          title="Curriculum"
          description="Team BrainEdge education is a bunch of highly focused, energetic set of people."
        />
         <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
          title="Most Experienced Team"
          description="Team BrainEdge education is a bunch of highly focused, energetic set of people."
        />
         <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
          title="Most Experienced Team"
          description="Team BrainEdge education is a bunch of highly focused, energetic set of people."
        />
         <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
          title="Most Experienced Team"
          description="Team BrainEdge education is a bunch of highly focused, energetic set of people."
        />
         <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
          title="Most Experienced Team"
          description="Team BrainEdge education is a bunch of highly focused, energetic set of people."
        />
         <ServiceCard
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>}
          title="Most Experienced Team"
          description="Team BrainEdge education is a bunch of highly focused, energetic set of people."
        />
        {/* Add other ServiceCard components for each service */}
      </div>
      <div className="w-full bg-red-600 shadow-xl shadow-red-200 py-10 px-20 flex justify-between items-center">
        <p className="text-white">
          <span className="text-4xl font-medium">Features </span>
          <br />
          <span className="text-lg">We provide best Stem Lab setup with .. ! </span>
        </p>
        
      </div>
    </div>
  );
}

export default App;
