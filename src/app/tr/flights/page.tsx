import { Search, Calendar, Users, Clock, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TrFlightsPage() {
  const flights = [
    {
      id: 1,
      airline: 'Turkish Airlines',
      flightNumber: 'TK1234',
      from: 'İstanbul (IST)',
      to: 'Antalya (AYT)',
      departure: '08:30',
      arrival: '10:15',
      price: 125,
      duration: '1s 45d',
      aircraft: 'Boeing 737-800',
      class: 'Ekonomi',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 2,
      airline: 'Pegasus Airlines',
      flightNumber: 'PC5678',
      from: 'İstanbul (IST)',
      to: 'Kapadokya (NAV)',
      departure: '10:00',
      arrival: '11:30',
      price: 95,
      duration: '1s 30d',
      aircraft: 'Airbus A320',
      class: 'Ekonomi',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 3,
      airline: 'SunExpress',
      flightNumber: 'XQ9456',
      from: 'İstanbul (IST)',
      to: 'Bodrum (BJV)',
      departure: '14:00',
      arrival: '15:30',
      price: 85,
      duration: '1s 30d',
      aircraft: 'Boeing 737-700',
      class: 'Ekonomi',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 4,
      airline: 'Turkish Airlines',
      flightNumber: 'TK2345',
      from: 'İstanbul (IST)',
      to: 'İzmir (ADB)',
      departure: '16:00',
      arrival: '17:15',
      price: 110,
      duration: '1s 15d',
      aircraft: 'Airbus A321',
      class: 'Business',
      image: '/hotels/Flights/qatararways.jpeg'
    },
    {
      id: 5,
      airline: 'AnadoluJet',
      flightNumber: 'AJ8901',
      from: 'İstanbul (IST)',
      to: 'Trabzon (TZX)',
      departure: '18:00',
      arrival: '19:30',
      price: 95,
      duration: '1s 30d',
      aircraft: 'Boeing 737-800',
      class: 'Ekonomi',
      image: '/hotels/Flights/qatararways.jpeg'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-secondary-600 to-secondary-800">
        <div className="absolute inset-0">
          <Image
            src="/hotels/Flights/qatararways.jpeg"
            alt="Uçuş Rezervasyonu"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4 pt-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Uçuş Rezervasyonu
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              En iyi havayollarıyla iç ve dış hat uçuşlarını rezerve edin
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
                placeholder="Havalimanı veya şehir..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Hedef havalimanı veya şehir..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Kalkış tarihi"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Dönüş tarihi"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Yolcular">
                <option>1 Yolcu</option>
                <option>2 Yolcu</option>
                <option>3+ Yolcu</option>
                <option>4+ Yolcu</option>
              </select>
            </div>
            
            <div className="relative">
              <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none" title="Sınıf">
                <option>Ekonomi</option>
                <option>Premium Ekonomi</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>
            
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Uçuşları Ara
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{flights.length}</span> uçuş seçeneği bulundu
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sırala: Önerilen</button>
            <button className="text-gray-600 hover:text-gray-900">Fiyat: Düşükten Yükseğe</button>
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
                  <span className="text-sm font-semibold text-secondary-600">{flight.price}€</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{flight.airline}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <span>Uçuş {flight.flightNumber}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9</span>
                    <span className="text-gray-600 text-sm">(127 yorum)</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{flight.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 ml-2" />
                    <span>1-4 Yolcu</span>
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
                  {flight.airline}, {flight.from}'dan {flight.to}'ya yolculuğunuz için konforlu koltuklar ve mükemmel hizmet sunar.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>7/24 Mevcut</span>
                  </div>
                  <a
                    href={`https://wa.me/90506641785?text=Merhaba, ${flight.airline} ${flight.flightNumber} uçuşu için rezervasyon yapmak istiyorum. ${flight.from} -> ${flight.to}, ${flight.departure} - ${flight.arrival}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    Rezervasyon Yap
                    <ChevronRight className="w-4 h-4" />
                  </a>
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
            Özel Uçuş Düzenlemeleri mi Lazım?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kişiselleştirilmiş uçuş rezervasyonu ve özel düzenlemeler için ekibimizle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/90506641785?text=Merhaba, uçuş rezervasyonu yapmak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Uçuş Rezerve Et
            </a>
            <a
              href="https://wa.me/90506641785?text=Merhaba, uçuşlar hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-600 transition-colors"
            >
              Ekiple İletişime Geç
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}