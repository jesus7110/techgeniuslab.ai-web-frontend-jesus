/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'

const products = [
    {
      id: 1,
      imageSrc: c1,
      imageAlt: "",
      
    },
    {
        id: 2,
        imageSrc: c2,
        imageAlt: "",
        
      },
      {
        id: 3,
        imageSrc: c3,
        imageAlt: "",
        
      
      },
      {
        id: 4,
        imageSrc: c4,
        imageAlt: "",
        
      },
      {
        id: 5,
        imageSrc: c5,
        imageAlt: "",
        
      },

  ]
  
  export default function ScrollCard() {
    return (
      <div id="aboutu" className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
         
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What we provide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Elevate your learning with TechStudioLabs, where we deliver unmatched expertise in IOT & Robotics in STEM education, guranteeing a transformative and industry-leading educational experience.
          </p>
        </div>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 py-10">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                     
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>


          
        </div>
      </div>
    )
  }
  