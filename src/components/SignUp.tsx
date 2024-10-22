"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const SignUp = () => {

  const router = useRouter();
const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
e.preventDefault();
router.push("/portfoilio")

}


  return (
    <div className="min-h-screen flex flex-col justify-center items-center
     bg-gray-900 px-4 py-12 sm:px-6 lg:px-8 mt-8 lg:mt-24">
      {/* Increased the max-width for larger screens */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-white">
          Create a new account
        </h2>
        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-pink-600 hover:text-pink-500">
            Sign in
          </Link>
        </p>

        {/* Form wrapper with increased width */}
        <div className="bg-gray-800 shadow-md rounded-lg p-8 sm:px-10 space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="w-full px-3 py-2 rounded-md bg-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-pink-600 bg-gray-700 border-gray-300 rounded focus:ring-2 focus:ring-pink-600"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-300">
                  I agree to the{' '}
                  <Link href="/terms" className="text-pink-600 hover:text-pink-500">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md bg-pink-600 text-white font-medium hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-800 px-2 text-gray-400">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
                <Link href="#" className="flex justify-center bg-white rounded-md shadow-md p-3 hover:bg-gray-100">
                  <Image src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="Facebook" width={24} height={24} />
                </Link>
              </div>
              <div>
                <Link href="#" className="flex justify-center bg-white rounded-md shadow-md p-3 hover:bg-gray-100">
                  <Image src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="Twitter" width={24} height={24} />
                </Link>
              </div>
              <div>
                <Link href="#" className="flex justify-center bg-white rounded-md shadow-md p-3 hover:bg-gray-100">
                  <Image src="https://www.svgrepo.com/show/506498/google.svg" alt="Google" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
