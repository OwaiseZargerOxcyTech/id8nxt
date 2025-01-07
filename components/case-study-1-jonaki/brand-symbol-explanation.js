'use client'

import { Plus, Equal } from 'lucide-react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';

export default function BrandSymbolExplanation() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div className="bg-[#33371a] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-lg relative min-h-[550px] flex flex-col items-center justify-center">
          {/* Outer Container with Outline */}
          <div className="border-2 border-gray-300 rounded-lg p-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative w-full md:w-[75%] md:h-[250px] mx-auto">
            {/* Firefly Icon */}
            <div className="flex flex-row md:flex-col items-center justify-center gap-4 md:gap-0">
              <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                <Image
                  src="/images/case-study-1-jonaki/logo.png"
                  alt="Firefly Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              {isMobile && <div className="text-gray-600 text-lg">Firefly</div>}
            </div>

            {/* Plus Sign */}
            <div className="flex items-center justify-center">
              <Plus className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            </div>

            {/* Light/Glow Circle */}
            <div className="flex flex-row md:flex-col items-center justify-center gap-4 md:gap-0">
              <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                <Image
                  src="/images/case-study-1-jonaki/logo.png"
                  alt="Light/Glow Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              {isMobile && <div className="text-gray-600 text-lg">Light/Glow</div>}
            </div>

            {/* Equals Sign */}
            <div className="flex items-center justify-center">
              <Equal className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            </div>

            {/* Brand Symbol */}
            <div className="flex flex-row md:flex-col items-center justify-center gap-4 md:gap-0">
              <div className="w-16 h-16 md:w-24 md:h-24 flex-shrink-0">
                <Image
                  src="/images/case-study-1-jonaki/logo.png"
                  alt="Brand Symbol"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              {isMobile && <div className="text-gray-600 text-lg">Brand Symbol</div>}
            </div>
          </div>

          {/* Text Section (Outside Outline) - Only visible on desktop */}
          {!isMobile && (
            <div className="mt-8 flex flex-row items-center justify-center gap-28">
              <div className="text-gray-600 text-lg text-center ml-8">Firefly</div>
              <div className="text-gray-600 text-lg text-center ml-16">Light/Glow</div>
              <div className="text-gray-600 text-lg text-center ml-4">Brand Symbol</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

