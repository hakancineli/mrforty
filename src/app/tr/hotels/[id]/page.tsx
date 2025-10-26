import { MapPin, Star, Calendar, Users, Wifi, Car, Coffee, Dumbbell, Check, Phone, Mail, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// Hotel data - in a real app, this would come from an API or database
const hotelsData = {
  1: {
    id: 1,
    name: 'The Ritz-Carlton İstanbul',
    location: 'İstanbul, Türkiye',
    rating: 4.8,
    reviews: 324,
    price: 450,
    image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
    gallery: [
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
      '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg'
    ],
    amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant', 'bar', 'pool', 'concierge', 'room-service'],
    description: 'İstanbulun kalbinde Boğaz manzaralı lüks otel',
    fullDescription: 'İstanbulun canlı kalbinde yer alan The Ritz-Carlton İstanbul, zamansız zarafetin modern sofistikasyonla birleştiği sunan rafine lüks bir sığınağıdır. Otelimiz, dünyanın en büyüleyici şehirlerinden birinde konuklar için unutulmaz bir deneyim sağlamak üzere zamansız zarafeti çağdaş konforla birleştirir. İstanbulun büyüsünü sudan deneyimlemek için lüks Boğaz turumuzdan panoramik şehir manzaralı çatı terasımıza kadar, dünya standartlarındaki spamız ve yemek mekanlarımızdan her aspectini beklentileri aşmak üzere tasarlanmıştır.',
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
    roomTypes: [
      {
        name: 'Deluxe Oda',
        size: '45 m²',
        maxGuests: 2,
        price: 450,
        features: ['King yatak', 'Şehir manzarası', 'Mermer banyo', 'Çalışma masası']
      },
      {
        name: 'Club Oda',
        size: '55 m²',
        maxGuests: 3,
        price: 580,
        features: ['King yatak', 'Boğaz manzarası', 'Club lounge erişimi', 'Mermer banyo']
      },
      {
        name: 'Executive Suit',
        size: '85 m²',
        maxGuests: 4,
        price: 850,
        features: ['Ayrı oturma alanı', 'Boğaz manzarası', 'Club lounge erişimi', 'Misafir banyosu']
      },
      {
        name: 'Presidential Suit',
        size: '180 m²',
        maxGuests: 6,
        price: 2500,
        features: ['İki yatak odası', 'Tam mutfak', 'Boğaz manzarası', 'Özel teras', 'Butler hizmeti']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Sıraselviler Cad. No:58, 34367 Beşiktaş, İstanbul, Türkiye'
    }
  },
  2: {
    id: 2,
    name: 'Swissotel The Bosphorus',
    location: 'İstanbul, Türkiye',
    rating: 4.7,
    reviews: 256,
    price: 380,
    image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
    gallery: [
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
      '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
    description: 'Boğaz manzaralı, dünya standartlarında olanaklara sahip şık otel',
    fullDescription: 'Swissotel The Bosphorus, İstanbul, Boğaz Boğazı\'na bakan zarif konaklama ve dünya standartlarında olanaklar sunan zarif bir oteldir. Otelimiz, modern odalar, istisneli yemek seçenekleri ve konforunuzu sağlamak için tasarlanmış bir dizi olanak sunmaktadır.',
    features: [
      'Boğaz Boğazı manzarası',
      'Modern odalar ve premium olanaklar',
      'Birden fazla restoran ve bar',
      'Kapalı yüzme havuzu',
      'Tam hizmetli spa',
      'Fitness merkezi'
    ],
    roomTypes: [
      {
        name: 'Standart Oda',
        size: '35 m²',
        maxGuests: 2,
        price: 380,
        features: ['Queen yatak', 'Şehir manzarası', 'Mermer banyo']
      },
      {
        name: 'Deluxe Oda',
        size: '45 m²',
        maxGuests: 2,
        price: 450,
        features: ['King yatak', 'Boğaz manzarası', 'Mermer banyo', 'Çalışma masası']
      },
      {
        name: 'Junior Suit',
        size: '65 m²',
        maxGuests: 3,
        price: 580,
        features: ['King yatak', 'Boğaz manzarası', 'Ayrı oturma alanı', 'Mermer banyo']
      },
      {
        name: 'Executive Suit',
        size: '85 m²',
        maxGuests: 4,
        price: 850,
        features: ['King yatak', 'Boğaz manzarası', 'Ayrı oturma alanı', 'Misafir banyosu']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Bayıldım Cad. No:2, 34357 Beşiktaş, İstanbul, Türkiye'
    }
  },
  3: {
    id: 3,
    name: 'Kapadokya Mağara Oteli',
    location: 'Kapadokya, Türkiye',
    rating: 4.9,
    reviews: 412,
    price: 280,
    image: '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-1.jpeg',
    gallery: [
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-1.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-2.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-3.jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-4 .jpeg',
      '/hotels/Kapadokya Cave Resort /Kapadokya Cave Resort-5 .jpeg'
    ],
    amenities: ['wifi', 'spa', 'restaurant', 'tour-desk'],
    description: 'Kapadokyanın kalbinde eşsiz mağara otel deneyimi.',
    fullDescription: 'Kapadokyanın büyülü mağaralarında lüks bir konaklama deneyimi yaşayın. Mağara resortumuz, mağara yaşamının benzersiz cazibesini çağdaş konforla birleştirerek konuklar için unutulmaz bir deneyim sunar. Her oda, bu büyüleyici bölgede unutulmaz bir konaklama sağlamak için dikkatle tasarlanmıştır.',
    features: [
      'Modern olanaklarla otantik mağara odaları',
      'Peri bacaklarından büyüleyici manzaralar',
      'Geleneksel Türk mutfağı restoran',
      'Tam hizmetli spa',
      'Aktiviteler düzenlemek için tur masası',
      'Resort genelinde ücretsiz WiFi'
    ],
    roomTypes: [
      {
        name: 'Mağara Suit',
        size: '40 m²',
        maxGuests: 2,
        price: 280,
        features: ['Queen yatak', 'Peri bacası manzarası', 'Taş banyo', 'Geleneksel dekorasyon']
      },
      {
        name: 'Deluxe Mağara Suit',
        size: '55 m²',
        maxGuests: 3,
        price: 350,
        features: ['King yatak', 'Peri bacası manzarası', 'Taş banyo', 'Geleneksel dekorasyon', 'Ayrı oturma alanı']
      },
      {
        name: 'Aile Mağara Suit',
        size: '75 m²',
        maxGuests: 4,
        price: 450,
        features: ['King yatak', 'Queen yatak', 'Peri bacası manzarası', 'Taş banyo', 'Geleneksel dekorasyon', 'Ayrı oturma alanı']
      },
      {
        name: 'Premium Mağara Suit',
        size: '90 m²',
        maxGuests: 4,
        price: 550,
        features: ['King yatak', 'Queen yatak', 'Peri bacası manzarası', 'Taş banyo', 'Geleneksel dekorasyon', 'Ayrı oturma alanı', 'Jakuzi']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Göreme Milli Parkı, 50180 Göreme, Nevşehir, Türkiye'
    }
  },
  4: {
    id: 4,
    name: 'Titanic Mardan Palace',
    location: 'Antalya, Türkiye',
    rating: 4.8,
    reviews: 523,
    price: 320,
    image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
    gallery: [
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
      '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'Akdeniz kıyısında dünya standartlarında olanaklara sahip lüks saray tarzı resort.',
    fullDescription: 'Titanic Mardan Palace, Antalya\'nın nefes kesen Akdeniz kıyısında yer alan muhteşem bir saray tarzı resortudur. Türkiye\'nin en lüks oteli olarak, Osmanlı ilham mimarisi, geniş havuzları, özel plajı ve dünya standartlarındaki yemek olanaklarıyla eşsiz bir deneyim sunar. Resort, lüks odalar ve suitler, tam hizmetli spa, su kaydırakları dahil olmak üzere çok sayıda yüzme havuzu ve tüm beklentileri aşan istisnai hizmet sunar.',
    features: [
      'Osmanlı ilham mimarisiyle saray tarzı tasarım',
      'Berrak Akdeniz sularıyla özel plaj',
      'Su kaydırakları dahil çok sayıda yüzme havuzu',
      'Dünya standartlarında spa ve wellness merkezi',
      'Uluslararası mutfakta fine dining restoranlar',
      'Çocuk kulübü ve aile dostu aktiviteler',
      'Son teknoloji fitness merkezi',
      'Akşam eğlenceleri ve gösteriler'
    ],
    roomTypes: [
      {
        name: 'Standart Oda',
        size: '45 m²',
        maxGuests: 2,
        price: 320,
        features: ['King yatak', 'Bahçe manzarası', 'Mermer banyo', 'Balkon']
      },
      {
        name: 'Deluxe Oda',
        size: '55 m²',
        maxGuests: 3,
        price: 420,
        features: ['King yatak', 'Deniz manzarası', 'Mermer banyo', 'Balkon', 'Oturma alanı']
      },
      {
        name: 'Aile Odası',
        size: '75 m²',
        maxGuests: 4,
        price: 580,
        features: ['King yatak', 'Queen yatak', 'Deniz manzarası', 'Mermer banyo', 'Balkon', 'Ayrı oturma alanı']
      },
      {
        name: 'Royal Suite',
        size: '120 m²',
        maxGuests: 6,
        price: 1200,
        features: ['King yatak', 'Queen yatak', 'Deniz manzarası', 'Mermer banyo', 'Balkon', 'Ayrı oturma alanı', 'Özel havuz erişimi']
      }
    ],
    contact: {
      phone: '+90 532 123 4567',
      email: 'info@fortytravel.com',
      address: 'Kemer, 07980 Antalya, Türkiye'
    }
  },
  5: {
    id: 5,
    name: 'The Land of Legends',
    location: 'Bodrum, Türkiye',
    rating: 4.8,
    reviews: 167,
    price: 350,
    image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
    gallery: [
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-3.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-4.jpeg',
      '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-5.jpeg'
    ],
    amenities: ['wifi', 'parking', 'pool', 'spa', 'gym', 'restaurant', 'bar', 'beach', 'kids-club'],
    description: 'Muhteşem Akdeniz manzarasına sahip özel sahil tesisi',
    fullDescription: 'The Land of Legends Kingdom, muhteşem Akdeniz manzarasına sahip özel bir sahil tesisidir. Bu lüks destinasyon, dünya standartlarındaki olanakları olağanüstü hizmetle birleştirerek unutulmaz bir deneyim sunar. Berrak plajlardan gourmet yemeklere ve heyecan verici eğlence seçeneklerine kadar, konaklamanızın her aspecti beklentileri aşmak ve kalıcı anılar yaratmak için tasarlanmıştır.',
    features: [
      'Akdeniz manzaralı özel sahil konumu',
      'Su kaydırakları dahil olmak üzere çok sayıda yüzme havuzu',
      'Dünya standartlarında spa ve wellness olanakları',
      'Uluslararası mutfakta gourmet restoranlar',
      'Son teknoloji fitness merkezi',
      'Gözetimli aktivitelerle çocuk kulübü',
      'Akşam eğlenceleri ve gösteriler',
      'Premium olanaklarla özel plaj erişimi'
    ],
    roomTypes: [
      {
        name: 'Standart Oda',
        size: '35 m²',
        maxGuests: 2,
        price: 350,
        features: ['King yatak', 'Bahçe manzarası', 'Mermer banyo', 'Balkon']
      },
      {
        name: 'Deluxe Oda',
        size: '45 m²',
        maxGuests: 3,
        price: 450,
        features: ['King yatak', 'Deniz manzarası', 'Mermer banyo', 'Balkon', 'Oturma alanı']
      },
      {
        name: 'Aile Suit',
        size: '65 m²',
        maxGuests: 4,
        price: 580,
        features: ['King yatak', 'Queen yatak', 'Deniz manzarası', 'Mermer banyo', 'Balkon', 'Ayrı oturma alanı']
      },
      {
        name: 'Royal Suit',
        size: '90 m²',
        maxGuests: 6,
        price: 850,
        features: ['King yatak', 'Queen yatak', 'Deniz manzarası', 'Mermer banyo', 'Balkon', 'Ayrı oturma alanı', 'Özel havuz erişimi']
      }
    ],
    contact: {
      phone: '+90 506 641 17 85',
      email: 'info@fortytravel.com',
      address: 'Gümüşlük, Bodrum, Muğla, Türkiye'
    }
  }
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
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = hotelsData[params.id as unknown as keyof typeof hotelsData]

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Otel Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız otel mevcut değil.</p>
          <Link href="/tr/hotels" className="btn-primary">
            Otellere Geri Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gallery */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="relative h-full">
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{hotel.name}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{hotel.rating}</span>
                <span className="text-gray-300">({hotel.reviews}) değerlendirme</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Information */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold mb-6">{hotel.name} Hakkında</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {hotel.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Otel Özellikleri</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Types */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Oda Tipleri & Fiyatları</h3>
                <div className="space-y-6">
                  {hotel.roomTypes.map((room, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-1">{room.name}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                            <span>{room.size}</span>
                            <span>•</span>
                            <span>Max {room.maxGuests} misafir</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600">€{room.price}</div>
                          <div className="text-sm text-gray-600">gecelik</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {room.features.map((feature, idx) => (
                          <span key={idx} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <button className="btn-primary w-full md:w-auto">
                        Şimdi Rezervasyon Yap
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Galeri</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {hotel.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${hotel.name} - Görsel ${index + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary-600">€{hotel.price}</div>
                  <div className="text-gray-600">gecelik</div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Giriş Tarihi
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Giriş Tarihi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Çıkış Tarihi
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      title="Çıkış Tarihi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Misafir Sayısı
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" title="Misafir Sayısı">
                      <option>1 Misafir</option>
                      <option>2 Misafir</option>
                      <option>3 Misafir</option>
                      <option>4+ Misafir</option>
                    </select>
                  </div>
                </div>
                
                <button className="w-full btn-primary mb-3">
                  Müsaitliği Kontrol Et
                </button>
                <button className="w-full btn-secondary">
                    Otel ile İletişime Geç
                </button>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Olanaklar</h3>
                <div className="space-y-3">
                  {hotel.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {amenities[amenity as keyof typeof amenities] && (
                        <>
                          {React.createElement(amenities[amenity as keyof typeof amenities].icon, { className: "w-5 h-5 text-primary-600" })}
                          <span className="text-gray-700">{amenities[amenity as keyof typeof amenities].label}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700">{hotel.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-700 text-sm">{hotel.contact.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <span className="text-gray-700 text-sm">{hotel.contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Hotels */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Benzer Oteller</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Similar hotels would be displayed here */}
            <div className="text-center text-gray-500 col-span-full">
              Benzer oteller yakında...
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}