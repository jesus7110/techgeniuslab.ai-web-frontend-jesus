import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

import { firestore } from '../config/FirebaseConfig';
import {getDatabase} from "firebase/database";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




export default function RequestWorkshop() {
  const [agreed, setAgreed] = useState(false)
  const [request, setRequest] = useState ({
    school:'',
    spoc:'', 
    address:'', 
    email:'', 
    phone:'', 
    expectedDateIn:'', 
    expectedDateOut:'',
  })

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { } = NewRequest;

    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            Name, Email, Number, message
        })
    }
        const res = fetch(
            '',
            options
        )
        if(res){
            alert("Data strored")
        }
        else{
            alert("error occured")
        }
    }
    
   {/* try {
        await firestore.collection('responses').add(formData);
        console.log('Form response stored in Database! ');
    }catch (error) {
        console.error('Error storing form response : ', error);
    }*/}
  





  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#111827] to-[#991b1b] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Request Customised Workshop</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Get Customised Workshop planned for your School
        </p>
      </div>
      <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
         <div className="mt-8 mb-8 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-900">School's Info</h4>
              <div className="h-px flex-auto bg-gray-300" />
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">         
          <div>
            <label htmlFor="School" className="block text-sm font-semibold leading-6 text-gray-900">
              School name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="school"
                id="school"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="spoc" className="block text-sm font-semibold leading-6 text-gray-900">
              School SPOC name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="spoc"
                id="spoc"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
              School Address
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="address"
                id="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              School Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>IN</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/*<div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
        </div>*/}

        </div>

        <div className="mt-8 mb-8 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-900">Workshop Details</h4>
              <div className="h-px w-full bg-gray-300" />
        </div>

        
            
            <label htmlFor="School-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Choose Estimated Dates
            </label>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">  
            <div>
            <div className="mt-2.5">
              <input
                type="date"
                name="expectedDateIn"
                id="expectedDateIn"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            </div>

            
            <div className="mt-2.5">
              <input
                type="date"
                name="expected-date-out"
                id="expected-date-out"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
           
            </div>
        </div>

        

        <div className='mt-8'>
            <label htmlFor="expected-participants" className="block text-sm font-semibold leading-6 text-gray-900">
              Expected Number of Participants
            </label>
            <div className="mt-2.5 mb-8">
              <input
                type="number"
                name="expected-participants"
                id="expected-participants"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        </div>


        <div className='mt-8'>
            <label htmlFor="class-group" className="block text-sm font-semibold leading-6 text-gray-900">
              Class Groups
            </label>
            <div className="mt-2.5 mb-8">
              <select
                type="text"
                name="class-group"
                id="class-group"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option> Select</option>
                <option> Class 6th - 8th </option>
                <option> Class 9th - 10th </option>
                <option> Class 11th - 12th </option>



              </select>
            </div>
        </div>

        <div className="mt-8 mb-8 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-900">More Details</h4>
              <div className="h-px w-full bg-gray-300" />
        </div>


        <div className='mt-8'>
            <label htmlFor="how" className="block text-sm font-semibold leading-6 text-gray-900">
              How did your hear about us ?
            </label>
            <div className="mt-2.5 mb-8">
              <select
                type="text"
                name="how"
                id="how"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                 <option> Select</option>
                <option> Friends, Colleague, Another School </option>
                <option> Website, Online Advertisements</option>
                <option> Event or Conference </option>
                <option> Other, Not Mentioned</option>

                </select>
            </div>
        </div>

        <div className='mt-8'>
            <label htmlFor="comment" className="block text-sm font-semibold leading-6 text-gray-900">
              Any Special requirements or comment
            </label>
            <div className="mt-2.5 mb-8">
              <input
                type="text"
                name="comment"
                id="comment"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
        </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-gray-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Submit Response
          </button>
        </div>
      </form>
    </div>
  )
}
