import React from 'react';
import wlp1 from '../../assets/wlp1.png'
import wlp2 from '../../assets/wlp2.png'
import wlp3 from '../../assets/wlp3.png'
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
            subtitle="STEM, IoT, and AI For young and tech aspired innovators"
            description="Perfect for beginners, this workshop offers a hands-on introduction to the exciting world of technology. Particpants will gain foundational knowledge and practical skills to embark on your tech adventure."
            imageUrl={wlp3}
            link="#miniworshop"
          />
          <ListItem
            title="Bootcamp"
            subtitle="From the scratch to the advance level of with 5+ projects"
            description="Designed for intermediate learners, where Participants learn about the networking, protocols, hands on experience with devices and collaborate on real-world projects, master industry-relevant tools, and emerge with the expertise to tackle complex challenges."
            imageUrl={wlp2}
            link="#bootcamp"
          />
          <ListItem
            title="Summer Camp"
            subtitle="Project oriented learning to achieve the perfection"
            description="This transformative program is designed for participants with intermediate to advanced skills where they will learn about the project ideation and solution by combining multiple domains and scratch coding for all to enhance the learning and expertizing multiple domains"
            imageUrl={wlp1}
            link="#summercamp"
          />
        </ul>
      </div>
    </div>
    </>
  );
};

export default WorkshopList;
