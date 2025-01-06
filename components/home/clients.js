'use client'

import Image from 'next/image'

export default function ClientLogos() {
  const clients = [
    {
      name: 'Pixadoo',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'Bayer',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'Microsoft Azure',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'Neoniche',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'CelerityX',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'NComputing',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'Adobe',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'Academy',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'Snowflake',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    },
    {
      name: 'Hubblee',
      bwLogo: '/placeholder.svg?height=80&width=160',
      colorLogo: '/placeholder.svg?height=80&width=160',
    }
  ]

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.name}
              className="col-span-1 flex justify-center items-center relative group"
            >
              <div className="relative w-40 h-20">
                <Image
                  src={client.bwLogo}
                  alt={`${client.name} logo in black and white`}
                  fill
                  className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                />
                <Image
                  src={client.colorLogo}
                  alt={`${client.name} logo in color`}
                  fill
                  className="object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

