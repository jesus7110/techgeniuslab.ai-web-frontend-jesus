import React from 'react'

const features = [
  { name: '[1] Prerequisite', p1:"Basic understanding of computer usage.",
                              p2:"Familiarity with fundamental mathematics concepts.",
                              p3:"Eagerness to learn and explore new technologies."},
  { name: '[2] Duration', p1:"1 to 3 days (short and intensive sessions).",
                          p2:"",
                          p3:""
 },
  { name: '[3] Outcome', p1:"Gain a foundational understanding of STEM, IoT, and AI concepts.",
                         p2:"Learn how to implement basic coding and programming principles.",
                         p3:"Acquire hands-on experience with entry-level hardware and software tools." },
]

const MiniWorkshop = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto  max-w-8xl  items-center px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl  lg:px-8 w-4/5">
      <div>
      <h2 className="text-base font-semibold leading-7 text-red-600">Designed for Beginners</h2>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mini Workshop</h2>
        <p className="mt-4 text-gray-500">
        Our dynamic mini workshops are perfect for beginners, these short yet impactful sessions provide a solid foundation in key concepts and practical skills. Through hands-on activities, interactive demonstrations, and engaging discussions, you'll gain valuable insights and build confidence in tackling real-world challenges in technology.
        </p>

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

export default MiniWorkshop