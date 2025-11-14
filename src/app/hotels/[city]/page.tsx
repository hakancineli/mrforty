'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, Calendar, Users, Star, ChevronRight, ArrowLeft, Filter } from 'lucide-react'

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  amenities: string[];
  description: string;
}

export default function CityHotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([])
  const [loading, setLoading] = useState(true)
  const [city, setCity] = useState('')
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const cityParam = urlParams.get('city')
      if (cityParam) {
        setCity(cityParam)
        fetchCityHotels(cityParam)
      }
    }
  }, [])

  const fetchCityHotels = async (cityName: string) => {
    setLoading(true)
    // Mock data - in real app, this would be an API call
    const mockHotels: Record<string, Hotel[]> = {
      istanbul: [
        {
          id: 1,
          name: 'The Ritz-Carlton Istanbul',
          location: 'Istanbul, Turkey',
          rating: 4.8,
          reviews: 324,
          price: 450,
          image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
          amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
          description: 'Luxury hotel in heart of Istanbul with stunning Bosphorus views'
        },
        {
          id: 2,
          name: 'Swissotel The Bosphorus',
          location: 'Istanbul, Turkey',
          rating: 4.7,
          reviews: 256,
          price: 380,
          image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
          amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
          description: 'Elegant hotel overlooking Bosphorus with world-class amenities'
        },
        {
          id: 6,
          name: 'CVK Park Bosphorus Hotel Istanbul',
          location: 'Istanbul, Turkey',
          rating: 4.7,
          reviews: 289,
          price: 420,
          image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-4.jpeg',
          amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
          description: 'Modern luxury hotel with Bosphorus views in central Istanbul'
        },
        {
          id: 7,
          name: 'Museum Hotel Istanbul',
          location: 'Istanbul, Turkey',
          rating: 4.6,
          reviews: 189,
          price: 320,
          image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
          amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
          description: 'Boutique hotel in historic Sultanahmet district'
        }
      ],
      trabzon: [
        {
          id: 8,
          name: 'Grand Zorlu Hotel',
          location: 'Trabzon, Turkey',
          rating: 4.5,
          reviews: 156,
          price: 180,
          image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
          amenities: ['wifi', 'restaurant', 'bar', 'spa'],
          description: 'Luxury hotel with Black Sea views in Trabzon'
        },
        {
          id: 9,
          name: 'Horizon Hotel',
          location: 'Trabzon, Turkey',
          rating: 4.4,
          reviews: 98,
          price: 150,
          image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
          amenities: ['wifi', 'restaurant', 'bar', 'pool'],
          description: 'Modern hotel with panoramic Black Sea views'
        },
        {
          id: 10,
          name: 'Novotel Trabzon',
          location: 'Trabzon, Turkey',
          rating: 4.3,
          reviews: 203,
          price: 220,
          image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
          amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
          description: 'International standard hotel in central Trabzon'
        },
        {
          id: 11,
          name: 'Sheraton Trabzon',
          location: 'Trabzon, Turkey',
          rating: 4.6,
          reviews: 178,
          price: 280,
          image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
          amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'bar'],
          description: 'Premium hotel with excellent facilities and services'
        }
      ],
      antalya: [
        {
          id: 3,
          name: 'Mardan Palace',
          location: 'Antalya, Turkey',
          rating: 4.7,
          reviews: 298,
          price: 350,
          image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
          amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
          description: 'Luxury resort on Mediterranean coast with private beach'
        },
        {
          id: 12,
          name: 'Akra Barut',
          location: 'Antalya, Turkey',
          rating: 4.8,
          reviews: 267,
          price: 380,
          image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
          amenities: ['wifi', 'pool', 'spa', 'beach-access', 'restaurant', 'bar'],
          description: 'Ultra-luxury resort with private beach and world-class amenities'
        },
        {
          id: 13,
          name: 'Maxx Royal',
          location: 'Antalya, Turkey',
          rating: 4.5,
          reviews: 189,
          price: 320,
          image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
          amenities: ['wifi', 'pool', 'spa', 'restaurant', 'bar', 'water-sports'],
          description: 'Premium resort with extensive facilities and activities'
        },
        {
          id: 14,
          name: 'Royal Taj',
          location: 'Antalya, Turkey',
          rating: 4.4,
          reviews: 145,
          price: 290,
          image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
          amenities: ['wifi', 'pool', 'spa', 'restaurant', 'bar'],
          description: 'Elegant resort with Mediterranean Sea views'
        }
      ],
      bursa: [
        {
          id: 15,
          name: 'Kervansaray Hotel',
          location: 'Bursa, Turkey',
          rating: 4.6,
          reviews: 167,
          price: 240,
          image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-4.jpeg',
          amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
          description: 'Historic hotel in the heart of Bursa with modern amenities'
        },
        {
          id: 16,
          name: 'Hilton Bursa',
          location: 'Bursa, Turkey',
          rating: 4.5,
          reviews: 198,
          price: 260,
          image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
          amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'bar'],
          description: 'International luxury hotel with excellent facilities'
        },
        {
          id: 17,
          name: 'Almira Hotel',
          location: 'Bursa, Turkey',
          rating: 4.4,
          reviews: 134,
          price: 180,
          image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
          amenities: ['wifi', 'restaurant', 'bar', 'spa'],
          description: 'Boutique hotel with traditional Ottoman architecture'
        },
        {
          id: 18,
          name: 'Grand Yazar Hotel',
          location: 'Bursa, Turkey',
          rating: 4.3,
          reviews: 112,
          price: 200,
          image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
          amenities: ['wifi', 'pool', 'restaurant', 'bar'],
          description: 'Modern hotel with views of Uludağ Mountain'
        }
      ]
    }
    
    setTimeout(() => {
      setHotels(mockHotels[cityName.toLowerCase()] || [])
      setLoading(false)
    }, 1000)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading hotels...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <Image
            src="/hotels-hero.jpg"
            alt="Hotels Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4 pt-20">
          <div className="text-center">
            <Link href="/" className="inline-flex items-center text-white hover:text-gray-200 mb-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Hotels in {city.charAt(0).toUpperCase() + city.slice(1)}
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Discover the best luxury hotels in {city.charAt(0).toUpperCase() + city.slice(1)}
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search hotels..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select title="District" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none">
              <option>All Districts</option>
              <option>City Center</option>
              <option>Old Town</option>
              <option>Coastal Area</option>
            </select>
            
            <select title="Category" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none">
              <option>All Categories</option>
              <option>Luxury</option>
              <option>Boutique</option>
              <option>Resort</option>
            </select>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Check-in"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <button className="btn-primary flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              Filter Hotels
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{hotels.length}</span> luxury hotels
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sort by: Recommended</button>
            <button className="text-gray-600 hover:text-gray-900">Price: Low to High</button>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="card group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">€{hotel.price}</span>
                  <span className="text-xs text-gray-600">/night</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{hotel.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hotel.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{hotel.rating}</span>
                    <span className="text-gray-600 text-sm">({hotel.reviews})</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{hotel.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity) => (
                    <span key={amenity} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {amenity}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="text-xs text-gray-500">+{hotel.amenities.length - 3} more</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <Users className="w-4 h-4 inline mr-1" />
                    2-4 Guests
                  </div>
                  <Link 
                    href={`/hotels/${hotel.id}`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Get Exclusive Hotel Deals
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for special offers and luxury hotel recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}