import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className="min-h-20 flex flex-col justify-center mt-n20">
        <div className="relative py-1 sm:max-w-md sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-gray-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-black relative px-4 py-8 bg-slate-200 shadow-lg sm:rounded-3xl sm:p-12">

            <div className="text-center pb-4">
              <h1 className="text-2xl">Need assistance or have questions about LAB SETUP</h1>
              
            </div>

            <form>

              <input
                className="shadow mb-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Institute Name" name="institutename" />

              <input
                className="shadow mb-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email" name="email" />

              <input
                className="shadow mb-2 appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Mobile Number" name="number" />
              
              <div className="mt-2.5 mb-8">
              <select
                type="text"
                name="interested"
                placeholder="Enquiry about"
               
                
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option> Enquiry about</option>
                <option> STEM Lab Setup  </option>
                <option> Workshops </option>
                



              </select>
            </div>

              {/* <textarea
                className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Type your message here..." name="message" style={{ height: '121px' }}></textarea> */}

              <div className="flex justify-between">
                <input
                  className="shadow text-align-center bg-slate-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit" value="Send ➤" />
               
              </div>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
