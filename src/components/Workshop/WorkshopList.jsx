import React from 'react';

const ListItem = ({ title, subtitle, description, imageUrl, link }) => {
  return (
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
      <div className="order-1 sm:ml-6 xl:ml-0">
        <h3 className="mb-1 text-slate-900 font-semibold dark:text-slate-900">
          <span className="mb-1 block text-sm leading-6 text-red-700">{title}</span>
          {subtitle}
        </h3>
        <div className="prose prose-slate prose-sm text-slate-900 dark:prose-dark">
          <p>{description}</p>
        </div>
        <a
          className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-50 text-gray-50 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-red-700 dark:text-gray-100 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-slate-500 mt-6"
          href={link}
        >
          Learn more
          <span className="sr-only">{subtitle}</span>
          <svg
            className="overflow-visible ml-3 text-gray-50 group-hover:text-gray-50 dark:text-gray-50 dark:group-hover:text-gray-50"
            width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </a>
      </div>
      <img src={imageUrl} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
    </li>
  );
};

const WorkshopList = () => {
  return (
    <>
    <div className="mx-auto max-w-6xl sm:text-center sm:py-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"> Curated learning experience for students with game changing <span className="underline decoration-red-500">hands on activity</span> with <span className="underline decoration-red-500">learning kits</span></h2>
        </div>
    <div className="flex justify-center">
      
      <div className="w-4/5">
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
          <ListItem
            title="Mini Workshop"
            subtitle="Completely unstyled, fully accessible UI components"
            description="Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS."
            imageUrl="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg"
            link="#miniworshop"
          />
          <ListItem
            title="Summer Camp"
            subtitle="Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS."
            description="A set of 450+ free MIT-licensed SVG icons. Available as basic SVG icons and via first-party React and Vue libraries."
            imageUrl="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg"
            link="#summercamp"
          />
          <ListItem
            title="Bootcamp"
            subtitle="Seamless SVG background patterns by the makers of Tailwind CSS."
            description="A collection of over 100 free MIT-licensed high-quality SVG patterns for you to use in your web projects."
            imageUrl="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg"
            link="#bootcamp"
          />
        </ul>
      </div>
    </div>
    </>
  );
};

export default WorkshopList;
