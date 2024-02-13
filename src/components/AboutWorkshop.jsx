import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import d4 from '../assets/d4.png'

const features = [
    { name: '[1] School Registration', description: 'Schools begin by registering on our platform, providing essential details about their institution.' },
    { name: '[2] Request Workshop', description: 'Submit a workshop request with preferred dates, workshop type, and any specific requirements they may have.' },
    { name: '[3] Workshop Confirmation', description: 'Our team reviews the workshop request and confirms availability.' },
    { name: '[4] Student Registration', description: 'Students Registration through Schools.' },
    { name: '[5] Event Day: Hands On Workshop', description: 'Hands On workshop with real project using DIY learning kits' },
    { name: '[6] Get Complimentary Lifetime VIP access', description: 'Students who attend offline workshops gain complimentary access to our online learning platform.' },
  ]
  

  export default function AboutWorkshop() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
          <h2 className="text-base font-semibold leading-7 text-red-600">Seamless Process</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-gray-500">
           Register your school today and unlock the door to a world of hands-on learning in IoT and robotics!
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={d1}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={d2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={d3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={d4}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  