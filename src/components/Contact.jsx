import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/49a01550-1eac-45a7-a3b2-d0b49faf412f"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
              <Title>contact me</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
               />
               <button
                  type="button"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md hover:stroke-white"
               >
                  send message
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;