'use client'

import Image from 'next/image'

export default function ClientLogos() {
  const clients = [
    {
      name: 'Pixadoo',
      logo: '/images/home/client-logos/Pixadoo@2x.png',
    },
    {
      name: 'Bayer',
      logo: '/images/home/client-logos/Bayer@2x.png',
    },
    {
      name: 'Microsoft Azure',
      logo: '/images/home/client-logos/Microsoft@2x.png',
    },
    {
      name: 'Neoniche',
      logo: '/images/home/client-logos/Neoniche@2x.png',
    },
    {
      name: 'CelerityX',
      logo: '/images/home/client-logos/CelerityX@2x.png',
    },
    {
      name: 'Opentext',
      logo: '/images/home/client-logos/opentext@2x.png',
    },
    {
      name: 'NComputing',
      logo: '/images/home/client-logos/Ncomputing@2x.png',
    },
    {
      name: 'Adobe',
      logo: '/images/home/client-logos/Redington@2x.png',
    },
    {
      name: 'Academy',
      logo: '/images/home/client-logos/Adobe@2x.png',
    },
    {
      name: 'Snowflake',
      logo: '/images/home/client-logos/SAS@2x.png',
    },
    {
      name: 'Hubblee',
      logo: '/images/home/client-logos/Snowflake@2x.png',
    },
    {
      name: 'OmaniVibe',
      logo: '/images/home/client-logos/Omani-Vibe@2x.png',
    },
   
    {
      name: 'Smaack',
      logo: '/images/home/client-logos/Smaack@2x.png',
    },
    {
      name: 'SaintGobain',
      logo: '/images/home/client-logos/Saint-Gobain@2x.png',
    },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-7">
          {clients.map((client) => (
            <div
              key={client.name}
              className="col-span-1 flex justify-center items-center relative group"
            >
              <div className="relative w-40 h-20">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
