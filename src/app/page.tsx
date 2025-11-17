'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, Calendar, Users, Star, ChevronRight, Plane, Hotel, Car, Camera, Clock, Home, ChevronLeft, ChevronRight as ChevronRightIcon, Key, Building } from 'lucide-react'

// Service Card Component
const ServiceCard = ({ service }: { service: { icon: any; title: string; description: string; link: string } }) => {
  return (
    <div className="card group cursor-pointer">
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
  )
}

// Destination Card with slideshow controlled by shared tick
const DestinationCard = ({ destination, tick }: { destination: { name: string; image: string; gallery?: string[]; tours: number; rating: number }, tick: number }) => {
  const [offset, setOffset] = useState(0) // advances locally on image error and on mobile auto-rotate
  const images = destination.gallery && destination.gallery.length > 0 ? destination.gallery : [destination.image]
  const idx = images.length > 0 ? ((tick + offset) % images.length) : 0

  const handleError = () => {
    if (images.length > 1) {
      setOffset((v) => (v + 1) % images.length)
    }
  }

  // Mobile-only auto-rotation to ensure slideshow on small screens (keeps desktop in sync via shared tick)
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
    <Link href={`/hotels/city/${destination.name.toLowerCase()}`} className="card group cursor-pointer">
      <div className="relative h-[28rem] overflow-hidden">
        <Image
          key={images[idx]}
          src={images[idx]}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={handleError}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{destination.rating}</span>
            </div>
            <span>{destination.tours} Hotels</span>
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

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [destinationsTick, setDestinationsTick] = useState(0)
  
  // Get current language
  const getCurrentLanguage = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      if (path.startsWith('/tr/')) return 'tr'
      if (path.startsWith('/ar/')) return 'ar'
      return 'en'
    }
    return 'en'
  }
  
  const currentLang = getCurrentLanguage()
  
  const services = [
    {
      icon: Hotel,
      title: 'Luxury Hotels',
      titleTr: 'Lüks Oteller',
      titleAr: 'الفنادق الفاخرة',
      description: 'Hand-picked premium hotels and resorts in Turkey\'s most beautiful locations',
      descriptionTr: 'Türkiye\'nin en güzel lokasyonlarında özenle seçilmiş premium oteller ve tatil köyleri',
      descriptionAr: 'أفضل الفنادق والمنتجعات المختارة في أجمل المواقع في تركيا',
      link: '/hotels'
    },
    {
      icon: Plane,
      title: 'Exclusive Tours',
      titleTr: 'Özel Turlar',
      titleAr: 'جولات حصرية',
      description: 'Private guided tours and unique experiences tailored to your preferences',
      descriptionTr: 'Tercihlerinize göre özel rehberli turlar ve benzersiz deneyimler',
      descriptionAr: 'جولات خاصة موجهة وتجارب فريدة حسب تفضيلاتك',
      link: '/tours'
    },
    {
      icon: Car,
      title: 'VIP Transfers',
      titleTr: 'VIP Transferler',
      titleAr: 'نقل VIP',
      description: 'Premium transportation services with professional drivers',
      descriptionTr: 'Profesyonel sürücülerle birinci sınıf ulaşım hizmetleri',
      descriptionAr: 'خدمات نقل فاخصة مع سائقين محترفين',
      link: '/transfers'
    },
    {
      icon: Camera,
      title: 'Experiences',
      titleTr: 'Deneyimler',
      titleAr: 'تجارب',
      description: 'Unique activities and adventures in every destination',
      descriptionTr: 'Her destinasyonda benzersiz aktiviteler ve maceralar',
      descriptionAr: 'أنشطة ومغامرات فريدة في كل وجهة',
      link: '/experiences'
    },
    {
      icon: Plane,
      title: 'Flights',
      titleTr: 'Uçuşlar',
      titleAr: 'رحلات الطيران',
      description: 'Book domestic and international flights with best prices and schedules',
      descriptionTr: 'En iyi fiyat ve tarifelerle yurt içi ve yurt dışı uçuş rezervasyonu yapın',
      descriptionAr: 'احجز رحلات داخلية ودولية بأفضل الأسعار والجداول الزمنية',
      link: '/flights'
    },
    {
      icon: Key,
      title: 'Rent A Car',
      titleTr: 'Araç Kiralama',
      titleAr: 'تأجرة السيارات',
      description: 'Premium car rental fleet including luxury vehicles for your comfort',
      descriptionTr: 'Konforunuz için lüks araçlar da dahil olmak üzere premium araç kiralama filosu',
      descriptionAr: 'أسطول سيارات فاخرة تشمل مركبات فاخرة لراحتك',
      link: '/rent-a-car'
    },
    {
      icon: Building,
      title: 'Real Estate',
      titleTr: 'Emlak',
      titleAr: 'العقارات',
      description: 'Premium properties for rent and sale with citizenship investment programs',
      descriptionTr: 'Vatandaşlık yatırım programları ile kiralık ve satılık premium mülkler',
      descriptionAr: 'عقارات مميزة للإيجار والبيع مع برامج استثمار المواطنة',
      link: '/real-estate'
    }
  ]

  // Auto-advance slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))
    }, 5000)
    
    return () => clearInterval(interval)
  }, [services.length])

  // Sync all destination cards every 3.5s
  useEffect(() => {
    const t = setInterval(() => setDestinationsTick((v) => v + 1), 3500)
    return () => clearInterval(t)
  }, [])
  const hotels = [
    {
      id: 1,
      name: 'The Ritz-Carlton Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.8,
      reviews: 324,
      price: 450,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
      description: 'Luxury hotel in heart of Istanbul with stunning Bosphorus views'
    },
    {
      id: 2,
      name: 'Swissotel The Bosphorus',
      location: 'Istanbul, Turkey',
      rating: 4.7,
      reviews: 256,
      price: 380,
      image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
      description: 'Elegant hotel overlooking Bosphorus with world-class amenities'
    },
    {
      id: 3,
      name: 'Cappadocia Cave Resort',
      location: 'Cappadocia, Turkey',
      rating: 4.9,
      reviews: 412,
      price: 280,
      image: '/hotels/Kapadokya Cave Resort/Kapadokya Cave Resort-1.jpeg',
      amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
      description: 'Unique cave hotel experience in the heart of Cappadocia'
    },
    {
      id: 4,
      name: 'Mardan Palace',
      location: 'Antalya, Turkey',
      rating: 4.7,
      reviews: 298,
      price: 350,
      image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
      description: 'Luxury resort on Mediterranean coast with private beach'
    },
    {
      id: 5,
      name: 'The Land of Legends',
      location: 'Bodrum, Turkey',
      rating: 4.8,
      reviews: 167,
      price: 420,
      image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      amenities: ['wifi', 'pool', 'spa', 'beach-club', 'water-sports'],
      description: 'Exclusive beachfront resort with stunning Mediterranean Sea views'
    },
    {
      id: 6,
      name: 'Museum Hotel Istanbul',
      location: 'Istanbul, Turkey',
      rating: 4.6,
      reviews: 189,
      price: 320,
      image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
      description: 'Boutique hotel in historic Sultanahmet district'
    }
  ]

  const tours = [
    {
      id: 1,
      title: 'Istanbul Bosphorus Cruise',
      location: 'Istanbul',
      duration: '3 hours',
      price: 89,
      rating: 4.8,
      reviews: 156,
      image: '/images/destinations/istanbul.jpg',
      category: 'cruise',
      difficulty: 'easy',
      groupSize: '2-20',
      highlights: ['Bosphorus Bridge', 'Dolmabahçe Palace', 'Ortaköy Mosque'],
      description: 'Experience the magic of Istanbul from the water with our luxury Bosphorus cruise including dinner and entertainment.'
    },
    {
      id: 2,
      title: 'Cappadocia Hot Air Balloon',
      location: 'Cappadocia',
      duration: '1 day',
      price: 150,
      rating: 4.9,
      reviews: 289,
      image: '/images/destinations/cappadocia.jpg',
      category: 'adventure',
      difficulty: 'moderate',
      groupSize: '4-16',
      highlights: ['Sunrise Flight', 'Fairy Chimneys', 'Underground Cities'],
      description: 'Float above the magical landscapes of Cappadocia in our hot air balloon at sunrise.'
    },
    {
      id: 3,
      title: 'Ephesus Ancient City Tour',
      location: 'Izmir',
      duration: 'Full day',
      price: 75,
      rating: 4.7,
      reviews: 198,
      image: '/tours/Cappadocia Hot Air Balloon/Ephesus Ancient City Tour/Ephesus Ancient City Tour.jpeg',
      category: 'cultural',
      difficulty: 'easy',
      groupSize: '2-15',
      highlights: ['Library of Celsus', 'Great Theatre', 'Temple of Artemis'],
      description: 'Discover the ancient wonders of Ephesus with expert guides and skip-the-line tickets.'
    },
    {
      id: 4,
      title: 'Pamukkale Thermal Pools',
      location: 'Pamukkale',
      duration: 'Full day',
      price: 95,
      rating: 4.8,
      reviews: 234,
      image: '/images/destinations/pamukkale.jpg',
      category: 'nature',
      difficulty: 'easy',
      groupSize: '2-25',
      highlights: ['Travertine Terraces', 'Hierapolis', 'Cleopatra Pool'],
      description: 'Relax in the healing thermal waters of Pamukkale and explore ancient Hierapolis.'
    },
    {
      id: 5,
      title: 'Blue Voyage Gulet Cruise',
      location: 'Bodrum',
      duration: '3 days',
      price: 450,
      rating: 4.9,
      reviews: 167,
      image: '/tours/Mavi Yolculuk Gulet Turu/Mavi Yolculuk Gulet Turu.jpeg',
      category: 'cruise',
      difficulty: 'easy',
      groupSize: '2-12',
      highlights: ['Private Gulet', 'Swimming Bays', 'Turkish Cuisine'],
      description: 'Sail the turquoise waters of the Aegean Sea on our traditional wooden gulet.'
    },
    {
      id: 6,
      title: 'Sapanca Maşukiye Tour',
      location: 'Sapanca',
      duration: 'Full day',
      price: 180,
      rating: 4.8,
      reviews: 125,
      image: '/tours/Sapanca Masukiye/Sapanca Masukiye.jpeg',
      category: 'nature',
      difficulty: 'easy',
      groupSize: '2-15',
      highlights: ['Sapanca Lake', 'Maşukiye Forest', 'Nature Views'],
      description: 'Enjoy a day in Sapanca Maşukiye with our guided tour.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Travel Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Türkiye'yi Keşfedin
            <span className="text-primary-400"></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Türkiye'nin en güzel destinasyonlarında lüks seyahat, premium oteller ve özel turlar deneyimleyin
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
                  title="Destination"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  title="Kalkış Tarihi"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  title="Guests"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
                >
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
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
          
          {/* Services Carousel - Infinite loop with first 4 visible */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 256}px)` }}
              >
                {/* Clone services for infinite loop effect */}
                {[...services, ...services].map((service, index) => (
                  <div key={`${service.title}-${index}`} className="flex-shrink-0 w-64">
                    <div className="card group cursor-pointer h-full">
                      <div className="p-6">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                          <service.icon className="w-8 h-8 text-primary-600" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">
                          {currentLang === 'tr' ? service.titleTr : currentLang === 'ar' ? service.titleAr : service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {currentLang === 'tr' ? service.descriptionTr : currentLang === 'ar' ? service.descriptionAr : service.description}
                        </p>
                        <Link
                          href={service.link}
                          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                        >
                          {currentLang === 'tr' ? 'Keşfet' : currentLang === 'ar' ? 'اكتشف' : 'Explore'}
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1))}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1))}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Istanbul',
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
            ].map((destination, index) => (
              <DestinationCard key={index} destination={destination as any} tick={destinationsTick} />
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
              Türkiye'nin en seçkin otellerinde unutulmaz konaklama deneyimleri
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
                    <span className="text-xs text-gray-600">/night</span>
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
                      2-4 Guests
                    </div>
                    <Link 
                      href={`/hotels/${hotel.id}`}
                      className="btn-primary text-sm px-4 py-2"
                    >
                      View Details
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
              Uzman rehberlerimizle antik şehirlerden doğal harikalarına kadar Türkiye'yi keşfedin
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
                      href={`/tours/${tour.id}`}
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