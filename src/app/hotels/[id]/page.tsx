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
    image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
    gallery: [
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
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
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
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
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Bayıldım Cad. No:2, 34357 Beşiktaş, Istanbul, Turkey'
    }
  },
  3: {
    id: 3,
    name: 'Kapadokya Cave Resort',
    location: 'Cappadocia, Turkey',
    rating: 4.9,
    reviews: 412,
    price: 280,
    image: '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-1.jpeg',
    gallery: [
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-1.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-2.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-3.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-4 .jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-5 .jpeg'
    ],
    amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
    description: 'Unique cave hotel experience in the heart of Cappadocia.',
    fullDescription: 'Experience a luxurious stay in the magical caves of Cappadocia. Our cave resort offers an authentic experience with modern amenities, combining the unique charm of cave dwellings with contemporary comfort. Each room is carefully designed to provide an unforgettable stay in this fascinating region.',
    features: [
      'Authentic cave rooms with modern amenities',
      'Stunning views of fairy chimneys',
      'Traditional Turkish cuisine restaurant',
      'Full-service spa',
      'Tour desk for arranging activities',
      'Free WiFi throughout the resort'
    ],
    roomTypes: [
      {
        name: 'Cave Suite',
        size: '40 sqm',
        maxGuests: 2,
        price: 280,
        features: ['Queen bed', 'Fairy chimney view', 'Stone bathroom', 'Traditional decoration']
      },
      {
        name: 'Deluxe Cave Suite',
        size: '55 sqm',
        maxGuests: 3,
        price: 350,
        features: ['King bed', 'Fairy chimney view', 'Stone bathroom', 'Traditional decoration', 'Separate seating area']
      },
      {
        name: 'Family Cave Suite',
        size: '75 sqm',
        maxGuests: 4,
        price: 450,
        features: ['King bed', 'Queen bed', 'Fairy chimney view', 'Stone bathroom', 'Traditional decoration', 'Separate seating area']
      },
      {
        name: 'Premium Cave Suite',
        size: '90 sqm',
        maxGuests: 4,
        price: 550,
        features: ['King bed', 'Queen bed', 'Fairy chimney view', 'Stone bathroom', 'Traditional decoration', 'Separate seating area', 'Jacuzzi']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Göreme Milli Parkı, 50180 Göreme, Nevşehir, Turkey'
    }
  },
  4: {
    id: 4,
    name: 'Titanic Mardan Palace',
    location: 'Antalya, Turkey',
    rating: 4.8,
    reviews: 523,
    price: 320,
    image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
    gallery: [
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'Luxurious palace-style resort on the Mediterranean coast with world-class amenities.',
    fullDescription: 'Titanic Mardan Palace is a magnificent palace-style resort located on the stunning Mediterranean coast of Antalya. As Turkey\'s most luxurious hotel, it offers an unparalleled experience with its Ottoman-inspired architecture, extensive pools, private beach, and world-class dining. The resort features lavish rooms and suites, a full-service spa, multiple swimming pools including one with water slides, and exceptional service that exceeds all expectations.',
    features: [
      'Palace-style architecture with Ottoman-inspired design',
      'Private beach with crystal clear Mediterranean waters',
      'Multiple swimming pools including water slides',
      'World-class spa and wellness center',
      'Fine dining restaurants with international cuisine',
      'Kids club and family-friendly activities',
      'State-of-the-art fitness center',
      'Evening entertainment and shows'
    ],
    roomTypes: [
      {
        name: 'Standard Room',
        size: '45 sqm',
        maxGuests: 2,
        price: 320,
        features: ['King bed', 'Garden view', 'Marble bathroom', 'Balcony']
      },
      {
        name: 'Deluxe Room',
        size: '55 sqm',
        maxGuests: 3,
        price: 420,
        features: ['King bed', 'Sea view', 'Marble bathroom', 'Balcony', 'Seating area']
      },
      {
        name: 'Family Room',
        size: '75 sqm',
        maxGuests: 4,
        price: 580,
        features: ['King bed', 'Queen bed', 'Sea view', 'Marble bathroom', 'Balcony', 'Separate living area']
      },
      {
        name: 'Royal Suite',
        size: '120 sqm',
        maxGuests: 6,
        price: 1200,
        features: ['King bed', 'Queen bed', 'Sea view', 'Marble bathroom', 'Balcony', 'Separate living area', 'Private pool access']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Kemer, 07980 Antalya, Turkey'
    }
  },
  5: {
    id: 5,
    name: 'The Land of Legends Kingdom',
    location: 'Bodrum, Turkey',
    rating: 4.8,
    reviews: 167,
    price: 350,
    image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
    gallery: [
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'Exclusive beachfront resort with stunning Aegean Sea views',
    fullDescription: 'The Land of Legends Kingdom is an exclusive beachfront resort offering stunning views of the Aegean Sea. This luxurious destination combines world-class amenities with exceptional service to create an unforgettable experience. From pristine beaches to gourmet dining and thrilling entertainment options, every aspect of your stay is designed to exceed expectations and create lasting memories.',
    features: [
      'Exclusive beachfront location with Aegean Sea views',
      'Multiple swimming pools including water slides',
      'World-class spa and wellness facilities',
      'Gourmet restaurants with international cuisine',
      'State-of-the-art fitness center',
      'Kids club with supervised activities',
      'Evening entertainment and shows',
      'Private beach access with premium amenities'
    ],
    roomTypes: [
      {
        name: 'Standard Room',
        size: '35 sqm',
        maxGuests: 2,
        price: 350,
        features: ['King bed', 'Garden view', 'Marble bathroom', 'Balcony']
      },
      {
        name: 'Deluxe Room',
        size: '45 sqm',
        maxGuests: 3,
        price: 450,
        features: ['King bed', 'Sea view', 'Marble bathroom', 'Balcony', 'Seating area']
      },
      {
        name: 'Family Suite',
        size: '65 sqm',
        maxGuests: 4,
        price: 580,
        features: ['King bed', 'Queen bed', 'Sea view', 'Marble bathroom', 'Balcony', 'Separate living area']
      },
      {
        name: 'Royal Suite',
        size: '90 sqm',
        maxGuests: 6,
        price: 850,
        features: ['King bed', 'Queen bed', 'Sea view', 'Marble bathroom', 'Balcony', 'Separate living area', 'Private pool access']
      }
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Gümüşlük, Bodrum, Muğla, Turkey'
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
  gym: { icon: Dumbbell, label: 'Fitness Center' },
  beach: { icon: MapPin, label: 'Private Beach' },
  'kids-club': { icon: Users, label: 'Kids Club' },
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