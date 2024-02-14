import React from 'react'
const features = [
  { name: '[1] Prerequisite', p1:"Intermediate to advanced proficiency in programming languages such as Python, C++, or Java." , 
                              p2:"Strong understanding of mathematical concepts including calculus, algebra, and statistics.",
                              p3:"Prior exposure to STEM-related projects or coursework is recommended" },
  { name: '[2] Duration', p1:"1 to 2 weeks (extended period for in-depth exploration and skill development).",
                          p2:"",
                          p3:""},
  { name: '[3] Outcome',  p1:"Explore advanced topics in STEM, IoT, and AI through project-based learning.",
                          p2:"Develop critical thinking and problem-solving skills applicable to real-world scenarios.",
                          p3:"Engage in hands-on experimentation and research under the guidance of expert mentors."  },
]
const SummerCamp = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto  max-w-8xl  items-center px-4 py-8 sm:px-6 sm:py-24 lg:max-w-7xl  lg:px-8 w-4/5">
      <div>
      <h2 className="text-base font-semibold leading-7 text-red-600">Designed for Detailed Learning Experience</h2>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Summer Camp</h2>
        <p className="mt-4 text-gray-500">
        To support your passion for technology with our immersive summer camps. Spanning one to two weeks, these in-depth programs are designed to provide a holistic and enriching learning experience. Dive into the latest advancements in STEM, IoT, and AI through a blend of interactive workshops, project-based learning, and guest lectures from industry experts. Whether you're exploring robotics, delving into machine learning algorithms, or experimenting with IoT devices, our summer camps offer a transformative journey that will inspire and empower you to excel in the world of technology.        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">{feature.p1}</dd>
              <dd className="mt-2 text-sm text-gray-500">{feature.p2}</dd>
              <dd className="mt-2 text-sm text-gray-500">{feature.p3}</dd>
            </div>
          ))}
        </dl>
      </div>
     
    </div>
    </div>
  )
}

export default SummerCamp