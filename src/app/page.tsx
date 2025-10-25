import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, Calendar, Users, Star, ChevronRight, Plane, Hotel, Car, Camera } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Luxury Travel Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Discover Turkey with
            <span className="text-primary-400"> MrForty</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience luxury travel, premium hotels, and exclusive tours in the most beautiful destinations of Turkey
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
              </div>
              
              <button className="btn-primary flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury accommodations to exclusive tours, we provide everything you need for an unforgettable journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Hotel,
                title: 'Luxury Hotels',
                description: 'Hand-picked premium hotels and resorts in Turkey\'s most beautiful locations',
                link: '/hotels'
              },
              {
                icon: Plane,
                title: 'Exclusive Tours',
                description: 'Private guided tours and unique experiences tailored to your preferences',
                link: '/tours'
              },
              {
                icon: Car,
                title: 'VIP Transfers',
                description: 'Premium transportation services with professional drivers',
                link: '/transfers'
              },
              {
                icon: Camera,
                title: 'Experiences',
                description: 'Unique activities and adventures in every destination',
                link: '/experiences'
              }
            ].map((service, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Explore
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Turkey\'s most iconic cities and hidden gems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Istanbul',
                image: '/destinations/istanbul.jpg',
                tours: 45,
                rating: 4.8
              },
              {
                name: 'Cappadocia',
                image: '/destinations/cappadocia.jpg',
                tours: 32,
                rating: 4.9
              },
              {
                name: 'Antalya',
                image: '/destinations/antalya.jpg',
                tours: 28,
                rating: 4.7
              },
              {
                name: 'Bodrum',
                image: '/destinations/bodrum.jpg',
                tours: 24,
                rating: 4.8
              },
              {
                name: 'Pamukkale',
                image: '/destinations/pamukkale.jpg',
                tours: 18,
                rating: 4.9
              },
              {
                name: 'Fethiye',
                image: '/destinations/fethiye.jpg',
                tours: 22,
                rating: 4.7
              }
            ].map((destination, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{destination.rating}</span>
                      </div>
                      <span>{destination.tours} Tours</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Dream Vacation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let our expert travel consultants create the perfect itinerary for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Planning
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}