import C1 from '../assets/c1.png'
import { CheckIcon,AdjustmentsHorizontalIcon } from '@heroicons/react/20/solid'
import wc1 from '../assets/wc1.png'
import wc2 from '../assets/wc2.png'
import wc3 from '../assets/wc3.png'
import wc4 from '../assets/wc4.png'

const posts = [
    {
      id: 1,
      title: 'Hand On Workshop',
      description:
        'Delve into the exciting world of robotics with our introductory workshop. Participants will learn the fundamentals of building and programming robots, fostering creativity and problem-solving skills.',
      imageBg: C1,
      category: { title: 'Beginners', href: '#' },

        b1: 'Basic Robot Construction',
        b2: 'Introduction to Programming with Scratch',
        b3: 'Team Challenges and Fun Activities',
        b4: 'Q&A Session with Experienced Instructors',
    button:'Request Workshop',
    icon: CheckIcon,
    },

    {
        id: 2,
        title: 'Premium Live Classes',
        description:
          'Delve into the exciting world of robotics with our introductory workshop. Participants will learn the fundamentals of building and programming robots, fostering creativity and problem-solving skills.',
        imageBg: C1,
        category: { title: 'Beginners', href: '#' },
       
          b1: 'Basic Robot Construction',
          b2: 'Introduction to Programming with Scratch',
          b3: 'Team Challenges and Fun Activities',
          b4: 'Q&A Session with Experienced Instructors',
      
      button:'Join Premium',
      icon: CheckIcon,
      },
  
  ]


  const workshops = [
    {
      id: 1,
      name: 'Begin with Arduino',
      imageSrc: wc1,
      imageAlt: "Workshop image 1",
      tag: 'Beginner',
      class: '6th - 8th'
    
    },
    {
      id: 2,
      name: 'Begin with Arduino',
      imageSrc: wc2,
      imageAlt: "Workshop image 1",
      tag: 'Beginner',
      class: '6th - 8th'
    
    },
    {
      id: 3,
      name: 'Begin with Arduino',
      imageSrc: wc3,
      imageAlt: "Workshop image 1",
      tag: 'Beginner',
      class: '6th - 8th'
    
    },
    {
      id: 4,
      name: 'Begin with Arduino',
      imageSrc: wc4,
      imageAlt: "Workshop image 1",
      tag: 'Beginner',
      class: '6th - 8th'
    
    },
    // More workshops...
  ]
  

  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  const includedFeatures = [
    'Exclusive Discounts for School Partners',
    'Dedicated Support for Workshop Planning and Execution',
    'Priority Scheduling for Workshops and Events',
    'Recognition as a TechGeniusLabs Partner School',
  ]

  export default function Workshop() {
    return (
      <>
      <div className="bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="mx-auto max-w-3xl lg:mx-0">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">Join Us for an Educational Adventure!</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our workshops and register now to secure your spot. Choose a workshop that aligns with your interests and dive into the world of STEM education.
            </p>
        </div>
            {/*  <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">Build Cool Projects, And prepare for your Future! </h3>
            */}
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="px-5 group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    
                      <span className="absolute inset-0" />
                      {post.title}
                    
                  </h3>
                  
                  <ul role="list" className="mt-8 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b1}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b2}
                  </li>

                  <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b3}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b4}
                  </li>

                </ul>

                </div>
                <div className="px-5 relative mt-8 flex items-center gap-x-4">
                <a href="#checkworkshop" className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {post.button}
            </a>
                </div>
              </article>
            ))}
          </div>            
        </div>
      </div>
  
{/*
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-gray-200'>
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              Customised Workshops for you 
            </h3>
        </div>       
      </div>
    
            */}

   {/*   <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 border-t border-gray-200">
             <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">Build Cool Projects, And prepare for your Future! </h3>
           
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="px-5 group relative">
                  <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    
                      <span className="absolute inset-0" />
                      {post.title}
                    
                  </h3>
                  
                  <ul role="list" className="mt-8 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
                <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b1}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b2}
                  </li>

                  <li className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {post.b3}
                </li>
                  
                  <li className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                    {post.b4}
                  </li>

                </ul>

                </div>
                <div className="px-5 relative mt-8 flex items-center gap-x-4">
                <a href="#" className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              {post.button}
            </a>
                </div>
              </article>
            ))}
          </div>            
        </div>

    
        <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-gray-200'>
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              Customised Workshops for you 
            </h3>
        </div>       
      </div>
  */}

      <div id='checkcourses' className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-t border-gray-200">
      <h2 className="text-base font-semibold leading-7 text-red-600">Designed for early learners</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">Popular Workshops</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={workshop.imageSrc}
                  alt={workshop.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {workshop.name}
                    
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Class: {workshop.class}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{workshop.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/*<div id='premiumcourses' className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-t border-gray-200">
      <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
             Premium Courses 
      </h3>
       
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={workshop.imageSrc}
                  alt={workshop.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    
                      <span aria-hidden="true" className="absolute inset-0" />
                      {workshop.name}
                    
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{workshop.age}</p>
                </div>
                <p className="text-sm font-medium text-gray-900"> 
                {workshop.tag}
               </p>
              </div>
            </div>
          ))}
        </div>
      </div>
          */}




      <div id='checkcourses' className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-t border-gray-200">
      <div className="mx-auto mb-20 max-w-5xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Unlock Exclusive Learning Opportunities</h2>
          <p className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          We believe in the power of continuous learning!
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
          As a special launching offer, every student who attends any of our offline workshops will receive a complimentary 3-month Prime Membership. This membership grants you access to a wealth of learning resources, including:
          
          <div className="grid grid-cols-1  sm:mt-2 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <ul role="list" className="text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
              <li className="flex gap-x-3 font-semibold">
                <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                Live and Recorded Classes.
              </li>
                
                <li className="flex gap-x-3 font-semibold">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  Project Building Workshops
                  </li>

              </ul>

              <ul role="list" className="text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
              
              <li className="flex gap-x-3 font-semibold">
                <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                Community Forums</li>
                
                <li className="flex gap-x-3 font-semibold">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  Additional Learning Materials
                  </li>

              </ul>
        </div>
          </p>  
        </div>

        
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </div>
    </div>
     
    
       
      </div>

      <div className="bg-white py-2 sm:py-1 mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-3xl sm:text-center sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bring STEM Education to Your School!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Unlock a world of possibilities for your students through our tailored STEM workshops. Collaborate with TechGeniusLabs to bring innovative learning experiences to your classrooms.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-red-700">Perks of Partnering with TechGeniusLabs</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Ready to Transform Your School's Learning Experience !!</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-red-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Request Workshop
                </a>
                <p className="mt-6 text-sm leading-5 text-gray-600">
               For more info Call us at +917224814174
                </p>
                <p className="mt-6 text-sm leading-5 text-gray-600">
               Or email at support@techgeniuslabs.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
    )
  }
  