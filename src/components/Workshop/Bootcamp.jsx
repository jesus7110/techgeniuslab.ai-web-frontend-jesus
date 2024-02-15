import React from 'react'

const features = [
  { name: '[1] Prerequisite', p1:"Proficiency in at least one programming language (e.g., Python, Java).",
                              p2:"Understanding of basic data structures and algorithms.",
                              p3:"Familiarity with concepts such as machine learning, data analysis, or hardware components (depending on the specific bootcamp focus)."},
  { name: '[2] Duration', p1:"3 to 7 days (intensive immersion in the chosen subject area).",
                          p2:"",
                          p3:""
 },
  { name: '[3] Outcome', p1:"Deepen understanding of advanced STEM, IoT, and AI concepts and technologies.",
                         p2:"Master industry-relevant tools and frameworks for development and analysis.",
                         p3:"Collaborate with peers on real-world projects to solve complex problems." },
]

const Bootcamp = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto  max-w-8xl  items-center px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl  lg:px-8 w-4/5">
      <div>
      <h2 className="text-base font-semibold leading-7 text-red-600">Designed for In-depth knowledge</h2>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bootcamp</h2>
        <p className="mt-4 text-gray-500">
        To take your knowledge to the next level, Dive deep into the heart of STEM, IoT, and AI with our intensive bootcamps. Designed for intermediate learners seeking a comprehensive understanding, these immersive programs offer a deep dive into advanced topics and practical applications. With a focus on hands-on projects, collaborative problem-solving, and expert guidance, you'll emerge with a thorough grasp of complex concepts and the confidence to tackle ambitious projects in the field.        </p>

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

export default Bootcamp