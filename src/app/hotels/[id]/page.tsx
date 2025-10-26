import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Hotel data - in a real app, this would come from an API or database
const hotelsData = {
  1: {
    id: 1,
    name: 'The Ritz-Carlton Istanbul',
    location: 'Istanbul, Turkey',
    rating: 4.8,
    reviews: 324,
    price: 450,
    image: '/hotels/the ritz carlton/the-ritz-carlton.jpeg',
    gallery: [
      '/hotels/the ritz carlton/the-ritz-carlton.jpeg',
      '/hotels/the ritz carlton/the-ritz-carlton.jpeg',
      '/hotels/the ritz carlton/the-ritz-carlton.jpeg',
      '/hotels/the ritz carlton/the-ritz-carlton.jpeg',
      '/hotels/the ritz carlton/the-ritz-carlton.jpeg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Experience unparalleled luxury in the heart of Istanbul where timeless elegance meets modern sophistication.',
    fullDescription: 'Nestled in the vibrant heart of Istanbul, The Ritz-Carlton Istanbul offers a sanctuary of refined luxury and impeccable service. Our hotel combines timeless elegance with contemporary comfort, providing guests with an unforgettable experience in one of the world\'s most captivating cities. From our stunning rooftop terrace with panoramic Bosphorus views to our world-class spa and dining venues, every aspect of your stay is designed to exceed expectations.',
    features: [
      'Luxurious rooms and suites with Bosphorus views',
      'Award-winning spa and wellness center',
      'Multiple fine dining restaurants',
      'Rooftop terrace with panoramic city views',
      'State-of-the-art fitness center',
      'Indoor swimming pool',
      '24-hour room service',
      'Dedicated concierge service'
    ],
    roomTypes: [
      {
        name: 'Deluxe Room',
        size: '45 sqm',
        maxGuests: 2,
        price: 450,
        features: ['King bed', 'City view', 'Marble bathroom', 'Work desk']
      },
      {
        name: 'Club Room',
        size: '55 sqm',
        maxGuests: 3,
        price: 580,
        features: ['King bed', 'Bosphorus view', 'Club lounge access', 'Marble bathroom']
      },
      {
        name: 'Executive Suite',
        size: '85 sqm',
        maxGuests: 4,
        price: 850,
        features: ['Separate living area', 'Bosphorus view', 'Club lounge access', 'Guest bathroom']
      },
      {
        name: 'Presidential Suite',
        size: '180 sqm',
        maxGuests: 6,
        price: 2500,
        features: ['Two bedrooms', 'Full kitchen', 'Bosphorus view', 'Private terrace', 'Butler service']
      }
    ],
    contact: {
      phone: '+90 212 334 4444',
      email: 'istanbul.reservations@ritzcarlton.com',
      address: 'Sıraselviler Cad. No:58, 34367 Beşiktaş, Istanbul, Turkey'
    }
  },
  2: {
    id: 2,
    name: 'Swissotel The Bosphorus',
    location: 'Istanbul, Turkey',
    rating: 4.7,
    reviews: 256,
    price: 380,
    image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
    gallery: [
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
    description: 'Elegant hotel overlooking the Bosphorus with world-class amenities.',
    fullDescription: 'Swissotel The Bosphorus, Istanbul offers elegant accommodation with stunning views of the Bosphorus Strait. Our hotel features modern rooms, exceptional dining options, and a range of facilities designed to make your stay comfortable and memorable.',
    features: [
      'Bosphorus Strait views',
      'Modern rooms with premium amenities',
      'Multiple restaurants and bars',
      'Indoor swimming pool',
      'Full-service spa',
      'Fitness center'
    ],
    roomTypes: [
      {
        name: 'Standard Room',
        size: '35 sqm',
        maxGuests: 2,
        price: 380,
        features: ['Queen bed', 'City view', 'Marble bathroom']
      },
      {
        name: 'Deluxe Room',
        size: '45 sqm',
        maxGuests: 2,
        price: 450,
        features: ['King bed', 'Bosphorus view', 'Marble bathroom', 'Work desk']
      },
      {
        name: 'Junior Suite',
        size: '65 sqm',
        maxGuests: 3,
        price: 580,
        features: ['King bed', 'Bosphorus view', 'Separate living area', 'Marble bathroom']
      },
      {
        name: 'Executive Suite',
        size: '85 sqm',
        maxGuests: 4,
        price: 850,
        features: ['King bed', 'Bosphorus view', 'Separate living area', 'Guest bathroom']
      }
    ],
    contact: {
      phone: '+90 212 326 1100',
      email: 'bosphorus@swissotel.com',
      address: 'Bayıldım Cad. No:2, 34357 Beşiktaş, Istanbul, Turkey'
    }
  }
}

const amenities = {
  wifi: { icon: Wifi, label: 'Free WiFi' },
  parking: { icon: Car, label: 'Free Parking' },
  spa: { icon: Dumbbell, label: 'Spa & Wellness' },
  restaurant: { icon: Coffee, label: 'Restaurant' },
  bar: { icon: Coffee, label: 'Bar & Lounge' },
  pool: { icon: Dumbbell, label: 'Swimming Pool' },
  concierge: { icon: Users, label: 'Concierge Service' },
  'room-service': { icon: Coffee, label: 'Room Service' },
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = hotelsData[params.id as unknown as keyof typeof hotelsData]

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
          <p className="text-gray-600 mb-8">The hotel you're looking for doesn't exist.</p>
          <Link href="/hotels" className="btn-primary">
            Back to Hotels
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{hotel.rating}</span>
                <span className="text-gray-300">({hotel.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">About {hotel.name}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {hotel.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Hotel Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Room Types & Rates</h3>
                <div className="space-y-6">
                  {hotel.roomTypes.map((room, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-1">{room.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span>{room.size}</span>
                            <span>•</span>
                            <span>Max {room.maxGuests} guests</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">€{room.price}</div>
                          <div className="text-sm text-gray-600">per night</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, idx) => (
                          <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="btn-primary w-full md:w-auto">
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${hotel.name} - Image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{hotel.price}</div>
                  <div className="text-gray-600">per night</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Check-in Date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Check-out Date"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Guests
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Number of Guests">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full btn-primary mb-3">
                  Check Availability
                </button>
                <button className="w-full btn-secondary">
                  Contact Hotel
                </button>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Amenities</h3>
                <div className="space-y-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {amenities[amenity as keyof typeof amenities] && (
                        <>
                          {React.createElement(amenities[amenity as keyof typeof amenities].icon, { className: "w-5 h-5 text-primary-600" })}
                          <span className="text-gray-700">{amenities[amenity as keyof typeof amenities].label}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{hotel.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{hotel.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Hotels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Similar Hotels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Similar hotels would be displayed here */}
            <div className="text-center text-gray-500 col-span-full">
              Similar hotels coming soon...
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}