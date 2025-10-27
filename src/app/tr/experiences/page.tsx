import React from 'react'
import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight, Heart, Camera, Mountain, Ship } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TrExperiencesPage() {
  const experiences = [
    {
      id: 1,
      title: 'Gündoğumu Sıcak Hava Balonu',
      location: 'Kapadokya',
      duration: '3 saat',
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/experiences/hot-air-balloon.jpg',
      category: 'adventure',
      difficulty: 'orta',
      groupSize: '4-16',
      highlights: ['Gündoğumu Uçuşu', 'Peri Bacaları', 'Şampanya Kahvaltısı'],
      description: 'Kapadokyanın büyüsünü üzerinde sıcak hava balonu uçuşumuzla deneyimleyin.'
    },
    {
      id: 2,
      title: 'Özel Yacht Turu',
      location: 'Bodrum',
      duration: 'Tam gün',
      price: 450,
      rating: 4.8,
      reviews: 167,
      image: '/experiences/yacht-tour.jpg',
      category: 'luxury',
      difficulty: 'kolay',
      groupSize: '2-8',
      highlights: ['Özel Yacht', 'Yüzme Koyları', 'Gurme Öğle Yemeği'],
      description: 'Profesyonel mürettebatla Ege Denizinin turkuaz sularında özel lüks yachtnizde yelken açın.'
    },
    {
      id: 3,
      title: 'Türk Hamamı Deneyimi',
      location: 'İstanbul',
      duration: '2 saat',
      price: 85,
      rating: 4.7,
      reviews: 198,
      image: '/experiences/turkish-bath.jpg',
      category: 'cultural',
      difficulty: 'kolay',
      groupSize: '2-6',
      highlights: ['Tarihi Hamam', 'Geleneksel Masaj', 'Aromatik Yağlar'],
      description: 'Geleneksel masaj ve aromatik yağlarla otantik Türk hamamı deneyimiyle dinlenin ve yenilenin.'
    },
    {
      id: 4,
      title: 'Pamukkale Üzerinde Paraşütle Atlama',
      location: 'Pamukkale',
      duration: 'Yarım gün',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/experiences/paragliding.jpg',
      category: 'adventure',
      difficulty: 'orta',
      groupSize: '2-12',
      highlights: ['Termal Havuzlar', 'Beyaz Teraslar', 'Antik Kalıntılar'],
      description: 'Profesyonel paraşütle atlama deneyimimizle Pamukkalenin etkileyici beyaz traverten teraslarının üzerinde süzülün.'
    },
    {
      id: 5,
      title: 'Gurme Yemek Turu',
      location: 'İstanbul',
      duration: '4 saat',
      price: 120,
      rating: 4.6,
      reviews: 156,
      image: '/experiences/food-tour.jpg',
      category: 'culinary',
      difficulty: 'kolay',
      groupSize: '4-12',
      highlights: ['Yerel Pazarlar', 'Sokak Yemekleri', 'Geleneksel Restoranlar'],
      description: 'Yerel pazarlar ve geleneksel restoranlar aracılığıyla Türk mutfağının zengin lezzetlerini keşfedin.'
    },
    {
      id: 6,
      title: 'Kaş\'ta Dalış',
      location: 'Kaş',
      duration: 'Tam gün',
      price: 180,
      rating: 4.9,
      reviews: 89,
      image: '/experiences/diving.jpg',
      category: 'adventure',
      difficulty: 'orta',
      groupSize: '2-8',
      highlights: ['Kristal Sular', 'Deniz Yaşamı', 'Profesyonel Eğitmen'],
      description: 'Kaşın berrak sularında Akdenizin su altı dünyasını profesyonel dalış deneyimimizle keşfedin.'
    }
  ]

  const categories = [
    { value: 'all', label: 'Tüm Deneyimler', icon: Heart },
    { value: 'adventure', label: 'Macera', icon: Mountain },
    { value: 'cultural', label: 'Kültürel', icon: Camera },
    { value: 'culinary', label: 'Mutfak', icon: Ship },
    { value: 'luxury', label: 'Lüks', icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-tertiary-600 to-tertiary-800">
        <div className="absolute inset-0">
          <Image
            src="/experiences-hero.jpg"
            alt="Deneyimler Arka Planı"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Türkiye'deki Benzersiz Deneyimler
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Sıcak hava balonu yolculuklarından özel yacht turlarına kadar unutulmaz deneyimler keşfedin
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
                placeholder="Deneyimlerde ara..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <select 
              title="Kategori"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent appearance-none"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tüm destinasyonlar"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Herhangi bir tarih"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select 
                title="Misafir Sayısı"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tertiary-500 focus:border-transparent appearance-none"
              >
                <option>1-2 Misafir</option>
                <option>3-6 Misafir</option>
                <option>7+ Misafir</option>
              </select>
            </div>
            
            <button className="btn-tertiary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Deneyimleri Ara
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{experiences.length}</span> harika deneyim bulundu
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sırala: Önerilen</button>
            <button className="text-gray-600 hover:text-gray-900">Fiyat: Düşükten Yükseğe</button>
          </div>
        </div>
      </div>

      {/* Experiences Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div key={experience.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-tertiary-600">€{experience.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{experience.title}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{experience.rating}</span>
                    <span className="text-gray-600 text-sm">({experience.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 ml-2" />
                    <span>{experience.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mountain className="w-4 h-4" />
                    <span>{experience.difficulty}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{experience.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    {experience.highlights.slice(0, 2).map((highlight, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                    {experience.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">+{experience.highlights.length - 2} daha</span>
                    )}
                  </div>
                  <Link 
                    href={`/tr/experiences/${experience.id}`}
                    className="btn-tertiary text-sm px-4 py-2 flex items-center gap-1"
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
      <section className="bg-tertiary-600 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Mükemmel Deneyiminizi Oluşturun
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Seyahat uzmanlarımızın sizin için özel bir deneyim tasarlamasına izin Verin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-tertiary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Özel Deneyim
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-tertiary-600 transition-colors">
              Uzmanla İletişime Geç
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}