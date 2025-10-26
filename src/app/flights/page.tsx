import { Search, Calendar, Users, Clock, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FlightsPage() {
  const flights = [
    {
      id: 1,
      airline: 'Turkish Airlines',
      flightNumber: 'TK1234',
      from: 'Istanbul (IST)',
      to: 'Antalya (AYT)',
      departure: '08:30',
      arrival: '10:15',
      price: 125,
      duration: '1h 45m',
      aircraft: 'Boeing 737-800',
      class: 'Economy',
      image: '/flights/istanbul-antalya.jpg'
    },
    {
      id: 2,
      airline: 'Pegasus Airlines',
      flightNumber: 'PC5678',
      from: 'Istanbul (IST)',
      to: 'Cappadocia (NAV)',
      departure: '10:00',
      arrival: '11:30',
      price: 95,
      duration: '1h 30m',
      aircraft: 'Airbus A320',
      class: 'Economy',
      image: '/flights/istanbul-cappadocia.jpg'
    },
    {
      id: 3,
      airline: 'SunExpress',
      flightNumber: 'XQ9456',
      from: 'Istanbul (IST)',
      to: 'Bodrum (BJV)',
      departure: '14:00',
      arrival: '15:30',
      price: 85,
      duration: '1h 30m',
      aircraft: 'Boeing 737-700',
      class: 'Economy',
      image: '/flights/istanbul-bodrum.jpg'
    },
    {
      id: 4,
      airline: 'Turkish Airlines',
      flightNumber: 'TK2345',
      from: 'Istanbul (IST)',
      to: 'Izmir (ADB)',
      departure: '16:00',
      arrival: '17:15',
      price: 110,
      duration: '1h 15m',
      aircraft: 'Airbus A321',
      class: 'Business',
      image: '/flights/istanbul-izmir.jpg'
    },
    {
      id: 5,
      airline: 'AnadoluJet',
      flightNumber: 'AJ8901',
      from: 'Istanbul (IST)',
      to: 'Trabzon (TZX)',
      departure: '18:00',
      arrival: '19:30',
      price: 95,
      duration: '1h 30m',
      aircraft: 'Boeing 737-800',
      class: 'Economy',
      image: '/flights/istanbul-trabzon.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-secondary-600 to-secondary-800">
        <div className="absolute inset-0">
          <Image
            src="/flights-hero.jpg"
            alt="Flight Booking"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Flight Booking
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Book domestic and international flights with the best airlines
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
                placeholder="From airport or city..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="To airport or city..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Departure date"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Return date"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Passengers">
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3+ Passengers</option>
                <option>4+ Passengers</option>
              </select>
            </div>
            
            <div className="relative">
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Class">
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
            
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search Flights
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Found <span className="font-semibold text-gray-900">{flights.length}</span> flight options
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sort by: Recommended</button>
            <button className="text-gray-600 hover:text-gray-900">Price: Low to High</button>
          </div>
        </div>
      </div>

      {/* Flights Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flights.map((flight) => (
            <div key={flight.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={flight.image}
                  alt={flight.airline}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-600">${flight.price}€</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{flight.airline}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span>Flight {flight.flightNumber}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-600 text-sm">(127 reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{flight.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 ml-2" />
                    <span>1-4 Passengers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{flight.class}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>{flight.from}</span>
                    <span>→</span>
                    <span>{flight.to}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{flight.aircraft}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {flight.airline} offers comfortable seating and excellent service for your journey from {flight.from} to {flight.to}.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Available 24/7</span>
                  </div>
                  <Link 
                    href={`/flights/${flight.id}`}
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-secondary-600 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Need Custom Flight Arrangements?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team for personalized flight booking and special arrangements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Book Flight
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-600 transition-colors">
              Contact Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}