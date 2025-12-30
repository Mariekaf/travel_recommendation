import React from 'react';
import { Layout } from '../components/Layout';
export function ContactUs() {
  return <Layout>
      <div className="w-full min-h-[calc(100vh-80px)] px-4 md:px-24 flex items-center relative">
        {/* Vertical Line Accent */}
        <div className="absolute hidden w-1 left-10 md:left-20 top-20 bottom-20 bg-white/80 md:block"></div>

        <div className="grid items-center w-full grid-cols-1 gap-12 ml-0 md:ml-12 md:grid-cols-2">
          {/* Left Side Text */}
          <div className="text-white">
            <h1 className="mb-4 text-5xl font-bold uppercase md:text-7xl">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 md:text-2xl">Get in touch</p>
          </div>

          {/* Right Side Form */}
          <div className="relative p-8 border-2 bg-black/40 backdrop-blur-sm md:p-12">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg text-white">
                  Name
                </label>
                <input type="text" id="name" placeholder="Enter your name" className="w-full px-0 py-2 text-white transition-colors bg-transparent border-b border-gray-400 focus:outline-none focus:border-teal-500 placeholder:text-gray-500" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg text-white">
                  Email
                </label>
                <input type="email" id="email" placeholder="Enter your email" className="w-full px-0 py-2 text-white transition-colors bg-transparent border-b border-gray-400 focus:outline-none focus:border-teal-500 placeholder:text-gray-500" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-lg text-white">
                  Message
                </label>
                <textarea id="message" rows={4} placeholder="Enter your message" className="w-full px-0 py-2 text-white transition-colors bg-transparent border-b border-gray-400 resize-none focus:outline-none focus:border-teal-500 placeholder:text-gray-500"></textarea>
              </div>

              <div className="pt-4">
                <button type="button" className="w-full bg-[#0d9488] hover:bg-teal-700 text-white font-bold py-3 px-6 rounded shadow-lg transition-colors uppercase tracking-wide">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>;
}