import React from 'react'
import { Search, Filter, MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TrHotelsPage() {
  const hotels = [
    {
      id: 1,
      name: 'The Ritz-Carlton İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.8,
      reviews: 324,
      price: 450,
      image: '/hotels/ritz-carlton.jpg',
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'İstanbulun kalbinde Boğaz manzaralı lüks otel'
    },
    {
      id: 2,
      name: 'Swissotel The Bosphorus',
      location: 'İstanbul, Türkiye',
      rating: 4.7,
      reviews: 256,
      price: 380,
      image: '/hotels/swissotel.jpg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
      description: 'Boğaz manzaralı, dünya standartlarında olanaklara sahip şık otel'
    },
    {
      id: 3,
      name: 'Museum Hotel İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.6,
      reviews: 189,
      price: 320,
      image: '/hotels/museum-hotel.jpg',
      amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
      description: 'Tarihi Sultanahmet bölgesindeki butik otel'
    },
    {
      id: 4,
      name: 'Kapadokya Mağara Oteli',
      location: 'Kapadokya, Türkiye',
      rating: 4.9,
      reviews: 412,
      price: 280,
      image: '/hotels/cave-resort.jpg',
      amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
      description: 'Kapadokyanın kalbinde eşsiz mağara otel deneyimi'
    },
    {
      id: 4,
      name: 'Titanic Mardan Palace',
      location: 'Antalya, Türkiye',
      rating: 4.8,
      reviews: 523,
      price: 320,
      image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
      description: 'Akdeniz kıyısındaki lüks saray tarzı resort'
    },
    {
      id: 5,
      name: 'The Land of Legends',
      location: 'Bodrum, Türkiye',
      rating: 4.8,
      reviews: 167,
      price: 350,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
      description: 'Ege Denizi manzaralı özel sahil tesisi'
    }
  ]

  const amenities = {
    wifi: { icon: Wifi, label: 'Ücretsiz WiFi' },
    parking: { icon: Car, label: 'Ücretsiz Otopark' },
    spa: { icon: Dumbbell, label: 'Spa & Wellness' },
    restaurant: { icon: Coffee, label: 'Restoran' },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <Image
            src="/hotels-hero.jpg"
            alt="Lüks Oteller"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Türkiye\'deki Lüks Oteller
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Unutulmaz deneyimler için seçkin premium konaklamalar
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
                placeholder="Otellerde ara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <select
              title="Destinasyon"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
            >
              <option>Tüm Destinasyonlar</option>
              <option>İstanbul</option>
              <option>Kapadokya</option>
              <option>Antalya</option>
              <option>Bodrum</option>
            </select>
            
            <select
              title="Kategori"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
            >
              <option>Tüm Kategoriler</option>
              <option>Lüks</option>
              <option>Butik</option>
              <option>Resort</option>
              <option>İş</option>
            </select>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Tarih"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <button className="btn-primary flex items-center justify-center gap-2">
              <Filter className="w-5 h-5" />
              Filtreler
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{hotels.length}</span> lüks otel gösteriliyor
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sırala: Önerilen</button>
            <button className="text-gray-600 hover:text-gray-900">Harita Görünümü</button>
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
                  <span className="text-xs text-gray-600">/gece</span>
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
                    <div key={amenity} className="flex items-center gap-1 text-xs text-gray-600">
                      {amenities[amenity as keyof typeof amenities] && (
                        <>
                          {React.createElement(amenities[amenity as keyof typeof amenities].icon, { className: "w-3 h-3" })}
                          <span>{amenities[amenity as keyof typeof amenities].label}</span>
                        </>
                      )}
                    </div>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="text-xs text-gray-500">+{hotel.amenities.length - 3} daha</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <Users className="w-4 h-4 inline mr-1" />
                    2-4 Misafir
                  </div>
                  <Link 
                    href={`/tr/hotels/${hotel.id}`}
                    className="btn-primary text-sm px-4 py-2"
                  >
                    Detayları Gör
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
            Özel Otel Fırsatları Alın
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Özel teklifler ve lüks otel önerileri için bültenimize abone olun
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}