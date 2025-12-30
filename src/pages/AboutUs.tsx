import React from 'react';
import { Layout } from '../components/Layout';
import { User } from 'lucide-react';
export function AboutUs() {
  return <Layout>
      <div className="flex flex-col justify-center w-full min-h-screen px-4 py-12 md:px-24">
        {/* Vertical Line Accent */}
        <div className="absolute hidden w-1 left-10 md:left-20 top-32 bottom-20 bg-white/80 md:block"></div>

        <div className="w-full max-w-6xl ml-0 md:ml-12">
          <h1 className="mb-8 text-5xl font-bold text-white uppercase md:text-6xl">
            About Us
          </h1>

          {/* Company Info Section */}
          <div className="relative p-8 mb-12 bg-black/40 backdrop-blur-sm">
            <h2 className="mb-4 text-2xl font-bold text-white">Who we are</h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-200">
              <p>
                Welcome to Our Company! We are a team of passionate individuals
                dedicated to providing excellent services/products to our
                customers. Our mission is to{' '}
                <span className="font-bold text-white">
                  provide the best experience
                </span>{' '}
                for people traveling to different destinations around the world.
              </p>
              <p>
                Our values include integrity, innovation, customer satisfaction,
                and teamwork. We believe in{' '}
                <span className="font-bold text-white">
                  putting our customers first
                </span>{' '}
                and{' '}
                <span className="font-bold text-white">working together</span>{' '}
                to achieve our goals.
              </p>
              <p>
                Feel free to explore our website to learn more about what we
                offer!
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-8">
            <h2 className="mb-8 text-5xl font-bold text-white md:text-6xl">
              Our
              <br />
              Team
            </h2>

            <div className="p-8 bg-black/40 backdrop-blur-sm">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {/* Team Member 1 */}
                <div className="bg-[#1e293b]/80 p-6 rounded-lg flex flex-col items-start relative overflow-hidden group hover:bg-[#1e293b] transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-900 rounded-full">
                      <User className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">John Doe</h3>
                    </div>
                  </div>
                  <p className="flex-grow mb-12 text-sm text-gray-300">
                    John is responsible for...
                  </p>
                  <div className="w-full mt-auto">
                    <div className="bg-[#2d4065] text-white text-center py-2 rounded font-medium text-sm w-full">
                      CEO
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="bg-[#1e293b]/80 p-6 rounded-lg flex flex-col items-start relative overflow-hidden group hover:bg-[#1e293b] transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-900 rounded-full">
                      <User className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Celina Thomas
                      </h3>
                    </div>
                  </div>
                  <p className="flex-grow mb-12 text-sm text-gray-300">
                    Celina Thomas is responsible for...
                  </p>
                  <div className="w-full mt-auto">
                    <div className="bg-[#2d4065] text-white text-center py-2 rounded font-medium text-sm w-full">
                      Team Lead
                    </div>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="bg-[#1e293b]/80 p-6 rounded-lg flex flex-col items-start relative overflow-hidden group hover:bg-[#1e293b] transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-900 rounded-full">
                      <User className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Mike Tysen
                      </h3>
                    </div>
                  </div>
                  <p className="flex-grow mb-12 text-sm text-gray-300">
                    Mike Tysen is responsible for...
                  </p>
                  <div className="w-full mt-auto">
                    <div className="bg-[#2d4065] text-white text-center py-2 rounded font-medium text-sm w-full">
                      Delivery Head
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
}