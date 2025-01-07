'use client'

import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function BrandShowcase() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={`w-full bg-[#33371a] ${isMobile ? 'min-h-[800px] py-4' : 'h-[490px] py-7'} px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isMobile ? 'gap-4' : 'gap-8 h-[380px]'}`}>
          {/* Light Logo */}
          <div className={`bg-white rounded-lg p-8 flex flex-col items-center justify-center transition-transform hover:scale-105 
            ${isMobile ? 'w-full mx-auto' : 'w-[85%]'}`}>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/images/case-study-1-jonaki/logo.png"
                alt="Jonaki Light Logo"
                width={100}
                height={100}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="-mt-3 text-3xl font-bold text-center text-black">JONAKI</p>
          </div>

          {/* Dark Logo */}
          <div className={`bg-[#012226] rounded-lg p-8 flex flex-col items-center justify-center transition-transform hover:scale-105 
            ${isMobile ? 'w-full mx-auto' : '-ml-24 mr-24 w-[85%]'}`}>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <Image
                src="/images/case-study-1-jonaki/logo.png"
                alt="Jonaki Dark Logo"
                width={100}
                height={100}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <p className="-mt-3 text-3xl font-bold text-center text-[#9f7049]">JONAKI</p>
          </div>

          {/* Product Image */}
          <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-0 flex items-center justify-center transition-transform hover:scale-105 
            ${isMobile ? 'w-full h-[300px] mx-auto md:col-span-1' : 'md:col-span-2 lg:col-span-1 w-[530px] -ml-32 h-[80%]'}`}>
            <div className="relative w-full h-full">
              <Image
                src="/images/case-study-1-jonaki/paris-image.jpg"
                alt="Jonaki Product Packaging"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

