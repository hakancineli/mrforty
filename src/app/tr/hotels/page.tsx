import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Popüler şehirler
const cities = [
  {
    name: 'İstanbul',
    description: 'Tarihi yarımada ve Boğaz manzaralı lüks oteller',
    image: '/images/destinations/istanbul.jpg',
    hotelCount: 10,
    link: '/tr/hotels/city/istanbul'
  },
  {
    name: 'Trabzon',
    description: 'Karadeniz\'in incisi, doğal güzelliklerle iç içe oteller',
    image: '/images/destinations/trabzon.jpg',
    hotelCount: 10,
    link: '/tr/hotels/city/trabzon'
  },
  {
    name: 'Antalya',
    description: 'Akdeniz\'in turizm cenneti, plaj ve resort oteller',
    image: '/images/destinations/antalya.jpg',
    hotelCount: 10,
    link: '/tr/hotels/city/antalya'
  },
  {
    name: 'Bursa',
    description: 'Uludağ eteklerinde termal ve kongre otelleri',
    image: '/images/destinations/bursa.jpg',
    hotelCount: 10,
    link: '/tr/hotels/city/bursa'
  }
]

// Tüm şehirlerden gelen oteller
const allCityHotels = [
  // İstanbul Otelleri
  {
    id: 1,
    name: 'The Ritz-Carlton İstanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.8,
    reviews: 324,
    price: 8500,
    image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'İstanbulun kalbinde zamansız zarafetin modern sofistikeyle buluştuğu benzersiz lüks deneyimi yaşayın.',
  },
  {
    id: 2,
    name: 'Swissotel The Bosphorus',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 256,
    price: 7200,
    image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar', 'gym', 'restaurant'],
    description: 'Boğaz manzaralı, dünya standartlarında olanaklara sahip şık otel.',
  },
  {
    id: 3,
    name: 'CVK Park Bosphorus Hotel',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 289,
    price: 6800,
    image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
    description: 'Boğaz manzaralı modern ve şık otel',
  },
  {
    id: 4,
    name: 'Mövenpick Hotel İstanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.6,
    reviews: 198,
    price: 5500,
    image: '/hotels/Movenpick Hotel Istanbul/movenpick-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'İsviçre misafirperverliği standartlarında çağdaş otel',
  },
  {
    id: 5,
    name: 'Grand Hyatt İstanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 245,
    price: 7500,
    image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'İstanbulun iş merkezinin kalbindeki lüks otel',
  },
  {
    id: 6,
    name: 'Conrad İstanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.6,
    reviews: 189,
    price: 6200,
    image: '/hotels/Conrad Istanbul/conrad-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Boğaz manzaralı modern lüks otel',
  },
  {
    id: 7,
    name: 'İstanbul Marriott Hotel',
    location: 'İstanbul, Türkiye',
    rating: 4.5,
    reviews: 167,
    price: 5800,
    image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Marriott standartlarında konforlu otel',
  },
  {
    id: 8,
    name: 'W İstanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 203,
    price: 8000,
    image: '/hotels/W Istanbul/w-istanbul-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
    description: 'Çağdaş tasarımlı şık lüks otel',
  },
  {
    id: 9,
    name: 'Four Seasons İstanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.9,
    reviews: 267,
    price: 9200,
    image: '/hotels/Four Seasons Istanbul/four-seasons-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Tarihi Sultanahmette son lüks',
  },
  {
    id: 10,
    name: 'Çırağan Palace Kempinski',
    location: 'İstanbul, Türkiye',
    rating: 4.9,
    reviews: 312,
    price: 12000,
    image: '/hotels/Ciragan Palace Kempinski/ciragan-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'Lüks otele dönüştürülmüş Osmanlı sarayı',
  },
  // Trabzon Otelleri
  {
    id: 11,
    name: 'Zorlu Grand Hotel Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.7,
    reviews: 189,
    price: 4200,
    image: '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Trabzonun kalbindeki lüks otel',
  },
  {
    id: 12,
    name: 'Novotel Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.5,
    reviews: 145,
    price: 3500,
    image: '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Uluslararası standartlarda modern otel',
  },
  {
    id: 13,
    name: 'Hilton Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.6,
    reviews: 167,
    price: 4800,
    image: '/hotels/Trabzon/Hilton Trabzon/hilton-trabzon-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Karadeniz manzaralı uluslararası lüks',
  },
  {
    id: 14,
    name: 'Grand Tarabya Hotel',
    location: 'Trabzon, Türkiye',
    rating: 4.4,
    reviews: 123,
    price: 3200,
    image: '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Geleneksel misafirperverlikle konforlu otel',
  },
  {
    id: 15,
    name: 'Marriott Hotel Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.6,
    reviews: 178,
    price: 4500,
    image: '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon3-.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Karadeniz cazibesiyle Marriott kalitesi',
  },
  {
    id: 16,
    name: 'Rixos Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.7,
    reviews: 195,
    price: 5200,
    image: '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
    description: 'Özel plajlı lüks resort',
  },
  {
    id: 17,
    name: 'Wyndham Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.3,
    reviews: 134,
    price: 2800,
    image: '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-3.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
    description: 'Modern olanaklarla konforlu konaklama',
  },
  {
    id: 18,
    name: 'Hampton by Hilton Trabzon',
    location: 'Trabzon, Türkiye',
    rating: 4.4,
    reviews: 145,
    price: 3000,
    image: '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-3.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
    description: 'Hampton kalitesiyle modern konfor',
  },
  {
    id: 19,
    name: 'Trabzon Park Hotel',
    location: 'Trabzon, Türkiye',
    rating: 4.2,
    reviews: 112,
    price: 2500,
    image: '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-3.jpg',
    amenities: ['wifi', 'parking', 'gym', 'restaurant'],
    description: 'Bahçe manzaralı konforlu otel',
  },
  {
    id: 20,
    name: 'Yazıcı Hotel',
    location: 'Trabzon, Türkiye',
    rating: 4.3,
    reviews: 128,
    price: 3800,
    image: '/hotels/Trabzon/Yazici Hotel/yazici-hotel-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Modern konforla geleneksel misafirperverlik',
  },
  // Antalya Otelleri
  {
    id: 21,
    name: 'Mardan Palace',
    location: 'Antalya, Türkiye',
    rating: 4.8,
    reviews: 523,
    price: 6500,
    image: '/hotels/Antalya/Mardan Palace/mardan-palace-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'Akdeniz kıyısındaki lüks saray tarzı resort',
  },
  {
    id: 22,
    name: 'Regnum Carya',
    location: 'Antalya, Türkiye',
    rating: 4.7,
    reviews: 412,
    price: 5800,
    image: '/hotels/Antalya/Regnum Carya/Regnum-Carya-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Akdeniz kıyısındaki lüks golf resortu',
  },
  {
    id: 23,
    name: 'Maxx Royal Belek',
    location: 'Antalya, Türkiye',
    rating: 4.8,
    reviews: 489,
    price: 7200,
    image: '/hotels/Antalya/Maxx Royal Belek/maxx-royal-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Ultra lüks golf ile resort',
  },
  {
    id: 24,
    name: 'Susesi Luxury Resort',
    location: 'Antalya, Türkiye',
    rating: 4.6,
    reviews: 367,
    price: 5200,
    image: '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Lüks plaj resortu',
  },
  {
    id: 25,
    name: 'Calista Luxury Resort',
    location: 'Antalya, Türkiye',
    rating: 4.7,
    reviews: 398,
    price: 6000,
    image: '/hotels/Antalya/Calista Luxury Resort/calista-luxury-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Premium plaj resortu lüks olanaklarla',
  },
  {
    id: 26,
    name: 'Kaya Palazzo',
    location: 'Antalya, Türkiye',
    rating: 4.6,
    reviews: 345,
    price: 5500,
    image: '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Akdeniz cazibesiyle zarif resort',
  },
  {
    id: 27,
    name: 'Rixos Premium Belek',
    location: 'Antalya, Türkiye',
    rating: 4.7,
    reviews: 423,
    price: 6800,
    image: '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
    description: 'Premium her şey dahil lüks resort',
  },
  {
    id: 28,
    name: 'Cornelia Diamond Golf Resort',
    location: 'Antalya, Türkiye',
    rating: 4.6,
    reviews: 389,
    price: 6200,
    image: '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Lüks golf ve plaj resortu',
  },
  {
    id: 29,
    name: 'Land of Legends Kingdom',
    location: 'Antalya, Türkiye',
    rating: 4.8,
    reviews: 467,
    price: 7500,
    image: '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
    description: 'Lüks konaklamalı tema park resortu',
  },
  {
    id: 30,
    name: 'Sirene Belek',
    location: 'Antalya, Türkiye',
    rating: 4.5,
    reviews: 312,
    price: 4800,
    image: '/hotels/Antalya/Sirene Belek/sirene-belek-3.jpeg',
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
    description: 'Golf ve plaj resortu',
  },
  // Bursa Otelleri
  {
    id: 31,
    name: 'Hilton Bursa Convention Center',
    location: 'Bursa, Türkiye',
    rating: 4.6,
    reviews: 234,
    price: 3800,
    image: '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Kongre tesisli modern otel',
  },
  {
    id: 32,
    name: 'Crowne Plaza Bursa',
    location: 'Bursa, Türkiye',
    rating: 4.5,
    reviews: 198,
    price: 3200,
    image: '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'İş oteli modern olanaklarla',
  },
  {
    id: 33,
    name: 'Almira Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 167,
    price: 2800,
    image: '/hotels/Bursa/Almira Hotel/almira-hotel-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Termal spa ile konforlu otel',
  },
  {
    id: 34,
    name: 'Karinna Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.3,
    reviews: 145,
    price: 2500,
    image: '/hotels/Bursa/Karinna Hotel/karinna-hotel-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Termal tesisli butik otel',
  },
  {
    id: 35,
    name: 'Grand Yazar Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 178,
    price: 3000,
    image: '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Termal spa ile modern otel',
  },
  {
    id: 36,
    name: 'WOW Bursa',
    location: 'Bursa, Türkiye',
    rating: 4.5,
    reviews: 189,
    price: 3500,
    image: '/hotels/Bursa/WOW Bursa/wow-bursa-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Çağdaş tasarımlı modern otel',
  },
  {
    id: 37,
    name: 'Gönlüferah Thermal Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.3,
    reviews: 156,
    price: 2700,
    image: '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
    description: 'Geleneksel termal otel',
  },
  {
    id: 38,
    name: 'Kervansaray Thermal Hotel',
    location: 'Bursa, Türkiye',
    rating: 4.6,
    reviews: 223,
    price: 4200,
    image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
    description: 'Lüks termal spa resortu',
  },
  {
    id: 39,
    name: 'Çelik Palas',
    location: 'Bursa, Türkiye',
    rating: 4.4,
    reviews: 198,
    price: 2200,
    image: '/hotels/Bursa/Celik Palas/celik-palas-3.jpg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Tarihi otel termal tesisleriyle',
  },
  {
    id: 40,
    name: 'Bursa Holiday Inn',
    location: 'Bursa, Türkiye',
    rating: 4.3,
    reviews: 145,
    price: 2600,
    image: '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-3.jpeg',
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
    description: 'Uluslararası standartlarda konforlu otel',
  }
]

const amenities = {
  wifi: { icon: Wifi, label: 'Ücretsiz WiFi' },
  parking: { icon: Car, label: 'Ücretsiz Otopark' },
  spa: { icon: Dumbbell, label: 'Spa & Wellness' },
  restaurant: { icon: Coffee, label: 'Restoran' },
  bar: { icon: Coffee, label: 'Bar & Lounge' },
  pool: { icon: Dumbbell, label: 'Yüzme Havuzu' },
  concierge: { icon: Users, label: 'Concierge Hizmeti' },
  'room-service': { icon: Coffee, label: 'Oda Servisi' },
  gym: { icon: Dumbbell, label: 'Fitness Merkezi' },
  beach: { icon: MapPin, label: 'Özel Plaj' },
  'kids-club': { icon: Users, label: 'Çocuk Kulübü' },
  golf: { icon: Users, label: 'Golf Sahası' },
  'water-park': { icon: Users, label: 'Su Parkı' },
  'beach-club': { icon: Users, label: 'Plaj Kulübü' }
}

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/istanbul.jpg"
            alt="Türkiye Otelleri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Türkiye'nin En İyi Otelleri
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Lüks konaklama deneyimini Türkiye'nin dört bir yanında keşfedin
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Tüm Otelleri Keşfet
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Özel Teklifler
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popüler Destinasyonlar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin en çok tercih edilen şehirlerindeki lüks otellerimizi keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <Link key={city.name} href={city.link} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{city.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{city.hotelCount} Otel</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Öne Çıkan Oteller</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin dört bir yanındaki en lüks otellerden seçkiler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allCityHotels.map((hotel) => (
              <div key={hotel.id} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary-600">₺{hotel.price.toLocaleString()}</span>
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
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {amenities[amenity as keyof typeof amenities]?.label || amenity}
                      </span>
                    ))}
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
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ödüllü Hizmet</h3>
              <p className="text-gray-600">
                Uluslararası standartlarda, misafir memnuniyeti odaklı hizmet anlayışı
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Stratejik Konumlar</h3>
              <p className="text-gray-600">
                Türkiye'nin en önemli turistik ve iş merkezlerindeki otellerimiz
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Olanaklar</h3>
              <p className="text-gray-600">
                Spa, wellness, fine dining ve daha fazlasıyla zenginleşmiş deneyim
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Mükemmel Konaklamanızı Bulmaya Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Uzman seyahat danışmanlarımızın hayalinizdeki tatili planlamasına izin verin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Şimdi Rezerve Et
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