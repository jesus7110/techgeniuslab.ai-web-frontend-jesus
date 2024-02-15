import React from 'react';

function HighlightedFeatures() {
  return (
    <div className="w-full h-auto my-4 mx-auto py-8 px-12 lg:py-16 lg:px-60 bg-white text-slate-950">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Highlighted Features</h2>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* can help image */}
        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
          <img className="w-1/2 md:w-full mx-auto" src="https://placeholder.pics/svg/400" alt="can_help_banner" />
        </div>
        {/* end can help image */}

        <div className="w-full md:w-1/2 flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-red-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Dynamic Personalization:</h3>
              <p className="text-sm">Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-red-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Mobile-Optimized Interface</h3>
              <p className="text-sm">Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-red-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">24/7 Customer Support</h3>
              <p className="text-sm">Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.</p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 mb-4 px-2 ">
            <div className="h-full py-4 px-6 border border-red-500 border-t-0 border-l-0 rounded-br-xl">
              <h3 className="text-2xl font-bold text-md mb-6">Secure Payment Processing</h3>
              <p className="text-sm">We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightedFeatures;
