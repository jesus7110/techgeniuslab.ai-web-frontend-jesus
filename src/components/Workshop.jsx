import C1 from '../assets/c1.png'
const posts = [
    {
      id: 1,
      title: 'Introduction to Robotics',
      href: '#',
      description:
        'Delve into the exciting world of robotics with our introductory workshop. Participants will learn the fundamentals of building and programming robots, fostering creativity and problem-solving skills.',
      imageBg: C1,
      category: { title: 'Beginners', href: '#' },
      brief: {
        b1: 'Basic Robot Construction',
        b2: 'Introduction to Programming with Scratch',
        b3: 'Team Challenges and Fun Activities',
        b4: 'Q&A Session with Experienced Instructors',
    },
    },

  
  ]
  
  export default function Workshop() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Our Engaging Workshops</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Unlocking Creativity and Learning Through IoT and Robotics
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                 
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                <a href="#"
                    className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-indigo-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
              Request Workshop
            </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  