import React from 'react'
import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight, Plane, Camera, Mountain, Ship } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TrToursPage() {
  const tours = [
    {
      id: 1,
      title: 'İstanbul Boğaz Turu',
      location: 'İstanbul',
      duration: '3 saat',
      price: 89,
      rating: 4.8,
      reviews: 156,
      image: '/tours/bosphorus-cruise.jpg',
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
      image: '/tours/hot-air-balloon.jpg',
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
      image: '/tours/ephesus.jpg',
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
      image: '/tours/pamukkale.jpg',
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
      image: '/tours/gulet-cruise.jpg',
      category: 'cruise',
      difficulty: 'kolay',
      groupSize: '2-12',
      highlights: ['Özel Gulet', 'Yüzme Koyları', 'Türk Mutfağı'],
      description: 'Geleneksel wooden guletimizle Ege Denizinin turkuaz sularında yelken açın.'
    },
    {
      id: 6,
      title: 'Ağrı Dağı Trekking',
      location: 'Doğu Anadolu',
      duration: '5 gün',
      price: 680,
      rating: 4.6,
      reviews: 89,
      image: '/tours/mount-ararat.jpg',
      category: 'adventure',
      difficulty: 'zorlu',
      groupSize: '4-8',
      highlights: ['Zirve Tırmanışı', 'Buzul Gölleri', 'Kürt Kültürü'],
      description: 'Türkiyenin en yüksek zirvesini deneyimli dağ rehberleriyle tırmanın.'
    }
  ]

  const categories = [
    { value: 'all', label: 'Tüm Turlar', icon: Plane },
    { value: 'cultural', label: 'Kültürel', icon: Camera },
    { value: 'adventure', label: 'Macera', icon: Mountain },
    { value: 'cruise', label: 'Tur', icon: Ship },
    { value: 'nature', label: 'Doğa', icon: Mountain },
  ]

  const difficulties = [
    { value: 'all', label: 'Tüm Seviyeler' },
    { value: 'easy', label: 'Kolay' },
    { value: 'moderate', label: 'Orta' },
    { value: 'challenging', label: 'Zorlu' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-secondary-600 to-secondary-800">
        <div className="absolute inset-0">
          <Image
            src="/tours-hero.jpg"
            alt="Turlar Arka Planı"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Türkiye\'deki Unutulmaz Turlar
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Antik kalıntılardan doğal harikalara kadar Türkiye\'yi uzman rehberlerimizle keşfedin
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
                placeholder="Turlarda ara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
              />
            </div>
            
            <select 
              title="Destinasyon"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none"
            >
              <option>Tüm Destinasyonlar</option>
              <option>İstanbul</option>
              <option>Kapadokya</option>
              <option>İzmir</option>
              <option>Bodrum</option>
              <option>Antalya</option>
            </select>
            
            <select 
              title="Kategori"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <select 
              title="Zorluk"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent appearance-none"
            >
              {difficulties.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>
            
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Turları Ara
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{tours.length}</span> harika tur bulundu
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sırala: Popüler</button>
            <button className="text-gray-600 hover:text-gray-900">Fiyat: Düşükten Yükseğe</button>
          </div>
        </div>
      </div>

      {/* Tours Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
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
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-secondary-600 capitalize">{tour.category}</span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
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
                
                <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {tour.groupSize}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    {tour.difficulty}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {tour.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {tour.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">+{tour.highlights.length - 2} daha</span>
                    )}
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

      {/* CTA Section */}
      <section className="bg-secondary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Aradığınızı bulamadınız mı?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Seyahat uzmanlarımızın sizin için özel bir tur oluşturmasına izin verin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secondary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Özel Tur
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-secondary-600 transition-colors">
              Uzmanla İletişime Geç
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}