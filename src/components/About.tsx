import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto p-6 w-full mt-24 hover:scale-110 ">
      {/* Image Column - Full width */}
      <div className="w-full h-64 lg:h-[400px]">
        <Image
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1475274226786-e636f48a5645?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Marcos Flores"
          width={2000}
          height={2000}
        />
      </div>


      {/* Text Column - Full width */}
      <div 
      className="w-full p-8 bg-gradient-to-br from-pink-500 to-purple-500 text-white lg:p-16">
        <h3
        className="text-2xl font-medium uppercase text-pink-800 lg:text-4xl hover:text-white"
        //  className="text-2xl font-bold text-center lg:text-left"
         >Marcos Flores - Artist</h3>
        <h4 className="text-lg font-semibold mb-4 text-center lg:text-left">(703) 655-6500</h4>

        <p className="mt-4 text-justify">
          Marcos is a seasoned freelance photographer experienced in shooting a wide range of complex subject matter in diverse and challenging circumstances. As an outdoor enthusiast, and as a photographer for over 18 years, Marcos realized early in his photography career that it was extreme sports and nature photography that he loved the most. That same profound interest in nature has allowed Marcos to capture the beauty and mystery of nature in its magnificence.
        </p>
        <p className="mt-2 text-justify">
          Some of Marcos’ work has been published in PC World Magazine, where he won a Photography contest, 
          Racer X Illustrated, and assignments with Nature Conservancy, among others. To expose his work, 
          Marcos has partnered with FCA multiple times, including in 2005 when he debuted
           with other artists at an exhibit called VERVE.
        </p>
        <p className="mt-2 text-justify">
          Whether it’s a one-on-one session, capturing special moments, or covering major publishing assignments,
           Marcos’ experience and personalized attention combine to meet and usually exceed clients expectations.
        </p>
        {/* Portfolio link Container */}
        <div className="mt-8">
              <Link
              className="inline-block w-full text-center text-lg font-medium
               text-gray-100 bg-blue-600 border-solid 
              border-2 border-gray-600 py-4 px-10 hover:bg-purple-800 hover:shadow-md md:w-48"
               href="/portfolio">
                PortFolio
               </Link>
            </div>
      </div>
    </div>
  );
};

export default About;
