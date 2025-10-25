import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-br from-gray-50 to-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-green-600 font-semibold text-lg mb-4">
              Innovating the Future, Empowering the Present
            </p>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Technology Rooted in Trust. Innovation Driven by Impact.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              We drive progress by integrating advanced technologies into industries that shape the future. Explore our innovative solutions to unlock your business potential today.
            </p>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
              Get in touch
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=900&fit=crop"
                alt="Person wearing VR headset"
                className="w-full h-[500px] object-cover"
                width={800}
                height={900}
              />
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 to-cyan-500/20"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-linear-to-br from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-linear-to-br from-cyan-300 to-blue-300 rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;