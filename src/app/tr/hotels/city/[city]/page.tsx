'use client'

import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

// Destination Card Component
const DestinationCard = ({ destination, tick }: { destination: { name: string; nameTr: string; image: string; gallery?: string[]; tours: number; rating: number }, tick: number }) => {
  const [offset, setOffset] = useState(0)
  const images = destination.gallery && destination.gallery.length > 0 ? destination.gallery : [destination.image]
  const idx = images.length > 0 ? ((tick + offset) % images.length) : 0

  const handleError = () => {
    if (images.length > 1) {
      setOffset((v) => (v + 1) % images.length)
    }
  }

  useEffect(() => {
    if (images.length <= 1) return
    if (typeof window === 'undefined') return
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (!isMobile) return
    const id = setInterval(() => {
      setOffset((v) => (v + 1) % images.length)
    }, 3500)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <Link href={`/tr/hotels/city/${destination.name.toLowerCase()}`} className="card group cursor-pointer">
      <div className="relative h-[28rem] overflow-hidden">
        <Image
          key={images[idx]}
          src={images[idx]}
          alt={destination.nameTr}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={handleError}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-2">{destination.nameTr}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{destination.rating}</span>
            </div>
            <span>{destination.tours} Otel</span>
          </div>
        </div>
        {images.length > 1 && (
          <div className="absolute right-3 bottom-3 flex gap-1">
            {images.map((_, i) => (
              <span key={i} className={`w-2 h-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

// Popular Destinations Data
const popularDestinations = [
  {
    name: 'Istanbul',
    nameTr: 'İstanbul',
    image: '/images/destinations/istanbul.jpg',
    gallery: [
      '/images/destinations/Istanbul/istanbul-1.jpg',
      '/images/destinations/Istanbul/istanbul-2.jpg',
      '/images/destinations/Istanbul/istanbul-3.jpg',
      '/images/destinations/Istanbul/istanbul-4.jpg',
      '/images/destinations/Istanbul/istanbul-5.jpg',
    ],
    tours: 45,
    rating: 4.8
  },
  {
    name: 'Trabzon',
    nameTr: 'Trabzon',
    image: '/images/destinations/bodrum.jpg',
    gallery: [
      '/images/destinations/Trabzon/trabzon-1.jpg',
      '/images/destinations/Trabzon/trabzon-2.jpg',
      '/images/destinations/Trabzon/trabzon-3.jpg',
      '/images/destinations/Trabzon/trabzon-4.jpg',
      '/images/destinations/Trabzon/trabzon-5.jpg',
    ],
    tours: 15,
    rating: 4.6
  },
  {
    name: 'Antalya',
    nameTr: 'Antalya',
    image: '/images/destinations/antalya.jpg',
    gallery: [
      '/images/destinations/Antalya/antalya-1.jpg',
      '/images/destinations/Antalya/antalya-2.jpg',
      '/images/destinations/Antalya/antalya-3.jpg',
      '/images/destinations/Antalya/antalya-4.jpg',
      '/images/destinations/Antalya/antalya-5.jpg',
    ],
    tours: 28,
    rating: 4.7
  },
  {
    name: 'Bursa',
    nameTr: 'Bursa',
    image: '/images/destinations/cappadocia.jpg',
    gallery: [
      '/images/destinations/Bursa/bursa-1.jpg',
      '/images/destinations/Bursa/bursa-2.jpg',
      '/images/destinations/Bursa/bursa-3.jpg',
      '/images/destinations/Bursa/bursa-4.jpg',
      '/images/destinations/Bursa/bursa-5.jpg',
    ],
    tours: 20,
    rating: 4.5
  }
]

// Şehir otelleri verisi
const cityHotelsData = {
  istanbul: [
    {
      id: 1,
      name: 'The Ritz-Carlton İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.8,
      reviews: 324,
      price: 8500,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      gallery: [
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'İstanbulun kalbinde zamansız zarafetin modern sofistikeyle buluştuğu benzersiz lüks deneyimi yaşayın.',
      fullDescription: 'İstanbulun canlı kalbinde yer alan The Ritz-Carlton İstanbul, rafine lüks ve kusursuz hizmetin sığınağıdır. Otelimiz, zamansız zarafeti çağdaş konforla birleştirerek, dünyanın en büyüleyici şehirlerinden birinde unutulmaz bir deneyim sunar.',
      features: [
        'Boğaz manzaralı lüks odalar ve suitler',
        'Ödüllü spa ve wellness merkezi',
        'Birden fazla fine dining restoran',
        'Panoramik şehir manzaralı çatı terası',
        'Son teknoloji fitness merkezi',
        'Kapalı yüzme havuzu',
        '24 saat oda servisi',
        'Özel concierge hizmeti'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Sıraselviler Cad. No:58, 34367 Beşiktaş, İstanbul, Türkiye'
      }
    },
    {
      id: 2,
      name: 'Swissotel The Bosphorus',
      location: 'İstanbul, Türkiye',
      rating: 4.7,
      reviews: 256,
      price: 7200,
      image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      gallery: [
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'bar', 'gym', 'restaurant'],
      description: 'Boğaz manzaralı, dünya standartlarında olanaklara sahip şık otel.',
      fullDescription: 'Swissotel The Bosphorus, İstanbul, Boğaz manzaralı zarif konaklama sunmaktadır. Otelimiz, konaklamanızı konforlu ve unutulmaz kılmak için tasarlanmış modern odalar, istisnai yemek seçenekleri ve bir dizi tesis sunmaktadır.',
      features: [
        'Boğaz Boğazı manzarası',
        'Premium olanaklara sahip modern odalar',
        'Birden fazla restoran ve bar',
        'Kapalı yüzme havuzu',
        'Full servis spa',
        'Fitness merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Bayıldım Cad. No:2, 34357 Beşiktaş, İstanbul, Türkiye'
      }
    },
    {
      id: 3,
      name: 'CVK Park Bosphorus Hotel',
      location: 'İstanbul, Türkiye',
      rating: 4.7,
      reviews: 289,
      price: 6800,
      image: '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
      gallery: [
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-1.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-2.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-3.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-4.jpeg',
        '/hotels/CVK Park Bosphorus Hotel Istanbul /CVK Park Bosphorus Hotel Istanbul-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'concierge', 'room-service'],
      description: 'Boğaz manzaralı modern ve şık otel',
      fullDescription: 'CVK Park Bosphorus Hotel İstanbul, İstanbulun kalbinde, etkileyici Boğaz manzaralarıyla modern ve şık bir oteldir. Otelimiz, çağdaş tasarımı üstün hizmetle birleştirerek konuklarımıza konfor ve lüks sunmaktadır.',
      features: [
        'Boğaz manzaralı modern odalar ve suitler',
        'Full servis spa ve wellness merkezi',
        'Birden fazla fine dining restoran',
        'Son teknoloji fitness merkezi',
        'Kapalı yüzme havuzu',
        '24 saat oda servisi',
        'Özel concierge hizmeti',
        'Toplantı ve etkinlik alanları'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Gümüşsuyu Mah. Balmumcu Sk. No:1, 34349 Beşiktaş, İstanbul, Türkiye'
      }
    },
    {
      id: 4,
      name: 'Mövenpick Hotel İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.6,
      reviews: 198,
      price: 5500,
      image: '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
      gallery: [
        '/hotels/Movenpick Hotel Istanbul/movenpick-1.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-2.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-3.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-4.jpg',
        '/hotels/Movenpick Hotel Istanbul/movenpick-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'İsviçre misafirperverliği standartlarında çağdaş otel',
      fullDescription: 'Mövenpick Hotel İstanbul, İsviçre misafirperverliğini İstanbulun kalbine taşır, modern olanaklar ve istisnai hizmetle çağdaş konaklama sunar.',
      features: [
        'Şehir manzaralı çağdaş odalar',
        'İsviçre misafirperverliği standartları',
        'Modern fitness merkezi',
        'Kapalı yüzme havuzu',
        'Birden fazla yemek seçeneği',
        'İş merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Piyalepaşa Blvd. No:1, 34445 Beyoğlu, İstanbul, Türkiye'
      }
    },
    {
      id: 5,
      name: 'Grand Hyatt İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.7,
      reviews: 245,
      price: 7500,
      image: '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
      gallery: [
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-1.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-2.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-3.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-4.jpg',
        '/hotels/Grand Hyatt Istanbul/grand-hyatt-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
      description: 'İstanbulun iş merkezinin kalbindeki lüks otel',
      fullDescription: 'Grand Hyatt İstanbul, İstanbulun iş merkezinin kalbinde lüks konaklama sunar, modern konforu istisnai hizmet ve dünya standartlarında olanaklarla birleştirir.',
      features: [
        'Şehir manzaralı lüks odalar',
        'Dünya standartlarında spa ve wellness',
        'Birden fazla yeme-içme mekanı',
        'Şehir manzaralı çatı havuzu',
        'Son teknoloji fitness merkezi',
        'İş ve toplantı tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Taskisla Cad. No:1, 34433 Taksim, İstanbul, Türkiye'
      }
    },
    {
      id: 6,
      name: 'Conrad İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.6,
      reviews: 189,
      price: 6200,
      image: '/hotels/Conrad Istanbul/conrad-1.jpg',
      gallery: [
        '/hotels/Conrad Istanbul/conrad-1.jpg',
        '/hotels/Conrad Istanbul/conrad-2.jpg',
        '/hotels/Conrad Istanbul/conrad-3.jpg',
        '/hotels/Conrad Istanbul/conrad-4.jpg',
        '/hotels/Conrad Istanbul/conrad-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Boğaz manzaralı modern lüks otel',
      fullDescription: 'Conrad İstanbul, etkileyici Boğaz manzaralarıyla modern lüks konaklama sunar, çağdaş tasarımı istisnai hizmet ve dünya standartlarında olanaklarla birleştirir.',
      features: [
        'Boğaz manzaralı modern odalar',
        'Lüks spa ve wellness merkezi',
        'Birden fazla yemek seçeneği',
        'Kapalı yüzme havuzu',
        'Fitness merkezi',
        'İş tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çırağan Cad. No:1, 34349 Beşiktaş, İstanbul, Türkiye'
      }
    },
    {
      id: 7,
      name: 'İstanbul Marriott Hotel',
      location: 'İstanbul, Türkiye',
      rating: 4.5,
      reviews: 167,
      price: 5800,
      image: '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
      gallery: [
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-1.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-2.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-3.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-4.jpg',
        '/hotels/Istanbul Marriott Hotel/istanbul-marriott-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Marriott standartlarında konforlu otel',
      fullDescription: 'İstanbul Marriott Hotel, Marriottun ünlü hizmet ve kalite standartlarını sunan konforlu konaklama, İstanbulun kalbinde yer alır.',
      features: [
        'Modern olanaklara sahip konforlu odalar',
        'Marriott kalite hizmeti',
        'Fitness merkezi',
        'Kapalı yüzme havuzu',
        'Birden fazla yemek seçeneği',
        'İş merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Abide-i Hürriyet Cad. No:175, 34381 Şişli, İstanbul, Türkiye'
      }
    },
    {
      id: 8,
      name: 'W İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.7,
      reviews: 203,
      price: 8000,
      image: '/hotels/W Istanbul/w-istanbul-1.jpg',
      gallery: [
        '/hotels/W Istanbul/w-istanbul-1.jpg',
        '/hotels/W Istanbul/w-istanbul-2.jpg',
        '/hotels/W Istanbul/w-istanbul-3.jpg',
        '/hotels/W Istanbul/w-istanbul-4.jpg',
        '/hotels/W Istanbul/w-istanbul-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge'],
      description: 'Çağdaş tasarımlı şık lüks otel',
      fullDescription: 'W İstanbul, çağdaş tasarımlı şık lüks konaklama sunar, modern konforu istisnai hizmet ve dünya standartlarında olanaklarla İstanbulun kalbinde birleştirir.',
      features: [
        'Çağdaş tasarımlı şık odalar',
        'Lüks spa ve wellness',
        'Trendy yeme-içme mekanları',
        'Çatı havuzu',
        'Son teknoloji fitness merkezi',
        'Concierge hizmetleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Süleyman Seba Cad. No:22, 34357 Beşiktaş, İstanbul, Türkiye'
      }
    },
    {
      id: 9,
      name: 'Four Seasons İstanbul',
      location: 'İstanbul, Türkiye',
      rating: 4.9,
      reviews: 267,
      price: 9200,
      image: '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
      gallery: [
        '/hotels/Four Seasons Istanbul/four-seasons-1.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-2.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-3.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-4.jpg',
        '/hotels/Four Seasons Istanbul/four-seasons-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'Tarihi Sultanahmette son lüks',
      fullDescription: 'Four Seasons İstanbul, tarihi Sultanahmet bölgesinde son lüks konaklama sunar, Osmanlı zarafetini modern konfor ve istisnai hizmetle birleştirir.',
      features: [
        'Tarihi manzaralı lüks odalar',
        'Dünya standartlarında spa ve wellness',
        'Fine dining restoranlar',
        'Güzel avlu bahçesi',
        'Fitness merkezi',
        'Kişiselleştirilmiş concierge hizmeti',
        'Türk hamamı deneyimi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Tevkifhane Sok. No:1, 34400 Sultanahmet, İstanbul, Türkiye'
      }
    },
    {
      id: 10,
      name: 'Çırağan Palace Kempinski',
      location: 'İstanbul, Türkiye',
      rating: 4.9,
      reviews: 312,
      price: 12000,
      image: '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
      gallery: [
        '/hotels/Ciragan Palace Kempinski/ciragan-1.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-2.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-3.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-4.jpg',
        '/hotels/Ciragan Palace Kempinski/ciragan-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
      description: 'Lüks otele dönüştürülmüş Osmanlı sarayı',
      fullDescription: 'Çırağan Palace Kempinski, lüks otele dönüştürülmüş bir Osmanlı sarayıdır, Boğaz kıyısında etkileyici manzaralar ve tarihi zarafetle eşsiz lüks ve hizmet sunar.',
      features: [
        'Boğaz manzaralı saray odaları',
        'Dünya standartlarında spa ve wellness',
        'Birden fazla fine dining restoran',
        'Özel plaj ve havuz',
        'Tarihi saray mimarisi',
        'Kişiselleştirilmiş uşak hizmeti',
        'Türk hamamı deneyimi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çırağan Cad. No:32, 34349 Beşiktaş, İstanbul, Türkiye'
      }
    }
  ],
  trabzon: [
    {
      id: 11,
      name: 'Zorlu Grand Hotel Trabzon',
      location: 'Trabzon, Türkiye',
      rating: 4.7,
      reviews: 189,
      price: 4200,
      image: '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-1.jpg',
      gallery: [
        '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-1.jpg',
        '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-2.jpg',
        '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-3.jpg',
        '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-4.jpg',
        '/hotels/Trabzon/Zorlu Grand Hotel Trabzon/zorlu-grand-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Trabzonun kalbindeki lüks otel',
      fullDescription: 'Zorlu Grand Hotel Trabzon, Trabzonun kalbinde lüks konaklama sunar, modern konforu istisnai hizmet ve dünya standartlarında olanaklarla birleştirir.',
      features: [
        'Şehir manzaralı lüks odalar',
        'Full servis spa ve wellness',
        'Birden fazla yemek seçeneği',
        'Kapalı yüzme havuzu',
        'Fitness merkezi',
        'İş tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Maraş Cad. No:1, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 12,
      name: 'Novotel Trabzon',
      location: 'Trabzon, Türkiye',
      rating: 4.5,
      reviews: 145,
      price: 3500,
      image: '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-1.jpeg',
      gallery: [
        '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-1.jpeg',
        '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-2.jpeg',
        '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-3.jpeg',
        '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-4.jpeg',
        '/hotels/Trabzon/Novotel Trabzon/novotel-trabzon-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Uluslararası standartlarda modern otel',
      fullDescription: 'Novotel Trabzon, iş ve seyahat gezginleri için konfor ve kolaylık sağlayan uluslararası standartlarda modern konaklama sunar.',
      features: [
        'Deniz manzaralı modern odalar',
        'Fitness merkezi',
        'Kapalı yüzme havuzu',
        'Birden fazla yemek seçeneği',
        'İş merkezi',
        'Toplantı tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Cumhuriyet Cad. No:95, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 13,
      name: 'Hilton Trabzon',
      location: 'Trabzon, Türkiye',
      rating: 4.6,
      reviews: 167,
      price: 4800,
      image: '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon.JPEG',
      gallery: [
        '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon.JPEG',
        '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon2.jpeg',
        '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon3.jpeg',
        '/hotels/Trabzon/Hilton Trabzon/aHilton-Trabzon4.jpeg',
        '/hotels/Trabzon/Hilton Trabzon/Hilton-Trabzon5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Karadeniz manzaralı uluslararası lüks',
      fullDescription: 'Hilton Trabzon, etkileyici Karadeniz manzaralarıyla uluslararası lüks konaklama sunar, dünya standartlarında hizmeti modern olanaklarla birleştirir.',
      features: [
        'Karadeniz manzaralı lüks odalar',
        'Full servis spa ve wellness',
        'Birden fazla yeme-içme mekanı',
        'Kapalı yüzme havuzu',
        'Fitness merkezi',
        'İş ve toplantı tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Tanjol Yolu Cad. No:1, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 14,
      name: 'Grand Tarabya Hotel',
      location: 'Trabzon, Türkiye',
      rating: 4.4,
      reviews: 123,
      price: 3200,
      image: '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-1.jpeg',
      gallery: [
        '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-1.jpeg',
        '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-2.jpeg',
        '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-3.jpeg',
        '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-4.jpeg',
        '/hotels/Trabzon/Grand Tarabya Hotel/Grand-Tarabya-Hotel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Geleneksel misafirperverlikle konforlu otel',
      fullDescription: 'Grand Tarabya Hotel, sıcak ve davetkar bir ortam sağlayan geleneksel Türk misafirperverliğiyle konforlu konaklama sunar.',
      features: [
        'Modern olanaklara sahip konforlu odalar',
        'Geleneksel Türk misafirperverliği',
        'Fitness merkezi',
        'Birden fazla yemek seçeneği',
        'İş tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Uzun Sok. No:45, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 15,
      name: 'Marriott Hotel Trabzon',
      location: 'Trabzon, Türkiye',
      rating: 4.6,
      reviews: 178,
      price: 4500,
      image: '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon1-.jpeg',
      gallery: [
        '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon1-.jpeg',
        '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon2-.jpeg',
        '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon3-.jpeg',
        '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon4-.jpeg',
        '/hotels/Trabzon/Marriott Hotel Trabzon/Marriott-Hotel-Trabzon5-.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Karadeniz cazibesiyle Marriott kalitesi',
      fullDescription: 'Marriott Hotel Trabzon, Karadeniz cazibesiyle Marriott kalitesinde konaklama sunar, uluslararası standartları yerel misafirperverlikle birleştirir.',
      features: [
        'Deniz manzaralı modern odalar',
        'Marriott kalite hizmeti',
        'Full servis spa',
        'Kapalı yüzme havuzu',
        'Birden fazla yemek seçeneği',
        'İş merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Gülbahar Cad. No:123, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 16,
      name: 'Rixos Trabzon',
      location: 'Trabzon, Türkiye',
      rating: 4.7,
      reviews: 195,
      price: 5200,
      image: '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-1.jpg',
      gallery: [
        '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-1.jpg',
        '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-2.jpg',
        '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-3.jpg',
        '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-4.jpg',
        '/hotels/Trabzon/Rixos Trabzon/rixos-trabzon-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'beach'],
      description: 'Özel plajlı lüks resort',
      fullDescription: 'Rixos Trabzon, özel plajlı lüks resort konaklama sunar, dünya standartlarında olanakları etkileyici Karadeniz manzaralarıyla birleştirir.',
      features: [
        'Deniz manzaralı lüks odalar',
        'Özel plaj erişimi',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Su sporları tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Yalıncak Cad. No:99, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 17,
      name: 'Wyndham Trabzon',
      location: 'Trabzon, Türkiye',
      rating: 4.3,
      reviews: 134,
      price: 2800,
      image: '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-1.jpg',
      gallery: [
        '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-1.jpg',
        '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-2.jpeg',
        '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-3.jpg',
        '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-4.jpg',
        '/hotels/Trabzon/Wyndham Trabzon/rixos-trabzon-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
      description: 'Modern olanaklarla konforlu konaklama',
      fullDescription: 'Wyndham Trabzon, gezginler için kaliteli hizmet ve kolaylık sağlayan modern olanaklarla konforlu konaklama sunar.',
      features: [
        'Şehir manzaralı konforlu odalar',
        'Modern olanaklar',
        'Fitness merkezi',
        'Birden fazla yemek seçeneği',
        'İş tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Mimarsinan Cad. No:45, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 18,
      name: 'Hampton by Hilton Trabzon',
      location: 'Trabzon, Türkiye',
      rating: 4.4,
      reviews: 145,
      price: 3000,
      image: '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-1.jpg',
      gallery: [
        '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-1.jpg',
        '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-2.jpg',
        '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-3.jpg',
        '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-4.jpg',
        '/hotels/Trabzon/Hampton by Hilton Trabzon/hampton-trabzon-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'gym', 'restaurant', 'bar'],
      description: 'Hampton kalitesiyle modern konfor',
      fullDescription: 'Hampton by Hilton Trabzon, Hampton kalite standartlarıyla modern konfor sunar, güvenilir hizmet ve konforlu konaklama sağlar.',
      features: [
        'Modern olanaklara sahip odalar',
        'Hampton kalite hizmeti',
        'Fitness merkezi',
        'Ücretsiz kahvaltı',
        'İş merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Turgut Özal Cad. No:67, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 19,
      name: 'Trabzon Park Hotel',
      location: 'Trabzon, Türkiye',
      rating: 4.2,
      reviews: 112,
      price: 2500,
      image: '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-1.jpg',
      gallery: [
        '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-1.jpg',
        '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-2.jpg',
        '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-3.jpg',
        '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-4.jpg',
        '/hotels/Trabzon/Trabzon Park Hotel/trabzon-park-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'gym', 'restaurant'],
      description: 'Bahçe manzaralı konforlu otel',
      fullDescription: 'Trabzon Park Hotel, Trabzonun kalbinde huzurlu bir sığınak sağlayan bahçe manzaralı konforlu konaklama sunar.',
      features: [
        'Bahçe manzaralı konforlu odalar',
        'Huzurlu konum',
        'Yerel mutfak sunan restoran',
        'Toplantı tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Kalkınma Cad. No:34, 61000 Trabzon, Türkiye'
      }
    },
    {
      id: 20,
      name: 'Yazıcı Hotel',
      location: 'Trabzon, Türkiye',
      rating: 4.3,
      reviews: 128,
      price: 3800,
      image: '/hotels/Trabzon/Yazici Hotel/yazici-hotel-1.jpeg',
      gallery: [
        '/hotels/Trabzon/Yazici Hotel/yazici-hotel-1.jpeg',
        '/hotels/Trabzon/Yazici Hotel/yazici-hotel-2.jpeg',
        '/hotels/Trabzon/Yazici Hotel/yazici-hotel-3.jpeg',
        '/hotels/Trabzon/Yazici Hotel/yazici-hotel-4.jpeg',
        '/hotels/Trabzon/Yazici Hotel/yazici-hotel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Modern konforla geleneksel misafirperverlik',
      fullDescription: 'Yazıcı Hotel, Trabzonda modern konforla geleneksel Türk misafirperverliğini birleştiren benzersiz bir konaklama deneyimi sunar.',
      features: [
        'Modern olanaklara sahip konforlu odalar',
        'Geleneksel Türk misafirperverliği',
        'Spa ve wellness merkezi',
        'Yerel mutfak sunan restoran',
        'İş tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Gülsüm Sokağı No:12, 61000 Trabzon, Türkiye'
      }
    }
  ],
  antalya: [
    {
      id: 21,
      name: 'Mardan Palace',
      location: 'Antalya, Türkiye',
      rating: 4.8,
      reviews: 523,
      price: 6500,
      image: '/hotels/Antalya/Mardan Palace/mardan-palace-1.jpeg',
      gallery: [
        '/hotels/Antalya/Mardan Palace/mardan-palace-1.jpeg',
        '/hotels/Antalya/Mardan Palace/mardan-palace-2.jpeg',
        '/hotels/Antalya/Mardan Palace/mardan-palace-3.jpeg',
        '/hotels/Antalya/Mardan Palace/mardan-palace-4.jpeg',
        '/hotels/Antalya/Mardan Palace/mardan-palace-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
      description: 'Akdeniz kıyısındaki lüks saray tarzı resort',
      fullDescription: 'Mardan Palace, Akdeniz kıyısının etkileyici konumunda yer alan magnifik saray tarzı bir resorttur. Türkiyenin en lüks oteli olarak, Osmanlı esintili mimarisi ile eşsiz bir deneyim sunar.',
      features: [
        'Osmanlı esintili saray mimarisi',
        'Berrak Akdeniz sularıyla özel plaj',
        'Su kaydırakları dahil birden fazla yüzme havuzu',
        'Dünya standartlarında spa ve wellness merkezi',
        'Uluslararası mutfakta fine dining restoranlar',
        'Çocuk kulübü ve aile dostu aktiviteler'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Kemer, 07980 Antalya, Türkiye'
      }
    },
    {
      id: 22,
      name: 'Regnum Carya',
      location: 'Antalya, Türkiye',
      rating: 4.7,
      reviews: 412,
      price: 5800,
      image: '/hotels/Antalya/Regnum Carya/Regnum-Carya-1.jpeg',
      gallery: [
        '/hotels/Antalya/Regnum Carya/Regnum-Carya-1.jpeg',
        '/hotels/Antalya/Regnum Carya/Regnum-Carya-2.jpeg',
        '/hotels/Antalya/Regnum Carya/Regnum-Carya-3.jpeg',
        '/hotels/Antalya/Regnum Carya/Regnum-Carya-4.jpeg',
        '/hotels/Antalya/Regnum Carya/Regnum-Carya-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Akdeniz kıyısındaki lüks golf resortu',
      fullDescription: 'Regnum Carya, Akdeniz kıyısında lüks golf resort konaklama sunar, dünya standartlarında golf tesisleri ve etkileyici Akdeniz manzaraları ile istisnai hizmet.',
      features: [
        'Şampiyona golf sahası',
        'Akdeniz manzaralı lüks odalar',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Özel plaj erişimi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    },
    {
      id: 23,
      name: 'Maxx Royal Belek',
      location: 'Antalya, Türkiye',
      rating: 4.8,
      reviews: 489,
      price: 7200,
      image: '/hotels/Antalya/Maxx Royal Belek/maxx-royal-1.jpeg',
      gallery: [
        '/hotels/Antalya/Maxx Royal Belek/maxx-royal-1.jpeg',
        '/hotels/Antalya/Maxx Royal Belek/maxx-royal-2.jpeg',
        '/hotels/Antalya/Maxx Royal Belek/maxx-royal-3.jpeg',
        '/hotels/Antalya/Maxx Royal Belek/maxx-royal-4.jpeg',
        '/hotels/Antalya/Maxx Royal Belek/maxx-royal-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Ultra lüks golf ile resort',
      fullDescription: 'Maxx Royal Belek, dünya standartlarında golf tesisleri ve etkileyici Akdeniz manzaraları ile ultra lüks resort konaklama sunar.',
      features: [
        'Şampiyona golf sahaları',
        'Ultra lüks odalar ve suitler',
        'Dünya standartlarında spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Premium olanaklarla özel plaj'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    },
    {
      id: 24,
      name: 'Susesi Luxury Resort',
      location: 'Antalya, Türkiye',
      rating: 4.6,
      reviews: 367,
      price: 5200,
      image: '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-1.jpeg',
      gallery: [
        '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-1.jpeg',
        '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-2.jpeg',
        '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-3.jpeg',
        '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-4.jpeg',
        '/hotels/Antalya/Susesi Luxury Resort/susesi-luxury-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Lüks plaj resortu',
      fullDescription: 'Susesi Luxury Resort, Akdeniz kıyısında lüks plaj resort konaklama sunar, etkileyici Akdeniz manzaraları ve dünya standartlarında olanaklarla istisnai hizmet.',
      features: [
        'Akdeniz manzaralı lüks odalar',
        'Özel plaj erişimi',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Su sporları tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    },
    {
      id: 25,
      name: 'Calista Luxury Resort',
      location: 'Antalya, Türkiye',
      rating: 4.7,
      reviews: 398,
      price: 6000,
      image: '/hotels/Antalya/Calista Luxury Resort/calista-luxury-1.jpeg',
      gallery: [
        '/hotels/Antalya/Calista Luxury Resort/calista-luxury-1.jpeg',
        '/hotels/Antalya/Calista Luxury Resort/calista-luxury-2.jpeg',
        '/hotels/Antalya/Calista Luxury Resort/calista-luxury-3.jpeg',
        '/hotels/Antalya/Calista Luxury Resort/calista-luxury-4.jpeg',
        '/hotels/Antalya/Calista Luxury Resort/calista-luxury-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Premium plaj resortu lüks olanaklarla',
      fullDescription: 'Calista Luxury Resort, Akdeniz kıyısında premium plaj resort konaklama sunar, etkileyici Akdeniz manzaraları ve dünya standartlarında olanaklarla istisnai hizmet.',
      features: [
        'Akdeniz manzaralı lüks odalar',
        'Özel plaj erişimi',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Su sporları ve plaj aktiviteleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    },
    {
      id: 26,
      name: 'Kaya Palazzo',
      location: 'Antalya, Türkiye',
      rating: 4.6,
      reviews: 345,
      price: 5500,
      image: '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-1.jpeg',
      gallery: [
        '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-1.jpeg',
        '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-2.jpeg',
        '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-3.jpeg',
        '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-4.jpeg',
        '/hotels/Antalya/Kaya Palazzo/kaya-palazzo-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Akdeniz cazibesiyle zarif resort',
      fullDescription: 'Kaya Palazzo, Akdeniz cazibesiyle zarif resort konaklama sunar, etkileyici Akdeniz manzaraları ve dünya standartlarında olanaklarla istisnai hizmet.',
      features: [
        'Akdeniz cazibesiyle zarif odalar',
        'Özel plaj erişimi',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Su sporları tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    },
    {
      id: 27,
      name: 'Rixos Premium Belek',
      location: 'Antalya, Türkiye',
      rating: 4.7,
      reviews: 423,
      price: 6800,
      image: '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-1.jpeg',
      gallery: [
        '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-1.jpeg',
        '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-2.jpeg',
        '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-3.jpeg',
        '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-4.jpeg',
        '/hotels/Antalya/Rixos Premium Belek/rixos-premium-belek-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach'],
      description: 'Premium her şey dahil lüks resort',
      fullDescription: 'Rixos Premium Belek, Akdeniz kıyısında premium her şey dahil lüks resort konaklama sunar, etkileyici Akdeniz manzaraları ve dünya standartlarında olanaklarla istisnai hizmet.',
      features: [
        'Deniz manzaralı premium odalar',
        'Özel plaj erişimi',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Her şey dahil yemek seçenekleri',
        'Eğlence ve aktiviteler'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    },
    {
      id: 28,
      name: 'Cornelia Diamond Golf Resort',
      location: 'Antalya, Türkiye',
      rating: 4.6,
      reviews: 389,
      price: 6200,
      image: '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-1.jpeg',
      gallery: [
        '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-1.jpeg',
        '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-2.jpeg',
        '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-3.jpeg',
        '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-4.jpeg',
        '/hotels/Antalya/Cornelia Diamond Golf Resort/cornelia-diamond-golf-resort-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Lüks golf ve plaj resortu',
      fullDescription: 'Cornelia Diamond Golf Resort, Akdeniz kıyısında lüks golf ve plaj resort konaklama sunar, dünya standartlarında golf tesisleri ve etkileyici Akdeniz manzaraları ile istisnai hizmet.',
      features: [
        'Şampiyona golf sahası',
        'Deniz manzaralı lüks odalar',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Özel plaj erişimi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    },
    {
      id: 29,
      name: 'Land of Legends Kingdom',
      location: 'Antalya, Türkiye',
      rating: 4.8,
      reviews: 467,
      price: 7500,
      image: '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-1.jpeg',
      gallery: [
        '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-1.jpeg',
        '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-2.jpeg',
        '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-3.jpeg',
        '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-4.jpeg',
        '/hotels/Antalya/Land of Legends Kingdom/land-of-legends-kingdom-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'water-park'],
      description: 'Lüks konaklamalı tema park resortu',
      fullDescription: 'Land of Legends Kingdom, Akdeniz kıyısında lüks konaklamalı tema park resortu sunar, eğlence tesisleri ve etkileyici Akdeniz manzaraları ile istisnai hizmet.',
      features: [
        'Tema park erişimi',
        'Tema ile dekore edilmiş lüks odalar',
        'Su parkı ile su kaydırakları',
        'Full servis spa ve wellness',
        'Birden fazla yemek seçeneği',
        'Eğlence gösterileri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Kumköy, 07400 Side, Antalya, Türkiye'
      }
    },
    {
      id: 30,
      name: 'Sirene Belek',
      location: 'Antalya, Türkiye',
      rating: 4.5,
      reviews: 312,
      price: 4800,
      image: '/hotels/Antalya/Sirene Belek/sirene-belek-1.jpeg',
      gallery: [
        '/hotels/Antalya/Sirene Belek/sirene-belek-1.jpeg',
        '/hotels/Antalya/Sirene Belek/sirene-belek-2.jpeg',
        '/hotels/Antalya/Sirene Belek/sirene-belek-3.jpeg',
        '/hotels/Antalya/Sirene Belek/sirene-belek-4.jpeg',
        '/hotels/Antalya/Sirene Belek/sirene-belek-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'golf'],
      description: 'Golf ve plaj resortu',
      fullDescription: 'Sirene Belek, Akdeniz kıyısında konforlu golf ve plaj resort konaklama sunar, dünya standartlarında golf tesisleri ve etkileyici Akdeniz manzaraları ile istisnai hizmet.',
      features: [
        'Golf sahası erişimi',
        'Deniz manzaralı konforlu odalar',
        'Full servis spa ve wellness',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Özel plaj erişimi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Belek, 07500 Antalya, Türkiye'
      }
    }
  ],
  bursa: [
    {
      id: 31,
      name: 'Hilton Bursa Convention Center',
      location: 'Bursa, Türkiye',
      rating: 4.6,
      reviews: 234,
      price: 3800,
      image: '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-1.jpeg',
      gallery: [
        '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-1.jpeg',
        '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-2.jpeg',
        '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-3.jpeg',
        '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-4.jpeg',
        '/hotels/Bursa/Hilton Bursa Convention Center/hilton-bursa-convention-center-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Kongre tesisli modern otel',
      fullDescription: 'Hilton Bursa Convention Center, kapsamlı kongre tesisleriyle modern konaklama sunar, konforu işlevselliğiyle birleştirir.',
      features: [
        'Şehir manzaralı modern odalar',
        'Kongre ve toplantı tesisleri',
        'Full servis spa ve wellness',
        'Kapalı yüzme havuzu',
        'Birden fazla yemek seçeneği',
        'İş merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Ankara Yolu 12. Km, 16190 Nilüfer, Bursa, Türkiye'
      }
    },
    {
      id: 32,
      name: 'Crowne Plaza Bursa',
      location: 'Bursa, Türkiye',
      rating: 4.5,
      reviews: 198,
      price: 3200,
      image: '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
      gallery: [
        '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-1.jpeg',
        '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-2.jpeg',
        '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-3.jpeg',
        '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-4.jpeg',
        '/hotels/Bursa/Crowne Plaza Bursa/crowne-plaza-bursa-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'İş oteli modern olanaklarla',
      fullDescription: 'Crowne Plaza Bursa, iş ve seyahat gezginleri için kapsamlı olanaklarla modern konaklama sunan iş otelidir.',
      features: [
        'Şehir manzaralı modern odalar',
        'İş tesisleri',
        'Full servis spa ve wellness',
        'Kapalı yüzme havuzu',
        'Birden fazla yemek seçeneği',
        'Toplantı odaları'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Ankara Asfaltı 7. Km, 16190 Nilüfer, Bursa, Türkiye'
      }
    },
    {
      id: 33,
      name: 'Almira Hotel',
      location: 'Bursa, Türkiye',
      rating: 4.4,
      reviews: 167,
      price: 2800,
      image: '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
      gallery: [
        '/hotels/Bursa/Almira Hotel/almira-hotel-1.jpeg',
        '/hotels/Bursa/Almira Hotel/almira-hotel-2.jpeg',
        '/hotels/Bursa/Almira Hotel/almira-hotel-3.jpeg',
        '/hotels/Bursa/Almira Hotel/almira-hotel-4.jpeg',
        '/hotels/Bursa/Almira Hotel/almira-hotel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Termal spa ile konforlu otel',
      fullDescription: 'Almira Hotel, Bursada rahatlama ve wellness sağlayan termal spa tesisleriyle konforlu konaklama sunar.',
      features: [
        'Modern olanaklara sahip konforlu odalar',
        'Termal spa ve wellness',
        'Yerel mutfak sunan restoran',
        'İş tesisleri',
        'Termal havuzlar'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çekirge Cad. No:45, 16140 Osmangazi, Bursa, Türkiye'
      }
    },
    {
      id: 34,
      name: 'Karinna Hotel',
      location: 'Bursa, Türkiye',
      rating: 4.3,
      reviews: 145,
      price: 2500,
      image: '/hotels/Bursa/Karinna Hotel/karinna-hotel-1.jpeg',
      gallery: [
        '/hotels/Bursa/Karinna Hotel/karinna-hotel-1.jpeg',
        '/hotels/Bursa/Karinna Hotel/karinna-hotel-2.jpeg',
        '/hotels/Bursa/Karinna Hotel/karinna-hotel-3.jpeg',
        '/hotels/Bursa/Karinna Hotel/karinna-hotel-4.jpeg',
        '/hotels/Bursa/Karinna Hotel/karinna-hotel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'Termal tesisli butik otel',
      fullDescription: 'Karinna Hotel, Bursada benzersiz wellness deneyimi sunan termal tesisleriyle konforlu butik oteldir.',
      features: [
        'Modern olanaklara sahip butik odalar',
        'Termal spa tesisleri',
        'Yerel mutfak sunan restoran',
        'Termal havuzlar',
        'Wellness merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çekirge Cad. No:67, 16140 Osmangazi, Bursa, Türkiye'
      }
    },
    {
      id: 35,
      name: 'Grand Yazar Hotel',
      location: 'Bursa, Türkiye',
      rating: 4.4,
      reviews: 178,
      price: 3000,
      image: '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-1.jpeg',
      gallery: [
        '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-1.jpeg',
        '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-2.jpeg',
        '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-3.jpeg',
        '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-4.jpeg',
        '/hotels/Bursa/Grand Yazar Hotel/grand-yazar-hotel-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Termal spa ile modern otel',
      fullDescription: 'Grand Yazar Hotel, Bursada konfor ve wellness sağlayan termal spa tesisleriyle modern konaklama sunar.',
      features: [
        'Şehir manzaralı modern odalar',
        'Termal spa ve wellness',
        'Restoran ve bar',
        'Fitness merkezi',
        'İş tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Altıparmak Cad. No:89, 16140 Osmangazi, Bursa, Türkiye'
      }
    },
    {
      id: 36,
      name: 'WOW Bursa',
      location: 'Bursa, Türkiye',
      rating: 4.5,
      reviews: 189,
      price: 3500,
      image: '/hotels/Bursa/WOW Bursa/wow-bursa-1.jpg',
      gallery: [
        '/hotels/Bursa/WOW Bursa/wow-bursa-1.jpg',
        '/hotels/Bursa/WOW Bursa/wow-bursa-2.jpg',
        '/hotels/Bursa/WOW Bursa/wow-bursa-3.jpg',
        '/hotels/Bursa/WOW Bursa/wow-bursa-4.jpg',
        '/hotels/Bursa/WOW Bursa/wow-bursa-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Çağdaş tasarımlı modern otel',
      fullDescription: 'WOW Bursa, iş ve seyahat gezginleri için kapsamlı olanaklarla şık tasarımlı çağdaş konaklama sunar.',
      features: [
        'Çağdaş tasarımlı modern odalar',
        'Full servis spa ve wellness',
        'Kapalı yüzme havuzu',
        'Birden fazla yemek seçeneği',
        'Fitness merkezi',
        'İş tesisleri'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Ankara Yolu 8. Km, 16190 Nilüfer, Bursa, Türkiye'
      }
    },
    {
      id: 37,
      name: 'Gönlüferah Thermal Hotel',
      location: 'Bursa, Türkiye',
      rating: 4.3,
      reviews: 156,
      price: 2700,
      image: '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-1.jpg',
      gallery: [
        '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-1.jpg',
        '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-2.jpg',
        '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-3.jpg',
        '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-4.jpg',
        '/hotels/Bursa/Gonluerah Thermal Hotel/gonluerah-thermal-hotel-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'Geleneksel termal otel',
      fullDescription: 'Gönlüferah Thermal Hotel, Bursada otantik termal spa tesisleriyle konforlu konaklama sunan geleneksel termal oteldir.',
      features: [
        'Geleneksel dekora sahip konforlu odalar',
        'Geleneksel termal spa',
        'Yerel mutfak sunan restoran',
        'Termal havuzlar',
        'Wellness merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çekirge Cad. No:123, 16140 Osmangazi, Bursa, Türkiye'
      }
    },
    {
      id: 38,
      name: 'Kervansaray Thermal Hotel',
      location: 'Bursa, Türkiye',
      rating: 4.6,
      reviews: 223,
      price: 4200,
      image: '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
      gallery: [
        '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-1.jpg',
        '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-2.jpg',
        '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-3.jpg',
        '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-4.jpg',
        '/hotels/Bursa/Kervansaray Thermal Hotel/kervansaray-thermal-hotel-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool'],
      description: 'Lüks termal spa resortu',
      fullDescription: 'Kervansaray Thermal Hotel, Bursada kapsamlı termal spa tesisleri ve dünya standartlarında hizmetle lüks termal spa resort konaklama sunar.',
      features: [
        'Modern olanaklara sahip lüks odalar',
        'Kapsamlı termal spa tesisleri',
        'Birden fazla yüzme havuzu',
        'Fine dining restoranlar',
        'Fitness merkezi',
        'Geleneksel Türk hamamı'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çekirge Cad. No:34, 16140 Osmangazi, Bursa, Türkiye'
      }
    },
    {
      id: 39,
      name: 'Çelik Palas',
      location: 'Bursa, Türkiye',
      rating: 4.4,
      reviews: 198,
      price: 2200,
      image: '/hotels/Bursa/Celik Palas/celik-palas-1.jpg',
      gallery: [
        '/hotels/Bursa/Celik Palas/celik-palas-1.jpg',
        '/hotels/Bursa/Celik Palas/celik-palas-2.jpg',
        '/hotels/Bursa/Celik Palas/celik-palas-3.jpg',
        '/hotels/Bursa/Celik Palas/celik-palas-4.jpg',
        '/hotels/Bursa/Celik Palas/celik-palas-5.jpg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Tarihi otel termal tesisleriyle',
      fullDescription: 'Çelik Palas, termal tesisleriyle konforlu konaklama sunan tarihi oteldir, geleneksel zarafeti modern konforla birleştirir.',
      features: [
        'Tarihi dekora sahip konforlu odalar',
        'Termal spa tesisleri',
        'Yerel mutfak sunan restoran',
        'Termal havuzlar',
        'Tarihi atmosfer'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Çekirge Cad. No:1, 16140 Osmangazi, Bursa, Türkiye'
      }
    },
    {
      id: 40,
      name: 'Bursa Holiday Inn',
      location: 'Bursa, Türkiye',
      rating: 4.3,
      reviews: 145,
      price: 2600,
      image: '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-1.jpeg',
      gallery: [
        '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-1.jpeg',
        '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-2.jpeg',
        '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-3.jpeg',
        '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-4.jpeg',
        '/hotels/Bursa/Bursa Holiday Inn/Holiday-Inn-Bursa-5.jpeg'
      ],
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar'],
      description: 'Uluslararası standartlarda konforlu otel',
      fullDescription: 'Bursa Holiday Inn, güvenilir hizmet ve modern olanaklarla uluslararası standartlarda konforlu konaklama sunar.',
      features: [
        'Modern olanaklara sahip konforlu odalar',
        'Uluslararası hizmet standartları',
        'Fitness merkezi',
        'Ücretsiz kahvaltı',
        'İş merkezi'
      ],
      contact: {
        phone: '+90 532 123 4567',
        email: 'info@fortytravel.com',
        address: 'Ankara Yolu 15. Km, 16190 Nilüfer, Bursa, Türkiye'
      }
    }
  ]
}

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

export default function CityHotelsPage({ params }: { params: { city: string } }) {
  const [destinationsTick, setDestinationsTick] = useState(0)
  
  // Slideshow effect for destination cards
  useEffect(() => {
    const id = setInterval(() => {
      setDestinationsTick((t) => t + 1)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const cityHotels = cityHotelsData[params.city as keyof typeof cityHotelsData]

  if (!cityHotels) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Şehir Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız şehir veritabanımızda bulunmuyor.</p>
          <Link href="/tr/hotels" className="btn-primary">
            Otellere Geri Dön
          </Link>
        </div>
      </div>
    )
  }

  const cityNames = {
    istanbul: 'İstanbul',
    trabzon: 'Trabzon',
    antalya: 'Antalya',
    bursa: 'Bursa'
  }

  const cityName = cityNames[params.city as keyof typeof cityNames] || params.city

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{cityName} Otelleri</h1>
            <p className="text-xl opacity-90">{cityName}deki en iyi otelleri keşfedin</p>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Türkiye'nin En İyi Destinasyonlarını Keşfedin</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin en büyüleyici şehirlerinin güzelliğini ve kültürünü keşfedin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination) => (
              <DestinationCard key={destination.name} destination={destination} tick={destinationsTick} />
            ))}
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{cityName}deki Lüks Oteller</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {cityName}deki en iyi konaklama seçeneklerini özenle seçilmiş lüks otellerimizle deneyimleyin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cityHotels.map((hotel) => (
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {cityName}deki Konaklamanızı Rezerve Etmeye Hazır mısınız?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Uzman seyahat danışmanlarımızın {cityName} geziniz için mükemmel oteli bulmasına izin verin
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