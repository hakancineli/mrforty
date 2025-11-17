import { Search, MapPin, Calendar, Users, Clock, Star, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TransfersPage() {
  const transfers = [
    {
      id: 1,
      title: 'İstanbul Havalimanı Transferi',
      from: 'İstanbul Havalimanı (IST)',
      to: 'Şehir Merkezi',
      price: 45,
      duration: '45 dk',
      image: '/transfers/istanbul-airport.jpg',
      vehicle: 'Mercedes-Benz V-Class',
      features: ['WiFi', 'Şişe Su', 'Profesyonel Şoför']
    },
    {
      id: 2,
      title: 'Sabiha Gökçen Havalimanı Transferi',
      from: 'Sabiha Gökçen Havalimanı (SAW)',
      to: 'Şehir Merkezi',
      price: 55,
      duration: '60 dk',
      image: '/transfers/sabiha-airport.jpg',
      vehicle: 'Mercedes-Benz S-Class',
      features: ['WiFi', 'Şişe Su', 'Profesyonel Şoför']
    },
    {
      id: 3,
      title: 'Antalya Havalimanı Transferi',
      from: 'Antalya Havalimanı (AYT)',
      to: 'Plaj Otelleri',
      price: 65,
      duration: '90 dk',
      image: '/transfers/Antalya Airport Transfer.jpeg',
      vehicle: 'Mercedes-Benz E-Class',
      features: ['WiFi', 'Şişe Su', 'Profesyonel Şoför']
    },
    {
      id: 4,
      title: 'Bodrum Havalimanı Transferi',
      from: 'Bodrum Havalimanı (BJV)',
      to: 'Şehir Merkezi',
      price: 50,
      duration: '45 dk',
      image: '/transfers/Bodrum Airport Transfer.jpeg',
      vehicle: 'Mercedes-Benz V-Class',
      features: ['WiFi', 'Şişe Su', 'Profesyonel Şoför']
    },
    {
      id: 5,
      title: 'Kapadokya Havalimanı Transferi',
      from: 'Kapadokya Havalimanı (NAV)',
      to: 'Şehir Merkezi',
      price: 75,
      duration: '75 dk',
      image: '/transfers/Kapadokya Havalimanı Transferi.jpeg',
      vehicle: 'Mercedes-Benz V-Class',
      features: ['WiFi', 'Şişe Su', 'Profesyonel Şoför']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <Image
            src="/transfers-hero.jpg"
            alt="VIP Transfer Hizmetleri"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex items-end justify-center text-center text-white px-4 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              VIP Transfer Hizmetleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Lüks araçlar ve profesyonel şoförlerle premium havalimanı transferleri
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Havalimanı veya konumdan..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Hedef konuma..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                placeholder="Transfer tarihi"
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                title="Yolcu sayısı"
              >
                <option>1-4 Yolcu</option>
                <option>5-8 Yolcu</option>
                <option>9+ Yolcu</option>
              </select>
            </div>
            
            <button className="btn-primary flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Transferleri Ara
            </button>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{transfers.length}</span> transfer seçeneği bulundu
          </p>
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900">Sırala: Önerilen</button>
            <button className="text-gray-600 hover:text-gray-900">Fiyat: Düşükten Yükseğe</button>
          </div>
        </div>
      </div>

      {/* Transfers Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transfers.map((transfer) => (
            <div key={transfer.id} className="card group cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={transfer.image}
                  alt={transfer.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-600">{transfer.price}€</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{transfer.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{transfer.from} → {transfer.to}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.9</span>
                  <span className="text-gray-600 text-sm">(127 değerlendirme)</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{transfer.duration}</span>
                  <Users className="w-4 h-4 ml-2" />
                  <span>1-4 Yolcu</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {transfer.vehicle} ile {transfer.features.join(', ')}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>7/24 Müsait</span>
                  </div>
                  <a
                    href={`https://wa.me/905066411785?text=${encodeURIComponent(`REZERVASYON YAP - ${transfer.title}\n\n📅 Tarih: \n⏰ Saat: \n👥 Yolcu Sayısı: \n📍 Nereden: ${transfer.from}\n📍 Nereye: ${transfer.to}\n\nLütfen yukarıdaki bilgileri doldurun, rezervasyonunuzu onaylayalım.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-4 py-2 flex items-center gap-1"
                  >
                    REZERVASYON YAP
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Özel Transfer İstiyorum?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Kişiselleştirilmiş transfer hizmetleri ve özel düzenlemeler için ekibimizle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Teklif Al
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
              Ekiple İletişime Geç
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}