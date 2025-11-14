import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Wifi, Car, Coffee, Dumbbell, ChevronRight } from 'lucide-react'

interface Hotel {
  id: number
  name: string
  location: string
  rating: number
  reviews: number
  price: number
  image: string
  amenities: string[]
  description: string
}

interface PageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  return {
    title: `${cityName} Otelleri - 5 Yıldızlı Lüks Oteller | MrForty Travel`,
    description: `${cityName}'deki en iyi 5 yıldızlı otelleri keşfedin. Lüks konaklama, harika konum ve üstün hizmet.`,
  }
}

export default function CityHotelsPage({ params }: PageProps) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  
  const hotelsData: Record<string, Hotel[]> = {
    istanbul: [
      {
        id: 1,
        name: 'The Ritz-Carlton İstanbul',
        location: 'İstanbul, Türkiye',
        rating: 4.8,
        reviews: 324,
        price: 8500,
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
        price: 7200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
        description: 'Boğaz manzaralı, dünya standartlarında olanaklara sahip şık otel'
      },
      {
        id: 3,
        name: 'CVK Park Bosphorus Hotel',
        location: 'İstanbul, Türkiye',
        rating: 4.6,
        reviews: 189,
        price: 6800,
        image: '/hotels/CVK Park Bosphorus Hotel Istanbul/CVK Park Bosphorus Hotel Istanbul-1.jpeg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar', 'meeting-rooms'],
        description: 'Taksim\'de lüks ve konforun buluştuğu modern otel'
      },
      {
        id: 4,
        name: 'Mövenpick Hotel İstanbul',
        location: 'İstanbul, Türkiye',
        rating: 4.5,
        reviews: 167,
        price: 5500,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'Havalimanına yakın, modern ve konforlu otel'
      },
      {
        id: 5,
        name: 'Grand Hyatt İstanbul',
        location: 'İstanbul, Türkiye',
        rating: 4.7,
        reviews: 298,
        price: 7500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'Maçka\'da lüks ve konforun buluştuğu prestijli otel'
      },
      {
        id: 6,
        name: 'Conrad İstanbul',
        location: 'İstanbul, Türkiye',
        rating: 4.6,
        reviews: 234,
        price: 6200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'Beşiktaş\'ta Boğaz manzaralı lüks otel'
      },
      {
        id: 7,
        name: 'İstanbul Marriott Hotel',
        location: 'İstanbul, Türkiye',
        rating: 4.5,
        reviews: 198,
        price: 5800,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'Şişli\'de modern ve konforlu otel'
      },
      {
        id: 8,
        name: 'W İstanbul',
        location: 'İstanbul, Türkiye',
        rating: 4.7,
        reviews: 267,
        price: 8000,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'Karaköy\'de modern ve şık tasarım oteli'
      },
      {
        id: 9,
        name: 'Four Seasons İstanbul',
        location: 'İstanbul, Türkiye',
        rating: 4.9,
        reviews: 412,
        price: 9200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar', 'gym'],
        description: 'Sultanahmet\'te tarihi dokuda lüks otel'
      },
      {
        id: 10,
        name: 'Çırağan Palace Kempinski',
        location: 'İstanbul, Türkiye',
        rating: 4.8,
        reviews: 378,
        price: 12000,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-6.jpeg',
        amenities: ['wifi', 'spa', 'pool', 'restaurant', 'bar'],
        description: 'Boğaz kıyısında tarihi saray oteli'
      }
    ],
    trabzon: [
      {
        id: 1,
        name: 'Zorlu Grand Hotel Trabzon',
        location: 'Trabzon, Türkiye',
        rating: 4.7,
        reviews: 234,
        price: 4200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
        description: 'Trabzon merkezinde lüks ve konforlu otel'
      },
      {
        id: 2,
        name: 'Novotel Trabzon',
        location: 'Trabzon, Türkiye',
        rating: 4.5,
        reviews: 189,
        price: 3500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'Denize yakın modern otel'
      },
      {
        id: 3,
        name: 'Hilton Trabzon',
        location: 'Trabzon, Türkiye',
        rating: 4.6,
        reviews: 267,
        price: 4800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'Deniz manzaralı lüks otel'
      },
      {
        id: 4,
        name: 'Grand Tarabya Hotel',
        location: 'Trabzon, Türkiye',
        rating: 4.4,
        reviews: 156,
        price: 3200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
        description: 'Şehir merkezinde konforlu otel'
      },
      {
        id: 5,
        name: 'Marriott Hotel Trabzon',
        location: 'Trabzon, Türkiye',
        rating: 4.5,
        reviews: 198,
        price: 4500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'pool'],
        description: 'Deniz manzaralı modern otel'
      },
      {
        id: 6,
        name: 'Rixos Trabzon',
        location: 'Trabzon, Türkiye',
        rating: 4.7,
        reviews: 289,
        price: 5200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg',
        amenities: ['wifi', 'spa', 'pool', 'restaurant', 'bar'],
        description: 'Deniz kenarında lüks resort'
      },
      {
        id: 7,
        name: 'Wyndham Trabzon',
        location: 'Trabzon, Türkiye',
        rating: 4.3,
        reviews: 145,
        price: 2800,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-6.jpeg',
        amenities: ['wifi', 'restaurant', 'gym', 'parking'],
        description: 'Şehir merkezinde ekonomik otel'
      },
      {
        id: 8,
        name: 'Hampton by Hilton Trabzon',
        location: 'Trabzon, Türkiye',
        rating: 4.4,
        reviews: 167,
        price: 3000,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        amenities: ['wifi', 'gym', 'restaurant', 'parking'],
        description: 'Modern ve konforlu otel'
      },
      {
        id: 9,
        name: 'Trabzon Park Hotel',
        location: 'Trabzon, Türkiye',
        rating: 4.2,
        reviews: 134,
        price: 2500,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        amenities: ['wifi', 'restaurant', 'parking'],
        description: 'Şehir merkezinde uygun fiyatlı otel'
      },
      {
        id: 10,
        name: 'Yazıcı Hotel',
        location: 'Trabzon, Türkiye',
        rating: 4.6,
        reviews: 223,
        price: 3800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar'],
        description: 'Deniz manzaralı butik otel'
      }
    ],
    antalya: [
      {
        id: 1,
        name: 'Mardan Palace',
        location: 'Antalya, Türkiye',
        rating: 4.7,
        reviews: 298,
        price: 6500,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
        description: 'Özel plajlı Akdeniz kıyısındaki lüks resort'
      },
      {
        id: 2,
        name: 'Regnum Carya',
        location: 'Antalya, Türkiye',
        rating: 4.6,
        reviews: 267,
        price: 5800,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-club', 'golf'],
        description: 'Golf sahasına sahip lüks resort'
      },
      {
        id: 3,
        name: 'Maxx Royal Belek',
        location: 'Antalya, Türkiye',
        rating: 4.8,
        reviews: 389,
        price: 7200,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
        description: 'Ultra lüks beach resort'
      },
      {
        id: 4,
        name: 'Susesi Luxury Resort',
        location: 'Antalya, Türkiye',
        rating: 4.5,
        reviews: 234,
        price: 5200,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-club'],
        description: 'Deniz kenarında lüks resort'
      },
      {
        id: 5,
        name: 'Calista Luxury Resort',
        location: 'Antalya, Türkiye',
        rating: 4.6,
        reviews: 278,
        price: 6000,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access'],
        description: 'Ultra her şey dahil lüks resort'
      },
      {
        id: 6,
        name: 'Kaya Palazzo',
        location: 'Antalya, Türkiye',
        rating: 4.7,
        reviews: 312,
        price: 5500,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'pool', 'spa', 'golf', 'restaurant'],
        description: 'Golf sahasına sahip modern resort'
      },
      {
        id: 7,
        name: 'Rixos Premium Belek',
        location: 'Antalya, Türkiye',
        rating: 4.8,
        reviews: 356,
        price: 6800,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-club', 'golf'],
        description: 'Ultra lüks her şey dahil resort'
      },
      {
        id: 8,
        name: 'Cornelia Diamond Golf Resort',
        location: 'Antalya, Türkiye',
        rating: 4.6,
        reviews: 289,
        price: 6200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'pool', 'spa', 'golf', 'beach-access'],
        description: 'Golf sahasına sahip lüks resort'
      },
      {
        id: 9,
        name: 'Land of Legends Kingdom',
        location: 'Antalya, Türkiye',
        rating: 4.8,
        reviews: 423,
        price: 7500,
        image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'water-park', 'beach-club'],
        description: 'Theme parklı lüks resort'
      },
      {
        id: 10,
        name: 'Sirene Belek',
        location: 'Antalya, Türkiye',
        rating: 4.5,
        reviews: 267,
        price: 4800,
        image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
        description: 'Deniz kenarında butik resort'
      }
    ],
    bursa: [
      {
        id: 1,
        name: 'Hilton Bursa Convention Center',
        location: 'Bursa, Türkiye',
        rating: 4.6,
        reviews: 234,
        price: 3800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'meeting-rooms'],
        description: 'Şehir merkezinde modern otel'
      },
      {
        id: 2,
        name: 'Crowne Plaza Bursa',
        location: 'Bursa, Türkiye',
        rating: 4.5,
        reviews: 198,
        price: 3200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'Modern ve konforlu otel'
      },
      {
        id: 3,
        name: 'Almira Hotel',
        location: 'Bursa, Türkiye',
        rating: 4.4,
        reviews: 167,
        price: 2800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar'],
        description: 'Şehir merkezinde butik otel'
      },
      {
        id: 4,
        name: 'Karinna Hotel',
        location: 'Bursa, Türkiye',
        rating: 4.3,
        reviews: 145,
        price: 2500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        amenities: ['wifi', 'restaurant', 'spa'],
        description: 'Modern ve şık otel'
      },
      {
        id: 5,
        name: 'Grand Yazar Hotel',
        location: 'Bursa, Türkiye',
        rating: 4.4,
        reviews: 178,
        price: 3000,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
        description: 'İş merkezine yakın otel'
      },
      {
        id: 6,
        name: 'WOW Bursa',
        location: 'Bursa, Türkiye',
        rating: 4.5,
        reviews: 189,
        price: 3500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'pool'],
        description: 'Modern tasarım oteli'
      },
      {
        id: 7,
        name: 'Gönlüferah Thermal Hotel',
        location: 'Bursa, Türkiye',
        rating: 4.3,
        reviews: 156,
        price: 2700,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-6.jpeg',
        amenities: ['wifi', 'thermal-pool', 'spa', 'restaurant'],
        description: 'Termal kaynaklı otel'
      },
      {
        id: 8,
        name: 'Kervansaray Thermal Hotel',
        location: 'Bursa, Türkiye',
        rating: 4.6,
        reviews: 223,
        price: 4200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        amenities: ['wifi', 'thermal-pool', 'spa', 'gym', 'restaurant'],
        description: 'Lüks termal otel'
      },
      {
        id: 9,
        name: 'Çelik Palas',
        location: 'Bursa, Türkiye',
        rating: 4.2,
        reviews: 134,
        price: 2200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        amenities: ['wifi', 'restaurant', 'bar'],
        description: 'Tarihi otel'
      },
      {
        id: 10,
        name: 'Bursa Holiday Inn',
        location: 'Bursa, Türkiye',
        rating: 4.3,
        reviews: 167,
        price: 2600,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg',
        amenities: ['wifi', 'gym', 'restaurant', 'parking'],
        description: 'Uluslararası zincir otel'
      }
    ]
  }

  const hotels = hotelsData[params.city.toLowerCase()] || []

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />
      case 'parking':
        return <Car className="w-4 h-4" />
      case 'restaurant':
      case 'bar':
        return <Coffee className="w-4 h-4" />
      case 'gym':
        return <Dumbbell className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  if (hotels.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {cityName} için otel bulunamadı
          </h1>
          <p className="text-gray-600 mb-8">
            Bu şehirde henüz otel listemiz bulunmamaktadır.
          </p>
          <Link 
            href="/tr"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">
              {cityName} Otelleri
            </h1>
            <p className="text-xl opacity-90">
              {cityName}'deki en iyi 5 yıldızlı lüks oteller
            </p>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600">
              <span className="font-semibold">{hotels.length}</span> otel bulundu
            </p>
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Fiyat (Düşükten Yükseğe)</option>
                <option>Fiyat (Yüksekten Düşüğe)</option>
                <option>Değerlendirme</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover"
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
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/tr/hotels/${hotel.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Detayları Gör
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}