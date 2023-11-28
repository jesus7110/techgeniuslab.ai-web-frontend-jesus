import C1 from '../assets/c1.png'
import { CheckIcon } from '@heroicons/react/20/solid'
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
  
  export default function Workshop() {
    return (
      <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
         {/* <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Our Engaging Workshops</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Unlocking Creativity and Learning Through IoT and Robotics
            </p>
    </div>*/}
             <h3 className="mt-3 text-xl font-semibold text-gray-900 group-hover:text-gray-600">Build Cool Projects, And prepare for your Future! </h3>
            
          <div className=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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


       

        
      </div>

      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-gray-200'>
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Customised Workshops for you </h3>
            
        </div>
      </div>


      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-20 border-t border-gray-200'>
        <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">Customised Workshops for you </h3>
            
        </div>
      </div>

      
      </>
    )
  }
  