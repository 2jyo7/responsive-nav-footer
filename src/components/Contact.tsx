"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Contact = () => {
  const router = useRouter();
  const sendAMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    alert('Message sent successfully');
    router.push("https://www.marcview.com/contact")
  };

  return (
    <div className="h-screen flex items-center justify-center border border-white rounded-md mt-24">
      <div className="w-full max-w-3xl p-4 md:p-8"> {/* Adjust max-w here if needed */}
        <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
          Contact Me
        </h1>
        <form className="flex flex-col items-center" onSubmit={sendAMsg}>
          <div className="w-full"> {/* Added w-full here */}
            <div className="flex flex-col md:flex-row mb-4">
              <input
                id="name"
                type="text"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Name"
                required
              />
              <input
                id="email"
                type="email"
                className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Email"
                required
              />
            </div>
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
            <textarea
              id="message"
              rows={5}
              placeholder="Say Something"
              className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
              defaultValue=""
              required
            />
          </div>
          <button
            type="submit"
            className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-pink-600
              hover:bg-pink-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2
              focus:ring-purple-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
