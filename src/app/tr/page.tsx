import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, Calendar, Users, Star, ChevronRight, Plane, Hotel, Car, Camera, Clock } from 'lucide-react'

export default function TrPage() {
  const hotels = [
    {
      id: 1,
      name: 'The Ritz-Carlton İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.8,
      reviews: 324,
      price: 450,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
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
      image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
      description: 'Boğaz manzaralı, dünya standartlarında olanaklara sahip şık otel'
    },
    {
      id: 3,
      name: 'Kapadokya Mağara Oteli',
      location: 'Kapadokya, Türkiye',
      rating: 4.9,
      reviews: 412,
      price: 280,
      image: '/hotels/Kapadokya Cave Resort/Kapadokya Cave Resort-1.jpeg',
      amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
      description: 'Kapadokyanın kalbinde eşsiz mağara otel deneyimi'
    },
    {
      id: 4,
      name: 'Mardan Palace',
      location: 'Antalya, Türkiye',
      rating: 4.7,
      reviews: 298,
      price: 350,
      image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
      description: 'Özel plajlı Akdeniz kıyısındaki lüks resort'
    },
    {
      id: 5,
      name: 'The Land of Legends',
      location: 'Bodrum, Türkiye',
      rating: 4.8,
      reviews: 167,
      price: 420,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      amenities: ['wifi', 'pool', 'spa', 'beach-club', 'water-sports'],
      description: 'Akdeniz manzaralı özel plaj resort'
    },
    {
      id: 6,
      name: 'Museum Hotel İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.6,
      reviews: 189,
      price: 320,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
      description: 'Tarihi Sultanahmet bölgesindeki butik otel'
    }
  ]

  const tours = [
    {
      id: 1,
      title: 'İstanbul Boğaz Turu',
      location: 'İstanbul',
      duration: '3 saat',
      price: 89,
      rating: 4.8,
      reviews: 156,
      image: '/images/destinations/istanbul.jpg',
      category: 'cruise',
      difficulty: 'kolay',
      groupSize: '2-20',
      highlights: ['Boğaz Köprüsü', 'Dolmabahçe Sarayı', 'Ortaköy Camii'],
      description: 'Lüks Boğaz turumuzla İstanbulun büyüsünü sudan deneyimleyin.'
    },
    {
      id: 2,
      title: 'Kapadokya Sıcak Hava Balonu',
      location: 'Kapadokya',
      duration: '1 gün',
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/images/destinations/cappadocia.jpg',
      category: 'adventure',
      difficulty: 'orta',
      groupSize: '4-16',
      highlights: ['Gündoğumu Uçuşu', 'Peri Bacaları', 'Yeraltı Şehirleri'],
      description: 'Kapadokyanın büyülü manzaralarını üzerinde sıcak hava balonuyla gezin.'
    },
    {
      id: 3,
      title: 'Efes Antik Kent Turu',
      location: 'İzmir',
      duration: 'Tam gün',
      price: 75,
      rating: 4.7,
      reviews: 198,
      image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg',
      category: 'cultural',
      difficulty: 'kolay',
      groupSize: '2-15',
      highlights: ['Celsus Kütüphanesi', 'Büyük Tiyatro', 'Artemis Tapınağı'],
      description: 'Uzman rehberlerle Efesin antik harikalarını keşfedin.'
    },
    {
      id: 4,
      title: 'Pamukkale Termal Havuzları',
      location: 'Pamukkale',
      duration: 'Tam gün',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/images/destinations/pamukkale.jpg',
      category: 'nature',
      difficulty: 'kolay',
      groupSize: '2-25',
      highlights: ['Traverten Teraslar', 'Hierapolis', 'Kleopatra Havuzu'],
      description: 'Pamukkalenin şifalı sularında dinlenin ve antik Hierapolisi keşfedin.'
    },
    {
      id: 5,
      title: 'Mavi Yolculuk Gulet Turu',
      location: 'Bodrum',
      duration: '3 gün',
      price: 450,
      rating: 4.9,
      reviews: 167,
      image: '/images/destinations/bodrum.jpg',
      category: 'cruise',
      difficulty: 'kolay',
      groupSize: '2-12',
      highlights: ['Özel Gulet', 'Yüzme Koyları', 'Türk Mutfağı'],
      description: 'Geleneksel wooden guletimizle Ege Denizinin turkuaz sularında yelken açın.'
    },
    {
      id: 6,
      title: 'Sapanca Maşukiye Turu',
      location: 'Sapanca',
      duration: '1 gün',
      price: 180,
      rating: 4.8,
      reviews: 125,
      image: '/tours/Sapanca Masukiye/Sapanca Masukiye.jpeg',
      category: 'nature',
      difficulty: 'kolay',
      groupSize: '2-15',
      highlights: ['Sapanca Gölü', 'Maşukiye Ormanı', 'Doğa manzaraları'],
      description: 'Sapanca Maşukiye\'de bir gün geçirin ve rehberli turumuzla keyifli zamanlar yaşayın.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Lüks Seyahat Arka Planı"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Türkiye'yi Mr. Forty ile keşfedin
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Türkiye'nin en güzel destinasyonlarında lüks seyahat, premium oteller ve özel turlar deneyimi
          </p>
          
          {/* Search Bar */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Nereye?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  placeholder="Tarih"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  title="Misafir Sayısı"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                >
                  <option>2 Misafir</option>
                  <option>3 Misafir</option>
                  <option>4 Misafir</option>
                  <option>5+ Misafir</option>
                </select>
              </div>
              
              <button className="btn-primary flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Ara
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Premium Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lüks konaklamalardan özel turlara kadar, unutulmaz bir yolculuk için ihtiyacınız olan her şeyi sağlıyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Hotel,
                title: 'Lüks Oteller',
                description: 'Türkiye\'nin en güzel lokasyonlarında seçkin premium oteller ve resortlar',
                link: '/tr/hotels'
              },
              {
                icon: Plane,
                title: 'Özel Turlar',
                description: 'Tercihlerinize göre özel rehberli turlar ve benzersiz deneyimler',
                link: '/tr/tours'
              },
              {
                icon: Car,
                title: 'VIP Transferler',
                description: 'Profesyonel sürücülerle premium ulaşım hizmetleri',
                link: '/tr/transfers'
              },
              {
                icon: Camera,
                title: 'Deneyimler',
                description: 'Her destinasyonda benzersiz aktiviteler ve maceralar',
                link: '/tr/experiences'
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
                    Keşfet
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
            <h2 className="text-4xl font-bold mb-4">Popüler Destinasyonlar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin en ikonik şehirlerini ve gizli mücevherlerini keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'İstanbul',
                image: '/images/destinations/istanbul.jpg',
                tours: 45,
                rating: 4.8
              },
              {
                name: 'Trabzon',
                image: '/images/destinations/bodrum.jpg',
                tours: 15,
                rating: 4.6
              },
              {
                name: 'Antalya',
                image: '/images/destinations/antalya.jpg',
                tours: 28,
                rating: 4.7
              },
              {
                name: 'Bursa',
                image: '/images/destinations/cappadocia.jpg',
                tours: 20,
                rating: 4.5
              }
            ].map((destination, index) => (
              <div key={index} className="card group cursor-pointer" onClick={() => window.location.href = `/tr/hotels?city=${destination.name.toLowerCase()}`}>
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
                      <span>{destination.tours} Oteller</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lüks Otellerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin en seçkin otellerinde unutulmaz konaklama deneyimi
            </p>
          </div>
          
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
      </section>

      {/* Tours Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Özel Turlarımız</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Antik kentlerden doğal harikalara kadar Türkiye'yi uzman rehberlerimizle keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="card group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-secondary-600">€{tour.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {tour.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{tour.rating}</span>
                      <span className="text-gray-600 text-sm">({tour.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tour.groupSize}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 2).map((highlight, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/tr/tours/${tour.id}`}
                      className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                    >
                      Detayları Gör
                      <ChevronRight className="w-4 h-4" />
                    </Link>
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
            Hayalinizdaki Tatil Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Uzman seyahat danışmanlarımızın sizin için mükemmel bir gezi planlamasına izin Verin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Planlamaya Başla
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Bize Ulaşın
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}