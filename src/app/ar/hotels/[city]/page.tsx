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
    title: `فنادق ${cityName} - فنادق فاخرة 5 نجوم | MrForty Travel`,
    description: `اكتشف أفضل الفنادق 5 نجوم في ${cityName}. إقامة فاخرة وموقع رائع وخدمة ممتازة.`,
  }
}

export default function CityHotelsPage({ params }: PageProps) {
  const cityName = params.city.charAt(0).toUpperCase() + params.city.slice(1)
  
  const hotelsData: Record<string, Hotel[]> = {
    'اسطنبول': [
      {
        id: 1,
        name: 'ذا ريتز كارلتون اسطنبول',
        location: 'اسطنبول، تركيا',
        rating: 4.8,
        reviews: 324,
        price: 8500,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
        description: 'تجربة فاخرة لا مثيل لها في قلب اسطنبول حيث يلتقي الأناقة الخالدة بالرقي المعاصر.'
      },
      {
        id: 2,
        name: 'فندق سويسوتل البوسفور',
        location: 'اسطنبول، تركيا',
        rating: 4.7,
        reviews: 256,
        price: 7200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'parking', 'pool', 'spa', 'bar'],
        description: 'فندق أنيق يطل على البوسفور مع مرافق عالمية.'
      },
      {
        id: 3,
        name: 'فندق CVK بارك البوسفور',
        location: 'اسطنبول، تركيا',
        rating: 4.6,
        reviews: 189,
        price: 6800,
        image: '/hotels/CVK Park Bosphorus Hotel Istanbul/CVK Park Bosphorus Hotel Istanbul-1.jpeg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar', 'meeting-rooms'],
        description: 'فندق حديث يجمع بين الفخامة والراحة في تقسيم.'
      },
      {
        id: 4,
        name: 'فندق موفينبيك اسطنبول',
        location: 'اسطنبول، تركيا',
        rating: 4.5,
        reviews: 167,
        price: 5500,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'فندق حديث ومريح قريب من المطار.'
      },
      {
        id: 5,
        name: 'جراند حياة اسطنبول',
        location: 'اسطنبول، تركيا',
        rating: 4.7,
        reviews: 298,
        price: 7500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-2.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'فندق مرموق يجمع بين الفخامة والراحة في معتشيا.'
      },
      {
        id: 6,
        name: 'كونراد اسطنبول',
        location: 'اسطنبول، تركيا',
        rating: 4.6,
        reviews: 234,
        price: 6200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'فندق فاخر بإطلالة على البوسفور في بشيكتاش.'
      },
      {
        id: 7,
        name: 'فندق اسطنبول ماريوت',
        location: 'اسطنبول، تركيا',
        rating: 4.5,
        reviews: 198,
        price: 5800,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'فندق حديث ومريح في شيشلي.'
      },
      {
        id: 8,
        name: 'دبليو اسطنبول',
        location: 'اسطنبول، تركيا',
        rating: 4.7,
        reviews: 267,
        price: 8000,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'فندق تصميم حديث وأنيق في كاراكوي.'
      },
      {
        id: 9,
        name: 'فور سيزونز اسطنبول',
        location: 'اسطنبول، تركيا',
        rating: 4.9,
        reviews: 412,
        price: 9200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar', 'gym'],
        description: 'فندق فاخر في السلطانة التاريخية.'
      },
      {
        id: 10,
        name: 'قصر تشيران كيمبينسكي',
        location: 'اسطنبول، تركيا',
        rating: 4.8,
        reviews: 378,
        price: 12000,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-6.jpeg',
        amenities: ['wifi', 'spa', 'pool', 'restaurant', 'bar'],
        description: 'فندق قصر تاريخي على ضفاف البوسفور.'
      }
    ],
    'طرابزون': [
      {
        id: 1,
        name: 'فندق زورلو جراند طرابزون',
        location: 'طرابزون، تركيا',
        rating: 4.7,
        reviews: 234,
        price: 4200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'parking', 'spa', 'gym', 'restaurant'],
        description: 'فندق فاخر ومريح في وسط طرابزون.'
      },
      {
        id: 2,
        name: 'فندق نوفوتل طرابزون',
        location: 'طرابزون، تركيا',
        rating: 4.5,
        reviews: 189,
        price: 3500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'فندق حديث قريب من البحر.'
      },
      {
        id: 3,
        name: 'فندق هيلتون طرابزون',
        location: 'طرابزون، تركيا',
        rating: 4.6,
        reviews: 267,
        price: 4800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'bar'],
        description: 'فندق فاخر بإطلالة على البحر.'
      },
      {
        id: 4,
        name: 'فندق جراند طربيا',
        location: 'طرابزون، تركيا',
        rating: 4.4,
        reviews: 156,
        price: 3200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
        description: 'فندق مريح في وسط المدينة.'
      },
      {
        id: 5,
        name: 'فندق ماريوت طرابزون',
        location: 'طرابزون، تركيا',
        rating: 4.5,
        reviews: 198,
        price: 4500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'pool'],
        description: 'فندق حديث بإطلالة على البحر.'
      },
      {
        id: 6,
        name: 'فندق ريكسوس طرابزون',
        location: 'طرابزون، تركيا',
        rating: 4.7,
        reviews: 289,
        price: 5200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg',
        amenities: ['wifi', 'spa', 'pool', 'restaurant', 'bar'],
        description: 'منتجع فاخر على شاطئ البحر.'
      },
      {
        id: 7,
        name: 'فندق ويندام طرابزون',
        location: 'طرابزون، تركيا',
        rating: 4.3,
        reviews: 145,
        price: 2800,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-6.jpeg',
        amenities: ['wifi', 'restaurant', 'gym', 'parking'],
        description: 'فندق اقتصادي في وسط المدينة.'
      },
      {
        id: 8,
        name: 'هامبتون بواسطة هيلتون طرابزون',
        location: 'طرابزون، تركيا',
        rating: 4.4,
        reviews: 167,
        price: 3000,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        amenities: ['wifi', 'gym', 'restaurant', 'parking'],
        description: 'فندق حديث ومريح.'
      },
      {
        id: 9,
        name: 'فندق طرابزون بارك',
        location: 'طرابزون، تركيا',
        rating: 4.2,
        reviews: 134,
        price: 2500,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        amenities: ['wifi', 'restaurant', 'parking'],
        description: 'فندق بأسعار معقولة في وسط المدينة.'
      },
      {
        id: 10,
        name: 'فندق يازيجي',
        location: 'طرابزون، تركيا',
        rating: 4.6,
        reviews: 223,
        price: 3800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar'],
        description: 'فندق بوتيك بإطلالة على البحر.'
      }
    ],
    'أنطاليا': [
      {
        id: 1,
        name: 'قصر ماردان',
        location: 'أنطاليا، تركيا',
        rating: 4.7,
        reviews: 298,
        price: 6500,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
        description: 'منتجع فاخر على الساحل المتوسطي مع شاطئ خاص.'
      },
      {
        id: 2,
        name: 'ريجنوم كاريا',
        location: 'أنطاليا، تركيا',
        rating: 4.6,
        reviews: 267,
        price: 5800,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-2.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-club', 'golf'],
        description: 'منتجع فاخر مع ملعب غولف.'
      },
      {
        id: 3,
        name: 'ماكس رويال بيليك',
        location: 'أنطاليا، تركيا',
        rating: 4.8,
        reviews: 389,
        price: 7200,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-3.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
        description: 'منتجع شاطئي فائق فاخر.'
      },
      {
        id: 4,
        name: 'منتجع سوسي لوكشري',
        location: 'أنطاليا، تركيا',
        rating: 4.5,
        reviews: 234,
        price: 5200,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-4.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-club'],
        description: 'منتجع فاخر على شاطئ البحر.'
      },
      {
        id: 5,
        name: 'منتجع كاليستا لوكشري',
        location: 'أنطاليا، تركيا',
        rating: 4.6,
        reviews: 278,
        price: 6000,
        image: '/hotels/Titanic Mardan Palace Görselleri/Titanic Mardan Palace-5.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access'],
        description: 'منتجع فائق فاخر يشمل كل شيء.'
      },
      {
        id: 6,
        name: 'كايالا بالاتسو',
        location: 'أنطاليا، تركيا',
        rating: 4.7,
        reviews: 312,
        price: 5500,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'pool', 'spa', 'golf', 'restaurant'],
        description: 'منتجع حديث مع ملعب غولف.'
      },
      {
        id: 7,
        name: 'ريكسوس بريميوم بيليك',
        location: 'أنطاليا، تركيا',
        rating: 4.8,
        reviews: 356,
        price: 6800,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-club', 'golf'],
        description: 'منتجع فائق فاخر يشمل كل شيء.'
      },
      {
        id: 8,
        name: 'منتجع كورنيليا دايموند غولف',
        location: 'أنطاليا، تركيا',
        rating: 4.6,
        reviews: 289,
        price: 6200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'pool', 'spa', 'golf', 'beach-access'],
        description: 'منتجع فاخر مع ملعب غولف.'
      },
      {
        id: 9,
        name: 'مملكة لاند أوف ليجيندز',
        location: 'أنطاليا، تركيا',
        rating: 4.8,
        reviews: 423,
        price: 7500,
        image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'water-park', 'beach-club'],
        description: 'منتجع فاخر مع مدينة ملاهي.'
      },
      {
        id: 10,
        name: 'سيرين بيليك',
        location: 'أنطاليا، تركيا',
        rating: 4.5,
        reviews: 267,
        price: 4800,
        image: '/hotels/The Land of Legends Kingdom Otel Görselleri/The Land of Legends Kingdom Otel-2.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'beach-access', 'golf'],
        description: 'منتجع بوتيك على شاطئ البحر.'
      }
    ],
    'بورصة': [
      {
        id: 1,
        name: 'هيلتون بورصة مركز المؤتمرات',
        location: 'بورصة، تركيا',
        rating: 4.6,
        reviews: 234,
        price: 3800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-1.jpg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'meeting-rooms'],
        description: 'فندق حديث في وسط المدينة.'
      },
      {
        id: 2,
        name: 'كرون بلازا بورصة',
        location: 'بورصة، تركيا',
        rating: 4.5,
        reviews: 198,
        price: 3200,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-1.jpeg',
        amenities: ['wifi', 'pool', 'spa', 'gym', 'restaurant'],
        description: 'فندق حديث ومريح.'
      },
      {
        id: 3,
        name: 'فندق ألميرا',
        location: 'بورصة، تركيا',
        rating: 4.4,
        reviews: 167,
        price: 2800,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-2.jpg',
        amenities: ['wifi', 'spa', 'restaurant', 'bar'],
        description: 'فندق بوتيك حديث وأنيق في وسط المدينة.'
      },
      {
        id: 4,
        name: 'فندق كارينا',
        location: 'بورصة، تركيا',
        rating: 4.3,
        reviews: 145,
        price: 2500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-3.jpeg',
        amenities: ['wifi', 'restaurant', 'spa'],
        description: 'فندق حديث وأنيق.'
      },
      {
        id: 5,
        name: 'فندق جراند يازار',
        location: 'بورصة، تركيا',
        rating: 4.4,
        reviews: 178,
        price: 3000,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-4.jpeg',
        amenities: ['wifi', 'restaurant', 'bar', 'meeting-rooms'],
        description: 'فندق قريب من مركز الأعمال.'
      },
      {
        id: 6,
        name: 'واو بورصة',
        location: 'بورصة، تركيا',
        rating: 4.5,
        reviews: 189,
        price: 3500,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-5.jpeg',
        amenities: ['wifi', 'spa', 'gym', 'restaurant', 'pool'],
        description: 'فندق تصميم حديث.'
      },
      {
        id: 7,
        name: 'فندق جونلوفراه الحراري',
        location: 'بورصة، تركيا',
        rating: 4.3,
        reviews: 156,
        price: 2700,
        image: '/hotels/Swissotel The Bosphorus Görseller/Swissotel The Bosphorus-6.jpeg',
        amenities: ['wifi', 'thermal-pool', 'spa', 'restaurant'],
        description: 'فندق بمياه حرارية.'
      },
      {
        id: 8,
        name: 'فندق كرفانساراي الحراري',
        location: 'بورصة، تركيا',
        rating: 4.6,
        reviews: 223,
        price: 4200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-3.jpg',
        amenities: ['wifi', 'thermal-pool', 'spa', 'gym', 'restaurant'],
        description: 'فندق حراري فاخر.'
      },
      {
        id: 9,
        name: 'جليك بالاس',
        location: 'بورصة، تركيا',
        rating: 4.2,
        reviews: 134,
        price: 2200,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-4.jpg',
        amenities: ['wifi', 'restaurant', 'bar'],
        description: 'فندق تاريخي.'
      },
      {
        id: 10,
        name: 'هوليداي إن بورصة',
        location: 'بورصة، تركيا',
        rating: 4.3,
        reviews: 167,
        price: 2600,
        image: '/hotels/The Ritz Carlton Istanbul/ritz-carlton-5.jpg',
        amenities: ['wifi', 'gym', 'restaurant', 'parking'],
        description: 'فندق سلسلة دولية.'
      }
    ]
  }

  const hotels = hotelsData[cityName] || []

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
          <h1 className="text-3xl font-bold text-gray-900 mb-4" dir="rtl">
            لم يتم العثور على فنادق في {cityName}
          </h1>
          <p className="text-gray-600 mb-8" dir="rtl">
            ليس لدينا قائمة فنادق في هذه المدينة حالياً.
          </p>
          <Link 
            href="/ar"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            العودة إلى الصفحة الرئيسية
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
            <h1 className="text-4xl font-bold mb-4" dir="rtl">
              فنادق {cityName}
            </h1>
            <p className="text-xl opacity-90" dir="rtl">
              أفضل الفنادق الفاخرة 5 نجوم في {cityName}
            </p>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600" dir="rtl">
              تم العثور على <span className="font-semibold">{hotels.length}</span> فندق
            </p>
            <div className="flex gap-4">
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                title="ترتيب حسب"
                dir="rtl"
              >
                <option>السعر (من الأقل إلى الأعلى)</option>
                <option>السعر (من الأعلى إلى الأقل)</option>
                <option>التقييم</option>
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
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary-600">₺{hotel.price.toLocaleString()}</span>
                    <span className="text-xs text-gray-600">/ليلة</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1" dir="rtl">{hotel.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-4 h-4 ml-1" />
                        <span dir="rtl">{hotel.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{hotel.rating}</span>
                      <span className="text-gray-600 text-sm">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2" dir="rtl">{hotel.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full" dir="rtl">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/ar/hotels/${hotel.id}`}
                    className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    عرض التفاصيل
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