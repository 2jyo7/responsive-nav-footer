import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      {/* Container */}
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse
       lg:max-w-5xl lg:mt-24 xl:max-w-6xl hover:scale-110 hover:p-4">
        {/* Image Column */}
        <div className="w-full h-64 lg:w-1/2 lg:h-auto hover:scale-125">
          <Image
            className="h-full w-full object-cover"
            src={"https://images.unsplash.com/photo-1719937206498-b31844530a96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="photography by M.F."
            width={2000}
            height={2000}
          />
        </div>
        {/* Close Image Column */}

        {/* Text Column */}
        <div className="max-w-lg bg-white md:max-w-2xl md:shadow-lg lg:w-1/2 lg:ml-12">
          {/* Text Wrapper */}
          <div className="flex flex-col p-12 md:p-16 hover:bg-gradient-to-t from-purple-500 to-pink-500
          hover:text-white ">
            <h2 className="text-2xl font-medium uppercase text-pink-800 lg:text-4xl hover:text-white">
              Marcos Flores Photography
            </h2>
            <p className="mt-4">
            Photography is an art form that captures moments, emotions, and stories through the lens of a camera.
             A versatile photographer can capture a wide range of subjects, from portraits and landscapes to events, 
             wildlife, architecture, and more. Whether its the candid beauty of everyday life, the grandeur of nature, or the energy of a bustling city, a photographer brings a unique perspective to each shot. Through careful attention to detail, lighting, and composition,
             they create images that not only document reality but also evoke emotion and tell compelling stories.
            </p>
            {/* Button Container */}
            <div className="mt-8">
              <Link
              className="inline-block w-full text-center text-lg font-medium
               text-gray-100 bg-purple-600 border-solid 
              border-2 border-gray-600 py-4 px-10 hover:bg-purple-800 hover:shadow-md md:w-48"
               href="/about">
                Read More
               </Link>
            </div>
          </div>
        </div>
        {/* Close Text Column */}
      </div>
    </>
  );
};

export default Hero;
